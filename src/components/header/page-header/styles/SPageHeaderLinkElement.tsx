import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../../constants/styles/mediaquerys";

const BronzeWhiteMode = css``;

const SilverWhiteMode = css`
  color: var(--colorSolidBlack);
  &:after {
    opacity: 1;
    background: var(--colorSolidBlack);
    width: 3px;
    height: 3px;
  }
`;

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

const Silver = css`
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  line-height: 16px;
  letter-spacing: 0.005em;
  color: var(--colorSolidWhite);
  padding: 0 24px;
  cursor: pointer;
  background: transparent;
  border: none;
  outline: none;
  position: relative;
  transition: opacity 200ms linear, color 200ms linear;

  &:hover {
    opacity: 0.7;
  }

  &:after {
    transition: opacity 200ms linear, width 200ms linear, height 200ms linear;
    content: "";
    position: absolute;
    right: 0;
    top: 50%;
    background: var(--colorSolidWhite);
    opacity: 0.3;
    width: 2px;
    height: 2px;
    border-radius: 50%;
  }

  &:first-of-type {
    padding-left: 20px;
  }
`;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SPageHeaderLinkElement = styled.button<{ whiteMode: boolean }>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
  ${({ whiteMode }) => (whiteMode ? CSSWhiteMode : "")}
`;
