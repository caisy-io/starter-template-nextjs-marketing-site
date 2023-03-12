import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 5;
  pointer-events: none;
  > div {
    pointer-events: all;
    border-radius: 48px;
    width: 48px;
    height: 48px;
    position: absolute;
    bottom: 24px;
    right: 15px;
    background: rgba(255, 255, 255, 0.3);
    backdrop-filter: blur(38.4px);
    display: flex;
    justify-content: center;
    align-items: center;
  }
  svg {
    margin-top: -4px;
  }
  cursor: pointer;
`;

const Silver = css``;

const Gold = css`
  > div {
    border-radius: 75px;
    width: 75px;
    height: 75px;
    bottom: 29px;
    right: 64px;
    backdrop-filter: blur(60px);
  }
  svg {
    width: 36px;
    height: 36px;
  }
`;

const Platinum = css``;

const Diamond = css``;

export const SCompHeroSliderScrollDownButton = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
