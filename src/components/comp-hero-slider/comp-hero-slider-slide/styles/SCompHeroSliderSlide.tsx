import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../../constants/styles/mediaquerys";

// LastBeforeActive
const CSSActiveInitalState = css<{
  active?: boolean;
  lastBeforeActive?: boolean;
}>`
  z-index: 3;
  clip-path: inset(0px 0% 0% 0%);
  transform: translate3d(0, 0, 0);
`;
// LastBeforeActive
const CSSTransitionFromState = css<{
  active?: boolean;
  lastBeforeActive?: boolean;
}>`
  z-index: 2;
  transform: translate3d(0, 0, 0);
`;

const CSSNotTransitionFromState = css<{
  active?: boolean;
  lastBeforeActive?: boolean;
}>`
  transform: translate3d(-5%, 0, 0);
  z-index: 1;
`;

// ACTIVE
const CSSActiveState = css<{
  active?: boolean;
  lastBeforeActive?: boolean;
}>`
  @keyframes movein {
    from {
      clip-path: inset(0px 100% 0% 0);
      transform: translate3d(-5%, 0, 0);
    }
    to {
      clip-path: inset(0px 0% 0% 0%);
      transform: translate3d(0, 0, 0);
    }
  }
  z-index: 3;
  /* animation: movein 0.6s normal forwards cubic-bezier(0.84, 0.33, 0.68, 1.01); */
  animation: movein 1.6s normal forwards cubic-bezier(0.87, 0, 0.13, 1);
  animation-iteration-count: 1;
`;

const CSSInActiveState = css<{
  active?: boolean;
  lastBeforeActive?: boolean;
}>`
  clip-path: inset(0px 0% 0% 0%);
  transform: translate3d(0, 0, 0);
`;

const Bronze = css<{
  active?: boolean;
  lastBeforeActive?: boolean;
}>`
  height: 100%;
  width: 100%;
  position: absolute;
  transform: translate3d(-5%, 0, 0);
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SCompHeroSliderSlide = styled.div<{
  active?: boolean;
  transitionFrom?: boolean | undefined;
}>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
  ${({ transitionFrom }) =>
    transitionFrom !== undefined
      ? css<{
          active?: boolean;
          transitionFrom?: boolean | undefined;
        }>`
          ${({ transitionFrom }) =>
            transitionFrom
              ? CSSTransitionFromState
              : CSSNotTransitionFromState};
          ${({ active }) => (active ? CSSActiveState : CSSInActiveState)};
        `
      : css<{
          active?: boolean;
          transitionFrom?: boolean | undefined;
        }>`
          ${({ active }) => (active ? CSSActiveInitalState : "")};
        `}
`;
