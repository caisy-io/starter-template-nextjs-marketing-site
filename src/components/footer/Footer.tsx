import React from "react";
import { SFooter } from "./styles/SFooter";
import { SFooterLogo } from "./styles/SFooterLogo";
import { SFooterMainNavigation } from "./styles/SFooterMainNavigation";
import { SFooterSectionLocales } from "./styles/SFooterSectionLocales";
import { SFooterSectionLocale } from "./styles/SFooterSectionLocale";
import { SFooterLegalSection } from "./styles/SFooterLegalSection";
import { SFooterCopyright } from "./styles/SFooterCopyright";
import { SFooterLeftSection } from "./styles/SFooterLeftSection";
import { SFooterRightSection } from "./styles/SFooterRightSection";
import { SFooterSections } from "./styles/SFooterSections";
import { SFooterLegalAndCopyright } from "./styles/SFooterLegalAndCopyright";
import { SGridPadding } from "../../base-components/grid-padding/styles/SGridPadding";
import { SFlex } from "../../base-components/flex/styles/SFlex";
import { desiredLanguagesOrder } from "../../utils/helpers/desiredLanguagesOrder";
import { useUniversalText } from "../../provider/universalText";
import { IGenFooter, IGenMainNavigation } from "../../utils/types_gen";
import Link from "next/link";
import { useRouter } from "next/router";

export const Footer: React.FC<
  Omit<IGenFooter, "__typename"> &
    Omit<IGenMainNavigation, "__typename"> & {
      homePageSlug?: string;
      is404?: boolean;
    }
> = ({ home, logo, is404, mainNavigation, homePageSlug, legalSection }) => {
  const { locales, asPath, locale } = useRouter();
  const universalText = useUniversalText();
  return (
    <SFooter is404={is404}>
      <SGridPadding>
        <SFlex bronze={{ direction: "column" }} silver={{ direction: "row" }}>
          <SFooterLeftSection>
            <SFooterLogo>
              {home?.[0]?.__typename === "Page" && logo?.src && (
                <Link href={`/`}>
                  <a>
                    <img src={logo.src} alt={logo.title} />
                  </a>
                </Link>
              )}
            </SFooterLogo>
            <SFooterCopyright>
              {`© ${new Date().getFullYear()} ${universalText?.copyright}`}
            </SFooterCopyright>
          </SFooterLeftSection>
          <SFooterRightSection>
            <SFooterSections>
              {mainNavigation && (
                <SFooterMainNavigation>
                  {mainNavigation.map(
                    (el) =>
                      el?.__typename === "Page" && (
                        <Link
                          href={`/${el?.slug == homePageSlug ? "" : el?.slug}`}
                          key={el?.id}
                        >
                          {el?.internalTitle}
                        </Link>
                      )
                  )}
                </SFooterMainNavigation>
              )}
            </SFooterSections>
            <SFooterLegalAndCopyright>
              <SFooterSectionLocales>
                {desiredLanguagesOrder(locales).map((l) => (
                  <React.Fragment key={`locale-${l}`}>
                    <Link href={asPath} locale={l} passHref>
                      <SFooterSectionLocale active={l === locale}>
                        {l}
                      </SFooterSectionLocale>
                    </Link>
                  </React.Fragment>
                ))}
              </SFooterSectionLocales>
              <SFooterLegalSection>
                {legalSection &&
                  legalSection.map((el) =>
                    el.__typename === "CompButton"
                      ? el.link?.[0] && (
                          <Link
                            href={`/${
                              el?.link?.[0]?.slug === homePageSlug
                                ? ""
                                : el?.link?.[0]?.slug
                            }`}
                            key={el?.id}
                          >
                            {el?.title}
                          </Link>
                        )
                      : null
                  )}
              </SFooterLegalSection>
            </SFooterLegalAndCopyright>
            <SFooterCopyright>
              {`© ${new Date().getFullYear()} ${universalText?.copyright}`}
            </SFooterCopyright>
          </SFooterRightSection>
        </SFlex>
      </SGridPadding>
    </SFooter>
  );
};
