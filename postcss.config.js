module.exports = {
  purge: {
    enabled: true,
    mode: "all",
    content: ["./**/*.html", "./**/*.css","./**/*.js"]
  }
,
  plugins: [
    require('tailwindcss'),
    require('autoprefixer'),
    require("cssnano")
  ]
}