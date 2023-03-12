import { keyframes } from "styled-components";

export const CSSKfMoveIn = keyframes`
    from {
      transform: translate3d(1%, 0, 0);
      clip-path: inset(0px 100% 0% 0% );
    }
    to {
      transform: translate3d(0, 0, 0);
      clip-path: inset(0px 0% 0% 0%);
    }
`;
