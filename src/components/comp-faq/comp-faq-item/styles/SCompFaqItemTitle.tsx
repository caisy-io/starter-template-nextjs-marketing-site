import styled, { css } from "styled-components";
import {
  MIN_SILVER,
  MIN_GOLD,
  MIN_PLATINUM,
  MIN_DIAMOND,
} from "../../../../constants/styles/mediaquerys";

const Bronze = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  font-family: Open Sans;
  font-weight: 600;
  font-size: 16px;
  line-height: 140%;
  letter-spacing: 0.005em;
  color: var(--colorPrimary100);
  padding: 24px 0;
  border-bottom: 1px solid rgba(29, 0, 84, 0.15);

  svg {
    width: 24px;
    height: 24px;
    flex: 0 0 24px;
    margin-left: 62px;
  }
`;

const Silver = css`
  font-size: 26px;
`;

const Gold = css``;

const Platinum = css``;

const Diamond = css``;

export const SCompFaqItemTitle = styled.div`
  ${Bronze}
  ${MIN_SILVER`${Silver}`};
  ${MIN_GOLD`${Gold}`};
  ${MIN_PLATINUM`${Platinum}`};
  ${MIN_DIAMOND`${Diamond}`};
`;
