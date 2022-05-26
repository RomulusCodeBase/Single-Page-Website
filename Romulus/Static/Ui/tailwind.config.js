module.exports = {
  content: [
    "C:/Users/conno/source/repos/DementiaNetwork/DementiaNetwork/wwwroot/Static/*.html",
    "C:/Users/conno/Desktop/DementiaNetwork/DementiaNetwork/wwwroot/Static/*.html",
    "C:/Users/conno/Desktop/DemonDementiaV2/DemonDementia/DementiaNetwork/wwwroot/Static/*.html"
  ],
  mode: 'jit',
  theme: {
    extend: {
      colors: {
        white: '#FFFFFF', 
        black: '#000000',
        red: '#BB1819',
        grey: '#A9A9A9'
      },
      padding: {
        sitepadding: '20px'
      },
      width: {
        'webkit-fill': '-webkit-fill-available',
      }, 
      fontFamily: {
        'roboto': ['"Libre Baskerville"', 'sans-serif']
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
        'tablet-up': '800px'
      },

    },
  },
};
