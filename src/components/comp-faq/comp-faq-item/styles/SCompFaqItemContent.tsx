import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../../constants/styles/mediaquerys";
import { SText } from "../../../text/styles/SText";

const Bronze = css<{ isActive: boolean; contentHeight: number }>`
  height: ${(props) => (props.isActive ? `${props.contentHeight}px` : "0")};
  overflow-y: hidden;
  transition: all 500ms cubic-bezier(0.4, 0, 0.2, 1);
  margin-top: ${(props) => (props.isActive ? "24px" : "0")};

  p {
    font-family: Roboto;
    font-size: 14px;
    line-height: 160%;
    letter-spacing: 0.005em;
    color: var(--colorPrimary100);

    &:last-child {
      margin-top: 40px;
    }

    &:first-child {
      margin-top: 0;
    }
  }
`;

const Silver = css`
  ${SText} {
    width: 66%;
  }

  p {
    font-size: 18px;
  }
`;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SCompFaqItemContent = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
