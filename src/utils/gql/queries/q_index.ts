import { gql } from "@apollo/client";
import { f_page } from "./fragments/f_page";

export const q_index = gql`
  ${f_page}
  query q_index($locale: String!) {
    MainNavigation(locale: $locale) {
      home(locale: $locale) {
        ...Page
      }
    }
  }
`;
