import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const CSSActiveLabel = css`
  background-color: var(--colorPrimary100);
  color: var(--colorSolidWhite);
`;
const Bronze = css<{ isActive?: boolean }>`
  border: 1px solid var(--colorPrimary100);
  border-radius: 4px;
  font-family: Roboto;
  font-weight: 500;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--colorPrimary100);
  padding: 8px;
  margin-right: 16px;
  background-color: var(--colorSolidWhite);
  cursor: pointer;
  outline: none;
  transition: all 500ms linear;

  &:last-child {
    margin-right: 0;
  }

  &:hover {
    ${CSSActiveLabel};
  }

  ${(props) => props.isActive && CSSActiveLabel}
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SCompGridFilterLabel = styled.button`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
