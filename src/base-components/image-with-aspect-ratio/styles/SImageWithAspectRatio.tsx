import styled, { css } from "styled-components";
import {
  MIN_DIAMOND,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_SILVER,
} from "../../../constants/styles/mediaquerys";

interface IProps {
  children?: any;
  theme?: any;
  ratioCalcBronze?: number;
  ratioCalcSilver?: number;
  ratioCalcGold?: number;
  ratioCalcPlatinum?: number;
  ratioCalcDiamond?: number;
}

const cover = css`
  object-fit: cover;
`;

const _contain = css`
  object-fit: contain;
`;

const Bronze = css<any>`
  padding-top: ${(props: IProps) => props.ratioCalcBronze || 100}%;
  position: relative;
  width: 100%;
  > div {
    bottom: 0;
    display: flex;
    flex-direction: column;
    height: 100%;
    left: 0;
    position: absolute;
    right: 0;
    top: 0;
    img {
      height: 100%;
      ${({ contain, noFit }: any) => {
        return !noFit ? (contain ? _contain : cover) : "";
      }};
      width: 100%;
    }
  }
`;

const Silver = css`
  padding-top: ${(props: IProps) => props.ratioCalcSilver || 100}%;
`;

const Gold = css`
  padding-top: ${(props: IProps) => props.ratioCalcGold || 100}%;
`;

const Platinum = css`
  padding-top: ${(props: IProps) => props.ratioCalcPlatinum || 100}%;
`;

const Diamond = css`
  padding-top: ${(props: IProps) => props.ratioCalcDiamond || 100}%;
`;

export const SImageWithAspectRatio = styled.div<any>`
  ${Bronze};
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
