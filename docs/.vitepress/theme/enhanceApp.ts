import TwoslashFloatingVue from "@shikijs/vitepress-twoslash/client";
import vitepressBackToTop from "vitepress-plugin-back-to-top";
import { enhanceAppWithTabs } from "vitepress-plugin-tabs/client";
import SvgImage from "../components/SvgImage.vue";
// import Comment from "../components/Comment.vue";
// import Layout from "../components/Layout.vue";
// import Posts from "../components/Posts.vue";
// import PostList from "../components/PostList.vue";
// import DetailedPostCard from "../components/DetailedPostCard.vue";
export default ({ app, router, siteData }) => {
  app.component("SvgImage", SvgImage);
  // app.component("Comment", Comment);
  // app.component("Layout", Layout);
  // app.component("Posts", Posts);
  // app.component("PostList", PostList);
  // app.component("DetailedPostCard", DetailedPostCard);
  enhanceAppWithTabs(app);
  vitepressBackToTop({ threshold: 300 }); // plugin: vitepress-plugin-back-to-top
  app.use(TwoslashFloatingVue);
};
