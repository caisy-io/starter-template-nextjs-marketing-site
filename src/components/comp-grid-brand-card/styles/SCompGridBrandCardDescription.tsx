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
  line-height: 140%;
  letter-spacing: 0.005em;
  color: rgba(29, 0, 84, 0.7);
`;

const Silver = css`
  width: 75.87%;
`;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SCompGridBrandCardDescription = styled.p`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
