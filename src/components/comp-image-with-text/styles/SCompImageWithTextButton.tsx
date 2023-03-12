import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const WithoutBackground = css`
  margin: 0px 16px;
  color: var(--colorPrimary100);
  background-color: transparant;
`;

const Inverted = css`
  margin: 0px 16px;
  color: var(--colorPrimary100);
  background-color: var(--colorSolidWhite);
`;

const Bronze = css`
  color: var(--colorSolidWhite);
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 8px 16px;
  height: 40px;
  background: var(--colorPrimary100);
  border-radius: 49px;
  border: none;
  cursor: pointer;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SCompImageWithTextButton = styled.button<{ buttonStyle?: string }>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
  ${({ buttonStyle }) =>
    buttonStyle === "WithoutBackground" ? WithoutBackground : ""}
  ${({ buttonStyle }) => (buttonStyle === "Inverted" ? Inverted : "")}
`;
