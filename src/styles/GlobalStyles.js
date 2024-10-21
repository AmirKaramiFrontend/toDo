import { createGlobalStyle } from "styled-components";

const GlobalStyled = createGlobalStyle`
:root{
    --small-font: 1rem;
    --medium-font: 1.4rem;
    --larg-font: 1.8rem;

    --color-primary: #4d4dff;
    --color-white: #ffffff;

    --color-light-grey: #eeeeee;
}

html,
body {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
    font-size: 62.5%;
    background-color: var(--color-white);
}

* {
    transition: all .1s;
}

a {
    color: inherit;
    text-decoration: none;
}

* {
    box-sizing: border-box;
}

a.active {
    font-weight: 900;
    color: var(--color-primary);
}
`;

export default GlobalStyled;