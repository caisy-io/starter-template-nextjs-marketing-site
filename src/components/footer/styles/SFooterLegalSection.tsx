import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  font-family: Roboto;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.005em;
  color: var(--colorSolidWhite);
  text-align: center;
  margin: 16px 0;
  a {
    padding: 0 8px;
  }
`;

const Silver = css``;

const Gold = css`
  margin: 0 -8px;
`;

const Platinum = css``;

const Diamond = css``;

export const SFooterLegalSection = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
