import { defineConfigWithTheme } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import head from "./config/head";
import markdown from "./config/markdown";
import themeConfig from "./config/themeConfig";
import vite from "./config/vite";
import type { ThemeConfig } from "./types/ThemeConfig";
import { setFrontmatter } from "./utils/setFrontmatter2";
const config = defineConfigWithTheme<ThemeConfig>({
  title: "MaraPython",
  titleTemplate: false,
  description:
    "🎉 记录我的学习和编码：这是一个基于 VitePress 构建的碎片化、结构化、体系化的个人知识库",
  themeConfig,
  cleanUrls: true,
  lastUpdated: true,
  vite,
  head,
  markdown,
  async transformPageData() {
    const sourceDir = "docs/**/*.md";
    const ignorePatterns = [
      "docs/index.md",
      "docs/pages/**",
      // "docs/frontend/**",
      // "docs/Soundfreaq/**",
      // "docs/tool/**",
      // "docs/亚马逊运营/**",
      // "docs/市场营销/**",
      // "docs/京东运营/**",
      // "docs/python/**",
      // Add more patterns as needed
    ];
    await setFrontmatter(sourceDir, themeConfig, ignorePatterns);
  },
});

export default withMermaid({
  ...config,
  mermaid: {},
});
