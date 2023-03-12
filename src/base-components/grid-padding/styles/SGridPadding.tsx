import styled, { css } from "styled-components";
import { PADDING } from "../../../constants/styles/grid";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  padding: 0 ${PADDING.BRONZE};
`;

const Silver = css`
  padding: 0 ${PADDING.SILVER};
`;

const Gold = css`
  padding: 0 ${PADDING.GOLD};
`;

const Platinum = css`
  padding: 0 ${PADDING.PLATINUM};
`;

const Diamond = css`
  padding: 0 ${PADDING.DIAMOND};
  max-width: 1920px;
  margin: 0 auto;
`;

export const SGridPadding = styled.div`
  ${Bronze};
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
