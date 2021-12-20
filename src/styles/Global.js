
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        background-color: #8F8F8F;
        height: 100%;
    }

    .content{
        margin: auto;
        margin-left: 300px;
        max-width: 1000px;
    }
`

export default GlobalStyle;