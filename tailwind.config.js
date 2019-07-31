// See default config https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
module.exports = {
  theme: {
    container: {
      center: true,
      padding: '1rem'
    },
    colors: {
      purple: '#6D32FF',
      green: '#87FC8E',
      white: '#ffffff',
      black: '#1f1f1f',
      grey: '#DBDBDB'
    },
    extend: {
      fontFamily: {
        sans: [
          'Montserrat',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"'
        ],
        mono: ['"Fira Code"', 'monospace']
      },
      fontWeight: {
        normal: '400',
        bold: '700',
        black: '900'
      },
      fontSize: {
        sm: '0.785rem', // 11px
        base: '1rem', // 14px
        lg: '1.617rem', // 22.65px
        xl: '2.618rem', // 36.65px
        '2xl': '4.236rem', // 59.30px
        '3xl': '6.854rem' // 95.95px
      }
    }
  },
  variants: {}
}
