import React, { Fragment } from "react";
import { IGenPage } from "../../utils/types_gen";
import { CompFaq } from "../comp-faq/CompFaq";
import { CompHeroSlider } from "../comp-hero-slider/CompHeroSlider";
import { CompImageWithText } from "../comp-image-with-text/CompImageWithText";
import { CompPageHeader } from "../comp-page-header/CompPageHeader";
import { CompSectionHeader } from "../comp-section-header/CompSectionHeader";
import { CompTextBlock } from "../comp-text-block/CompTextBlock";
import { CompGrid } from "../comp-grid/CompGrid";
import { SPage } from "./styles/SPage";
import { CompAsset } from "../comp-asset/CompAsset";
import { CompFacts } from "../comp-facts/CompFacts";
import { CompVideo } from "../comp-video/CompVideo";

export const Page: React.FC<IGenPage & { homePageSlug?: string }> = ({
  components,
  ...props
}) => {
  return (
    <SPage>
      {components &&
        components.map((component: any, index) => {
          switch (true) {
            case component?.__typename === "CompFaq":
              return (
                <Fragment key={`pc-${index}`}>
                  <CompFaq {...component} />
                </Fragment>
              );
            case component?.__typename === "CompImageWithText":
              return (
                <Fragment key={`pc-${index}`}>
                  <CompImageWithText {...component} />
                </Fragment>
              );
            case component?.__typename === "CompHeroSlider":
              return (
                <Fragment key={`pc-${index}`}>
                  <CompHeroSlider {...component} />
                </Fragment>
              );
            case component?.__typename === "CompPageHeader":
              return (
                <Fragment key={`pc-${index}`}>
                  <CompPageHeader {...component} />
                </Fragment>
              );
            case component?.__typename === "CompTextBlock":
              return (
                <Fragment key={`pc-${index}`}>
                  <CompTextBlock {...component} />
                </Fragment>
              );
            case component?.__typename === "CompSectionHeader":
              return (
                <Fragment key={`pc-${index}`}>
                  <CompSectionHeader {...component} />
                </Fragment>
              );
            case component?.__typename === "CompGrid":
              return (
                <Fragment key={`pc-${index}`}>
                  <CompGrid {...component} />
                </Fragment>
              );
            case component?.__typename === "CompFacts":
              return (
                <Fragment key={`pc-${index}`}>
                  <CompFacts {...component} />
                </Fragment>
              );
            case component?.__typename === "Video":
              return (
                <Fragment key={`pc-${index}`}>
                  <CompVideo {...component} />
                </Fragment>
              );
            case component?.__typename === "Asset":
              return (
                <Fragment key={`pc-${index}`}>
                  <CompAsset {...component} />
                </Fragment>
              );
            default:
              return null;
          }
        })}
      {props.children}
    </SPage>
  );
};
