import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  font-family: Open Sans;
  font-weight: bold;
  font-size: 28px;
  line-height: 140%;
  letter-spacing: 0.005em;
  color: var(--colorSecondary100);
`;

const Silver = css``;

const Gold = css`
  font-size: 28px;
`;

const Platinum = css``;

const Diamond = css``;

export const SCompImageWithTextHeadline = styled.h2`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
