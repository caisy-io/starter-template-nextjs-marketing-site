import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  margin-top: 64px;
  height: calc((100vw - 30px) * 0.5625); /* 0.5625 because that is 16:9 ratio */
`;

const Silver = css`
  margin-top: 185px;
  height: calc((100vw - 64px) * 0.5625); /* 0.5625 because that is 16:9 ratio */
`;

const Gold = css`
  height: min(
    calc((100vw - 128px) * 0.5625),
    calc((1920px - 128px) * 0.5625)
  ); /* 0.5625 because that is 16:9 ratio and 1920px is the max with of the grid */
`;

const Platinum = css``;

const Diamond = css``;

export const SCompVideo = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
