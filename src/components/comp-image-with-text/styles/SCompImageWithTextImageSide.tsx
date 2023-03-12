import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  display: none;
`;

const Silver = css`
  display: flex;
  flex: 1 1 100%;
  border-radius: 4px;
  overflow: hidden;
`;

const Gold = css`
  width: 537px;
`;

const Platinum = css``;

const Diamond = css``;

export const SCompImageWithTextImageSide = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
