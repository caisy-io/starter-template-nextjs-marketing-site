import React from "react";
import { SCompTextBlock } from "./styles/SCompTextBlock";
import { RichText } from "../../base-components/rich-text/RichText";
import {
  IGenCompButtonExternalLinks,
  IGenCompTextBlock,
} from "../../utils/types_gen";
import { GridPadding } from "../../base-components/grid-padding/GridPadding";
import { GridItem } from "../../base-components/grid-item/GridItem";
import { Grid } from "../../base-components/grid/Grid";
import { Arrow } from "../../constants/svgs/Arrow";
import { SCompImageWithTextButton } from "../comp-image-with-text/styles/SCompImageWithTextButton";
import { SCompImageWithTextButtonContent } from "../comp-image-with-text/styles/SCompImageWithTextButtonContent";
import { SCompTextBlockButtonWrapper } from "./styles/SCompTextBlockButtonWrapper";

export const CompTextBlock: React.FC<IGenCompTextBlock> = ({
  buttons,
  text,
}) => {
  return (
    <GridPadding>
      <Grid>
        <GridItem bronze={{ start: 1, end: 4 }} silver={{ start: 3, end: 8 }}>
          <SCompTextBlock>
            {text?.json ? <RichText content={text.json} /> : null}
          </SCompTextBlock>
          <SCompTextBlockButtonWrapper>
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
                        <a
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
                        </a>
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
                              (button as IGenCompButtonExternalLinks)?.title
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
          </SCompTextBlockButtonWrapper>
        </GridItem>
      </Grid>
    </GridPadding>
  );
};
