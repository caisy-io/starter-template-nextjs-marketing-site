import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  margin: 0 auto 39px;
  position: relative;

  &:after {
    content: "";
    display: block;
    position: absolute;
    width: 200px;
    height: 1px;
    background-color: rgba(255, 255, 255, 0.4);
    left: 50%;
    margin-top: 14px;
    transform: translateX(-50%);
  }
`;

const Silver = css`
  width: 17%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 0;

  &:after {
    width: 1px;
    height: calc(100% - 10px);
    left: 100%;
    margin: 0;
    bottom: 0;
  }
`;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SFooterLeftSection = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
