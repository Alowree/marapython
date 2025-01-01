import fg from "fast-glob";
import matter from "gray-matter";
import fs from "node:fs";
import os from "node:os";
import path from "path";
import jsonToYaml from "json2yaml";
import chalk from "chalk";
import { type, repairDate, dateFormat } from "./fn.js";

const log = console.log;
const PREFIX = "/pages/";
const DEFAULT_CATEGORY_TEXT = "随笔";

interface ThemeConfig {
  category: boolean;
  tag: boolean;
  extendFrontmatter?: any;
}

interface MatterData {
  title?: string;
  date?: string;
  permalink?: string;
  categories?: string[];
  tags?: string[];
  pageComponent?: any;
  article?: boolean;
}

export async function setFrontmatter(
  sourceDir: string,
  themeConfig: ThemeConfig,
  ignorePatterns: string[] = [],
) {
  const { category: isCategory, tag: isTag, extendFrontmatter } = themeConfig;
  const files = await fg(sourceDir, { ignore: ignorePatterns });

  const extendFrontmatterStr = extendFrontmatter
    ? jsonToYaml
        .stringify(extendFrontmatter)
        .replace(/\n\s{2}/g, "\n")
        .replace(/"|---\n/g, "")
    : "";

  for (const filePath of files) {
    try {
      let dataStr = fs.readFileSync(filePath, "utf8");
      const fileMatterObj = matter(dataStr, {});

      if (Object.keys(fileMatterObj.data).length === 0) {
        handleNoFrontmatter(
          filePath,
          fileMatterObj,
          extendFrontmatterStr,
          isCategory,
          isTag,
        );
      } else {
        updateFrontmatter(
          fileMatterObj.data,
          filePath,
          fileMatterObj,
          dataStr,
          isCategory,
          isTag,
        );
      }
    } catch (error) {
      log(chalk.red(`Error processing file ${filePath}: ${error.message}`));
    }
  }
}

function handleNoFrontmatter(
  filePath: string,
  fileMatterObj: any,
  extendFrontmatterStr: string,
  isCategory: boolean,
  isTag: boolean,
) {
  const stat = fs.statSync(filePath);
  const dateStr = dateFormat(getBirthtime(stat));
  const allCategories = getCategories({ filePath }, DEFAULT_CATEGORY_TEXT);
  const mainCategory = allCategories[0] || DEFAULT_CATEGORY_TEXT;
  const tags = allCategories.length > 0 ? allCategories : [""];

  const fmData = constructFrontmatter(
    filePath,
    dateStr,
    mainCategory,
    tags,
    extendFrontmatterStr,
  );
  fs.writeFileSync(filePath, `${fmData}${os.EOL}${fileMatterObj.content}`);
  log(
    chalk.blue("tip ") +
      chalk.green(`write frontmatter(写入frontmatter)：${filePath} `),
  );
}

function constructFrontmatter(
  filePath: string,
  dateStr: string,
  mainCategory: string,
  tags: string[],
  extendFrontmatterStr: string,
): string {
  return `---
title: ${processTitle(filePath)}
date: ${dateStr}
permalink: ${getPermalink()}${filePath.indexOf("_posts") > -1 ? os.EOL + "sidebar: auto" : ""}
categories:
  - ${mainCategory}
tags:
${tags.map((tag) => `  - ${tag}`).join(os.EOL)}
${extendFrontmatterStr}---`;
}

function updateFrontmatter(
  matterData: MatterData,
  filePath: string,
  fileMatterObj: any,
  dataStr: string,
  isCategory: boolean,
  isTag: boolean,
) {
  let hasChange = false;

  if (!matterData.title) {
    matterData.title = processTitle(filePath);
    hasChange = true;
  }

  if (!matterData.date) {
    const stat = fs.statSync(filePath);
    matterData.date = dateFormat(getBirthtime(stat));
    hasChange = true;
  }

  if (!matterData.permalink) {
    matterData.permalink = getPermalink();
    hasChange = true;
  }

  if (!matterData.pageComponent && matterData.article !== false) {
    const allCategories = getCategories({ filePath }, DEFAULT_CATEGORY_TEXT);
    if (isCategory !== false) {
      matterData.categories = [allCategories[0] || DEFAULT_CATEGORY_TEXT];
      hasChange = true;
    }
    if (isTag !== false) {
      matterData.tags = allCategories.length > 0 ? allCategories : [""];
      hasChange = true;
    }
  }

  if (hasChange) {
    if (matterData.date && type(matterData.date) === "date") {
      matterData.date = repairDate(matterData.date);
    }

    const newData =
      jsonToYaml
        .stringify(matterData)
        .replace(/\n\s{2}/g, "\n")
        .replace(/"/g, "") +
      "---" +
      os.EOL +
      fileMatterObj.content;

    if (newData !== dataStr) {
      fs.writeFileSync(filePath, newData);
      log("Updated frontmatter in: " + filePath);
    } else {
      log("No changes to write for: " + filePath);
    }
  }
}

function getCategories(
  file: { filePath: string },
  categoryText: string,
): string[] {
  let categories: string[] = [];
  const normalizedPath = file.filePath.replace(/\\/g, "/");

  if (normalizedPath.indexOf("_posts") === -1) {
    let pathParts = normalizedPath.split("/");
    let docsIndex = pathParts.indexOf("docs");

    if (docsIndex !== -1) {
      let categoryParts = pathParts.slice(docsIndex + 1, -1);
      categories = categoryParts
        .map((part) => part.replace(/^\d+\.\s*/, ""))
        .filter(Boolean);
    }
  } else {
    const matchResult = normalizedPath.match(/_posts\/(\S*)\//);
    const resultStr = matchResult ? matchResult[1] : "";
    const resultArr = resultStr.split("/").filter(Boolean);

    if (resultArr.length) {
      categories.push(...resultArr);
    } else {
      categories.push(categoryText);
    }
  }

  return categories;
}

function getBirthtime(stat: fs.Stats): Date {
  return stat.birthtime.getFullYear() !== 1970 ? stat.birthtime : stat.atime;
}

function getPermalink(): string {
  return `${PREFIX + (Math.random() + Math.random()).toString(16).slice(2, 8)}/`;
}

function processTitle(filePath: string): string {
  const rawTitle = path.basename(filePath, path.extname(filePath));
  const cleanTitle = rawTitle.replace(/^\d+\.\s*/, "");
  return cleanTitle;
}
