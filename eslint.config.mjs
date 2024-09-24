// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt({
  rules: {
    'vue/block-order': ['error', { order: ['script', 'template'] }],
    'vue/multi-word-component-names': 'off',
    'vue/max-attributes-per-line': ['error', { singleline: 4 }],
    'vue/multiline-html-element-content-newline': ['error', {
      ignores: ['NuxtLink', 'ULink', 'a'],
    }],
  },
})
