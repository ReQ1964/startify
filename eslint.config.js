import eslintPluginAstro from 'eslint-plugin-astro';
import eslintConfigPrettier from 'eslint-config-prettier';
export default [
  ...eslintPluginAstro.configs['flat/recommended'],
  eslintConfigPrettier,
  {
    rules: {},
  },
];
