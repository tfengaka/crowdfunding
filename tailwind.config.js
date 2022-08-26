module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        body: ['Epilogue', 'sans-serif;'],
      },
      colors: {
        primary: '#1DC071',
        primary20: '#4ACD8D',
        primary40: '#77D9AA',
        primary60: '#A5E6C6',
        primary80: '#D2F2E3',
        primaryExtra: '#F1FBF7',
        secondary: '#6F49FD',
        secondary20: '#8C6DFD',
        secondary40: '#A992FE',
        secondary60: '#C5B6FE',
        secondary80: '#E2DBFF',
        error: '#EB5757',
        text1: '#1C1C24',
        text2: '#4B5264',
        text3: '#808191',
        text4: '#B2B3BD',
        iconColor: '#A2A2A8',
        white: '#FFFFFF',
        whiteSoft: '#FCFBFF',
        graySoft: '#FCFCFC',
        strock: '#F1F1F3',
        liteBg: '#FCFCFD',
        darkBg: '#13131A',
        darkSecondary: '#1C1C24',
        softDark: '#22222C',
        darkSoft: '#24242C',
        darkStroke: '#3A3A43',
        darkRed: '#422C32',
      },
      boxShadow: {
        lite: '10px 10px 20px rgba(211, 211, 211, 0.25)',
        card: '0px 2px 4px rgba(184, 184, 184, 0.03), 0px 6px 12px rgba(184, 184, 184, 0.02), 0px 12px 20px rgba(184, 184, 184, 0.03)',
        dark: '10px 10px 20px rgba(2, 2, 2, 0.25)',
      },
      animation: {
        fadeIn: 'fadeIn 0.3s ease',
      },
      keyframes: {
        fadeIn: {
          from: {
            opacity: 0,
            transform: 'translateY(-10px)',
          },
          to: {
            opacity: 1,
            transform: 'translateY(0)',
          },
        },
      },
    },
    plugins: [],
  },
};
