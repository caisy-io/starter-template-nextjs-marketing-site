import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../../constants/styles/mediaquerys";

const Bronze = css`
  font-family: Roboto;
  font-size: 14px;
  line-height: 140%;
  font-weight: 400;
  text-align: center;
  letter-spacing: 0.005em;
  color: #ffffff;
  strong,
  bold,
  strong > *,
  bold > * {
    font-weight: bold;
  }
  margin-top: 16px;
`;

const Silver = css``;

const Gold = css`
  max-width: 45vw;
  font-size: 18px;
  line-height: 160%;
`;

const Platinum = css``;

const Diamond = css``;

export const SCompHeroSliderSlideText = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
