# Random Note Opener

An Obsidian plugin that opens a random note from your vault — great for rediscovering old notes and reviewing your knowledge base.

## Features

- **Random note opening** — Click the dice icon in the ribbon or use the command palette to open a random note
- **Exclude folders** — Skip notes in specified folders (e.g., Templates, Archive)
- **Exclude tags** — Skip notes with certain tags (supports both inline and frontmatter tags)
- **Open mode** — Choose to open in the current tab, a new tab, or a split pane
- **Weighted random** — Optionally favor notes that haven't been modified recently
- **History** — Navigate back to previously opened random notes
- **Status bar** — Shows the number of available candidate notes

## Commands

| Command | Description |
| --- | --- |
| Open random note | Opens a random note from the vault |
| Open previous random note | Opens the last random note from history |

## Settings

- **Exclude folders** — One folder path per line
- **Exclude tags** — One tag per line (e.g., `#template`)
- **Open mode** — Current tab / New tab / Split pane
- **Weighted random** — Toggle on to favor older notes
- **Weight decay days** — Controls the weighting curve (default: 90 days)
- **History limit** — Max number of history entries to keep (default: 50)
- **Show status bar** — Toggle the candidate note count display

## Installation

### Manual

1. Download `main.js`, `manifest.json`, and `styles.css` from the [latest release](https://github.com/Ljh15224052032/obsidian-random-note/releases)
2. Create a folder named `random-note-opener` in your vault's `.obsidian/plugins/` directory
3. Copy the three files into that folder
4. Enable the plugin in Obsidian settings

## Development

```bash
npm install
npm run dev
```

## License

0BSD

---

# Random Note Opener（随机笔记）

一个 Obsidian 插件，可以从库中随机打开一篇笔记 — 适合重新发现旧笔记和复习知识库。

## 功能

- **随机打开笔记** — 点击左侧栏骰子图标或使用命令面板随机打开一篇笔记
- **排除文件夹** — 跳过指定文件夹中的笔记（如 Templates、Archive）
- **排除标签** — 跳过包含特定标签的笔记（支持行内标签和 frontmatter 标签）
- **打开方式** — 可选在当前标签页、新标签页或右侧分栏打开
- **权重随机** — 可开启，优先打开较久未修改的笔记
- **历史记录** — 回溯之前随机打开过的笔记
- **状态栏** — 显示当前可用的候选笔记数量

## 命令

| 命令 | 说明 |
| --- | --- |
| 打开随机笔记 | 随机打开库中的一篇笔记 |
| 打开上一个随机笔记 | 打开历史记录中的上一篇随机笔记 |

## 设置

- **排除文件夹** — 每行一个文件夹路径
- **排除标签** — 每行一个标签（如 `#template`）
- **打开方式** — 当前标签页 / 新标签页 / 右侧分栏
- **权重随机** — 开启后优先选择较旧的笔记
- **权重衰减天数** — 控制权重曲线（默认：90 天）
- **历史记录上限** — 保留的历史记录数量（默认：50）
- **显示状态栏** — 控制是否显示候选笔记数量

## 手动安装

1. 从 [最新 Release](https://github.com/Ljh15224052032/obsidian-random-note/releases) 下载 `main.js`、`manifest.json` 和 `styles.css`
2. 在你的库的 `.obsidian/plugins/` 目录下创建 `random-note-opener` 文件夹
3. 将三个文件复制到该文件夹中
4. 在 Obsidian 设置中启用插件

## 开发

```bash
npm install
npm run dev
```

## 许可证

0BSD
