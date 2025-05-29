const IDE_CONFIG = {
  theme: {
    background: {
      base: "#0e0e14",
      alt: "#1a1a24",
      gutter: "#0a0a10",
      lineHighlight: "#1f1f2d",
      selection: "#334",
      border: "#222",
      shadow: "#00000040",
    },
    text: {
      primary: "#ffffff",
      secondary: "#bbbbbb",
      muted: "#777",
      error: "#ff6b6b",
      highlight: "#ffe761",
    },
    ui: {
      accent: "#5ac8fa",
      cursor: "#5ac8fa",
      scrollbar: "#333",
      scrollbarTrack: "#111",
    },
    syntax: {
      keyword: "#ff79c6",
      string: "#f1fa8c",
      number: "#bd93f9",
      boolean: "#ffb86c",
      function: "#50fa7b",
      variable: "#8be9fd",
      comment: "#6272a4",
      operator: "#ff5555",
      tag: "#ff6ac1",
      type: "#8d79f1",
      attrName: "#fab387",
      attrValue: "#a6e3a1",
    },
    status: {
      success: "#22c55e",
      error: "#ef4444",
      warning: "#facc15",
      info: "#3b82f6",
    },
    // ⌨️ Terminal
    terminal: {
      bg: "#0f0f17",
      text: "#ffffff",
      prompt: "#5ac8fa",
      success: "#22c55e",
      error: "#ef4444",
      info: "#3b82f6",
    },
    // 🧵 Markers (e.g. breakpoints, current line)
    markers: {
      breakpoint: "#ff5e57",
      warning: "#facc15",
      info: "#3b82f6",
      currentLine: "#2a2a3d",
    },
    // 🧪 Lint/hint/hover
    hint: {
      bg: "#1c1c2c",
      border: "#333",
      text: "#ccc",
      icon: "#5ac8fa",
    },
    hover: {
      bg: "#202030",
      border: "#333",
      text: "#eee",
      link: "#61dafb",
    },
    // 🧩 Diff view (git-like)
    diff: {
      added: "#144b28",
      removed: "#4b1e1e",
      modified: "#37375a",
      addedText: "#81f29d",
      removedText: "#ff7b7b",
      modifiedText: "#b4befe",
    },
    // 📁 Panels (explorer, file tree, etc.)
    panels: {
      activeBg: "#1e1e2e",
      inactiveBg: "#16161d",
      activeText: "#ffffff",
      inactiveText: "#888888",
      border: "#2e2e3a",
    },
    // 🧷 Tabs (open files)
    tabs: {
      activeBg: "#262634",
      inactiveBg: "#1b1b2b",
      activeText: "#fff",
      inactiveText: "#888",
      border: "#333",
    },
    // 🧠 Semantic roles (theme logic)
    semantic: {
      primary: "#5ac8fa",
      secondary: "#8be9fd",
      destructive: "#ff6b6b",
      neutral: "#6b7280",
      overlay: "#00000080",
    },
    // 🎯 Brackets/Paren Match
    brackets: {
      match: "#a6e3a1",
      mismatch: "#ef4444",
    },
  },
  editor: {
    fontSize: 14,
    fontFamily: "Fira Code, JetBrains Mono, monospace",
    lineHeight: 1.6,
    tabSize: 2,
    insertSpaces: true,
    wordWrap: "off", // 'on' | 'off' | 'wordWrapColumn'
    autoCloseBrackets: true,
    autoComplete: true,
    minimap: true,
    showLineNumbers: true,
    showIndentGuides: true,
    matchBrackets: true,
    codeFolding: true,
    renderWhitespace: "boundary", // none | all | boundary
  },

  layout: {
    sidebarPosition: "left", // or 'right'
    panels: ["explorer", "terminal", "search", "git"],
    defaultOpenPanel: "explorer",
    tabMode: "multi", // 'multi' or 'single'
    showStatusBar: true,
    breadcrumbs: true,
  },

  keybindings: {
    save: "Ctrl+S",
    run: "Ctrl+Enter",
    format: "Shift+Alt+F",
    toggleTerminal: "`",
    find: "Ctrl+F",
    replace: "Ctrl+H",
  },

  terminal: {
    shell: "/bin/bash", // or zsh, powershell, etc.
    fontSize: 13,
    opacity: 0.95,
    clearOnRun: true,
    autoScroll: true,
    cursorBlink: true,
  },

  extensions: {
    enableLinter: true,
    enableFormatter: true,
    languageSupport: ["js", "ts", "html", "css"],
    plugins: ["git-integration", "prettier", "eslint", "ai-code-assist"],
  },

  project: {
    rootPath: "/home/user/project",
    autosave: "onFocusChange", // or 'onBlur', 'interval'
    backupInterval: 300, // in seconds
    exclude: ["node_modules", ".git", "dist"],
  },

  ai: {
    enabled: true,
    model: "gpt-4o",
    inlineSuggestions: true,
    contextWindow: 2000,
  },

  experiments: {
    virtualFileSystem: true,
    websocketFS: false,
    wasmCompilePreview: false,
  },
};
