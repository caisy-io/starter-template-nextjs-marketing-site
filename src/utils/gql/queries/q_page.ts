import { gql } from "@apollo/client";
import { f_page } from "./fragments/f_page";

export const q_page = gql`
  ${f_page}
  query q_page($locale: String!, $slug: String) {
    allPage(locale: $locale, where: { slug: { eq: $slug } }) {
      totalCount
      edges {
        node {
          ...Page
        }
      }
    }
  }
`;
