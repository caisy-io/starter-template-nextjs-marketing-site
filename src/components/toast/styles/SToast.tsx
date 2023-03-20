import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  background-color: #1f2937;
  color: #ffffff;
  font-size: 0.875rem;
  line-height: 1.25rem;
  min-height: 8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  a {
    color: #34d399;
    font-weight: 600;
    text-decoration: underline;
  }
  p {
    text-align: center;
  }
  position: fixed;
  z-index: 999;
  width: 100%;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SToast = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
