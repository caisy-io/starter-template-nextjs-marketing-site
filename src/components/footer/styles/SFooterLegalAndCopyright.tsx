import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css``;

const Silver = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SFooterLegalAndCopyright = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
