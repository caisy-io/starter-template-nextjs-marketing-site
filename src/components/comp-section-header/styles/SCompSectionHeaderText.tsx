import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  width: 100%;
  padding: 15px;
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  text-align: center;
  font-weight: bold;
  font-size: 40px;
  line-height: 140%;
  letter-spacing: 0.005em;
  color: var(--colorSolidWhite);
  z-index: 20;
  word-break: break-word;
`;

const Silver = css``;

const Gold = css`
  font-size: 64px;
`;

const Platinum = css``;

const Diamond = css``;

export const SCompSectionHeaderText = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
