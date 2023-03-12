import styled, { css } from "styled-components";
import {
  MIN_DIAMOND,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_SILVER,
} from "../../../constants/styles/mediaquerys";

interface IFlexDefinition {
  wrap?: "wrap-reverse" | "wrap" | "nowrap";
  direction?: "row" | "column" | "row-reverse" | "column-reverse";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-even"
    | "stretch";
  alignContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-even"
    | "stretch";
  alignItems?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-even"
    | "stretch";
}

export interface IFlex extends IFlexDefinition {
  bronze?: IFlexDefinition;
  silver?: IFlexDefinition;
  gold?: IFlexDefinition;
  platinum?: IFlexDefinition;
  diamond?: IFlexDefinition;
}

const Bronze = css`
  display: flex;
  flex-wrap: ${(props: IFlex) => props.bronze?.wrap || props.wrap || "nowrap"};
  flex-direction: ${(props: IFlex) =>
    props.bronze?.direction || props.direction || "row"};
  align-items: ${(props: IFlex) =>
    props.bronze?.alignItems || props.alignItems || "center"};
  justify-content: ${(props: IFlex) =>
    props.bronze?.justify || props.justify || "flex-start"};
  align-content: ${(props: IFlex) =>
    props.bronze?.alignContent || props.alignContent || "stretch"};
`;

const Silver = css`
  ${(props: IFlex) =>
    props.silver?.wrap ? `flex-wrap: ${props.silver?.wrap}` : ""};
  ${(props: IFlex) =>
    props.silver?.direction
      ? `flex-direction: ${props.silver?.direction}`
      : ""};
  ${(props: IFlex) =>
    props.silver?.alignItems ? `align-items: ${props.silver?.alignItems}` : ""};
  ${(props: IFlex) =>
    props.silver?.justify ? `justify-content: ${props.silver?.justify}` : ""};
  ${(props: IFlex) =>
    props.silver?.alignContent
      ? `align-content: ${props.silver?.alignContent}`
      : ""};
`;

const Gold = css`
  ${(props: IFlex) =>
    props.gold?.wrap ? `flex-wrap: ${props.gold?.wrap}` : ""};
  ${(props: IFlex) =>
    props.gold?.direction ? `flex-direction: ${props.gold?.direction}` : ""};
  ${(props: IFlex) =>
    props.gold?.alignItems ? `align-items: ${props.gold?.alignItems}` : ""};
  ${(props: IFlex) =>
    props.gold?.justify ? `justify-content: ${props.gold?.justify}` : ""};
  ${(props: IFlex) =>
    props.gold?.alignContent
      ? `align-content: ${props.gold?.alignContent}`
      : ""};
`;

const Platinum = css`
  ${(props: IFlex) =>
    props.platinum?.wrap ? `flex-wrap: ${props.platinum?.wrap}` : ""};
  ${(props: IFlex) =>
    props.platinum?.direction
      ? `flex-direction: ${props.platinum?.direction}`
      : ""};
  ${(props: IFlex) =>
    props.platinum?.alignItems
      ? `align-items: ${props.platinum?.alignItems}`
      : ""};
  ${(props: IFlex) =>
    props.platinum?.justify
      ? `justify-content: ${props.platinum?.justify}`
      : ""};
  ${(props: IFlex) =>
    props.platinum?.alignContent
      ? `align-content: ${props.platinum?.alignContent}`
      : ""};
`;

const Diamond = css`
  ${(props: IFlex) =>
    props.diamond?.wrap ? `flex-wrap: ${props.diamond?.wrap}` : ""};
  ${(props: IFlex) =>
    props.diamond?.direction
      ? `flex-direction: ${props.diamond?.direction}`
      : ""};
  ${(props: IFlex) =>
    props.diamond?.alignItems
      ? `align-items: ${props.diamond?.alignItems}`
      : ""};
  ${(props: IFlex) =>
    props.diamond?.justify ? `justify-content: ${props.diamond?.justify}` : ""};
  ${(props: IFlex) =>
    props.diamond?.alignContent
      ? `align-content: ${props.diamond?.alignContent}`
      : ""};
`;

export const SFlex = styled.div`
  ${Bronze};
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
