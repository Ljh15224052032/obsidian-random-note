import { App, TFile } from "obsidian";
import { RandomNoteSettings } from "../types";

export function getCandidates(app: App, settings: RandomNoteSettings, activeFile: TFile | null): TFile[] {
	let files: TFile[] = app.vault.getMarkdownFiles();

	if (activeFile && files.length > 1) {
		files = files.filter((f) => f.path !== activeFile.path);
	}

	// 排除文件夹
	if (settings.excludedFolders.length > 0) {
		files = files.filter((f) => {
			for (const folder of settings.excludedFolders) {
				if (f.path.startsWith(folder + "/")) {
					return false;
				}
			}
			return true;
		});
	}

	// 排除标签
	if (settings.excludedTags.length > 0) {
		const normalizedExcluded = settings.excludedTags.map(t => normalizeTag(t));
		files = files.filter((f) => {
			const cache = app.metadataCache.getFileCache(f);
			if (!cache) return true;

			const fileTags = new Set<string>();

			if (cache.tags) {
				for (const t of cache.tags) {
					fileTags.add(normalizeTag(t.tag));
				}
			}

			if (cache.frontmatter?.tags) {
				const fmTags = cache.frontmatter.tags as string[];
				if (Array.isArray(fmTags)) {
					for (const t of fmTags) {
						fileTags.add(normalizeTag(t));
					}
				}
			}

			for (const excluded of normalizedExcluded) {
				if (fileTags.has(excluded)) {
					return false;
				}
			}
			return true;
		});
	}

	return files;
}

export function selectRandomFile(candidates: TFile[], settings: RandomNoteSettings): TFile | null {
	if (candidates.length === 0) return null;

	if (!settings.weightedRandom) {
		return candidates[Math.floor(Math.random() * candidates.length)] ?? null;
	}

	const now = Date.now();
	const msPerDay = 1000 * 60 * 60 * 24;
	const weights = candidates.map((f) => {
		const daysSinceModified = (now - f.stat.mtime) / msPerDay;
		return daysSinceModified / settings.weightDecayDays + 1;
	});

	const totalWeight = weights.reduce((sum, w) => sum + w, 0);
	let random = Math.random() * totalWeight;

	for (let i = 0; i < candidates.length; i++) {
		random -= weights[i]!;
		if (random <= 0) {
			return candidates[i]!;
		}
	}

	return candidates[candidates.length - 1]!;
}

export function countCandidates(app: App, settings: RandomNoteSettings): number {
	return getCandidates(app, settings, null).length;
}

function normalizeTag(tag: string): string {
	return tag.replace(/^#/, "").toLowerCase();
}
