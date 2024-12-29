---
title: 标签
date: 2024-12-28 16:14:05
sidebar: false
aside: false
---

<script setup>
import { ref, unref, computed, onMounted } from 'vue'
import  { data }  from '../.vitepress/utils/posts.data'

const { tagMap,postMap } = data
// Filter out null tags
const tags = Object.keys(tagMap).filter(tag => tag !== 'null' && tag !== '')

const computedTagMap = computed(() => {
  let result = {}
  for(let key in tagMap) {
    // Only process non-null tags
    if (key !== 'null' && key !== '') {
      result[key] = tagMap[key].map(url => postMap[url])
    }
  }
  return result
})

const currentTag = ref(null)
function onTagClick(newTag) {
    currentTag.value = newTag
}
const postList = computed(() => (unref(computedTagMap)[unref(currentTag)]))
onMounted(() => {
  const searchParams = new URLSearchParams(window.location.search)
  if(searchParams.get('tag')) {
    const urlTag = searchParams.get('tag')
    // Only set currentTag if it's not null
    if (urlTag !== 'null' && urlTag !== '') {
      currentTag.value = urlTag
    }
  }
})
</script>
<div class="tags-container">
  <!-- Added title row -->
  <div class="title-row">
    <h1 class="page-title">全部标签</h1>
    <span class="tag-total">总共 {{ tags.length }} 个标签</span>
  </div>
  
  <div class="tags-list">
    <div v-for="(tag, i) in tags" 
         :key="i" 
         class="tag-item"
         :class="{ 'tag-active': currentTag === tag }"
         @click="onTagClick(tag)">
      <span class="tag-name">{{ tag }}</span>
      <sup class="tag-count">{{ computedTagMap[tag].length }}</sup>
    </div>
  </div>

  <!-- Posts list for selected tag -->
  <div v-if="currentTag" class="posts-container">
    <div class="sticky-header">
      <h2 class="tag-title">{{ currentTag }}</h2>
    </div>
    <div v-for="post in postList" 
         :key="post.url" 
         class="post-item">
      <a :href="post.url" class="post-link">
        <span class="post-date">{{ post.date.string }}</span>
        <span class="post-title">{{ post.title }}</span>
      </a>
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
.tags-container {
  max-width: 1000px;
  margin: 0 auto;
  padding: 20px;
}
.page-title {
  font-size: 2rem;
  font-weight: 600;
  color: var(--vp-c-text-1);
  margin: 0;
}
.tag-total {
  font-size: 1rem;
  color: var(--vp-c-text-2);
}
.tags-list {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 2rem;
}

.tag-item {
  display: flex;
  align-items: center;
  padding: 6px 12px;
  background-color: var(--vp-c-bg-alt);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tag-item:hover {
  color: var(--vp-c-brand);
  transform: translateY(-2px);
}

.tag-active {
  background-color: var(--vp-c-brand);
  color: white;
}
.tag-item.tag-active:hover {
  color: white;
}
.tag-name {
  margin-right: 2px; /* Reduced margin to bring count closer */
}

.tag-count {
  font-size: 0.8em; /* Made slightly smaller */
  opacity: 0.8;
  position: relative;
  top: -3px; /* Fine-tune vertical position if needed */
}
/* Ensure the count stays white when tag is active */
.tag-active .tag-count {
  color: white;
}

.posts-container {
  margin-top: 2rem;
}
.sticky-header {
  position: sticky;
  top: calc(var(--vp-nav-height) + 0px); /* Adjust based on your header height */
  background: var(--vp-c-bg);
  /* padding: 1rem 0; */
  z-index: 10;
  border-bottom: 1px solid var(--vp-c-divider);
  margin-bottom: 1rem;
}
.tag-title {
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: var(--vp-c-text-1);
}

/* Post list styles matching archives.md */
.post-item {
  padding: 8px 0 8px 24px;
  position: relative;
}
.post-link {
  display: flex;
  align-items: baseline;
  text-decoration: none;
  color: var(--vp-c-text-1);
  transition: all 0.2s ease;
  position: relative;
  left: 0;
}

.post-date {
  color: var(--vp-c-text-2);
  font-size: 0.9em;
  min-width: 100px;
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
  left: 1em;
  color: var(--vp-c-brand);
  text-decoration: none;
}

/* Tablet view */
@media (max-width: 960px) {
  .sticky-header {
    top: calc(var(--vp-nav-height-mobile) + 0px); /* Adjust for mobile nav height */
    /* padding: 0.5rem 0;  */
  }
}

/* Mobile view */
@media (max-width: 640px) {
  .sticky-header {
    top: calc(var(--vp-nav-height-mobile) + 0px); /* Further reduced offset */
    /* padding: 0.5rem 1rem;  */
  }
}  
</style>
