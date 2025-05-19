# Haxe Priori Syntax Highlighter
![Extension Icon](https://github.com/SidBertalia/Haxe-Priory-Syntaxe/raw/main/haxe-priori-extension/icon.png)

[![GitHub Sponsors](https://img.shields.io/badge/Sponsor%20Me-%23EA54AE.svg?&style=for-the-badge&logo=github&logoColor=white)](https://github.com/sponsors/SidBertalia)


VS Code extension that adds **XML** syntax highlighting for **`@priori('...')`** blocks in **`.hx`** files.

---

## Quick Install (Recommended)

A pre-built `.vsix` file is available in this repository for your convenience.

1. [Download the latest **`haxe-priori-*.vsix`** file from the repository.](https://github.com/SidBertalia/Haxe-Priory-Syntaxe/tree/main/haxe-priori-extension)
2. Open VS Code.
3. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS) and select `Extensions: Install from VSIX...`
4. Browse and select the downloaded `.vsix` file.

**After instalation, reload the VS Code window** (`Ctrl+Shift+P -> Developer: Reload Window`).

---

## Manual Installation (Build from Source)

If you prefer to build the extension yourself, follow these steps:

---

## Requirements

- [Node.js](https://nodejs.org/)
- [VSCE (Visual Studio Code Extension Manager)](https://code.visualstudio.com/api/working-with-extensions/publishing-extension)

---

## Manual Installation

### 1. Clone or Download the Repository

```sh
git clone https://github.com/SidBertalia/Haxe-Priory-Syntaxe.git
```

Or download and extract the ZIP.

### 2. Navigate to the Extension Folder

```sh
cd Haxe-Priory-Syntaxe/haxe-priori-extension
```

### 3. Install Dependencies

```sh
npm install
```

### 4. Package the Extension

```sh
npx vsce package
```

This will generate a `.vsix` file in the current directory.

---

## Install the Extension in VS Code

### **Linux & macOS**

1. Open VS Code.
2. Press `Ctrl+Shift+P` (or `Cmd+Shift+P` on macOS) and select `Extensions: Install from VSIX...`
3. Browse and select the generated `.vsix` file.

### **Windows**

1. Open VS Code.
2. Press `Ctrl+Shift+P` and select `Extensions: Install from VSIX...`
3. Browse and select the generated `.vsix` file.

---

Alternatively, you can install the extension from the terminal (all systems):

```sh
code --install-extension haxe-priori-*.vsix
```

---

**After instalation, reload the VS Code window** (`Ctrl+Shift+P -> Developer: Reload Window`).

## Usage

1. **Open a `.hx` file** in VS Code.
2. **Right-click** inside the editor and select:
   - **Enable Priori Highlight** to activate XML highlighting for the entire file (including `@priori` blocks).
   - **Disable Priori Highlight** to return to the default Haxe syntax highlighting.
   - Only one of these options will appear at a time, depending on the current state.

**Example of a `@priori` block in a `.hx` file**

```haxe
@priori('
<!-- This is a comment (will NOT be colored as a comment in Haxe mode) -->
<priori>
    <view>
        <MyComponent attribute="value" enabled="true">
            <!-- Nested element -->
            <ChildElement id="child1" />
        </MyComponent>
        <AnotherComponent color="#FF00FF" />
        <TextElement>
            Some text content &amp; entities.
        </TextElement>
    </view>
</priori>
')
```

**Example: Priori Block Highlight**
When Priori Highlight is enabled, your **`@priori`** block will be highlighted as **`XML`**, like this:

```xml
@priori('
<!-- This is a comment (will be colored as comment) -->
<priori>
    <view>
        <MyComponent attribute="value" enabled="true">
            <!-- Nested element -->
            <ChildElement id="child1" />
        </MyComponent>
        <AnotherComponent color="#FF00FF" />
        <TextElement>
            Some text content &amp; entities.
        </TextElement>
    </view>
</priori>
,)
```

> ## **Important**
>
> When **Priori Highlight** is enabled, the entire file is treated as **`XML`** for syntax highlighting purposes.
>
> This means that **all other Haxe code in the file will lose its syntax highlighting and related editor features** (*such as code completion, error checking, etc*).
>
> To restore normal **`Haxe`** highlighting and functionality, use the **Disable Priori Highlight** option in the context menu.
