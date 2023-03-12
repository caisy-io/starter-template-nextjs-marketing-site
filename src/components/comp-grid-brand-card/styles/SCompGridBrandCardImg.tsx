import styled, { css } from "styled-components";
import { SImg } from "../../../base-components/img/styles/SImg";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const CSSBronzeWithDescription = css`
  margin-bottom: 24px;
  padding-top: 46.84%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05);
`;

const Bronze = css<{ withDescription: boolean; linksTo: boolean }>`
  padding-top: 69.79%;
  background: var(--colorSolidWhite);
  border-radius: 4px;
  width: 100%;
  height: 0;
  ${(props) => props.withDescription && CSSBronzeWithDescription};
  transition: box-shadow 500ms;

  &:hover {
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.05), 0 8px 26px rgba(29, 0, 84, 0.1);
  }

  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;

  ${SImg} {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 58.55%;
    transform: translate(-50%, -50%);
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SCompGridBrandCardImg = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
