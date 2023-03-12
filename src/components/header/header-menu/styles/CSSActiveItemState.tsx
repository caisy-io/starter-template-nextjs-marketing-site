import { css } from "styled-components";

export const CSSActiveItemState = css<{
  isOpen?: boolean;
  animationIndex?: number;
  totalAnimationItems?: number;
}>`
  transform: translate3d(0, 0px, 0px);
  clip-path: inset(0px 0% 0% 0%);
  transition: transform ease-in-out 300ms
      ${({ animationIndex }) => `${200 + animationIndex * 50}ms`},
    clip-path ease-in-out 300ms
      ${({ animationIndex }) => `${200 + animationIndex * 50}ms`};
  pointer-events: all;
`;
