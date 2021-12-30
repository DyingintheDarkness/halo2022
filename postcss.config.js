module.exports = {
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require("cssnano")({
      preset: 'default'
    }),
    require("@fullhuman/postcss-purgecss")({
      content: ['./layouts/**/*.html', './src/**/*.css', './src/**/*.js'],
      defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || []
    })
  ]
}