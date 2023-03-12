import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 140%;
  /* or 64px */

  letter-spacing: 0.04em;

  /* Secondary/100 */

  color: #5064b4;
  margin-bottom: 32px;
`;

const Silver = css`
  font-size: 46px;
`;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SCompGridHeadline = styled.h2`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
