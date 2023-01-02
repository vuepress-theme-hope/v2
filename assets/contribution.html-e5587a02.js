import{a3 as e,Z as i,_ as n,a4 as d,a1 as s,a5 as l}from"./framework-f408d5b9.js";const a={},c=s("p",null,"我们永远欢迎你对项目进行贡献! 这里是一份相关指南。",-1),o=l(`<h2 id="克隆并安装项目" tabindex="-1"><a class="header-anchor" href="#克隆并安装项目" aria-hidden="true">#</a> 克隆并安装项目</h2><p>使用 Git 克隆项目到本地，并使用 <code>pnpm</code> 进行依赖的安装。</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code><span class="token function">git</span> clone git@github.com:vuepress-theme-hope/vuepress-theme-hope.git

<span class="token function">pnpm</span> i
</code></pre></div><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果你并未安装 pnpm，请使用下列命令安装它:</p><div class="language-bash" data-ext="sh"><pre class="language-bash"><code>corepack <span class="token builtin class-name">enable</span>
corepack prepare pnpm@7.21.0 <span class="token parameter variable">--activate</span>
</code></pre></div></div><h2 id="项目文件结构" tabindex="-1"><a class="header-anchor" href="#项目文件结构" aria-hidden="true">#</a> 项目文件结构</h2><p>本项目是一个 monorepo，使用 pnpm 管理。</p><ul><li>docs: 放置各插件与主题的文档，每个子文件夹为一个项目</li><li>demo: 主题演示项目</li><li>packages: 放置各插件与主题的代码，每个子文件夹为一个项目</li></ul><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── .github → GitHub 配置
├── .husky → husky 配置
│
├── demo → 演示项目
│
├── docs → 文档目录
│ ├── auto-catalog → auto-catalog 插件文档
│ ├── blog → blog2 插件文档
│ ├── comment → comment2 插件文档
│ ├── components → components 插件文档
│ ├── copy-code → copy-code2 插件文档
│ ├── feed → feed2 插件文档
│ ├── lightgallery → lightgallery 插件文档
│ ├── md-enhance → md-enhance 插件文档
│ ├── photo-swipe → photo-swipe 文档
│ ├── pwa → pwa2 插件文档
│ ├── reading-time → reading-time2 插件文档
│ ├── remove-pwa →remove-pwa 插件文档
│ ├── sass-palette → sass-palette 插件文档
│ ├── shared → vuepress-shared 文档
│ ├── search-pro → search-pro 插件文档
│ ├── seo → seo2 插件文档
│ └── theme → 主题文档
│
├── docs-shared → 文档的通用文件
|
├── packages → 项目源代码
│ ├── auto-catalog → auto-catalog 插件
│ ├── blog2 → blog2 插件
│ ├── comment2 → comment2 插件
│ ├── components → components 插件
│ ├── copy-code2 → copy-code2 插件
│ ├── create → create-vuepress-theme-hope 助手
│ ├── feed2 → feed2 插件
│ ├── lightgallery → lightgallery 插件
│ ├── md-enhance → md-enhance 插件
│ ├── photo-swipe → photo-swipe 插件
│ ├── pwa2 → pwa2 插件
│ ├── reading-time2 → reading-time2 插件
│ ├── remove-pwa →remove-pwa 插件
│ ├── sass-palette → sass-palette 插件
│ ├── search-pro → search-pro 插件
│ ├── seo2 → seo2 插件
│ ├── shared → 共享文件
│ ├── sitemap2 → sitemap2 插件
│ └── theme → vuepress-theme-hope 主题
│
├── scripts → 命令脚本
│
├── ... → 一些配置文件
│
├── LICENSE → 协议
├── package.json → 项目根 package.json
├── README.md → 项目介绍
├── SECURITY.md → 安全政策文件
│
└── tsconfig.* → TypeScript 配置文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="文档修改" tabindex="-1"><a class="header-anchor" href="#文档修改" aria-hidden="true">#</a> 文档修改</h2><p>你可以直接在 docs 文件夹内找到对应项目，并修改对应的 Markdown。</p><p>确保 <code>pnpm lint</code> 与 <code>pnpm lint:md</code> 命令没有错误后，即可提交到 GitHub 发起 PR。</p><div class="hint-container tip"><p class="hint-container-title">预览文档</p><p>由于文档使用的是本地主题和插件，因此你需要先通过 <code>pnpm build</code> 构建本地项目。</p><p>之后在 <code>docs</code> 目录下的正确文档项目文件夹打开终端，运行 <code>pnpm docs:vite-dev</code> (使用 vite) 或 <code>pnpm docs:webpack-dev</code> (使用 webpack)。</p></div><h2 id="项目修改" tabindex="-1"><a class="header-anchor" href="#项目修改" aria-hidden="true">#</a> 项目修改</h2><p>每个项目的结构都大致如下:</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>.
├── lib → 编译后的输出文件
│    │
│    ├── client → 客户端侧代码
│    │
│    └── node → Node.js 侧代码
│
└── src → 源文件
     │
     ├── client → 客户端侧代码
     │
     ├── node → Node.js 侧代码
     │
     └── shared → 客户端和 Node.js 的共享文件
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>VuePress 同时运行在客户端和 Node 端。 Node 侧有像 <code>fs</code> 这样的 node 模块，而客户端运行在有<code>document\`\`windows\`\`navigator</code>等全局变量的浏览器中，你应该清楚一段代码运行在哪里。</p><ul><li><code>client</code> 目录存储在浏览器中运行的代码</li><li><code>node</code> 目录存储在 Node.js 中运行的代码</li><li><code>shared</code> 目录存储在客户端和 Node 中使用的文件，因此代码不应引用任何浏览器全局变量或 node 模块。</li></ul><p>为了更好的性能，所有插件在发布时都会使用 rollup 进行打包并压缩。</p><h2 id="项目的运行与开发" tabindex="-1"><a class="header-anchor" href="#项目的运行与开发" aria-hidden="true">#</a> 项目的运行与开发</h2><ol><li><p>构建项目: <code>pnpm build</code></p><ul><li>使用 rollup 打包并压缩代码，并输出到 <code>lib</code> 文件夹</li><li>使用 <code>rollup-plugin-copy</code> 复制其他文件到 <code>lib</code> 文件夹</li></ul></li><li><p>开发项目: <code>pnpm dev</code></p><ul><li>使用 <code>tsc</code> 编译 TypeScript 文件到 <code>lib</code> 文件夹</li><li>Use <code>cpx</code> 复制其他文件到 <code>lib</code> 文件夹</li></ul></li><li><p>格式化项目: <code>pnpm lint</code></p><p>它将使用 prettier、eslint 和 stylelint 格式化项目。</p><p>如果你修改了 Markdown，你还需要运行 <code>pnpm lint:md</code> 命令。</p></li></ol><div class="hint-container warning"><p class="hint-container-title">注意</p><p>请不要混用构建和开发命令，因为它们的构建方式完全不同。</p><p>你可能需要执行 <code>pnpm clean</code> 命令来清除上一次的命令结果。</p></div><h2 id="提交" tabindex="-1"><a class="header-anchor" href="#提交" aria-hidden="true">#</a> 提交</h2><p>项目使用 <code>husky</code> 添加了额外的 Git Hooks 进行验证:</p><ul><li><p>在 <code>precommit</code> 阶段我们使用 <code>lint-staged</code> 配合对应 Linter 对改动的代码进行检验</p><p>这意味着你需要保证你的代码按照项目要求进行格式化，可以通过 Linter。</p></li><li><p>在 <code>commit-msg</code> 阶段我们使用 <code>commitlint</code> 对提交备注进行校验。</p><p>这意味着你需要保证你的提交注释符合语义化提交 (Semantic)</p></li></ul><div class="hint-container tip"><p class="hint-container-title">提示</p><p>如果你不能通过上述 Git Hooks，你将无法完成 <code>git commit</code>。</p><p>如果你已经进行贡献了一些内容，但无法完成提交且不会修复，你可以在提交时添加 <code>--no-verify</code> Flag 绕过 Git Hooks。</p></div>`,25);function r(t,v){return i(),n("div",null,[c,d(" more "),o])}const m=e(a,[["render",r],["__file","contribution.html.vue"]]);export{m as default};
