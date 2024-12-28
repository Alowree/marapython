import { createContentLoader } from 'vitepress'

export default createContentLoader('**/*.md', {
  transform(raw) {
    console.log('Content loader running with raw data:', raw)
    return {
      debug: true,
      count: raw.length,
      urls: raw.map(item => item.url)
    }
  }
})

export const data = {
  debug: true
}
