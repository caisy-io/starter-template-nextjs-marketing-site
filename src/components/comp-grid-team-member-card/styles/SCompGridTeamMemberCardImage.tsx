import styled, { css } from "styled-components";
import { SImg } from "../../../base-components/img/styles/SImg";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const Bronze = css`
  overflow: hidden;
  cursor: pointer;
  ${SImg} {
    transition: transform 300ms ease-in-out;
  }
  &:hover {
    ${SImg} {
      transform: scale(1.01);
    }
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SCompGridTeamMemberCardImage = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
