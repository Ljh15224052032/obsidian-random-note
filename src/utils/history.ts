export class HistoryManager {
	private history: string[];
	private maxLength: number;

	constructor(history: string[], maxLength: number) {
		this.history = [...history];
		this.maxLength = maxLength;
	}

	push(path: string): string[] {
		this.history.unshift(path);
		if (this.history.length > this.maxLength) {
			this.history = this.history.slice(0, this.maxLength);
		}
		return [...this.history];
	}

	peek(): string | null {
		return this.history.length > 0 ? this.history[0]! : null;
	}

	getEntries(): string[] {
		return [...this.history];
	}

	clear(): string[] {
		this.history = [];
		return [];
	}
}
