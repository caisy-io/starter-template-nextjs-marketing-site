import React, { useState } from "react";
import {
  IGenFooter_LegalSection,
  IGenMainNavigation,
} from "../../utils/types_gen";
import { HeaderMenu } from "./header-menu/HeaderMenu";
import { PageHeader } from "./page-header/PageHeader";
import { SHeader } from "./styles/SHeader";

interface IHeader {
  legalSection: IGenFooter_LegalSection[];
  firstCompoentHeight: { bronze: number; silver: number };
}

export const Header: React.FC<
  IHeader & IGenMainNavigation & { homePageSlug?: string }
> = ({ firstCompoentHeight, homePageSlug, ...props }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <SHeader>
      <PageHeader
        homePageSlug={homePageSlug}
        firstCompoentHeight={firstCompoentHeight}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        navigation={{ ...props }}
      />
      <HeaderMenu
        homePageSlug={homePageSlug}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        legalSection={props.legalSection}
        navigation={{ ...props }}
      />
    </SHeader>
  );
};
