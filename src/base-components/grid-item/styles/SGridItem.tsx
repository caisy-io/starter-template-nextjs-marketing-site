import styled, { css } from "styled-components";
import { SCREEN_TYPES } from "../../../constants/styles/grid";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";
import { IGridItem } from "../GridItem";

const generateGridItemCss = (props, screenType) => {
  const val = props[screenType.toLowerCase()];

  if (val === null) {
    return css`
      display: none;
    `;
  }

  const isAnyNull = Object.values(props).find((a) => a === null)
    ? css`
        display: block;
      `
    : "";

  const start = val?.start;
  const end = val?.end;
  const order = val?.order;

  if (start && end) {
    return css`
      ${isAnyNull};
      grid-column-start: ${start};
      grid-column-end: ${end + 1};
    `;
  }

  const _order = css`
    ${order ? `order: ${order};` : ""}
  `;

  const col = val?.col;
  const row = val?.row;

  const _row = css`
    ${row && row.start
      ? `grid-row-start: ${row.start};`
      : "grid-row-start: auto;"}
    ${row && row.end ? `grid-row-end: ${row.end + 1};` : "grid-row-end: auto;"}
  `;

  if (col?.start && col?.end) {
    return css`
      ${isAnyNull};
      grid-column-start: ${col.start};
      grid-column-end: ${col.end + 1};
      ${_row}
      ${_order}
    `;
  }
};

const Bronze = css`
  ${(props: IGridItem) => generateGridItemCss(props, SCREEN_TYPES.BRONZE)};
`;

const Silver = css`
  ${(props: IGridItem) => generateGridItemCss(props, SCREEN_TYPES.SILVER)};
`;

const Gold = css`
  
  ${(props: IGridItem) => generateGridItemCss(props, SCREEN_TYPES.GOLD)};
`;

const Platinum = css`
  ${(props: IGridItem) => generateGridItemCss(props, SCREEN_TYPES.PLATINUM)};
`;

const Diamond = css`
  ${(props: IGridItem) => generateGridItemCss(props, SCREEN_TYPES.DIAMOND)};
`;

export const SGridItem = styled.div`
  ${Bronze};
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
