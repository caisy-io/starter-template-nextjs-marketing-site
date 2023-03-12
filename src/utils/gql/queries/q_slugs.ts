import { gql } from "@apollo/client";

export const q_slugs = gql`
  query q_slugs($locale: String!, $slug: String) {
    allPage(locale: $locale, where: { slug: { eq: $slug } }) {
      totalCount
      edges {
        node {
          slug
          # sitemapPriority
        }
      }
    }
  }
`;
