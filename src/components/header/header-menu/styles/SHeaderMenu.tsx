import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../../constants/styles/mediaquerys";

const ActiveState = css`
  transform: translate3d(0, 0px, 0px);
  clip-path: inset(0px 0% 0% 0%);
  transition: transform ease-in-out 600ms, clip-path ease-in-out 600ms;
  pointer-events: all;
`;
const InActiveState = css`
  transform: translate3d(10%, 0px, 0px);
  clip-path: inset(0px 0% 0% 100%);
  transition: transform ease-in-out 600ms 250ms,
    clip-path ease-in-out 600ms 250ms;
  pointer-events: none;
`;

const Bronze = css<{ isOpen: boolean }>`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background: var(--colorPrimary100);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 80;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SHeaderMenu = styled.div<{ isOpen: boolean }>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
  ${(props) => (props.isOpen ? ActiveState : InActiveState)};
`;
