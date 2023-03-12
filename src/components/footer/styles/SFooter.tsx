import styled, { css } from "styled-components";
import { SFlex } from "../../../base-components/flex/styles/SFlex";
import { SGridPadding } from "../../../base-components/grid-padding/styles/SGridPadding";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const CSSIs404 = css`
  margin-top: 0;
`;

const Bronze = css<{ is404?: boolean }>`
  background: var(--colorPrimary100);
  padding: 16px 0;
  display: flex;
  flex-direction: column;
  ${SGridPadding} {
    width: 100%;
    ${SFlex} {
      width: 100%;
      height: 100%;
    }
  }
  margin-top: 64px;
  ${({ is404 }) => (is404 ? CSSIs404 : "")}
`;

const Silver = css<{ is404?: boolean }>`
  padding: 32px 0;
  flex-direction: row;
  margin-top: 185px;
  ${({ is404 }) => (is404 ? CSSIs404 : "")}
`;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SFooter = styled.div<{ is404?: boolean }>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
