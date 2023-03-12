import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  font-family: Roboto;
  font-size: 16px;
  line-height: 19px;
  letter-spacing: 0.005em;
  color: var(--colorSolidWhite);
  position: relative;
  margin-bottom: 49px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  a {
    padding: 8px 0;

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
    }
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 200px;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.4);
    top: 100%;
    left: 50%;
    margin-top: 24px;
    transform: translateX(-50%);
    bottom: 0;
  }
`;

const Silver = css`
  align-items: initial;
  margin-bottom: 76px;
  margin-top: 10px;

  &:after {
    display: none;
  }
`;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SFooterMainNavigation = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
