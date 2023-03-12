import { css } from "styled-components";

export const CSSInActiveItemState = css<{
  isOpen?: boolean;
  animationIndex?: number;
  totalAnimationItems?: number;
}>`
  transform: translate3d(10%, 0px, 0px);
  clip-path: inset(0% 0% 0% 100%);
  transition: transform ease-in-out 300ms
      ${({ animationIndex, totalAnimationItems }) =>
        `${(totalAnimationItems - animationIndex) * 50}ms`},
    clip-path ease-in-out 300ms
      ${({ animationIndex, totalAnimationItems }) =>
        `${(totalAnimationItems - animationIndex) * 50}ms`};
  pointer-events: none;
`;
