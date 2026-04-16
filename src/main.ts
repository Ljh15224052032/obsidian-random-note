import { Notice, PaneType, Plugin, TFile } from "obsidian";
import { DEFAULT_SETTINGS, RandomNoteSettings } from "./types";
import { RandomNoteSettingTab } from "./settings";
import { getCandidates, selectRandomFile, countCandidates } from "./utils/random";
import { HistoryManager } from "./utils/history";
import { createStatusBarItem, updateStatusBar } from "./utils/statusBar";

export default class RandomNotePlugin extends Plugin {
	settings: RandomNoteSettings;
	statusBarItem: HTMLElement;
	historyManager: HistoryManager;

	async onload() {
		await this.loadSettings();

		// 历史记录管理器
		this.historyManager = new HistoryManager(this.settings.history, this.settings.historyMaxLength);

		// 状态栏
		this.statusBarItem = createStatusBarItem(this);
		this.refreshStatusBar();

		// 左侧栏骰子图标
		this.addRibbonIcon("dice", "打开随机笔记", () => {
			void this.openRandomNote();
		});

		// 命令：打开随机笔记
		this.addCommand({
			id: "open-random-note",
			name: "打开随机笔记",
			callback: () => {
				void this.openRandomNote();
			},
		});

		// 命令：打开上一个随机笔记
		this.addCommand({
			id: "open-previous-random-note",
			name: "打开上一个随机笔记",
			callback: () => {
				void this.openPreviousRandomNote();
			},
		});

		// 设置面板
		this.addSettingTab(new RandomNoteSettingTab(this.app, this));

		// 监听文件变化，刷新状态栏
		this.registerEvent(this.app.vault.on("create", () => this.refreshStatusBar()));
		this.registerEvent(this.app.vault.on("delete", () => this.refreshStatusBar()));
		this.registerEvent(this.app.vault.on("rename", () => this.refreshStatusBar()));
	}

	onunload() {
		// 状态栏由 Obsidian 自动清理
	}

	async loadSettings() {
		this.settings = Object.assign({}, DEFAULT_SETTINGS, await this.loadData());
	}

	async saveSettings() {
		await this.saveData(this.settings);
	}

	/**
	 * 根据设置获取 PaneType
	 */
	private getLeafPaneType(): PaneType | boolean {
		switch (this.settings.openMode) {
			case "tab":
				return "tab";
			case "split":
				return "split";
			default:
				return false;
		}
	}

	/**
	 * 打开随机笔记
	 */
	async openRandomNote() {
		const activeFile = this.app.workspace.getActiveFile();
		const allFiles = this.app.vault.getMarkdownFiles();

		// 空库判断
		if (allFiles.length === 0) {
			new Notice("库中没有任何笔记，请先创建一条笔记");
			return;
		}

		const candidates = getCandidates(this.app, this.settings, activeFile);

		if (candidates.length === 0) {
			new Notice("所有笔记都已被排除规则过滤，请检查插件设置");
			return;
		}

		const randomFile = selectRandomFile(candidates, this.settings);
		if (!randomFile) return;

		// 打开文件
		await this.app.workspace.getLeaf(this.getLeafPaneType()).openFile(randomFile);
		new Notice(`随机笔记：${randomFile.basename}`);

		// 记录历史
		this.settings.history = this.historyManager.push(randomFile.path);
		await this.saveSettings();
	}

	/**
	 * 打开上一个随机笔记
	 */
	async openPreviousRandomNote() {
		const lastPath = this.historyManager.peek();
		if (!lastPath) {
			new Notice("没有历史记录");
			return;
		}

		const file = this.app.vault.getAbstractFileByPath(lastPath);
		if (file instanceof TFile) {
			await this.app.workspace.getLeaf(this.getLeafPaneType()).openFile(file);
			new Notice(`上一个随机笔记：${file.basename}`);
		} else {
			new Notice("历史记录中的笔记已不存在");
			this.settings.history = this.historyManager.clear();
			await this.saveSettings();
		}
	}

	/**
	 * 刷新状态栏
	 */
	private refreshStatusBar() {
		const count = countCandidates(this.app, this.settings);
		updateStatusBar(this.statusBarItem, count, this.settings.showStatusBar);
	}
}
