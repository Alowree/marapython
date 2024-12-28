import fg from "fast-glob";
import matter from "gray-matter";
import fs from "node:fs";
import os from "node:os";
import path from "path";

export async function setFrontmatter() {
  const paths = await fg("docs/市场营销/*.md", {
    ignore: ["docs/index.md", "docs/.vitepress/**", "docs/pages/**", "docs/public/**"],
  });

  paths.map(async (postPath) => {
    const { data, excerpt, content } = matter.read(postPath);

    // no title/date/order
    let tag = false;
    if (!("title" in data) || !("date" in data) || !("order" in data)) {
      tag = true;
    }

    !data.title &&
      (data.title = path.basename(postPath, path.extname(postPath)));
    if (!data.title) {
      // Get the filename without extension
      const rawTitle = path.basename(postPath, path.extname(postPath));
      // Remove numeric prefix (e.g., "01.", "1.", "001.")
      data.title = rawTitle.replace(/^\d+\.\s*/, '');
    }
    data.date = formatDate(new Date());
    !data.order && (data.order = "");

    if (tag) {
      const fmData = `---
title: ${data.title}
date: ${data.date}
order: ${data.order}
---`;

      const contents = `${fmData}${os.EOL}${content}`;
      fs.writeFileSync(postPath, contents, "utf8");
    }
  });
}

// 日期的格式
function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0"); // 月份从0开始，所以+1，并使用padStart补零
  const day = String(date.getDate()).padStart(2, "0");
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}
