import { Plugin } from "obsidian";

/**
 * 创建状态栏项
 */
export function createStatusBarItem(plugin: Plugin): HTMLElement {
	const item = plugin.addStatusBarItem();
	item.addClass("random-note-statusbar");
	return item;
}

/**
 * 更新状态栏显示
 */
export function updateStatusBar(item: HTMLElement, count: number, visible: boolean): void {
	if (!visible) {
		item.setText("");
		item.hide();
		return;
	}
	item.show();
	item.setText(`随机笔记：${count} 个可用笔记`);
}
