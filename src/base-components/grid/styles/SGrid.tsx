import styled, { css } from "styled-components";
import {
  COL_AMOUNT,
  GUTTER,
  SCREEN_TYPES,
} from "../../../constants/styles/grid";
import {
  MIN_DIAMOND,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_SILVER,
} from "../../../constants/styles/mediaquerys";

interface IGrid {
  rowGap?: boolean;
}

const generateColumns = (type, rowGrid) => {
  return css`
    grid-template-columns: repeat(${COL_AMOUNT[type]}, 1fr);
    grid-column-gap: ${GUTTER[type]};
    ${rowGrid ? `grid-row-gap: ${GUTTER[type]}` : ""};
  `;
};

const Bronze = css`
  display: grid;
  grid-template-rows: auto;
  ${({ rowGap }: IGrid) => generateColumns(SCREEN_TYPES.BRONZE, rowGap)};
  width: 100%;
`;

const Silver = css`
  ${({ rowGap }: IGrid) => generateColumns(SCREEN_TYPES.SILVER, rowGap)};
`;

const Gold = css`
  ${({ rowGap }: IGrid) => generateColumns(SCREEN_TYPES.GOLD, rowGap)};
`;

const Platinum = css`
  ${({ rowGap }: IGrid) => generateColumns(SCREEN_TYPES.PLATINUM, rowGap)};
`;

const Diamond = css`
  ${({ rowGap }: IGrid) => generateColumns(SCREEN_TYPES.DIAMOND, rowGap)};
`;

export const SGrid = styled.div`
  ${Bronze};
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
