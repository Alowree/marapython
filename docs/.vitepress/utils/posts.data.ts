// test 3, from 无声2017
import { createContentLoader } from "vitepress";
import { dayjs } from "./dayjs";

interface Post {
  title: string;
  url: string;
  date: {
    time: number;
    string: string;
  };
  abstract?: string;
  tags?: string[];
}

interface RecentPost extends Post {}

interface Data {
  yearMap: Record<string, string[]>;
  recentPosts: RecentPost[];
  postMap: Record<string, Post>;
  tagMap: Record<string, string[]>;
}

declare const data: Data;
export { data };

export default createContentLoader("**/*.md", {
  transform(raw): Data {
    const postMap: Record<string, Post> = {};
    const yearMap: Record<string, string[]> = {};
    const tagMap: Record<string, string[]> = {};
    const posts = raw
      .filter(({ url }) => !/^\/[^/]*$/.test(url)) // Exclude root folder posts
      .filter(({ url }) => !/^\/pages\//.test(url)) // Exclude /pages/ folder posts
      .map(({ url, frontmatter }) => {
        // Use only front matter tags
        const tags = Array.isArray(frontmatter?.tags) ? frontmatter.tags : [];

        const result: Post = {
          title: frontmatter.title,
          url,
          date: formatDate(frontmatter.date),
          abstract: frontmatter.abstract,
          tags,
        };
        postMap[result.url] = result;
        return result;
      })
      .sort((a, b) => b.date.time - a.date.time);

    const recentPosts = posts.slice(0, 10).map((item) => ({ ...item }));

    posts.forEach((item) => {
      const year = new Date(item.date.string).getFullYear().toString();
      if (!yearMap[year]) {
        yearMap[year] = [];
      }
      yearMap[year].push(item.url);

      item.tags?.forEach((tag) => {
        if (!tagMap[tag]) {
          tagMap[tag] = [];
        }
        tagMap[tag].push(item.url);
      });
    });

    return {
      yearMap,
      recentPosts,
      postMap,
      tagMap,
    };
  },
});

function formatDate(raw: string): Post["date"] {
  const date = new Date(raw);
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // 月份从 0 开始，需要加 1
  const day = date.getDate().toString().padStart(2, "0");
  return {
    time: +date,
    string: `${year}-${month}-${day}`,
  };
}
