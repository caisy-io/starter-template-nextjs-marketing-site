import styled, { css } from "styled-components";
import {
  MIN_DIAMOND,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_SILVER,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  font-size: 14px;
  line-height: 140%;
  color: rgba(29, 0, 84, 0.8);
  text-align: left;
  letter-spacing: normal;
  line-height: 1.4;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    min-height: 1em;
    font-family: Open Sans;
    font-weight: 700;
    font-size: 24px;
    line-height: 140%;
    letter-spacing: 0.005em;
    color: #5064b4;
    text-align: left;
    min-height: 1em;
    margin-bottom: 32px;
  }

  a {
    text-decoration: underline;
    display: inline-block;
    cursor: pointer;
    white-space: break-spaces;
  }

  b,
  strong {
    font-weight: 700;
  }

  p {
    min-height: 1em;
  }

  ol {
    margin-left: 18px;
    list-style: decimal;
  }

  i {
    font-style: italic;
  }

  ul {
    margin-left: 18px;
    list-style: disc;
  }

  li {
    padding-left: 16px;
    padding-bottom: 10px;
  }

  strong {
    font-weight: 600;
  }
`;

const Silver = css`
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-size: 28px;
    letter-spacing: 0.005em;
  }
`;

const Gold = css`
  font-size: 18px;
  line-height: 160%;
`;

const Platinum = css``;

const Diamond = css``;

export const SText = styled.div`
  ${Bronze};
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
