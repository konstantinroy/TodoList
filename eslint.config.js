import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'
import { defineConfig, globalIgnores } from 'eslint/config'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      js.configs.recommended,
      tseslint.configs.recommended,
      reactHooks.configs['recommended-latest'],
      reactRefresh.configs.vite,
    ],
    "rules": {
        "no-console": "warn",
        "prefer-const": "error",
        "quotes": ["warn", "single"],
        "jsx-quotes": ["warn", "prefer-double"],
        "indent": ["warn", 2],
        "max-len": ["warn", {"code": 120}],
        "comma-dangle": ["warn", "always-multiline"],
        "semi": [2, "never"],
        // "import/order": ["warn", {
        //     "groups": ["builtin", "external", "internal",
        //     "parent", "sibling", "index", "object", "type"],
        //     "newlines-between": "always-and-inside-groups"
        // }]
    },
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
  }
])
