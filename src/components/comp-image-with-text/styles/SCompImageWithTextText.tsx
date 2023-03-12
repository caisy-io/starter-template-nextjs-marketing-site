import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  //margin: 16px 0 32px 0;
  margin: 32px 0 48px 0;
  font-family: Roboto;
  font-size: 14px;
  line-height: 140%;
  letter-spacing: 0.005em;
  color: var(--colorPrimary100);

  p {
    min-height: 1em;
  }
  p:last-of-type {
    margin-bottom: 0;
  }
`;

const Silver = css``;

const Gold = css`
  font-family: Roboto;
  font-size: 18px;
  line-height: 160%;
  letter-spacing: 0.005em;
`;

const Platinum = css``;

const Diamond = css``;

export const SCompImageWithTextText = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
