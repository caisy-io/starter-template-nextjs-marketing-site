import { gql } from "@apollo/client";
import { f_asset } from "./fragments/f_asset";

export const q_mega_menu = gql`
  ${f_asset}
  query q_mega_menu($locale: String!) {
    MainNavigation(locale: $locale) {
      logo(locale: $locale) {
        ...Asset
      }
      logoDarkVersion(locale: $locale) {
        ...Asset
      }
      title
      id
      home(locale: $locale) {
        ... on Page {
          __typename
          id
          slug
        }
      }
      mainNavigation(locale: $locale) {
        ... on Page {
          __typename
          id
          internalTitle
          slug
        }
      }
    }
  }
`;
