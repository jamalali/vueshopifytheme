/*

Tailwind - The Utility-First CSS Framework

A project by Adam Wathan (@adamwathan), Jonathan Reinink (@reinink),
David Hemphill (@davidhemphill) and Steve Schoger (@steveschoger).

Welcome to the Tailwind config file. This is where you can customize
Tailwind specifically for your project. Don't be intimidated by the
length of this file. It's really just a big JavaScript object and
we've done our very best to explain each section.

View the full documentation at https://tailwindcss.com.

|-------------------------------------------------------------------------------
| The DEFAULT config
|-------------------------------------------------------------------------------
|
| This variable contains the DEFAULT Tailwind config. You don't have
| to use it, but it can sometimes be helpful to have available. For
| example, you may choose to merge your custom configuration
| values with some of the Tailwind DEFAULTs.
|
*/

const DEFAULTConfig = require('tailwindcss/DEFAULTConfig');

module.exports = {
  /*
  |-----------------------------------------------------------------------------
  | Advanced Options                 https://tailwindcss.com/docs/configuration
  |-----------------------------------------------------------------------------
  |
  | Here is where you can tweak advanced configuration options. We recommend
  | leaving these options alone unless you absolutely need to change them.
  |
  */

  // prefix: '',
  // important: false,
  // separator: ':',
  purge: false,

  theme: {
    /*
    |-----------------------------------------------------------------------------
    | Customizing Colors         https://tailwindcss.com/docs/customizing-colors/
    |-----------------------------------------------------------------------------
    |
    | Here you can specify the colors used in your project. To get you started,
    | we've provided a generous palette of great looking colors that are perfect
    | for prototyping, but don't hesitate to change them for your project. You
    | own these colors, nothing will break if you change everything about them.
    |
    | We've used literal color names ('red', 'blue', etc.) for the DEFAULT
    | palette, but if you'd rather use functional names like 'primary' and
    | 'secondary', or even a numeric scale like '100' and '200', go for it.
    |
    | The color palette defined below is also assigned to the 'colors' key of
    | your Tailwind theme. This makes it easy to access them in your CSS
    | using Tailwind's config helper. For example:
    |
    | .error { color: theme('colors.red') }
    |
    */

    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      none: 'none',

      warning: '#F67D38',
      danger: '#D04A4A',

      'black-full': '#000000',
      black: '#1D1D1D',
      'black-1': '#1E1E1E',
      'black-2': '#313131',
      'black-3': '#3E3E3E',
      'black-4': '#414141',

      'vivo-black': '#101820',
      'vivo-green': '#48bc44',

      'black-full-05': 'rgba(0,0,0,0.05)',
      'black-full-24': 'rgba(0,0,0,0.24)',
      'black-full-30': 'rgba(0,0,0,0.3)',
      'black-full-33': 'rgba(0,0,0,0.33)',
      'black-full-40': 'rgba(0,0,0,0.4)',
      'black-full-45': 'rgba(0,0,0,0.45)',
      'black-full-50': 'rgba(0,0,0,0.5)',
      'black-full-60': 'rgba(0,0,0,0.6)',
      'black-full-70': 'rgba(0,0,0,0.7)',
      'black-full-80': 'rgba(0,0,0,0.8)',
      'black-full-90': 'rgba(0,0,0,0.9)',

      'grey-darkest': '#3d4852',
      'grey-darker': '#484848',
      'grey-dark': '#8795a1',
      grey: '#95989A',
      'grey-light': '#ddd',
      'grey-lighter': '#F5F5F5',
      'grey-lightest': '#f8fafc',

      'grey-13': 'rgba(54,54,54,0.13)',
      'grey-21': 'rgba(180,180,180,0.21)',
      'grey-77': 'rgba(30,30,30,0.77)',

      white: '#ffffff',
      'off-white': '#f2f2f2',
      'off-white-2': '#e4e4e4',
      'off-white-3': '#f7f7f7',
      'off-white-4': '#FEFEFB',
      'off-white-5': '#FAFAFA',

      'white-17': 'rgba(255,255,255,0.17)',
      'white-25': 'rgba(255,255,255,0.25)',
      'white-60': 'rgba(200,200,200,0.6)',

      'cool-blue': '#5CB7E3',
      'cool-green': '#9BC243',

      'green-darkest-90': 'rgba(201, 217, 0, 0.9)',
      'green-darkest': '#6AB336',
      'green-dark': '#a6c017',
      green: '#b5d310',
      'green-90': 'rgba(181, 211, 16, 0.9)',
      'green-light': '#bbc71d',
      'green-lighter': '#C9D900',
      'green-lighter-90': 'rgba(201, 217, 0, 0.9)',

      teal: '#3D9DAC',
      'teal-90': 'rgba(61, 157, 172, 0.9)',
      'teal-dark': '#307A86',

      purple: '#472B5B',
      'purple-90': 'rgba(71, 43, 91, 0.9)',
      'purple-dark': '#301C3E',

      orange: '#FAAB36',
      'orange-90': 'rgba(250, 171, 54, 0.9)',
      'orange-dark': '#C3830B',

      red: '#D83662',
      'red-1': '#BB0000',
      'red-2': '#D02B2B',

      'vganic-green-dark': '#7CB742',
      'vganic-green-darker': '#0C8174',

      'green-thrive-light': '#B5D310',
      'green-thrive': '#4AB857',
      'green-thrive-dark': '#00865C',

      'blue-magic': '#264693',
      'blue-magic-dark': '#243678',

      'pink-magic': '#E0659F',

      'rainforest-orange': '#e05514',
      'rainforest-green': '#12972b',
      'rainforest-grey': '#6D6D6D',

      'omega-green': '#54A892',

      'd3-orange': '#F6B53B',
      'd3-grey': '#E8E8E8',

      'b12-orange': '#EA5B0C',

      'ocean-week-blue': '#71CEC2',
      'ocean-week-blue-2': '#54A892',
      'ocean-week-grey': '#363636',

      'green-friday-green': '#48BC44',
      'green-friday-green-2': '#0A220F',
      'green-friday-grey': '#6E6E6E',
      'green-friday-grey-2': '#707070',
      'green-friday-grey-3': '#A69A9A',
      'green-friday-30-day-green': '#47A600',
      'green-friday-hero-green': '#4DC249',
      'green-friday-hero-green-btn': '#48BC44',

      'atc-border-grey': '#BDBDBD',
      'atc-text-grey': '#707070',
      'atc-border-grey-2': '#313131',
      'atc-money-back-grey': '#6E6E6E',
      'atc-tablet-grey': '#e5e5e5',
      'atc-hero-overlay': 'rgba(255,255,255,0.7)',
      'atc-hero-overlay-black': 'rgba(0,0,0,0.7)',
      'atc-hero-backlay-mobile': 'linear-gradient(#EDEDED, white 50%)',
      'atc-hero-out-of-stock-red': '#D04A4A',
      'atc-hero-out-of-stock-grey': '#e7e7e7',
      'atc-hero-out-of-stock-grey-2': '#787878',

      'creatine-silver': '#ABC9D8',
      'creatine-blue': '#349EB7',
      'creatine-grey': '#e5e5e5',
      'creatine-grey-how-to-use': '#E7E7E7',
      'creatine-grey-report': '#404040',

      'magic-coffee-gold': '#B8A87E',
      'magic-coffee-green': '#47A600',
      'magic-coffee-grey': '#6E6E6E',

      'ritual-grey': '#e8e7ec',

      'shaker-grey': '#252736',

      'veganprotein-grey': '#fbfcff',

      'whole-green': '#AFCD09',

      'magic-chaga-blue': '#045873',
      'magic-chaga-purple': '#271A42',
      'magic-chaga-chai': '#E2597B',
      'magic-raw-hot': '#425A9A',
      'magic-golden-turmeric': '#F07E53',
      'magic-matcha-coconut': '#8DB541',

      'plaa-sign-up': '#303A42',
      'plaa-green': '#48bc44',
      'plaa-red': '#c92d3a',
      'plaa-purple': '#662c71',
      'plaa-blue': '#348eba'
    },

    /*
    |-----------------------------------------------------------------------------
    | Screens                      https://tailwindcss.com/docs/responsive-design
    |-----------------------------------------------------------------------------
    |
    | Screens in Tailwind are translated to CSS media queries. They define the
    | responsive breakpoints for your project. By DEFAULT Tailwind takes a
    | 'mobile first' approach, where each screen size represents a minimum
    | viewport width. Feel free to have as few or as many screens as you
    | want, naming them in whatever way you'd prefer for your project.
    |
    | Tailwind also allows for more complex screen definitions, which can be
    | useful in certain situations. Be sure to see the full responsive
    | documentation for a complete list of options.
    |
    | Class name: .{screen}:{utility}
    |
    */

    screens: {
      sm: '576px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      xxl: '1364px',
      xxxl: '2000px'
    },

    /*
    |-----------------------------------------------------------------------------
    | Font Family                        https://tailwindcss.com/docs/font-family
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your project's font stack, or font families.
    | Keep in mind that Tailwind doesn't actually load any fonts for you.
    | If you're using custom fonts you'll need to import them prior to
    | defining them here.
    |
    | By DEFAULT we provide a native font stack that works remarkably well on
    | any device or OS you're using, since it just uses the DEFAULT fonts
    | provided by the platform.
    |
    | Class name: .font-{name}
    |
    */

    fontFamily: {
      primary: ['proxima-nova', 'sans-serif'],
      secondary: ['garage-gothic']
    },

    /*
    |-----------------------------------------------------------------------------
    | Font Size                            https://tailwindcss.com/docs/font-size
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your text sizes. Name these in whatever way
    | makes the most sense to you. We use size names by DEFAULT, but
    | you're welcome to use a numeric scale or even something else
    | entirely.
    |
    | By DEFAULT Tailwind uses the 'rem' unit type for most measurements.
    | This allows you to set a root font size which all other sizes are
    | then based on. That said, you are free to use whatever units you
    | prefer, be it rems, ems, pixels or other.
    |
    | Class name: .text-{size}
    |
    */

    fontSize: {
      '2xs': '.5624rem', // 9px
      xs: '.75rem', // 12px
      sm: '.875rem', // 14px
      base: '1rem', // 16px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '2xl': '1.438rem', // 23px
      '3xl': '2rem', // 32px
      '4xl': '2.5rem', // 40px
      '5xl': '3.438rem', // 55px
      '6xl': '4.063rem', // 65px
      '7xl': '4.687rem' // 75px
    },

    /*
    |-----------------------------------------------------------------------------
    | Font Weight                        https://tailwindcss.com/docs/font-weight
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your font weights. We've provided a list of
    | common font weight names with their respective numeric scale values
    | to get you started. It's unlikely that your project will require
    | all of these, so we recommend removing those you don't need.
    |
    | Class name: .font-{weight}
    |
    */

    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900
    },

    /*
    |-----------------------------------------------------------------------------
    | Line Height                        https://tailwindcss.com/docs/line-height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your line height values, or as we call
    | them in Tailwind, leadings.
    |
    | Class name: .leading-{size}
    |
    */

    lineHeight: {
      none: 1,
      'title-close': 0.75,
      tight: 1.25,
      snug: 1.375,
      normal: 1.5,
      relaxed: 1.625,
      loose: 2
    },

    /*
    |-----------------------------------------------------------------------------
    | Letter Spacing                  https://tailwindcss.com/docs/letter-spacing
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your letter spacing values, or as we call
    | them in Tailwind, tracking.
    |
    | Class name: .tracking-{size}
    |
    */

    letterSpacing: {
      tight: '-0.05em',
      normal: '0.025em',
      wide: '0.05em',
      wider: '0.15em',
      widerer: '0.2em'
    },

    /*
    |-----------------------------------------------------------------------------
    | Text Color                          https://tailwindcss.com/docs/text-color
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your text colors. By DEFAULT these use the
    | color palette we defined above, however you're welcome to set these
    | independently if that makes sense for your project.
    |
    | Class name: .text-{color}
    |
    */

    textColor: theme => theme('colors'),

    /*
    |-----------------------------------------------------------------------------
    | Background Color              https://tailwindcss.com/docs/background-color
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your background colors. By DEFAULT these use
    | the color palette we defined above, however you're welcome to set
    | these independently if that makes sense for your project.
    |
    | Class name: .bg-{color}
    |
    */

    backgroundColor: theme => theme('colors'),

    /*
    |-----------------------------------------------------------------------------
    | Border Width                      https://tailwindcss.com/docs/border-width
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your border widths. Take note that border
    | widths require a special 'DEFAULT' value set as well. This is the
    | width that will be used when you do not specify a border width.
    |
    | Class name: .border{-side?}{-width?}
    |
    */

    borderWidth: {
      DEFAULT: '1px',
      0: '0',
      1: '1px',
      2: '2px',
      3: '3px',
      4: '4px',
      5: '5px',
      8: '8px'
    },

    /*
    |-----------------------------------------------------------------------------
    | Border Color                      https://tailwindcss.com/docs/border-color
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your border colors. By DEFAULT these use the
    | color palette we defined above, however you're welcome to set these
    | independently if that makes sense for your project.
    |
    | Take note that border colors require a special 'DEFAULT' value set
    | as well. This is the color that will be used when you do not
    | specify a border color.
    |
    | Class name: .border-{color}
    |
    */

    borderColor: theme => ({
      DEFAULT: theme('colors.grey-light'),
      ...theme('colors')
    }),

    /*
    |-----------------------------------------------------------------------------
    | Border radius                    https://tailwindcss.com/docs/border-radius
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your border radius values. If a `DEFAULT` radius
    | is provided, it will be made available as the non-suffixed `.rounded`
    | utility.
    |
    | If your scale includes a `0` value to reset already rounded corners, it's
    | a good idea to put it first so other values are able to override it.
    |
    | Class name: .rounded{-side?}{-size?}
    |
    */

    borderRadius: {
      none: '0',
      sm: '.125rem',
      DEFAULT: '.25rem',
      lg: '.5rem',
      full: '9999px'
    },

    /*
    |-----------------------------------------------------------------------------
    | Width                                    https://tailwindcss.com/docs/width
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your width utility sizes. These can be
    | percentage based, pixels, rems, or any other units. By DEFAULT
    | we provide a sensible rem based numeric scale, a percentage
    | based fraction scale, plus some other common use-cases. You
    | can, of course, modify these values as needed.
    |
    |
    | It's also worth mentioning that Tailwind automatically escapes
    | invalid CSS class name characters, which allows you to have
    | awesome classes like .w-2/3.
    |
    | Class name: .w-{size}
    |
    */

    width: {
      auto: 'auto',
      content: 'fit-content',
      px: '1px',
      'px-2': '2px',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      15: '3.75rem',
      16: '4rem',
      20: '5rem',
      24: '6rem',
      25: '6.25rem',
      27: '6.75rem',
      30: '7.5rem',
      32: '8rem',
      36: '9rem',
      38: '9.5rem',
      40: '10rem',
      48: '12rem',
      50: '12.5rem',
      52: '13rem',
      56: '15rem',
      58: '15.5rem',
      64: '16rem',
      66: '16.5rem',
      68: '17rem',
      70: '17.5rem',
      80: '20rem',
      104: '26rem',
      128: '32rem',
      136: '35rem',
      '1/10': '10%',
      '1/8': '12.5%',
      '1/6': '16.66667%',
      '1/5': '20%',
      '1/4': '25%',
      '1/3': '33.33333%',
      '2/5': '40%',
      '9/20': '45%',
      '1/2': '50%',
      '3/5': '60%',
      '13/20': '65%',
      '2/3': '66.66667%',
      '3/4': '75%',
      '9/12': '75%',
      '4/5': '80%',
      '5/6': '83.33333%',
      '9/10': '90%',
      full: '100%',
      screen: '100vw'
    },

    /*
    |-----------------------------------------------------------------------------
    | Height                                  https://tailwindcss.com/docs/height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your height utility sizes. These can be
    | percentage based, pixels, rems, or any other units. By DEFAULT
    | we provide a sensible rem based numeric scale plus some other
    | common use-cases. You can, of course, modify these values as
    | needed.
    |
    | Class name: .h-{size}
    |
    */

    height: {
      auto: 'auto',
      0: '0',
      px: '1px',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      13: '3.25rem',
      14: '3.5rem',
      16: '4rem',
      19: '4.75rem',
      20: '5rem',
      24: '6rem',
      27: '6.75rem',
      30: '7.5rem',
      32: '8rem',
      38: '9.5rem',
      48: '12rem',
      50: '12.5rem',
      57: '14.25rem',
      64: '16rem',
      66: '16.5rem',
      68: '17rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
      100: '25rem',
      104: '26rem',
      115: '28.75rem',
      120: '30rem',
      128: '32rem',
      152: '38rem',
      160: '40rem',
      164: '41rem',
      200: '50rem',
      '1/10': '10%',
      '1/6': '16.66667%',
      '1/5': '20%',
      '1/4': '25%',
      '1/3': '33.33333%',
      '2/5': '40%',
      '1/2': '50%',
      '3/5': '60%',
      '2/3': '66.66667%',
      '3/4': '75%',
      '4/5': '80%',
      '5/6': '83.33333%',
      full: '100%',
      screen: '100vh'
    },

    /*
    |-----------------------------------------------------------------------------
    | Minimum width                        https://tailwindcss.com/docs/min-width
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your minimum width utility sizes. These can
    | be percentage based, pixels, rems, or any other units. We provide a
    | couple common use-cases by DEFAULT. You can, of course, modify
    | these values as needed.
    |
    | Class name: .min-w-{size}
    |
    */

    minWidth: {
      0: '0',
      16: '4rem',
      24: '6rem',
      32: '8rem',
      38: '9.5rem',
      44: '11rem',
      64: '16rem',
      90: '22.5rem',
      sm: '30rem',
      atc: '34rem',
      full: '100%'
    },

    /*
    |-----------------------------------------------------------------------------
    | Minimum height                      https://tailwindcss.com/docs/min-height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your minimum height utility sizes. These can
    | be percentage based, pixels, rems, or any other units. We provide a
    | few common use-cases by DEFAULT. You can, of course, modify these
    | values as needed.
    |
    | Class name: .min-h-{size}
    |
    */

    minHeight: {
      0: '0',
      px: '1px',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      8: '2rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      14: '3.5rem',
      16: '4rem',
      19: '4.75rem',
      20: '5rem',
      24: '6rem',
      27: '6.75rem',
      30: '7.5rem',
      32: '8rem',
      38: '9.5rem',
      48: '12rem',
      50: '12.5rem',
      57: '14.25rem',
      64: '16rem',
      66: '16.5rem',
      68: '17rem',
      72: '18rem',
      80: '20rem',
      96: '24rem',
      100: '25rem',
      104: '26rem',
      115: '28.75rem',
      120: '30rem',
      128: '32rem',
      130: '33rem',
      152: '38rem',
      160: '42rem',
      200: '50rem',
      full: '100%',
      screen: '100vh'
    },

    /*
    |-----------------------------------------------------------------------------
    | Maximum width                        https://tailwindcss.com/docs/max-width
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your maximum width utility sizes. These can
    | be percentage based, pixels, rems, or any other units. By DEFAULT
    | we provide a sensible rem based scale and a 'full width' size,
    | which is basically a reset utility. You can, of course,
    | modify these values as needed.
    |
    | Class name: .max-w-{size}
    |
    */

    maxWidth: {
      none: 'none',
      19: '4.75rem',
      27: '6.75rem',
      '2xs': '12rem',
      56: '15rem',
      72: '18rem',
      xs: '20rem',
      90: '22.5rem',
      104: '26rem',
      sm: '30rem',
      125: '31.25rem',
      atc: '34rem',
      148: '37rem',
      md: '40rem',
      lg: '50rem',
      xl: '60rem',
      '2xl': '70rem',
      '3xl': '80rem',
      '4xl': '90rem',
      '5xl': '100rem',
      full: '100%'
    },

    /*
    |-----------------------------------------------------------------------------
    | Maximum height                      https://tailwindcss.com/docs/max-height
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your maximum height utility sizes. These can
    | be percentage based, pixels, rems, or any other units. We provide a
    | couple common use-cases by DEFAULT. You can, of course, modify
    | these values as needed.
    |
    | Class name: .max-h-{size}
    |
    */

    maxHeight: {
      full: '100%',
      screen: '100vh',
      md: '40rem'
    },

    /*
    |-----------------------------------------------------------------------------
    | Padding                                https://tailwindcss.com/docs/padding
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your padding utility sizes. These can be
    | percentage based, pixels, rems, or any other units. By DEFAULT we
    | provide a sensible rem based numeric scale plus a couple other
    | common use-cases like '1px'. You can, of course, modify these
    | values as needed.
    |
    | Class name: .p{side?}-{size}
    |
    */

    padding: {
      auto: 'auto',
      px: '1px',
      0: '0',
      '0-1': '0.1rem',
      1: '0.25rem',
      '0-4': '0.4rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      10: '2.5rem',
      12: '3rem',
      13: '3.25rem',
      14: '3.5rem',
      16: '4rem',
      17: '4.25rem',
      20: '5rem',
      24: '6rem',
      25: '6.25rem',
      27: '6.75rem',
      28: '7rem',
      30: '7.5rem',
      32: '8rem',
      34: '8.5rem',
      36: '9rem',
      38: '9.5rem',
      40: '10rem',
      41: '10.25rem',
      48: '12rem',
      49: '12.25rem',
      50: '12.5rem',
      52: '13rem',
      56: '14rem',
      64: '16rem',
      80: '20rem',
      96: '24rem',
      100: '25rem',
      104: '26rem',
      113: '28.25rem',
      128: '32rem',
      152: '38rem',
      '1/10': '10%',
      '1/6': '16.66667%',
      '1/5': '20%',
      '1/4': '25%',
      '1/3': '33.33333%',
      '2/5': '40%',
      '15/32': '46.875%',
      '1/2': '50%',
      '9/16': '56.25%',
      '3/5': '60%',
      '2/3': '66.66667%',
      '3/4': '75%',
      '4/5': '80%',
      '5/6': '83.33333%',
      full: '100%'
    },

    /*
    |-----------------------------------------------------------------------------
    | Margin                                  https://tailwindcss.com/docs/margin
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your margin utility sizes. These can be
    | percentage based, pixels, rems, or any other units. By DEFAULT we
    | provide a sensible rem based numeric scale plus a couple other
    | common use-cases like '1px'. You can, of course, modify these
    | values as needed.
    |
    | Class name: .m{side?}-{size}
    |
    */

    margin: {
      auto: 'auto',
      px: '1px',
      0: '0',
      '0-1': '0.1rem',
      1: '0.25rem',
      2: '0.5rem',
      3: '0.75rem',
      4: '1rem',
      5: '1.25rem',
      6: '1.5rem',
      7: '1.75rem',
      8: '2rem',
      '8-5': '2.2rem',
      9: '2.25rem',
      10: '2.5rem',
      11: '2.75rem',
      12: '3rem',
      13: '3.25rem',
      14: '3.5rem',
      15: '3.8rem',
      16: '4rem',
      18: '4.5rem',
      19: '4.75rem',
      20: '5rem',
      22: '5.5rem',
      23: '5.75rem',
      24: '6rem',
      25: '6.25rem',
      27: '6.75rem',
      30: '7.5rem',
      32: '8rem',
      37: '9.25rem',
      38: '9.5rem',
      40: '10rem',
      46: '11.5rem',
      48: '12rem',
      56: '14rem',
      64: '16rem',
      68: '17rem',
      80: '20rem',
      84: '21rem',
      96: '24rem',
      100: '25rem',
      104: '26rem',
      113: '28.25rem',
      128: '32rem',
      '1/10': '10%',
      '1/6': '16.66667%',
      '1/4': '25%',
      '1/5': '20%',
      '1/3': '33.33333%',
      '2/5': '40%',
      '1/2': '50%',
      '3/5': '60%',
      '2/3': '66.66667%',
      '3/4': '75%',
      '4/5': '80%',
      '5/6': '83.33333%',
      '9/10': '90%',

      '-px': '-1px',
      '-1': '-0.25rem',
      '-2': '-0.5rem',
      '-3': '-0.75rem',
      '-4': '-1rem',
      '-5': '-1.25rem',
      '-6': '-1.5rem',
      '-8': '-2rem',
      '-8-5': '-2.2rem',
      '-10': '-2.5rem',
      '-12': '-3rem',
      '-14': '-3.5rem',
      '-15': '-3.8rem',
      '-16': '-4rem',
      '-17': '-4.25rem',
      '-18': '-4.5rem',
      '-20': '-5rem',
      '-21': '-5.25rem',
      '-22': '-5.5rem',
      '-24': '-6rem',
      '-28': '-7rem',
      '-32': '-8rem',
      '-38': '-9.5rem',
      '-40': '-10rem',
      '-48': '-12rem',
      '-56': '-14rem',
      '-64': '-16rem',
      '-80': '-20rem',
      '-96': '-24rem',
      '-104': '-26rem',
      '-113': '-28.25rem',
      '-128': '-32rem',
      '-1/10': '-10%',
      '-1/6': '-16.66667%',
      '-1/5': '-20%',
      '-1/4': '-25%',
      '-1/3': '-33.33333%',
      '-2/5': '-40%',
      '-1/2': '-50%',
      '-3/5': '-60%',
      '-2/3': '-66.66667%',
      '-3/4': '-75%',
      '-4/5': '-80%',
      '-5/6': '-83.33333%',
      '-9/10': '-90%'
    },

    /*
    |-----------------------------------------------------------------------------
    | Box Shadow                          https://tailwindcss.com/docs/box-shadow
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your shadow utilities. As you can see from
    | the DEFAULTs we provide, it's possible to apply multiple shadows
    | per utility using comma separation.
    |
    | If a `DEFAULT` shadow is provided, it will be made available as the non-
    | suffixed `.shadow` utility.
    |
    | Class name: .shadow-{size?}
    |
    */

    boxShadow: {
      DEFAULT: '0 2px 4px 0 rgba(0,0,0,0.10)',
      sm: '4px 5px 15px rgba(0,0,0,0.8)',
      md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
      lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
      'lg-offset': '15px 15px 30px 0 rgba(0,0,0,0.08)',
      inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
      'plaa-left': '-20px -30px 20px -20px rgb(0 0 0 / 50%)',
      none: 'none'
    },

    /*
    |-----------------------------------------------------------------------------
    | Z-index                                https://tailwindcss.com/docs/z-index
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your z-index utility values. By DEFAULT we
    | provide a sensible numeric scale. You can, of course, modify these
    | values as needed.
    |
    | Class name: .z-{index}
    |
    */

    zIndex: {
      auto: 'auto',
      minusone: '-1',
      0: 0,
      10: 10,
      20: 20,
      30: 30,
      40: 40,
      50: 50,
      60: 60,
      9000: 9000,
      infinity: 10000,
      10000: 10000,
      20000: 20000,
      30000: 30000,
      40000: 40000,
      50000: 50000,
      60000: 60000
    },

    /*
    |-----------------------------------------------------------------------------
    | Opacity                                https://tailwindcss.com/docs/opacity
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your opacity utility values. By DEFAULT we
    | provide a sensible numeric scale. You can, of course, modify these
    | values as needed.
    |
    | Class name: .opacity-{name}
    |
    */

    opacity: {
      0: '0',
      25: '.25',
      50: '.5',
      65: '.65',
      75: '.75',
      80: '.8',
      100: '1'
    },

    /*
    |-----------------------------------------------------------------------------
    | Fill (SVG)                                https://tailwindcss.com/docs/fill
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your SVG fill colors. By DEFAULT we - provide
    | `fill-current` which sets the fill to the current text color. This lets you
    | specify a fill color using existing text color utilities and helps keep the
    | generated CSS file size down.
    |
    | Class name: .fill-{name}
    |
    */

    fill: theme => theme('colors'),

    /*
    |-----------------------------------------------------------------------------
    | Stroke (SVG)                            https://tailwindcss.com/docs/stroke
    |-----------------------------------------------------------------------------
    |
    | Here is where you define your SVG stroke colors. By DEFAULT we just provide
    | `stroke-current` which sets the stroke to the current text color. This lets
    | you specify a stroke color using existing text color utilities and helps
    | keep the generated CSS file size down.
    |
    | Class name: .stroke-{name}
    |
    */

    stroke: theme => theme('colors'),

    /*
    |-----------------------------------------------------------------------------
    | Cursor                              https://tailwindcss.com/docs/cursor#app
    |-----------------------------------------------------------------------------
    |
    | Utilities for controlling the cursor style when hovering over an element.
    |
    | Class name: .cursor-{name}
    |
    */

    cursor: {
      auto: 'auto',
      default: 'default',
      pointer: 'pointer',
      wait: 'wait',
      text: 'text',
      move: 'move',
      'not-allowed': 'not-allowed',
      grab: 'grab',
      grabbing: 'grabbing'
    },

    /*
    |-----------------------------------------------------------------------------
    | Scale                                    https://tailwindcss.com/docs/scale
    |-----------------------------------------------------------------------------
    |
    | Utilities for scaling elements with transform.
    |
    | Class name: .scale-{axis?}-{size}
    |
    */

    scale: {
      flip: '-1',
      0: '0',
      25: '.25',
      50: '.5',
      75: '.75',
      100: '1',
      125: '1.25',
      150: '1.5',
      175: '1.75',
      200: '2'
    }
  },

  /*
  |-----------------------------------------------------------------------------
  | Variants                 https://tailwindcss.com/docs/configuration#variants
  |-----------------------------------------------------------------------------
  |
  | Here is where you control which variants are generated and what variants are
  | generated for each of those variants.
  |
  | Currently supported variants: 'responsive', 'hover', 'focus'
  |
  | To disable a variant completely, use `false` instead of an array.
  |
  */

  variants: {
    appearance: ['responsive'],
    backgroundAttachment: ['responsive'],
    backgroundColor: ['responsive', 'hover', 'group-hover', 'active'],
    backgroundPosition: ['responsive'],
    backgroundRepeat: ['responsive'],
    backgroundSize: ['responsive'],
    borderColor: ['responsive', 'hover', 'group-hover'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: ['responsive', 'hover'],
    cursor: ['responsive'],
    display: ['responsive', 'group-hover'],
    fill: ['hover', 'group-hover'],
    float: ['responsive'],
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontWeight: ['responsive', 'hover'],
    height: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    lists: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    negativeMargin: ['responsive'],
    opacity: ['responsive', 'hover', 'group-hover'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: ['responsive'],
    stroke: [],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'group-hover'],
    userSelect: ['responsive'],
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive', 'group-hover'],
    zIndex: ['responsive']
  },

  /*
  |-----------------------------------------------------------------------------
  | Plugins                 https://tailwindcss.com/docs/configuration/#plugins
  |-----------------------------------------------------------------------------
  |
  | The plugins section allows you to register third-party plugins with Tailwind
  | that can be used to generate extra utilities, components, base styles, or
  | custom variants.
  |
  */

  plugins: [
  // e.g. require('tailwindcss-transforms'),
  ]
};
