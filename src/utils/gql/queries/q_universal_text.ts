import { gql } from "@apollo/client";
import { f_asset } from "./fragments/f_asset";
import { f_button } from "./fragments/f_button";
import { f_button_external_links } from "./fragments/f_link";
export const q_universal_text = gql`
  ${f_button}
  ${f_button_external_links}
  ${f_asset}

  query q_universal_text($locale: String!) {
    UniversalText(locale: $locale) {
      customHtml
      customHtmlBody
      copyright
      filter_divested
      filter_current
      filter_all
      pageNotFoundBackgroundImage(locale: $locale) {
        ...Asset
      }
      pageNotFoundDescription {
        json
      }
      pageNotFoundButton(locale: $locale) {
        ...CompButton
        ...CompButtonExternalLinks
      }
      secondaryColor
      primaryColor
    }
  }
`;
