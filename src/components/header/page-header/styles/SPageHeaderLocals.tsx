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
  transition: transform ease-in-out 600ms 200ms,
    clip-path ease-in-out 600ms 200ms;
  pointer-events: all;
`;

const InActiveState = css`
  transform: translate3d(10%, 0px, 0px);
  clip-path: inset(0px 0% 0% 100%);
  transition: transform ease-in-out 600ms 150ms,
    clip-path ease-in-out 600ms 150ms;
  pointer-events: none;
`;

const Bronze = css<{ isOpen: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row-reverse;
  color: var(--colorSolidWhite);
  margin: 0 12px;
  ${(props) => (props.isOpen ? ActiveState : InActiveState)};
`;

const Silver = css`
  margin: 0 20px 0 24px;
`;

const Gold = css`
  ${ActiveState}
`;

const Platinum = css``;

const Diamond = css``;

export const SPageHeaderLocals = styled.div<{ isOpen: boolean }>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
