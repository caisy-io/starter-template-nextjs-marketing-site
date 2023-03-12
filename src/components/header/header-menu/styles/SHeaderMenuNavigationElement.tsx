import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../../constants/styles/mediaquerys";
import { CSSActiveItemState } from "./CSSActiveItemState";
import { CSSInActiveItemState } from "./CSSInActiveItemState";

const Bronze = css`
  font-family: Roboto;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.005em;
  cursor: pointer;
  margin: 12px 0;

  &:first-of-type {
    margin-top: 0;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SHeaderMenuNavigationElement = styled.div<{
  isOpen?: boolean;
  animationIndex?: number;
  totalAnimationItems?: number;
}>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
  ${(props) => (props.isOpen ? CSSActiveItemState : CSSInActiveItemState)};
`;
