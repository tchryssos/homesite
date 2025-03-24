{
  "trailingComma": "all",
  "semi": true,
  "singleQuote": true,
  "bracketSpacing": true,
  "eslintIntegration": true,
  "plugins": ["prettier-plugin-astro", "prettier-plugin-tailwindcss"],
  overrides: [
    {
      files: '*.astro',
      options: {
        parser: 'astro',
      },
    },
  ],
}
