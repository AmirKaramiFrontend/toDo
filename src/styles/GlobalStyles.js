import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
:root{
    --small-font: 1rem;
    --medium-font: 1.4rem;
    --larg-font: 1.8rem;

    --color-primary: #4d4dff;
    --color-primary-dark: #5d00d6;
    --color-warning: #ffc300;
    --color-warning-dark: #ffa300;

    --color-white: #ffffff;
    --color-black: #000000;

    --color-light-grey: #eeeeee;

    --color-dark: #777777;
    --all-transition: all .32s;
}

html,
body {
    font-size: 62.5%;
    background-color: var(--color-white);
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}


`;

export default GlobalStyled;