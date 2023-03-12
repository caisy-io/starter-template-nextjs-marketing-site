import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  font-family: Roboto;
  position: relative;
  font-size: 14px;
  line-height: 140%;
  text-transform: uppercase;
  color: var(--colorSecondary100);
  padding-bottom: 5px;
  margin-bottom: 8px;

  &:after {
    content: "";
    display: block;
    position: absolute;
    background-color: var(--colorSecondary80);
    width: 100%;
    height: 1px;
    opacity: 0.3;
    left: 0;
    bottom: 0;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SCompFactsLabel = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
