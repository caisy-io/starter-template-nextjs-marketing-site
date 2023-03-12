import React from "react";
import { GridItem } from "../../base-components/grid-item/GridItem";
import { GridPadding } from "../../base-components/grid-padding/GridPadding";
import { Grid } from "../../base-components/grid/Grid";
import { Img } from "../../base-components/img/Img";
import useImageMedia from "../../hooks/useImageMedia";
import { IGenAsset } from "../../utils/types_gen";
import { SCompAsset } from "./styles/SCompAsset";

export const CompAsset: React.FC<IGenAsset> = ({
  src,
  dominantColor,
  ...props
}) => {
  const media = useImageMedia();

  return (
    <GridPadding>
      <Grid>
        <GridItem bronze={{ start: 1, end: 4 }} silver={{ start: 2, end: 11 }}>
          <SCompAsset dominantColor={dominantColor}>
            {src && <Img src={src} resolution={{ width: media, height: 0 }} />}
            {props.children}
          </SCompAsset>
        </GridItem>
      </Grid>
    </GridPadding>
  );
};
