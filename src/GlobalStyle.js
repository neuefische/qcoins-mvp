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
    height: 100%;
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
`
