// Vue I18n
// https://kazupon.github.io/vue-i18n/zh/

import type { App } from 'vue'
import { createI18n } from 'vue-i18n'

const defaultLocale = localStorage.getItem('locale') || 'zh-CN'

export const LOCALE_OPTIONS = [
  { label: '中文', value: 'zh-CN' },
  { label: 'English', value: 'en-US' }
]

export const setupI18n = async (app: App) => {
  console.log('app', app)
  const g = import.meta.globEager('./languages/*.json')
  console.log('g', g)
  const obj = { en: {}, cn: {} }
  for (const key in g) {
    if (Object.prototype.hasOwnProperty.call(g, key)) {
      const element = g[key]
      console.log('element', element)
      Object.assign(obj.en, element.en)
      Object.assign(obj.cn, element.cn)
    }
  }

  console.log('obj', obj)
  console.log('123', 123)

  const i18n = createI18n({
    locale: defaultLocale,
    fallbackLocale: 'en-US',
    allowComposition: true,
    messages: {
      'en-US': obj.en,
      'zh-CN': obj.cn
    }
  })

  app.use(i18n)
}
