import { gql } from "@apollo/client";
import { f_asset } from "./f_asset";
import { f_button } from "./f_button";
import { f_button_external_links } from "./f_link";

export const f_component_grid_column = gql`
  ${f_asset}
  ${f_button}
  ${f_button_external_links}

  fragment ComponentGirdColumn on ComponentGirdColumn {
    __typename
    id
    selectVariant
    enableNewsletter
    newsletterBackground(locale: $locale) {
      ...Asset
    }

    linkPages(locale: $locale) {
      ... on ComponentTextBlock {
        __typename
        id
        text
        button(locale: $locale) {
          ...Button
          ...ButtonExternalLinks
        }
      }
      ... on ArticlePage {
        __typename
        _meta {
          publishedAt
        }
        id
        slug
        createdAt
        headline
        teaserText
        headerImage(locale: $locale) {
          ...Asset
        }
        category(locale: $locale) {
          title
        }
      }
    }
  }
`;
