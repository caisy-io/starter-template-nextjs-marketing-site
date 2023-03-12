import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";
import { CSSKfMoveIn } from "./CSSKfMoveIn";
import { CSSKfMoveOut } from "./CSSKfMoveOut";

// transitionFrom
const CSSTransitionFromState = css<{
  active?: boolean;
  transitionFrom?: boolean;
}>`
  animation: ${CSSKfMoveOut} 1.6s normal forwards cubic-bezier(0.87, 0, 0.13, 1);
  animation-iteration-count: 1;
`;

const CSSNotTransitionFromState = css<{
  active?: boolean;
  transitionFrom?: boolean;
}>`
  clip-path: inset(0px 100% 0px 0px);
  transform: translate3d(-5%, 0, 0);
`;

// ACTIVE
const CSSActiveState = css<{
  active?: boolean;
  transitionFrom?: boolean;
}>`
  animation: ${CSSKfMoveIn} 1.6s normal forwards cubic-bezier(0.87, 0, 0.13, 1);
  animation-iteration-count: 1;
`;

const CSSInActiveState = css<{
  active?: boolean;
  transitionFrom?: boolean;
}>`
  /* transform: translate3d(-100%, 0, 0); */
`;

const Bronze = css<{
  active?: boolean;
  transitionFrom?: boolean;
}>`
  /* transform: translate3d(-100%, 0, 0); */
  display: none;
`;

const Silver = css``;

const Gold = css`
  display: block;
  position: relative;
  margin-bottom: 8px;
  /* bottom: 23px; */
  /* right: 0; */
  width: 100%;
  /* Caption/14 */

  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 140%;
  /* or 20px */
  text-transform: uppercase;

  color: #ffffff;
`;

const Platinum = css``;

const Diamond = css``;

export const SCompHeroSliderPageIndicatorTitle = styled.div<{
  active?: boolean;
  transitionFrom?: boolean;
}>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
  ${(props) =>
    props.transitionFrom ? CSSTransitionFromState : CSSNotTransitionFromState};
  ${(props) => (props.active ? CSSActiveState : CSSInActiveState)};
`;
