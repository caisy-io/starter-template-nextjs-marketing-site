import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  text-align: center;
  color: var(--colorSecondary100);
  width: 109px;
  height: 22px;

  img {
    max-width: 100%;
    height: 100%;
  }
`;

const Silver = css`
  text-align: left;
`;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SFooterLogo = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
