import Link from "next/link";
import React from "react";
import { GridItem } from "../../base-components/grid-item/GridItem";
import { SGridPadding } from "../../base-components/grid-padding/styles/SGridPadding";
import { SGrid } from "../../base-components/grid/styles/SGrid";
import ImageWithAspectRatio from "../../base-components/image-with-aspect-ratio/ImageWithAspectRatio";
import { Arrow } from "../../constants/svgs/Arrow";
import {
  IGenCompButtonExternalLinks,
  IGenCompImageWithText,
} from "../../utils/types_gen";
import { Text } from "../text/Text";
import { SCompImageWithText } from "./styles/SCompImageWithText";
import { SCompImageWithTextButton } from "./styles/SCompImageWithTextButton";
import { SCompImageWithTextButtonContent } from "./styles/SCompImageWithTextButtonContent";
import { SCompImageWithTextButtonWrapper } from "./styles/SCompImageWithTextButtonWrapper";
import { SCompImageWithTextComponentWrapper } from "./styles/SCompImageWithTextComponentWrapper";
import { SCompImageWithTextHeadline } from "./styles/SCompImageWithTextHeadline";
import { SCompImageWithTextImageSide } from "./styles/SCompImageWithTextImageSide";
import { SCompImageWithTextText } from "./styles/SCompImageWithTextText";
import { SCompImageWithTextTextSide } from "./styles/SCompImageWithTextTextSide";
import { SCompImageWithTextTitle } from "./styles/SCompImageWithTextTitle";

export const CompImageWithText: React.FC<IGenCompImageWithText> = ({
  imageRightInsteadOfLeft,
  text,
  buttons,
  strap,
  headline,
  asset,
}) => {
  return (
    <SCompImageWithText>
      <SGridPadding>
        <SGrid>
          <GridItem
            bronze={{ start: 1, end: 4 }}
            silver={{ start: 1, end: 12 }}
            gold={{ start: 2, end: 11 }}
          >
            <SCompImageWithTextComponentWrapper
              imageRightInsteadOfLeft={!!imageRightInsteadOfLeft}
            >
              <SCompImageWithTextImageSide>
                {asset?.[0]?.__typename === "Asset" && asset[0].src && (
                  <ImageWithAspectRatio
                    src={asset[0]?.__typename === "Asset" && asset[0].src}
                    resolution={{ width: 500, height: 800 }}
                    bronze={{ ratio: 0.812 }}
                    gold={{ ratio: 1.53 }}
                  />
                )}
              </SCompImageWithTextImageSide>

              <SCompImageWithTextTextSide
                imageRightInsteadOfLeft={!!imageRightInsteadOfLeft}
              >
                <SCompImageWithTextTitle>
                  {strap && strap}
                </SCompImageWithTextTitle>

                <SCompImageWithTextHeadline>
                  {headline && headline}
                </SCompImageWithTextHeadline>

                <SCompImageWithTextText>
                  <Text json={text?.json} />
                </SCompImageWithTextText>

                <SCompImageWithTextButtonWrapper>
                  {buttons.map((button, index) => {
                    const buttonStyle: string = (button as any)?.style;
                    return (
                      <SCompImageWithTextButton
                        buttonStyle={buttonStyle}
                        key={"button" + index + button.id}
                      >
                        {button && (
                          <>
                            {button?.__typename === "CompButton" ? (
                              <Link
                                href={`/${
                                  (button?.__typename === "CompButton" &&
                                    button.link[0]?.__typename === "Page" &&
                                    button?.link?.[0]?.slug) ??
                                  ""
                                }`}
                              >
                                <SCompImageWithTextButtonContent>
                                  {`${button.title}`}
                                  <Arrow />
                                </SCompImageWithTextButtonContent>
                              </Link>
                            ) : (
                              <a
                                href={
                                  "https://" +
                                  `${
                                    (button as IGenCompButtonExternalLinks)?.url
                                  }`.replace("https://", "")
                                }
                                target="_blank"
                              >
                                <SCompImageWithTextButtonContent>
                                  {`${
                                    (button as IGenCompButtonExternalLinks)
                                      ?.title
                                  }`}
                                  <Arrow />
                                </SCompImageWithTextButtonContent>
                              </a>
                            )}
                          </>
                        )}
                      </SCompImageWithTextButton>
                    );
                  })}
                </SCompImageWithTextButtonWrapper>
              </SCompImageWithTextTextSide>
            </SCompImageWithTextComponentWrapper>
          </GridItem>
        </SGrid>
      </SGridPadding>
    </SCompImageWithText>
  );
};
