import { defineConfigWithTheme } from "vitepress";
import { withMermaid } from "vitepress-plugin-mermaid";
import head from "./config/head";
import markdown from "./config/markdown";
import themeConfig from "./config/themeConfig";
import vite from "./config/vite";
import type { ThemeConfig } from "./types/ThemeConfig";
import { setFrontmatter } from "./utils/setFrontmatter";
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
    await setFrontmatter();
  },
});

export default withMermaid({
  ...config,
  mermaid: {},
});
