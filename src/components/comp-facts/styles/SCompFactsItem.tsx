import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  flex: 1 1 0;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }
`;

const Silver = css`
  margin-bottom: 0;
  padding: 0 8px;
`;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SCompFactsItem = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
