import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

  @import url('https://fonts.googleapis.com/css?family=Montserrat:400,600&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Tajawal:wght@500&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');
:root{
  --brand-color:#23D48B;
  --primary-color:#33647F; 
  --des-text:#7d7d7d;
}
  *,
  *::after,
  *::before {
    margin: 0px;
    padding: 0px;
    box-sizing: inherit;
  }

  html {
        ${"" /* font-size: 62.5%;   */}
        scroll-behavior:smooth;
        box-sizing: border-box;
  }

  body {
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;  
    width:100%;
    ${"" /* background:#F5F5F5; */}
    background:#F6F6F9;
    color:#003A52;
  }
  .site-wrapper{
    width:90%;
        margin:0 auto;
  }
`;

export default GlobalStyles;
