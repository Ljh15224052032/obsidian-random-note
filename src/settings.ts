import { App, PluginSettingTab, Setting } from "obsidian";
import RandomNotePlugin from "./main";
import { RandomNoteSettings } from "./types";

export class RandomNoteSettingTab extends PluginSettingTab {
	plugin: RandomNotePlugin;

	constructor(app: App, plugin: RandomNotePlugin) {
		super(app, plugin);
		this.plugin = plugin;
	}

	display(): void {
		const { containerEl } = this;
		containerEl.empty();

		containerEl.createEl("p", {
			text: "部分设置修改后需要重新加载插件（Ctrl+R）才能生效。",
			cls: "setting-item-description",
		});

		// 排除文件夹
		new Setting(containerEl)
			.setName("排除文件夹")
			.setDesc("每行一个文件夹路径，随机时跳过这些文件夹中的笔记（如 Templates 或 Archive/daily）")
			.addTextArea(text => text
				.setPlaceholder("Templates\nArchive/daily")
				.setValue(this.plugin.settings.excludedFolders.join("\n"))
				.onChange(async (value) => {
					this.plugin.settings.excludedFolders = value.split("\n").map(s => s.trim()).filter(s => s.length > 0);
					await this.plugin.saveSettings();
				}));

		// 排除标签
		new Setting(containerEl)
			.setName("排除标签")
			.setDesc("每行一个标签，随机时跳过包含这些标签的笔记（如 #template）")
			.addTextArea(text => text
				.setPlaceholder("#template\n#moc")
				.setValue(this.plugin.settings.excludedTags.join("\n"))
				.onChange(async (value) => {
					this.plugin.settings.excludedTags = value.split("\n").map(s => s.trim()).filter(s => s.length > 0);
					await this.plugin.saveSettings();
				}));

		// 打开方式
		new Setting(containerEl)
			.setName("打开方式")
			.setDesc("选择随机笔记的打开方式")
			.addDropdown(dropdown => dropdown
				.addOption("current", "当前标签页")
				.addOption("tab", "新标签页")
				.addOption("split", "右侧分栏")
				.setValue(this.plugin.settings.openMode)
				.onChange(async (value: string) => {
					this.plugin.settings.openMode = value as RandomNoteSettings["openMode"];
					await this.plugin.saveSettings();
				}));

		// 权重随机
		new Setting(containerEl)
			.setName("权重随机")
			.setDesc("开启后，越久没修改的笔记被选中的概率越高")
			.addToggle(toggle => toggle
				.setValue(this.plugin.settings.weightedRandom)
				.onChange(async (value) => {
					this.plugin.settings.weightedRandom = value;
					await this.plugin.saveSettings();
					this.display();
				}));

		if (this.plugin.settings.weightedRandom) {
			new Setting(containerEl)
				.setName("权重衰减天数")
				.setDesc(`未修改天数除以此值计算权重。当前：${this.plugin.settings.weightDecayDays} 天`)
				.addSlider(slider => slider
					.setLimits(1, 365, 1)
					.setValue(this.plugin.settings.weightDecayDays)
					.setDynamicTooltip()
					.onChange(async (value) => {
						this.plugin.settings.weightDecayDays = value;
						await this.plugin.saveSettings();
					}));
		}

		// 历史记录上限
		new Setting(containerEl)
			.setName("历史记录上限")
			.setDesc(`保留最近打开的随机笔记记录数量。当前：${this.plugin.settings.historyMaxLength}`)
			.addSlider(slider => slider
				.setLimits(10, 200, 10)
				.setValue(this.plugin.settings.historyMaxLength)
				.setDynamicTooltip()
				.onChange(async (value) => {
					this.plugin.settings.historyMaxLength = value;
					await this.plugin.saveSettings();
				}));

		// 状态栏
		new Setting(containerEl)
			.setName("显示状态栏")
			.setDesc("在底部状态栏显示候选笔记数量")
			.addToggle(toggle => toggle
				.setValue(this.plugin.settings.showStatusBar)
				.onChange(async (value) => {
					this.plugin.settings.showStatusBar = value;
					await this.plugin.saveSettings();
				}));
	}
}
