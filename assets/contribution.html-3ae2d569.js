import{a3 as e,Z as i,_ as n,a4 as o,a1 as d,a5 as c}from"./framework-f408d5b9.js";const s={},l=d("p",null,"We always welcome everyone to contribute! Here is a guide for you.",-1),t=c(`<h2 id="clone-and-install-project" tabindex="-1"><a class="header-anchor" href="#clone-and-install-project" aria-hidden="true">#</a> Clone and Install Project</h2><p>Use Git to clone the project to the local, and use <code>pnpm</code> to install dependencies.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone git@github.com:vuepress-theme-hope/vuepress-theme-hope.git

<span class="token function">pnpm</span> i
</code></pre></div><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>If you have not installed pnpm, please install it using the following command.</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>corepack <span class="token builtin class-name">enable</span>
corepack prepare pnpm@7.21.0 <span class="token parameter variable">--activate</span>
</code></pre></div></div><h2 id="project-file-structure" tabindex="-1"><a class="header-anchor" href="#project-file-structure" aria-hidden="true">#</a> Project File Structure</h2><p>The project is a monorepo, managed by pnpm.</p><ul><li><code>docs</code>: place the documentation of each plugin and theme, each subdirectory is a project</li><li><code>demo</code>: theme demo project</li><li><code>packages</code>: place the code of each plugin and theme, each subdirectory is a project</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── .github → GitHub config
├── .husky → husky config
│
├── demo → Demo projects
│
├── docs → document directory
│ ├── auto-catalog → auto-catalog plugin document
│ ├── blog → blog2 plugin document
│ ├── comment → comment2 plugin document
│ ├── components → components plugin document
│ ├── copy-code → copy-code2 plugin document
│ ├── feed → feed2 plugin document
│ ├── lightgallery → lightgallery plugin document
│ ├── md-enhance → md-enhance plugin document
│ ├── photo-swipe → photo-swipe document
│ ├── pwa → pwa2 plugin document
│ ├── reading-time → reading-time2 plugin document
│ ├── remove-pwa → remove-pwa plugin document
│ ├── sass-palette → sass-palette plugin document
│ ├── shared → vuepress-shared document
│ ├── search-pro → search-pro plugin document
│ ├── seo → seo2 plugin document
│ └── theme → theme document
│
├── docs-shared → common files for docs
|
├── packages → project source code
│ ├── auto-catalog → auto-catalog plugin
│ ├── blog2 → blog2 plugin
│ ├── comment2 → comment2 plugin
│ ├── components → components plugin
│ ├── copy-code2 → copy-code2 plugin
│ ├── create → create-vuepress-theme-hope helper
│ ├── feed2 → feed2 plugin
│ ├── lightgallery → lightgallery plugin
│ ├── md-enhance → md-enhance plugin
│ ├── photo-swipe → photo-swipe plugin
│ ├── pwa2 → pwa2 plugin
│ ├── reading-time2 → reading-time2 plugin
│ ├── remove-pwa → remove-pwa plugin
│ ├── sass-palette → sass-palette plugin
│ ├── search-pro → search-pro plugin
│ ├── seo2 → seo2 plugin
│ ├── shared → shared file
│ ├── sitemap2 → sitemap2 plugin
│ └── theme → vuepress-theme-hope theme
│
├── scripts → command scripts
│
├── ... → some config files
│
├── LICENSE → License
├── package.json → root package.json
├── README.md → project intro
├── SECURITY.md → Security Policy
│
└── tsconfig.* → TypeScript config file
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="document-modification" tabindex="-1"><a class="header-anchor" href="#document-modification" aria-hidden="true">#</a> Document Modification</h2><p>You can find the corresponding project in the docs directory so you can modify the corresponding Markdown directly.</p><p>After ensuring that the <code>pnpm lint</code> and <code>pnpm lint:md</code> commands emit no errors, you can commit to GitHub to open a PR.</p><div class="hint-container tip"><p class="hint-container-title">Preview Docs</p><p>Since the docs are using local themes and plugins, you need to build the local project through <code>pnpm build</code> first.</p><p>To start previewing, cd to the right project under <code>docs</code> directory, then run <code>pnpm docs:vite-dev</code> (using vite) or <code>pnpm docs:webpack-dev</code> (using webpack).</p></div><h2 id="project-modification" tabindex="-1"><a class="header-anchor" href="#project-modification" aria-hidden="true">#</a> Project Modification</h2><p>The structure of each project is as follows:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── lib → compiled output file
│    │
│    ├── client → client-side compiled code
│    │
│    └── node → Node.js side compiled code
│
└── src → source file
     │
     ├── client → client-side source code
     │
     ├── node → Node.js side source code
     │
     └── shared → Shared files between node and client
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>VuePress is running both in client side and node side. Node side has node module like <code>fs</code>, while client side is running in browser which has <code>document</code> <code>windows</code> <code>navigator</code> etc. globals, you should be aware of where a piece of code is running.</p><ul><li><code>client</code> directory stores code running in browser</li><li><code>node</code> directory stores code running in Node.js</li><li><code>shared</code> directory stores files that are used in both client and node, so code shall not reference any browser globals or node module.</li></ul><p>For better performance, all plugins are packed and minified using rollup when they are published.</p><h2 id="project-development" tabindex="-1"><a class="header-anchor" href="#project-development" aria-hidden="true">#</a> Project Development</h2><ol><li><p>Build project: <code>pnpm build</code></p><ul><li>Use rollup to bundle source files and minify them, and output results to <code>lib</code> folder</li><li>Use <code>rollup-plugin-copy</code> to copy other files to <code>lib</code> folder</li></ul></li><li><p>Develop project: <code>pnpm dev</code></p><ul><li>Use <code>tsc</code> to compile ts file to <code>lib</code> folder</li><li>Use <code>cpx</code> to copy other files to <code>lib</code> folder</li></ul></li><li><p>Format project: <code>pnpm lint</code></p><p>It will format the project using prettier, eslint and stylelint.</p><p>If you modify Markdown, you also need to run the <code>pnpm lint:md</code> command.</p></li></ol><div class="hint-container warning"><p class="hint-container-title">Note</p><p>Please do not mix build and dev commands as they compile in completely different ways.</p><p>You may need to execute the <code>pnpm clean</code> command to clear previous command result.</p></div><h2 id="commit" tabindex="-1"><a class="header-anchor" href="#commit" aria-hidden="true">#</a> Commit</h2><p>The project uses <code>husky</code> to add Git Hooks for verification:</p><ul><li><p>In <code>precommit</code> stage: we use <code>lint-staged</code> to check the changed code with the corresponding Linter</p><p>This means that you need to ensure that your code is formatted by the project requirements and can pass Linter tests.</p></li><li><p>In <code>commit-msg</code> stage: we use <code>commitlint</code> to verify the commit comment.</p><p>This means that you need to ensure that your commit comments comply with Semantic</p></li></ul><div class="hint-container tip"><p class="hint-container-title">Tips</p><p>If you cannot pass the above Git Hooks, you will not be able to complete <code>git commit</code>.</p><p>If you have already contributed something, but cannot make a commit and don’t know how to fix it, you can add the <code>--no-verify</code> flag when committing to bypass Git Hooks.</p></div>`,25);function a(r,p){return i(),n("div",null,[l,o(" more "),t])}const m=e(s,[["render",a],["__file","contribution.html.vue"]]);export{m as default};
