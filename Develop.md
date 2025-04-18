# Nuxt3 Text

## 問題處理

1. 出現錯誤訊息：`[ nuxi  下午4:38:57]  ERROR  Cannot start nuxt:  The module '\\?\path\nuxt3-test\node_modules\.pnpm\better-sqlite3@11.9.1\node_modules\better-sqlite3\build\Release\better_sqlite3.node' 
was compiled against a different Node.js version using
NODE_MODULE_VERSION 127. This version of Node.js requires
NODE_MODULE_VERSION 131. Please try re-compiling or re-installing
the module (for instance, using npm rebuild or npm install).`

-   說明：表示當前的 better-sqlite3 模組是使用不同的 Node.js 版本編譯的，並且它的 NODE_MODULE_VERSION 不匹配你當前使用的 Node.js 版本。
-   解決方法：
    1. 先刪除 node_modules 和 pnpm-lock.yaml，然後重新安裝依賴
    2. 重新編譯 better-sqlite3 模組 `pnpm rebuild better-sqlite3`

2. 使用@intlify/eslint-plugin-vue-i18n 套件，執行 ESLint 會錯誤

-   暫時不使用
