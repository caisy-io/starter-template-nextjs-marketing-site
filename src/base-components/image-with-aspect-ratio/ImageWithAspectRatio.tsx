import React from "react";
import { IImg, Img } from "../img/Img";
import { SImageWithAspectRatio } from "./styles/SImageWithAspectRatio";

export interface IAspectDefinition {
  ratio?: number;
  width?: number;
  height?: number;
}

export interface IImageWithAspectRatioProps extends IImg {
  width?: number;
  src: any;
  alt?: string;
  height?: number;
  ratio?: number;
  bronze?: IAspectDefinition | number;
  silver?: IAspectDefinition | number;
  gold?: IAspectDefinition | number;
  platinum?: IAspectDefinition | number;
  diamond?: IAspectDefinition | number;
  contain?: boolean;
}

const ImageWithAspectRatio = (props: IImageWithAspectRatioProps) => {
  const {
    src,
    alt,
    height = 100,
    width = 100,
    ratio,
    bronze = {
      height,
      width,
      ratio,
    },
    silver = bronze,
    gold = silver,
    platinum = gold,
    diamond = platinum,
  } = props as any;

  const ratioCalcBronze = !isNaN(bronze)
    ? bronze
    : bronze.ratio || bronze.height / bronze.width;
  const ratioCalcSilver = !isNaN(silver)
    ? silver
    : silver.ratio || silver.height / silver.width;
  const ratioCalcGold = !isNaN(gold)
    ? gold
    : gold.ratio || gold.height / gold.width;
  const ratioCalcPlatinum = !isNaN(platinum)
    ? platinum
    : platinum.ratio || platinum.height / platinum.width;
  const ratioCalcDiamond = !isNaN(diamond)
    ? diamond
    : silver.ratio || diamond.height / diamond.width;
  return (
    <SImageWithAspectRatio
      ratioCalcBronze={ratioCalcBronze * 100}
      ratioCalcSilver={ratioCalcSilver * 100}
      ratioCalcGold={ratioCalcGold * 100}
      ratioCalcPlatinum={ratioCalcPlatinum * 100}
      ratioCalcDiamond={ratioCalcDiamond * 100}
      {...props}
    >
      <Img src={src} alt={alt} {...props} />
    </SImageWithAspectRatio>
  );
};

export default ImageWithAspectRatio;
