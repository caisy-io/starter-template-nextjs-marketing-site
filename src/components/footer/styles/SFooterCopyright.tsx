import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";
import { SFooterLeftSection } from "./SFooterLeftSection";
import { SFooterRightSection } from "./SFooterRightSection";

const Bronze = css`
  font-family: Roboto;
  font-size: 12px;
  line-height: 140%;
  letter-spacing: 0.005em;
  color: var(--colorSolidWhite);
  text-align: center;
  ${SFooterLeftSection} & {
    display: none;
  }
  ${SFooterRightSection} & {
    display: block;
  }
`;

const Silver = css`
  text-align: left;

  ${SFooterLeftSection} & {
    display: block;
  }

  ${SFooterRightSection} & {
    display: none;
  }
`;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SFooterCopyright = styled.p`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
