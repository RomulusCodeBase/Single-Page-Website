module.exports = {
  content: [
    "C:/Users/conno/Desktop/Romulus/Romulus/Static/*.html"
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF', 
        black: '#000000',
        blue: '#89CFF0',
        purple: '#CF9FFF',
        grey: '#A9A9A9'
      },
      padding: {
        sitepadding: '20px'
      },
      width: {
        'webkit-fill': '-webkit-fill-available',
      }, 
      fontFamily: {
        roboto: "'Roboto Slab', serif",
      },
      maxWidth: {
        'sitewidth': '1200px',
        'panel-width': '50%',
        'desktop-up': '1600px'
      },
      minHeight: {
        'panel-height': '300px',
        'particles-height': '200vh'
      },
      screens: {
        'tablet-up': '1000px'
      },

    },
  },
};
