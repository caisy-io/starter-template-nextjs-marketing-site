import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { CloseLeft } from "../../../constants/svgs/CloseLeft";
import { CloseRight } from "../../../constants/svgs/CloseRight";
import { Rectangle } from "../../../constants/svgs/Rectangle";
import { desiredLanguagesOrder } from "../../../utils/helpers/desiredLanguagesOrder";
import { IGenMainNavigation } from "../../../utils/types_gen";
import { SPageHeader } from "./styles/SPageHeader";
import { SPageHeaderApp } from "./styles/SPageHeaderApp";
import { SPageHeaderClose } from "./styles/SPageHeaderClose";
import { SPageHeaderLinkElement } from "./styles/SPageHeaderLinkElement";
import { SPageHeaderLinks } from "./styles/SPageHeaderLinks";
import { SPageHeaderLinksContainer } from "./styles/SPageHeaderLinksContainer";
import { SPageHeaderLocal } from "./styles/SPageHeaderLocal";
import { SPageHeaderLocals } from "./styles/SPageHeaderLocals";
import { SPageHeaderLogo } from "./styles/SPageHeaderLogo";
import { SPageHeaderLogoContainer } from "./styles/SPageHeaderLogoContainer";
import { SPageHeaderWrapper } from "./styles/SPageHeaderWrapper";

interface IPageHeader {
  navigation?: IGenMainNavigation;
  isOpen: boolean;
  firstCompoentHeight: { bronze: number; silver: number };
  setIsOpen: (isOpen: boolean) => void;
}

export const PageHeader: React.FC<IPageHeader & { homePageSlug?: string }> = ({
  navigation,
  setIsOpen,
  homePageSlug,
  firstCompoentHeight,
  isOpen,
}) => {
  const { locales, asPath, locale } = useRouter();
  const [whiteMode, setWhiteMode] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setWhiteMode(false);
    } else {
      if (
        (document.documentElement.scrollTop + 100) / window.innerHeight >
        (window.innerWidth > 768
          ? firstCompoentHeight?.silver
          : firstCompoentHeight?.bronze)
      ) {
        setWhiteMode(true);
      } else {
        setWhiteMode(false);
      }
    }
  }, [isOpen]);

  useEffect(() => {
    const runOnScroll = () => {
      if (
        (document.documentElement.scrollTop + 100) / window.innerHeight >
        (window.innerWidth > 768
          ? firstCompoentHeight?.silver
          : firstCompoentHeight?.bronze)
      ) {
        setWhiteMode(true);
      } else {
        setWhiteMode(false);
      }
    };
    window.addEventListener("scroll", runOnScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", runOnScroll);
    };
  }, [whiteMode, setWhiteMode, asPath, locale]);

  return (
    <SPageHeader whiteMode={whiteMode}>
      <SPageHeaderLogo whiteMode={whiteMode}>
        {navigation?.logo?.src && navigation?.logoDarkVersion?.src && (
          <Link href={"/"}>
            <a>
              <img src={navigation.logo.src} alt={"Logo"} />
              <img src={navigation?.logoDarkVersion?.src} alt={"Logo"} />
            </a>
          </Link>
        )}
      </SPageHeaderLogo>
      <SPageHeaderLinks whiteMode={whiteMode}>
        <SPageHeaderWrapper>
          <SPageHeaderLogoContainer
            onClick={() => {
              setIsOpen(!isOpen);
            }}
          >
            {isOpen ? (
              <SPageHeaderClose>
                <CloseLeft />
                <CloseRight />
              </SPageHeaderClose>
            ) : (
              <SPageHeaderApp>
                <Rectangle />
                <Rectangle />
              </SPageHeaderApp>
            )}
          </SPageHeaderLogoContainer>
          <SPageHeaderLocals isOpen={isOpen}>
            {desiredLanguagesOrder(locales).map((l) => (
              <React.Fragment key={`locale-${l}`}>
                <Link href={asPath} locale={l} passHref>
                  <SPageHeaderLocal whiteMode={whiteMode} active={l === locale}>
                    {l}
                  </SPageHeaderLocal>
                </Link>
              </React.Fragment>
            ))}
          </SPageHeaderLocals>
        </SPageHeaderWrapper>
        <SPageHeaderLinksContainer whiteMode={whiteMode}>
          {navigation?.mainNavigation?.map(
            (link) =>
              link?.id && (
                <React.Fragment key={link.id}>
                  <SPageHeaderLinkElement whiteMode={whiteMode}>
                    <Link
                      href={
                        link.__typename === "Page" &&
                        (link?.slug === homePageSlug
                          ? "/"
                          : `/${link?.slug ?? "#noslugincaisy"}`)
                      }
                    >
                      <a>
                        {(link.__typename === "Page" && link?.internalTitle) ??
                          ""}
                      </a>
                    </Link>
                  </SPageHeaderLinkElement>
                </React.Fragment>
              )
          )}
          <SPageHeaderLocals isOpen={true}>
            {desiredLanguagesOrder(locales).map((l) => (
              <React.Fragment key={`locale-${l}`}>
                <Link href={asPath} locale={l} passHref>
                  <SPageHeaderLocal whiteMode={whiteMode} active={l === locale}>
                    {l}
                  </SPageHeaderLocal>
                </Link>
              </React.Fragment>
            ))}
          </SPageHeaderLocals>
        </SPageHeaderLinksContainer>
      </SPageHeaderLinks>
    </SPageHeader>
  );
};
