module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
  ],
  theme: {
    extend: {
      colors: {
        pristine: 'rgba(242, 232, 218, 0.7)',
        peachFuzz: 'rgba(255, 190, 152, 0.7)',
        honeyPeach: 'rgba(220, 189, 158, 0.7)',
        peachPuree: 'rgba(239, 207, 186, 0.7)',
        peachPink: 'rgba(250, 154, 133, 0.7)',
        peachPearl: 'rgba(255, 178, 165, 0.7)',
        textColor: '#63666A',
      },
      backgroundOpacity: {
        '70': '0.7',
      },
    },
  },
  plugins: [],
}