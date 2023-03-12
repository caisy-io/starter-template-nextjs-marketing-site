import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const ActiveState = css<{
  timePerSlide: number;
}>`
  transform: translate3d(0, 0px, 0px);
  transition: transform linear ${(props) => props.timePerSlide}ms;
`;
const InActiveState = css<{
  timePerSlide: number;
}>`
  transform: translate3d(-100%, 0px, 0px);
  transition: transform linear 0s;
`;

const Bronze = css<{
  timePerSlide: number;
}>`
  width: 100%;
  height: 1px;
  background: #ffffff;
  transform: translate3d(-100%, 0px, 0px);
  transition: transform linear ${(props) => props.timePerSlide}ms;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SCompHeroSliderPageIndicatorLineProgress = styled.div<{
  active: boolean;
  timePerSlide: number;
}>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
  ${(props) => (props.active ? ActiveState : InActiveState)};
`;
