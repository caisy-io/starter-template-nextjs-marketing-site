import React, { Fragment, useEffect, useRef, useState } from "react";
import {
  IGenCompHeroSlider,
  IGenCompHeroSliderSlide,
} from "../../utils/types_gen";
import { CompHeroSliderSlide } from "./comp-hero-slider-slide/CompHeroSliderSlide";
import { CompHeroSliderScrollDownButton } from "./CompHeroSliderScrollDownButton";
import { SCompHeroSlider } from "./styles/SCompHeroSlider";
import { SCompHeroSliderPageIndicatorContainer } from "./styles/SCompHeroSliderPageIndicatorContainer";
import { SCompHeroSliderPageIndicatorLine } from "./styles/SCompHeroSliderPageIndicatorLine";
import { SCompHeroSliderPageIndicatorLineProgress } from "./styles/SCompHeroSliderPageIndicatorLineProgress";
import { SCompHeroSliderPageIndicatorTitle } from "./styles/SCompHeroSliderPageIndicatorTitle";

export const CompHeroSlider: React.FC<IGenCompHeroSlider> = ({ slides }) => {
  const [activeSlideManual, setActiveSlideManual] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [transitionFromSlide, setTtransitionFromSlide] = useState<
    number | undefined
  >(undefined);

  const intervalRef = useRef<any>();
  const refActiveSlide = useRef<number>();
  const timePerSlide = 5000;

  useEffect(() => {
    if (slides && slides.length > 1) {
      intervalRef.current = setInterval(() => {
        if (slides && slides.length > 1) {
          setTtransitionFromSlide(refActiveSlide.current || 0);
          setActiveSlide((value: number) => {
            return slides.length - 1 == value ? 0 : value + 1;
          });
          refActiveSlide.current =
            slides.length - 1 == refActiveSlide.current
              ? 0
              : refActiveSlide.current + 1;
        }
      }, timePerSlide);
    }
    return () => {
      intervalRef.current && clearInterval(intervalRef.current);
    };
    // if we trigger a new slide by click we reset the interval
  }, [activeSlideManual]);

  return (
    <SCompHeroSlider>
      {slides &&
        slides.map((slide: IGenCompHeroSliderSlide, index) => {
          return (
            <Fragment key={slide.id}>
              <CompHeroSliderSlide
                {...slide}
                transitionFrom={
                  transitionFromSlide === undefined
                    ? undefined
                    : index === transitionFromSlide
                }
                active={index === activeSlide}
              />
              <SCompHeroSliderPageIndicatorContainer
                index={index}
                active={index === activeSlide}
                onClick={() => {
                  if (slides && slides.length > 1) {
                    setTtransitionFromSlide(activeSlide);
                    setActiveSlide(index);
                    setActiveSlideManual(index);
                    refActiveSlide.current = index;
                  }
                }}
              >
                <SCompHeroSliderPageIndicatorTitle
                  transitionFrom={index === transitionFromSlide}
                  active={index === activeSlide}
                >
                  {slide.headline}
                </SCompHeroSliderPageIndicatorTitle>
                <SCompHeroSliderPageIndicatorLine>
                  <SCompHeroSliderPageIndicatorLineProgress
                    active={index === activeSlide}
                    timePerSlide={timePerSlide}
                  ></SCompHeroSliderPageIndicatorLineProgress>
                </SCompHeroSliderPageIndicatorLine>
              </SCompHeroSliderPageIndicatorContainer>
            </Fragment>
          );
        })}
      <CompHeroSliderScrollDownButton
        onClick={() => {
          if (typeof window !== "undefined") {
            window.scrollTo({
              top: window.innerHeight,
              left: 0,
              behavior: "smooth",
            });
          }
        }}
      ></CompHeroSliderScrollDownButton>
    </SCompHeroSlider>
  );
};
