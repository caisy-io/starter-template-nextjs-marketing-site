import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css<{ linksTo: boolean; withDescription: boolean }>`
  height: 100%;
  padding-bottom: 32px;
  ${(props) => props.linksTo && "cursor: pointer"};
  display: flex;
  flex-direction: column;
`;

const Silver = css<{ withDescription: boolean }>`
  ${(props) => props.withDescription && "padding-bottom: 64px;"}
`;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SCompGridBrandCard = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
