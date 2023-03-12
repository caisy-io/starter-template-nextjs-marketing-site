import React from "react";
import { GridItem } from "../../base-components/grid-item/GridItem";
import { GridPadding } from "../../base-components/grid-padding/GridPadding";
import { Grid } from "../../base-components/grid/Grid";
import { IGenVideo } from "../../utils/types_gen";
import { Video } from "../video/Video";
import { SCompVideo } from "./styles/SCompVideo";

export const CompVideo: React.FC<IGenVideo> = ({
  vimeoVideoId,
  id,
  ...props
}) => {
  if (!vimeoVideoId) {
    return null;
  }

  return (
    <GridPadding>
      <Grid>
        <GridItem bronze={{ start: 1, end: 4 }} silver={{ start: 1, end: 12 }}>
          <SCompVideo>
            <Video id={id} inline={true} vimeoVideoId={vimeoVideoId}></Video>
            {props.children}
          </SCompVideo>
        </GridItem>
      </Grid>
    </GridPadding>
  );
};
