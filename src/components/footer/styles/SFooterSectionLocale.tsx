import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css<{ active: boolean }>`
  text-transform: uppercase;
  padding: 0 3px;
  font-family: Roboto;
  font-size: 12px;
  line-height: 140%;
  letter-spacing: 0.005em;
  text-decoration: ${(props) => (props.active ? "underline" : "none")};
  cursor: pointer;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SFooterSectionLocale = styled.a`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
