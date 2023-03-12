import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../../constants/styles/mediaquerys";

const BronzeWhiteMode = css`
  background-color: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(60px);
  box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 30px;
  /* transform: translate3d(0%, -18px, 0); */
`;

const SilverWhiteMode = css``;

const GoldWhiteMode = css`
  transform: translate3d(0%, -32px, 0);
`;

const PlatinumWhiteMode = css``;

const DiamondWhiteMode = css``;

export const CSSWhiteMode = css`
  ${BronzeWhiteMode}
  ${MIN_SILVER`${SilverWhiteMode}`};
  ${MIN_GOLD`${GoldWhiteMode}`};
  ${MIN_PLATINUM`${PlatinumWhiteMode}`};
  ${MIN_DIAMOND`${DiamondWhiteMode}`};
`;

const Bronze = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  z-index: 12;
  top: 0;
  left: 0;
  padding: 24px 15px 6px;
  z-index: 100;
  width: 100%;
  background: rgba(0, 0, 0, 0);
  transition: background-color 0.2s ease-in-out,
    backdrop-filter 0.2s ease-in-out, transform 0.2s ease-in-out;
  transform: translate3d(0%, 0%, 0);
`;

const Silver = css``;

const Gold = css`
  padding: 0 64px;
  padding: 48px 64px 8px;
`;

const Platinum = css``;

const Diamond = css``;

export const SPageHeader = styled.div<{ whiteMode: boolean }>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
  ${({ whiteMode }) => (whiteMode ? CSSWhiteMode : "")}
`;
