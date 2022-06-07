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
        blue: '#7bd4ea',
        purple: '#7A63FF',
        darkpurple: '#19003c',
        grey: '#A9A9A9'
      },
      padding: {
        sitepadding: '20px'
      },
      width: {
        'webkit-fill': '-webkit-fill-available',
      }, 
      fontFamily: {
        roboto: "'Roboto', serif",
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
        'tablet-up': '1250px'
      },

    },
  },
};
