import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginVue from "eslint-plugin-vue";

export default [
  {
    files: ["**/*.{js,mjs,cjs,ts,vue}"],
    languageOptions: {
      globals: globals.browser
    }
  },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  ...pluginVue.configs["flat/essential"],
  {
    files: ["**/*.vue"],
    languageOptions: {
      parserOptions: {
        parser: tseslint.parser,
      },
      globals: {
        // Add Vue Composition API functions as globals
        ref: "readonly",
        reactive: "readonly",
        computed: "readonly",
        onMounted: "readonly",
        watch: "readonly",
        useI18n: "readonly",
      },
    },
    rules: {
      "vue/multi-word-component-names": "off", 
    },
  },
];
