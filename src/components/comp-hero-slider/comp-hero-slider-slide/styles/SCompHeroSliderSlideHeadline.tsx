import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../../constants/styles/mediaquerys";

const Bronze = css`
  font-family: Open Sans;
  font-weight: 600;
  font-size: 40px;
  line-height: 54px;
  text-align: center;
  letter-spacing: 0.005em;
  color: #ffffff;
`;

const Silver = css``;

const Gold = css`
  font-size: 64px;
  line-height: 87px;
  letter-spacing: 0.005em;
`;

const Platinum = css``;

const Diamond = css``;

export const SCompHeroSliderSlideHeadline = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
