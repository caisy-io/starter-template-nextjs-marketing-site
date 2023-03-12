import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css<{ darkText?: boolean }>`
  font-family: Open Sans;
  font-weight: 600;
  font-size: 28px;
  line-height: 140%;
  letter-spacing: 0.04em;
  text-transform: capitalize;
  color: var(--colorSolidWhite);
  z-index: 3;
  text-align: left;
  margin-bottom: 24px;
`;

const Silver = css`
  font-size: 46px;
  margin-bottom: 40px;
`;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SCompPageHeaderHeadline = styled.h1<{ darkText?: boolean }>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
