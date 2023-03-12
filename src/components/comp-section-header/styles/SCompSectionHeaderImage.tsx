import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css<{ dominantColor?: string }>`
  position: relative;
  ${({ dominantColor }) =>
    dominantColor ? `background-color: ${dominantColor}` : ""};

  &:after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: radial-gradient(
      circle at 50% 50%,
      #fff 2px,
      transparent 2px
    );
    mask-image: linear-gradient(
      104.99deg,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 0.3) 23.49%
    );
    background-size: 32px 32px;
    background-repeat: round;
    z-index: 2;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.3);
    z-index: 1;
  }
  height: 100vw;
`;

const Silver = css`
  height: 30vw;
  &:after {
    background-image: radial-gradient(
      circle at 50% 50%,
      rgba(255, 255, 255, 0.5) 2px,
      transparent 2px
    );
    background-size: 48px 48px;
  }
`;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SCompSectionHeaderImage = styled.div<{ dominantColor?: string }>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
