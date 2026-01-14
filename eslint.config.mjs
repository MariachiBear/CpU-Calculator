// @ts-check
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt(
  // Your custom configs here
  "vue/first-attribute-linebreak": false,
  "vue/max-attributes-per-line": [
  "error", {
    "singleline": {
      "max": 1
    },      
    "multiline": {
      "max": 1
    }
  }]
)
