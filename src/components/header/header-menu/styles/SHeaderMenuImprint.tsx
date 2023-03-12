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
  display: flex;
  margin-top: 12px;
  justify-content: center;
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SHeaderMenuImprint = styled.div<{
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
