import Link from "next/link";
import React from "react";
import {
  IGenCompButton,
  IGenFooter_LegalSection,
  IGenMainNavigation,
  IGenPage,
} from "../../../utils/types_gen";
import { SHeaderGlobalStyle } from "../styles/SHeaderGlobalStyle";
import { SHeaderMenu } from "./styles/SHeaderMenu";
import { SHeaderMenuImprint } from "./styles/SHeaderMenuImprint";
import { SHeaderMenuImprintElement } from "./styles/SHeaderMenuImprintElement";
import { SHeaderMenuMainNavigation } from "./styles/SHeaderMenuMainNavigation";
import { SHeaderMenuNavigationElement } from "./styles/SHeaderMenuNavigationElement";
interface IHeaderMenu {
  isOpen: boolean;
  navigation: IGenMainNavigation;
  setIsOpen: (x: boolean) => void;
  legalSection: IGenFooter_LegalSection[];
}

export const HeaderMenu: React.FC<IHeaderMenu & { homePageSlug?: string }> = ({
  navigation,
  legalSection,
  isOpen,
  homePageSlug,
  setIsOpen,
}) => {
  return (
    <SHeaderMenu isOpen={isOpen}>
      <div>
        <SHeaderMenuMainNavigation>
          {navigation?.mainNavigation?.map(
            (element, navigationIndex) =>
              element?.id && (
                <React.Fragment key={element.id}>
                  <Link
                    href={
                      (element as IGenPage)?.slug === homePageSlug
                        ? "/"
                        : "/" + (element as IGenPage)?.slug
                    }
                  >
                    <SHeaderMenuNavigationElement
                      isOpen={isOpen}
                      animationIndex={navigationIndex + 1}
                      totalAnimationItems={
                        (navigation?.mainNavigation?.length || 0) + 1
                      }
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      {element.__typename === "Page" && element.internalTitle}
                    </SHeaderMenuNavigationElement>
                  </Link>
                </React.Fragment>
              )
          )}
        </SHeaderMenuMainNavigation>

        <SHeaderMenuImprint
          isOpen={isOpen}
          animationIndex={(navigation?.mainNavigation?.length - 1 || 0) + 1}
          totalAnimationItems={(navigation?.mainNavigation?.length || 0) + 1}
        >
          {legalSection?.map(
            (legalSec: IGenCompButton) =>
              legalSec?.id && (
                <React.Fragment key={legalSec.id}>
                  <Link
                    href={`/${
                      (legalSec?.link?.[0]?.__typename === "Page" &&
                        (legalSec?.link?.[0]?.slug === homePageSlug
                          ? ""
                          : legalSec?.link?.[0]?.slug)) ??
                      ""
                    }`}
                  >
                    <SHeaderMenuImprintElement
                      onClick={() => {
                        setIsOpen(false);
                      }}
                    >
                      {legalSec.__typename === "CompButton" && legalSec.title}
                    </SHeaderMenuImprintElement>
                  </Link>
                </React.Fragment>
              )
          )}
        </SHeaderMenuImprint>
        {isOpen && <SHeaderGlobalStyle />}
      </div>
    </SHeaderMenu>
  );
};
