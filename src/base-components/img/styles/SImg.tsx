import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../constants/styles/mediaquerys";

const loaded = css`
  opacity: 1;
`;

const _cover = css`
  object-fit: cover;
`;

const _contain = css`
  object-fit: contain;
`;

const Bronze = css`
  height: 100%;
  opacity: 0;
  transition: opacity 0.8s ease;
  img {
    height: 100%;
    ${({ cover, contain }: ISImg) => (!contain && cover ? _cover : "")};
    ${({ contain }: ISImg) => (contain ? _contain : "")};
    width: 100%;
  }
`;

const Silver = css``;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;
interface ISImg {
  loaded?: boolean;
  cover?: boolean;
  contain?: boolean;
}

export const SImg = styled.div`
  ${Bronze};
  ${(props: ISImg) => (props.loaded ? loaded : "")}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
