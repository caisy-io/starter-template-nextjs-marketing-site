import { createGlobalStyle } from "styled-components";
import { CSSReset } from "./css-reset";
import { CSSScrollbars } from "./css-scrollbars";

export const GSBase = createGlobalStyle<{
  primaryColor100: string;
  primaryColor80: string;
  secondayColor100: string;
  secondayColor80: string;
}>`
  ${CSSReset};
  ${CSSScrollbars};
  
  :root {
    ${CSSScrollbars};
    --colorPrimary100: ${(props) => props.primaryColor100};
    --colorPrimary80: ${(props) => props.primaryColor80};;
    --colorSecondary100: ${(props) => props.secondayColor100};;
    --colorSecondary80: ${(props) => props.secondayColor80};;
    --colorSolidWhite: rgba(255,255,255,1);
    --colorSolidBlack: rgba(0,0,0,1);
    --colorSolidWhite30: rgba(255,255,255,0.300);
    --colorSolidBlack25: rgba(0,0,0,0.250);
  }
  
  body {
    font-family: Roboto, -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }
  
  .lazyload-wrapper {
    height: inherit;
    width: inherit;
    max-height: inherit;
  }
  
  a{
    color: inherit;
  }
  
  img{
    pointer-events: none;
  }
  ol {
     li {
      list-style-type: decimal;
      margin-left: 1rem;
     }
  }
  ul { 
    li {
      list-style-type: circle;
      margin-left: 1rem;
    }
  }
  strong, b {
    font-weight: bold;
  }
`;
