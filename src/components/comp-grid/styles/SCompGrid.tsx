import styled, { css } from "styled-components";
import { SGrid } from "../../../base-components/grid/styles/SGrid";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  margin-top: 64px;
  ${SGrid} {
    grid-template-rows: 1fr;
    grid-auto-rows: 1fr;
  }
`;

const Silver = css`
  margin-top: 185px;
`;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SCompGrid = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
