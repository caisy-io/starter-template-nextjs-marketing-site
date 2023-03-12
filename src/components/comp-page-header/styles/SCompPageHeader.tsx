import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css<{ isBackgroundImage: boolean }>`
  position: relative;
  ${(props) => !props.isBackgroundImage && "height: 440px"};
  ${(props) => !props.isBackgroundImage && "background-color: white"};
`;

const Silver = css<{ isBackgroundImage: boolean }>`
  ${(props) => !props.isBackgroundImage && "height: 470px"};
`;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SCompPageHeader = styled.div<{ isBackgroundImage: boolean }>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
