module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#197AEB',
        secondary: '#E6F7FF',
        borderColor: '#f5f5f5',
        textSecondary: '#00000073',
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
      },
      width: {
        480: '480px',
      },
      maxWidth: {
        580: '580px',
        40: '10rem',
      },
    },
  },
  plugins: [],
}
