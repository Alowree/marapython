---
title: 归档
date: 2024-12-25 12:14:05
sidebar: false
aside: false
---

<script setup>
import { computed } from 'vue'
import  { data }  from '../.vitepress/utils/posts.data'

const { yearMap,postMap } = data
const yearList = Object.keys(yearMap).sort((a, b) => b - a); // 按年份降序排序
const computedYearMap = computed(() => {
  let result = {}
  for(let key in yearMap) {
    result[key] = yearMap[key].map(url => {
      const post = postMap[url]
      return {
        ...post,
        // Format date to MM-DD
        shortDate: post.date.string.split('-').slice(1).join('-')
      }
    })
  }
  return result
})
</script>

<div class="archives-container">
  <div class="title-row">
    <h1 class="archives-title">归档</h1>
    <span class="post-count">总共 {{ Object.values(yearMap).flat().length }} 篇文章</span>
  </div>

  <div class="content-container">
    <div v-for="year in yearList" :key="year" class="year-section">
      <div class="year-row sticky-year">
        <div class="year-text">{{ year }}</div>
        <div class="year-count">{{ yearMap[year].length }}篇</div>
      </div>
      <div v-for="(article, index) in computedYearMap[year]" 
           :key="index" 
           class="post-item">
        <a :href="article.url" class="post-link">
          <span class="post-date">{{ article.shortDate }}</span>
          <span class="post-title">{{ article.title }}</span>
        </a>
      </div>
    </div>
  </div>
</div>

<style scoped>
.title-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid var(--vp-c-divider);
}

.archives-title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
}

.post-count {
  font-size: 1rem;
  color: var(--vp-c-text-2);
}
.year-section {
  position: relative;
}

.sticky-year {
  position: sticky;
  top: calc(var(--vp-nav-height) + 0px); /* Adjust based on your header height */
  background: var(--vp-c-bg);
  z-index: 10;
  margin: 0;
  padding: 0.75rem 0;
  border-bottom: 1px solid var(--vp-c-divider);
}

/* Optional: add subtle shadow when sticky */
.sticky-year::after {
  content: '';
  position: absolute;
  bottom: -1px;
  left: 0;
  right: 0;
  height: 6px;
  background: linear-gradient(
    to bottom,
    rgba(var(--vp-c-bg-rgb), 0.1),
    rgba(var(--vp-c-bg-rgb), 0)
  );
  pointer-events: none;
}

/* Ensure proper spacing between year sections */
.year-section + .year-section {
  margin-top: 2rem;
}
.year-row {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0.75rem 0;
}

.year-text {
  font-size: 1.25rem;
  font-weight: 500;
  color: var(--vp-c-text-1);
  font-family: serif;
}

.year-count {
  font-size: 0.9rem;
  color: var(--vp-c-text-2);
  /* font-family: serif; */
}

.archives-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}
.content-container {
  width: 100%;
  padding: 2rem 0;
}
.post-item {
  padding: 8px 0 8px 24px;
  position: relative; /* This is for the background effect */
}

.post-link {
  display: flex;
  align-items: baseline;
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: all 0.2s ease; /* Move transition from post-item to post-link */
  position: relative; /* This is for the movement */
  left: 0; /* Starting position for the text */
}

.post-date {
  color: var(--vp-c-text-2);
  font-size: 0.9em;
  min-width: 50px;
}

.post-title {
  color: inherit;
}

/* Hover effects */
.post-item:hover {
  background-color: var(--vp-c-bg-soft);
  border-radius: 4px;
}
.post-item:hover .post-link {
  left: 1em; /* Move only the text right */
  color: var(--vp-c-brand);
  text-decoration: none;
}
</style>
