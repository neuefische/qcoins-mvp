import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  html {
    height: 100%;
  }

  body {
    font-family: sans-serif;
    font-size: 112.5%;

  }

  #root {
    display: grid;
     // To add header, footer and scrolling middle part:
     // @see https://codepen.io/neuefische/pen/PoZeqzQ
    grid-template-rows: auto;
    max-width: 600px;
    width: 100%;
  }

  input, button, textarea {
    font-size: 1em;
  }

  textarea {
    font-family: inherit;
  }
`
