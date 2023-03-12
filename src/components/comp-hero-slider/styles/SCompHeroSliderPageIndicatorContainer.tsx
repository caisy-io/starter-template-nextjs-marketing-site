import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css<{
  index: number;
  active: boolean;
}>`
  width: 72px;
  position: absolute;
  bottom: calc(24px - 15px);
  padding: 15px 0;
  left: ${(props) => 15 + props.index * (72 + 15)}px;
  z-index: 10;
  display: flex;
  align-items: center;
  cursor: pointer;
`;
const Silver = css``;

const Gold = css<{
  index: number;
  active: boolean;
}>`
  width: 22vw;
  left: calc(
    64px + (${(props) => props.index ?? 0} * 22vw) +
      (${(props) => props.index ?? 0} * 16px)
  );
  overflow: hidden;
  display: flex;
  flex-direction: column;
`;

const Platinum = css``;

const Diamond = css``;

export const SCompHeroSliderPageIndicatorContainer = styled.div<{
  index: number;
  active: boolean;
}>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
