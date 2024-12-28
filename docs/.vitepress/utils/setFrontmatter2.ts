import fg from "fast-glob";
import matter from "gray-matter";
import fs from "node:fs";
import os from "node:os";
import path from "path";
import jsonToYaml from 'json2yaml';
import chalk from 'chalk';
import { type, repairDate, dateFormat } from './fn.js';

const log = console.log;
const PREFIX = '/pages/';

export async function setFrontmatter(sourceDir: string, themeConfig: any, ignorePatterns: string[] = []) {
  console.log('Starting setFrontmatter with sourceDir:', sourceDir);
  console.log('Ignore patterns:', ignorePatterns);
  
  const { category: isCategory, tag: isTag, categoryText = '随笔', extendFrontmatter } = themeConfig;
  const files = await fg(sourceDir, { ignore: ignorePatterns });
  console.log('Found files:', files);

  const extendFrontmatterStr = extendFrontmatter ?
    jsonToYaml.stringify(extendFrontmatter)
      .replace(/\n\s{2}/g, "\n")
      .replace(/"|---\n/g, "")
    : '';

  files.forEach(filePath => {
    console.log('\nProcessing file:', filePath);
    let dataStr = fs.readFileSync(filePath, 'utf8');
    const fileMatterObj = matter(dataStr, {});

    if (Object.keys(fileMatterObj.data).length === 0) {
      const stat = fs.statSync(filePath);
      const dateStr = dateFormat(getBirthtime(stat));
      const allCategories = getCategories({ filePath }, categoryText);
      console.log('Generated categories for new file:', allCategories);

      // Split categories into main category and tags
      const mainCategory = allCategories[0] || categoryText;
      const tags = allCategories.slice(1);
      console.log('Main category:', mainCategory);
      console.log('Tags:', tags);

      let cateStr = '';
      if (!(isCategory === false)) {
        cateStr = os.EOL + 'categories:' + os.EOL + '  - ' + mainCategory;
      }

      let tagsStr = '';
      if (isTag !== false) {
        tagsStr = os.EOL + 'tags:';
        tags.forEach(tag => {
          tagsStr += os.EOL + '  - ' + tag;
        });
        if (tags.length === 0) {
          tagsStr += os.EOL + '  - ';
        }
      }

      const fmData = `---
title: ${processTitle(filePath)}
date: ${dateStr}
permalink: ${getPermalink()}${filePath.indexOf('_posts') > -1 ? os.EOL + 'sidebar: auto' : ''}${cateStr}${tagsStr}
${extendFrontmatterStr}---`;

      fs.writeFileSync(filePath, `${fmData}${os.EOL}${fileMatterObj.content}`);
      log(chalk.blue('tip ') + chalk.green(`write frontmatter(写入frontmatter)：${filePath} `));

    } else {
      let matterData = fileMatterObj.data;
      let hasChange = false;

      if (!matterData.hasOwnProperty('title')) {
        matterData.title = processTitle(filePath);
        hasChange = true;
      }

      if (!matterData.hasOwnProperty('date')) {
        const stat = fs.statSync(filePath);
        matterData.date = dateFormat(getBirthtime(stat));
        hasChange = true;
      }

      if (!matterData.hasOwnProperty('permalink')) {
        matterData.permalink = getPermalink();
        hasChange = true;
      }

      if (filePath.indexOf('_posts') > -1 && !matterData.hasOwnProperty('sidebar')) {
        matterData.sidebar = "auto";
        hasChange = true;
      }

      if (!matterData.hasOwnProperty('pageComponent') && matterData.article !== false) {
        const allCategories = getCategories({ filePath }, categoryText);
        console.log('Generated categories for existing file:', allCategories);
        
        if (isCategory !== false) {
          // Set main category
          matterData.categories = [allCategories[0] || categoryText];
          console.log('Setting main category:', matterData.categories);
          hasChange = true;
        }
        
        if (isTag !== false) {
          // Set remaining categories as tags
          const tags = allCategories.slice(1);
          matterData.tags = tags.length > 0 ? tags : [''];
          console.log('Setting tags:', matterData.tags);
          hasChange = true;
        }
      }

      if (type(extendFrontmatter) === 'object') {
        Object.keys(extendFrontmatter).forEach(keyName => {
          if (!matterData.hasOwnProperty(keyName)) {
            matterData[keyName] = extendFrontmatter[keyName];
            hasChange = true;
          }
        });
      }

      if (hasChange) {
        if (matterData.date && type(matterData.date) === 'date') {
          matterData.date = repairDate(matterData.date);
        }
        const newData = jsonToYaml.stringify(matterData).replace(/\n\s{2}/g, "\n").replace(/"/g, "") + '---' + os.EOL + fileMatterObj.content;
        fs.writeFileSync(filePath, newData);
        log(chalk.blue('tip ') + chalk.green(`write frontmatter(写入frontmatter)：${filePath} `));
      }
    }
  });
}

function getCategories(file: { filePath: string }, categoryText: string): string[] {
  console.log('Processing filepath:', file.filePath);
  
  let categories: string[] = [];
  
  // Normalize path separators
  const normalizedPath = file.filePath.replace(/\\/g, '/');
  console.log('Normalized path:', normalizedPath);
  
  if (normalizedPath.indexOf('_posts') === -1) {
    let pathParts = normalizedPath.split('/');
    console.log('Path parts:', pathParts);
    
    let docsIndex = pathParts.indexOf('docs');
    console.log('Docs index:', docsIndex);
    
    if (docsIndex !== -1) {
      // Get all parts after 'docs'
      let categoryParts = pathParts.slice(docsIndex + 1, -1);
      console.log('Category parts:', categoryParts);
      
      categories = categoryParts.map(part => {
        // Remove any numeric prefix if it exists
        return part.replace(/^\d+\.\s*/, '');
      }).filter(Boolean); // Remove empty strings
      
      console.log('Final categories:', categories);
    }
  } else {
    const matchResult = normalizedPath.match(/_posts\/(\S*)\//);
    const resultStr = matchResult ? matchResult[1] : '';
    const resultArr = resultStr.split('/').filter(Boolean);

    if (resultArr.length) {
      categories.push(...resultArr);
    } else {
      categories.push(categoryText);
    }
  }
  
  return categories;
}

function getBirthtime(stat: fs.Stats): Date {
  return stat.birthtime.getFullYear() != 1970 ? stat.birthtime : stat.atime;
}

function getPermalink(): string {
  return `${PREFIX + (Math.random() + Math.random()).toString(16).slice(2, 8)}/`;
}

// Add this helper function
function processTitle(filePath: string): string {
  const rawTitle = path.basename(filePath, path.extname(filePath));
  console.log('Raw title:', rawTitle);
  
  // Remove numeric prefix (e.g., "01.", "1.", "001.")
  const cleanTitle = rawTitle.replace(/^\d+\.\s*/, '');
  console.log('Clean title:', cleanTitle);
  
  return cleanTitle;
}
