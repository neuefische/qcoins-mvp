import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    font-family: Helvetica, sans-serif;
    font-size: 112.5%;

  }

  #root {
    display: grid;
     // To add header, footer and scrolling middle part:
     // @see https://codepen.io/neuefische/pen/PoZeqzQ
    grid-template-rows: auto;
    //height: 100%;
    left: 0;
    margin: 0;
    max-width: 600px;
    position: fixed;
    top: 0;
    width: 100%;
  }

  input, button, textarea {
    font-size: 1em;
  }

  textarea {
    font-family: inherit;
  }

  :root {
    --navigationButton-font-darkgrey: #414141;
    --main-yellow: 255, 226, 148;
    --main-green: 164, 221, 196;
    --main-blue: 63, 151, 239;
    --color-babyblue: #CDE4FB;
  }
`
