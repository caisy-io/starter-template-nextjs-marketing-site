import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../../constants/styles/mediaquerys";

const BronzeWhiteMode = css``;

const SilverWhiteMode = css``;

const GoldWhiteMode = css`
  background-color: transparent;
  border: 1px solid rgba(255, 255, 255, 0);
  backdrop-filter: none;
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
  display: none;
`;

const Silver = css``;

const Gold = css`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 16px 0;
  background: rgba(0, 0, 0, 0.25);
  border: 1px solid rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(60px);
  border-radius: 67px;
  transition: background-color 0.2s ease-in-out, border-color 0.2s ease-in-out,
    backdrop-filter 0s linear;
`;

const Platinum = css``;

const Diamond = css``;

export const SPageHeaderLinksContainer = styled.div<{ whiteMode: boolean }>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
  ${({ whiteMode }) => (whiteMode ? CSSWhiteMode : "")}
`;
