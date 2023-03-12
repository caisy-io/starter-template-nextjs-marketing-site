import { gql } from "@apollo/client";

export const f_button = gql`
  fragment CompButton on CompButton {
    __typename
    id
    title
    style
    link(locale: $locale) {
      ... on Page {
        slug
      }
    }
  }
`;
