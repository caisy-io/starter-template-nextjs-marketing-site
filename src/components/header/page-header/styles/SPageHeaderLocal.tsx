import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../../constants/styles/mediaquerys";

const BronzeWhiteMode = css<{ active: boolean }>`
  color: ${(props) =>
    props.active ? "var(--colorSolidBlack)" : "var(--colorSolidBlack25)"};
`;

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

const Bronze = css<{ active: boolean }>`
  text-transform: uppercase;
  padding: 0 3px;
  color: ${(props) =>
    props.active ? "var(--colorSolidWhite)" : "var(--colorSolidWhite30)"};
  cursor: pointer;
  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.005em;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SPageHeaderLocal = styled.a<{
  active: boolean;
  whiteMode: boolean;
}>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
  ${({ whiteMode }) => (whiteMode ? CSSWhiteMode : "")}
`;
