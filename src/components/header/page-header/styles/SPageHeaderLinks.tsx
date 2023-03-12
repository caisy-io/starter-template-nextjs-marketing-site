import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../../constants/styles/mediaquerys";

const BronzeWhiteMode = css``;

const SilverWhiteMode = css``;

const GoldWhiteMode = css``;

const PlatinumWhiteMode = css``;

const DiamondWhiteMode = css``;

export const CSSWhiteMode = css`
  ${BronzeWhiteMode}
  ${MIN_SILVER`${SilverWhiteMode}`};
  ${MIN_GOLD`${GoldWhiteMode}`};
  ${MIN_PLATINUM`${PlatinumWhiteMode}`};
  ${MIN_DIAMOND`${DiamondWhiteMode}`};
`;

const Bronze = css``;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SPageHeaderLinks = styled.div<{ whiteMode: boolean }>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
  ${({ whiteMode }) => (whiteMode ? CSSWhiteMode : "")}
`;
