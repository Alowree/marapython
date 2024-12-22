import TwoslashFloatingVue from "@shikijs/vitepress-twoslash/client";
import vitepressBackToTop from "vitepress-plugin-back-to-top";
import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client";
import SvgImage from "../components/SvgImage.vue";
import Posts from "../components/Posts.vue";
export default ({ app, router, siteData }) => {
  app.component("SvgImage", SvgImage);
  app.component("Posts", Posts);
  enhanceAppWithTabs(app);
  vitepressBackToTop({ threshold: 300 }); // plugin: vitepress-plugin-back-to-top
  app.use(TwoslashFloatingVue);
};
