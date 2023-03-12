import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  font-family: Roboto;
  font-size: 14px;
  line-height: 160%;
  letter-spacing: 0.005em;
  color: var(--colorPrimary80);
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    &,
    span {
      font-family: Open Sans;
      font-weight: bold;
      font-size: 24px;
      line-height: 140%;
      min-height: 1em;
      letter-spacing: 0.005em;
      color: var(--colorSecondary100);
      margin-bottom: 32px;
    }
  }
  margin-top: 64px;
  p {
    min-height: 1.6rem;
  }
`;

const Silver = css`
  font-size: 18px;
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    &,
    span {
      font-size: 28px;
    }
  }
`;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SCompTextBlock = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
