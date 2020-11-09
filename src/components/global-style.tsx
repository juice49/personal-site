import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  :root {
    --document-border-color: #fff;
    --body-color: #020202;
    --body-color-subtle: rgb(69, 68, 68);
    --background-color: rgb(253, 206, 245);
    --accent-color: #090efe;
    --accent-color-b: #f8ce03;
    --accent-color-c: #e3fffd;
    --document-border-width: var(--space2);

    font-family: /* 'PT Root UI', */ Space Grotesk, system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Helvetica, Arial, sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-variation-settings: 'wght' 430;

    font-size: 1.2rem;
    font-size: clamp(1.26rem, 1.8vw, 1.48rem);
    line-height: 1.44;
    text-size-adjust: 100%;

    background-color: var(--document-border-color);
    color: var(--body-color);

    margin: var(--document-border-width);
    margin-bottom: 0;

    ${props => props.space}
  }

  h1, h2, h3, h4, h5, h6 {
    font-size: 1rem;
    font-weight: normal;
  }

  a {
    color: var(--accent-color);
    text-decoration: none;

    /* &:hover {
      background-color: rgb(249, 247, 215);
    }

    &:focus {
      outline: 2px solid var(--link-focus-outline-color, var(--accent-color));
      outline-offset: 0.25em;
    } */
  }
`
