---
layout: home
hero: 
  name: MaraPython
  text: 
  tagline: CLEAR WRITING IS THE KEY TO CLEAR THINKING
  image: 
    src: /images/index/ghost.png
    alt: Marketing Analytics with Marathon and Python
  actions: 
    - 
      theme: brand
      text: Soundfreaq
      link: /Soundfreaq/
    - 
      theme: alt
      text: CSS
      link: /frontend/02.css/
    - 
      theme: alt
      text: JavaScript
      link: /frontend/03.javascript/
    - 
      theme: alt
      text: Python
      link: /python/
features: 
  - 
    icon: 🛢️
    title: 亚马逊运营
    details: SQL 基础语法和 MySQL 数据库的使用细节。
    link: /亚马逊运营/
  - 
    icon: 💨
    title: 市场营销
    details: Linux 基础语法和服务器相关的使用细节。
    link: /市场营销/01.极简市场营销/
  - 
    icon: 🛠️
    title: 开发工具
    details: 各种工具软件或者轮子的语法和使用细节。
    link: /tool/01.PowerShell/
  - 
    icon: 💡
    title: 软件配置
    details: 包括各类软件的快捷键、插件汇总、软件配置、装机必备等。
    link: /tool/02.Vim/
---

## 最近 10 篇文章

<script setup>
import { computed } from 'vue'
import  { data }  from './.vitepress/utils/posts.data'
import DetailedPostCard from './.vitepress/components/DetailedPostCard.vue'
// import nav from './.vitepress/nav'

const computedRecentPosts = computed(() => data.recentPosts.map(item => 
    ({...item, date: item.date.string})))
</script>

<div class="">
  <DetailedPostCard
    v-for="(article, index) in computedRecentPosts"
    :key="index"
    :url="article.url"
    :title="article.title"
    :abstract="article.abstract"
    :date="article.date"
    :tags="article.tags"
  />
</div>
