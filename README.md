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
| `打开随机笔记` (Open random note) | Opens a random note from the vault |
| `打开上一个随机笔记` (Open previous random note) | Opens the last random note from history |

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
