<script setup lang="ts">
import { withBase } from 'vitepress'

defineProps({
    url: {
        type: String,
        default: ''
    },
    title: {
        type: String
    },
    abstract:{
        type: String
    },
    date: {
        type: String
    },
    tags:{
        type: Array
    }
})
</script>

<template>
  <div class="post-card">
    <div class="post-header">
      <div class="post-title">
        <a class="post-title-text" :href="withBase(url)" v-text="title"></a>
      </div>
    </div>
    <p class="abstract" v-html="abstract"></p>
    <div class="post-info">
      <div v-text="date"></div>
      <div class="flex">
        <a
          v-for="(tag,i) in tags"
          v-text="tag"
          class="tag cursor-pointer hover:text-[var(--vp-c-brand)]"
          :href="`/pages/tags?tag=${tag}`"
        ></a>
      </div>
    </div>
  </div>
</template>

<style scoped>
.post-card {
  border: 1px solid #eaeaea;
  border-radius: 8px;
  padding: 16px;
  margin-bottom: 16px;
  transition: box-shadow 0.3s ease;
}

.post-card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.post-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
}

.post-title {
  font-size: 1.25em;
  font-weight: bold;

}

.post-title-text {
    color: var(--vp-c-indigo-1);
}

.post-title-text:hover {
    color: var(--vp-c-indigo-2);
    text-decoration: none;
}

.abstract {
  font-size: 1em;
  color: #666;
  margin-bottom: 8px;
}

.post-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 0.875em;
    color: #999;
}

.flex {
  display: flex;
  gap: 8px;
}

.tag {
  background-color: var(--vp-c-bg-alt);
  /* background-color: var(--vp-c-bg); */
  padding: 0 8px;
  border-radius: 4px;
  color: var(--vp-c-text);
}

.tag + .tag {
    margin-left: 6px;
}

.tag:hover {
  background-color: var(--vp-c-brand);
  color: #fff;
  text-decoration: none;
}

@media screen and (max-width: 768px) {
    .post-header {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }

    .post-title {
        font-size: 1.0625rem;
        font-weight: 400;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 2;
        overflow: hidden;
        width: 17rem;
    }

    .abstract {
        font-size: 0.9375rem;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        -webkit-line-clamp: 3;
        overflow: hidden;
        margin: 0.5rem 0 1rem;
    }
}
</style>
