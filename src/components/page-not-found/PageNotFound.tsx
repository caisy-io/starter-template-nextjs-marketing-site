import React from "react";
import { useUniversalText } from "../../provider/universalText";
import { Arrow } from "../../constants/svgs/Arrow";
import { IGenCompButtonExternalLinks } from "../../utils/types_gen";
import { CompHeroSliderSlide } from "../comp-hero-slider/comp-hero-slider-slide/CompHeroSliderSlide";
import { SCompImageWithTextButton } from "../comp-image-with-text/styles/SCompImageWithTextButton";
import { SCompImageWithTextButtonContent } from "../comp-image-with-text/styles/SCompImageWithTextButtonContent";
import { SCompTextBlockButtonWrapper } from "../comp-text-block/styles/SCompTextBlockButtonWrapper";
import { SPageNotFound } from "./styles/SPageNotFound";

export const PageNotFound: React.FC<{ homePageSlug?: string }> = ({
  ...props
}) => {
  const universalText: any = useUniversalText();
  const buttons = universalText?.pageNotFoundButton;
  const pageNotFoundDescription = universalText?.pageNotFoundDescription;

  return (
    <SPageNotFound>
      <CompHeroSliderSlide
        headline={"404"}
        text={pageNotFoundDescription}
        backgroundImage={[universalText?.pageNotFoundBackgroundImage]}
        active={true}
      >
        <SCompTextBlockButtonWrapper>
          {Array.isArray(buttons) &&
            buttons?.map((button, index) => {
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
      </CompHeroSliderSlide>
      {props.children}
    </SPageNotFound>
  );
};
