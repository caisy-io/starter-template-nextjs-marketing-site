import styled, { css } from "styled-components";
import {
  MIN_DIAMOND,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_SILVER,
} from "../../../constants/styles/mediaquerys";

const generateCss = (val) => {
  return val ? `height: ${val}${isNaN(parseInt(val)) ? "" : "px"};` : "";
};

const Bronze = css<any>`
  width: 100%;
  ${(props) => generateCss(props.bronze)};
`;

const Silver = css<any>`
  ${(props) => generateCss(props.silver)};
`;

const Gold = css<any>`
  ${(props) => generateCss(props.gold)};
`;

const Platinum = css<any>`
  ${(props) => generateCss(props.platinum)};
`;

const Diamond = css<any>`
  ${(props) => generateCss(props.diamond)};
`;

export interface ISSpacer {
  bronze?: any;
  silver?: any;
  gold?: any;
  platinum?: any;
  diamond?: any;
}

const SSpacer = styled.div<ISSpacer>`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
` as React.FC<ISSpacer>;
export { SSpacer };
export default SSpacer;
