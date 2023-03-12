import { gql } from "@apollo/client";

export const f_button_external_links = gql`
  fragment CompButtonExternalLinks on CompButtonExternalLinks {
    __typename
    id
    title
    style
    url
  }
`;
