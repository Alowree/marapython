// import { DefaultTheme } from "vitepress/theme";

// export interface ThemeConfig extends DefaultTheme.Config {}
export interface ThemeConfig {
  category: boolean; // Required property
  tag: boolean;      // Required property
  extendFrontmatter?: { [key: string]: any }; // Optional property
}
