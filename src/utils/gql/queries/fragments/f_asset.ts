import { gql } from "@apollo/client";

export const f_asset = gql`
  fragment Asset on Asset {
    id
    author
    copyright
    dominantColor
    keywords
    originType
    originalName
    src
    description
    title
  }
`;
