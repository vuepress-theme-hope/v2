import{a3 as s,Z as d,_ as l,a4 as c,a1 as e,a2 as t,$ as o,a0 as a,a5 as h,q as i}from"./framework-f408d5b9.js";const p={},u=e("p",null,"This guide helps you migrate from V1 to V2.",-1),g=e("h2",{id:"reasons-to-update-to-v2",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#reasons-to-update-to-v2","aria-hidden":"true"},"#"),t(" Reasons to update to V2")],-1),m=e("h2",{id:"upgrade-to-the-latest-version-of-v1",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#upgrade-to-the-latest-version-of-v1","aria-hidden":"true"},"#"),t(" Upgrade to the latest version of V1")],-1),f={href:"https://vuepress-theme-hope.github.io/v1/changelog.html",target:"_blank",rel:"noopener noreferrer"},v=h('<h2 id="start-migrating-from-v1" tabindex="-1"><a class="header-anchor" href="#start-migrating-from-v1" aria-hidden="true">#</a> Start migrating from V1</h2><p>Now, in most cases you should be able to update <code>vuepress</code> and <code>vuepress-theme-hope</code> to latest v2 version, and run your v1 project directly.</p><p>The migration helper automatically converts your v1 config to v2 config, and gives you hints about deprecated options it converted and not-supported options it dropped. Also frontmatter of all pages will be converted from v1 syntax to v2.</p><p>All you need to do is:</p><ol><li><p>Install <code>vuepress@next</code> and <code>vuepress-theme-hope@next</code>;</p></li><li><p>Try to start the project, and read the logs;</p></li><li><p>Change your page frontmatter one by one according to logs;</p></li><li><p>Change your config file according to logs.</p><p>If you start importing <code>hopeTheme</code> and call it during migration, you should call it with <code>hopeTheme(themeOptions, true)</code> as the second argument means running in V1 legacy mode.</p></li><li><p>Covert your <code>index.styl</code> to <code>index.scss</code>, and your <code>palette.styl</code> to <code>palette.scss</code> and <code>config.scss</code> under <code>.vuepress/styles</code> as v2 style system is built with SCSS.</p></li><li><p>Covert your components under <code>.vuepress/components</code> to Vue3 syntax, and register them using <code>@vuepress/plugin-register-components@next</code> plugin.</p></li><li><p>After you successfully clear all hints, remove the second argument <code>true</code> in <code>hopeTheme</code>.</p></li></ol><h2 id="v2-migration-guide" tabindex="-1"><a class="header-anchor" href="#v2-migration-guide" aria-hidden="true">#</a> V2 Migration Guide</h2><p>The following pages list the changes between V1 and V2, respectively.</p>',7);function y(_,V){const n=i("RouterLink"),r=i("ExternalLinkIcon");return d(),l("div",null,[u,c(" more "),g,e("p",null,[t("V2 brings great performance improvements and many new features, see "),o(n,{to:"/migration/highlight.html"},{default:a(()=>[t("V2 Highlights")]),_:1}),t(" for details.")]),m,e("p",null,[t("Upgrading to the latest version V1 is the first step in the migration. During the upgrade to the latest version V1, you can check the "),e("a",f,[t("V1 Changelog"),o(r)]),t(" to adapt the changes made in V1.")]),v,e("ul",null,[e("li",null,[o(n,{to:"/migration/config.html"},{default:a(()=>[t("Config Migration Guide")]),_:1})]),e("li",null,[o(n,{to:"/migration/page.html"},{default:a(()=>[t("Page Migration Guide")]),_:1})]),e("li",null,[o(n,{to:"/migration/style.html"},{default:a(()=>[t("Style Migration Guide")]),_:1})])])])}const b=s(p,[["render",y],["__file","index.html.vue"]]);export{b as default};
