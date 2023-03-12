import { css } from "styled-components";

export const CSSScrollbars = css`
  /* width */
  ::-webkit-scrollbar {
    width: 8px;
    height: 8px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: var(--colorSecondary80);
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: var(--colorPrimary80);
    transition: 400ms background-color;
    cursor: pointer;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background-color: var(--colorPrimary100);
  }
`;
