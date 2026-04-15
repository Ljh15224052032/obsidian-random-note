# Random Note Opener

An Obsidian plugin that opens a random note from your vault — great for rediscovering old notes and reviewing your knowledge base.

---

## 📦 Installation / 安装

### Option 1: Manual Installation (Recommended for now)

> Before this plugin is available in the Obsidian community plugin store, please install it manually:

**Step 1:** Go to the [Latest Release page](https://github.com/Ljh15224052032/obsidian-random-note/releases/latest)

**Step 2:** Download these 3 files:
- `main.js`
- `manifest.json`
- `styles.css`

**Step 3:** Open your Obsidian vault folder on your computer, navigate to:
```
你的库文件夹/.obsidian/plugins/
```
> ⚠️ `.obsidian` is a hidden folder. If you can't see it:
> - **Windows:** In File Explorer, click View → Show → Hidden items
> - **macOS:** In Finder, press `Cmd + Shift + .`

**Step 4:** Create a new folder named `random-note-opener` inside the `plugins/` folder:
```
你的库文件夹/.obsidian/plugins/random-note-opener/
```

**Step 5:** Copy the 3 downloaded files into this folder. The final structure should look like:
```
.obsidian/
└── plugins/
    └── random-note-opener/
        ├── main.js
        ├── manifest.json
        └── styles.css
```

**Step 6:** Restart Obsidian (or reload with `Ctrl+R`)

**Step 7:** Go to Settings → Community plugins → Find "Random Note Opener" in the list → Enable it

**Step 8:** Click the dice icon 🎲 in the left sidebar, or press `Ctrl+P` and search "打开随机笔记" to use it!

---

### Option 2: Install from Community Plugin Store (Coming Soon)

Once approved by the Obsidian team:
1. Go to Settings → Community plugins → Browse
2. Search for "Random Note Opener"
3. Click Install, then Enable

---

## ✨ Features

- **Random note opening** — Click the dice icon or use the command palette
- **Exclude folders** — Skip notes in specified folders (e.g., Templates, Archive)
- **Exclude tags** — Skip notes with certain tags (inline + frontmatter)
- **Open mode** — Current tab / New tab / Split pane
- **Weighted random** — Favor notes that haven't been modified recently
- **History** — Navigate back to previously opened random notes
- **Status bar** — Shows the number of available candidate notes

## Commands

| Command | Description |
| --- | --- |
| Open random note | Opens a random note from the vault |
| Open previous random note | Opens the last random note from history |

## Settings

| Setting | Description | Default |
| --- | --- | --- |
| Exclude folders | One folder path per line | (none) |
| Exclude tags | One tag per line (e.g. `#template`) | (none) |
| Open mode | Current tab / New tab / Split pane | Current tab |
| Weighted random | Favor older notes | Off |
| Weight decay days | Weighting curve parameter | 90 |
| History limit | Max history entries | 50 |
| Show status bar | Candidate note count | On |

> 💡 Some settings require plugin reload (`Ctrl+R`) to take effect.

## Development

```bash
git clone https://github.com/Ljh15224052032/obsidian-random-note.git
cd obsidian-random-note
npm install
npm run dev
```

## License

0BSD

---

# Random Note Opener（随机笔记）

一个 Obsidian 插件，可以从库中随机打开一篇笔记 — 适合重新发现旧笔记和复习知识库。

---

## 📦 安装

### 方式一：手动安装（当前推荐）

> 插件审核通过前，请通过以下步骤手动安装：

**第一步：** 打开 [最新发布页面](https://github.com/Ljh15224052032/obsidian-random-note/releases/latest)

**第二步：** 下载以下 3 个文件（点击文件名即可下载）：
- `main.js`
- `manifest.json`
- `styles.css`

**第三步：** 在电脑上打开你的 Obsidian 库文件夹，进入：
```
你的库文件夹/.obsidian/plugins/
```
> ⚠️ `.obsidian` 是隐藏文件夹，如果看不到：
> - **Windows：** 资源管理器中点击"查看" → "显示" → 勾选"隐藏的项目"
> - **macOS：** 在 Finder 中按 `Cmd + Shift + .`

**第四步：** 在 `plugins/` 文件夹里新建一个文件夹，命名为 `random-note-opener`：
```
你的库文件夹/.obsidian/plugins/random-note-opener/
```

**第五步：** 把下载的 3 个文件复制到这个文件夹中。最终结构如下：
```
.obsidian/
└── plugins/
    └── random-note-opener/
        ├── main.js
        ├── manifest.json
        └── styles.css
```

**第六步：** 重启 Obsidian（或在 Obsidian 中按 `Ctrl+R` 重新加载）

**第七步：** 进入 设置 → 第三方插件 → 在列表中找到 "Random Note Opener" → 点击启用

**第八步：** 点击左侧栏的骰子图标 🎲，或按 `Ctrl+P` 搜索"打开随机笔记"即可使用！

---

### 方式二：从社区插件市场安装（即将上线）

审核通过后：
1. 进入 设置 → 第三方插件 → 浏览
2. 搜索 "Random Note Opener"
3. 点击安装，然后启用

---

## ✨ 功能

- **随机打开笔记** — 点击骰子图标或使用命令面板
- **排除文件夹** — 跳过指定文件夹中的笔记（如 Templates、Archive）
- **排除标签** — 跳过包含特定标签的笔记（行内标签 + frontmatter 标签）
- **打开方式** — 当前标签页 / 新标签页 / 右侧分栏
- **权重随机** — 优先打开较久未修改的笔记
- **历史记录** — 回溯之前随机打开过的笔记
- **状态栏** — 显示候选笔记数量

## 命令

| 命令 | 说明 |
| --- | --- |
| 打开随机笔记 | 随机打开库中的一篇笔记 |
| 打开上一个随机笔记 | 打开历史记录中的上一篇 |

## 设置

| 设置项 | 说明 | 默认值 |
| --- | --- | --- |
| 排除文件夹 | 每行一个文件夹路径 | （无） |
| 排除标签 | 每行一个标签（如 `#template`） | （无） |
| 打开方式 | 当前标签页 / 新标签页 / 右侧分栏 | 当前标签页 |
| 权重随机 | 优先选择较旧的笔记 | 关闭 |
| 权重衰减天数 | 权重曲线参数 | 90 |
| 历史记录上限 | 保留的历史记录数量 | 50 |
| 显示状态栏 | 候选笔记数量显示 | 开启 |

> 💡 部分设置修改后需要重新加载插件（`Ctrl+R`）才能生效。

## 许可证

0BSD
