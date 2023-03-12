import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  display: flex;
  flex-direction: column;
  flex: 1 1 100%;
  margin-top: 32px;
`;

const Silver = css``;

const Gold = css<{ imageRightInsteadOfLeft: boolean }>`
  margin-top: 100px;
  ${({ imageRightInsteadOfLeft }) =>
    imageRightInsteadOfLeft
      ? css`
          padding-left: 48px;
        `
      : css`
          padding-right: 48px;
        `};
`;

const Platinum = css``;

const Diamond = css``;

export const SCompImageWithTextTextSide = styled.div<{
  imageRightInsteadOfLeft: boolean;
}>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
