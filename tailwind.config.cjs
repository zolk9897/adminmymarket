module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#197AEB',
        secondary: '#E6F7FF',
        borderColor: '#f5f5f5',
        textSecondary: '#00000073',
        dividerColor: 'rgba(0, 0, 0, 0.25)',
        error: 'rgb(255, 77, 79)',
      },
      animation: {
        'animation-preview': 'animationPreview 0.4s forwards',
      },
      fontSize: {
        '13px': '13px',
      },
      spacing: {
        18: '4.5rem',
        85: '360px',
        25: '6.2rem'
      },
      margin: {
        '20-neg': '-80px',
        '6-neg': '-24px',
        '3-neg': '-12px',
      },
      width: {
        480: '480px',
        500: '500px',
        600: '600px',
        700: '700px',
      },
      maxWidth: {
        580: '580px',
        40: '10rem',
      },
      minHeight: {
        56: '14rem',
      },
    },
  },
  plugins: [],
}
