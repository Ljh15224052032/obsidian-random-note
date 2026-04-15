export interface MyPluginSettings {
	// 排除文件夹
	excludedFolders: string[];
	// 排除标签
	excludedTags: string[];
	// 打开方式
	openMode: 'current' | 'tab' | 'split';
	// 历史记录
	history: string[];
	historyMaxLength: number;
	// 状态栏
	showStatusBar: boolean;
	// 权重随机
	weightedRandom: boolean;
	weightDecayDays: number;
}

export const DEFAULT_SETTINGS: MyPluginSettings = {
	excludedFolders: [],
	excludedTags: [],
	openMode: 'current',
	history: [],
	historyMaxLength: 50,
	showStatusBar: true,
	weightedRandom: false,
	weightDecayDays: 90,
};
