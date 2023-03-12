import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const CSSInline = css<{ inline?: boolean }>`
  iframe {
    width: 100%;
    max-width: 100%;
    min-width: 100%;
    min-height: 100%;
  }
`;

const Bronze = css<{ inline?: boolean }>`
  overflow: hidden;
  position: relative;
  height: 100%;

  > div {
    /* position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%; */
    z-index: -1;
    pointer-events: none;
    overflow: hidden;
  }
  /* the max below is to overscale on very large screens, aka ultrawide */
  iframe {
    width: 100vw;
    height: 56.25vw; /* Given a 16:9 aspect ratio, 9/16*100 = 56.25 */
    min-height: max(
      100vh,
      100vw
    ); /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
    min-width: max(
      177.77vh,
      100vw
    ); /* Given a 16:9 aspect ratio, 16/9*100 = 177.77 */
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  ${({ inline }) => (inline ? CSSInline : "")}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SVideo = styled.div<{ inline?: boolean }>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
