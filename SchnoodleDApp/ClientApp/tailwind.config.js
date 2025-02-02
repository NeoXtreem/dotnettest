module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  options: {
    safelist: [
      /data-theme$/
    ]
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {}
  },
  variants: {
    extend: {
      opacity: ['disabled']
    }
  },
  prefix: 'tw-',
  plugins: [
    require('daisyui')
  ],
  daisyui: {
    themes: [
      'synthwave'
    ],
    styled: true,
    base: true,
    utils: false,
    logs: false,
    rtl: false
  }
}
