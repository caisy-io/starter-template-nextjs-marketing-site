import React from "react";
import { SCompPageHeader } from "./styles/SCompPageHeader";
import { SCompPageHeaderBg } from "./styles/SCompPageHeaderBg";
import { SCompPageHeaderHeadline } from "./styles/SCompPageHeaderHeadline";
import ImageWithAspectRatio from "../../base-components/image-with-aspect-ratio/ImageWithAspectRatio";
import { BREAKPOINTS } from "../../constants/styles/mediaquerys";
import useImageMedia from "../../hooks/useImageMedia";
import {
  IGenAsset,
  IGenCompPageHeader,
  IGenVideo,
} from "../../utils/types_gen";
import { GridItem } from "../../base-components/grid-item/GridItem";
import { GridPadding } from "../../base-components/grid-padding/GridPadding";
import { Grid } from "../../base-components/grid/Grid";
import { SCompPageHeaderHeadlineWrapper } from "./styles/SCompPageHeaderHeadlineWrapper";
import { Video } from "../video/Video";
import { SCompPageHeaderBackdropShadow } from "./styles/SCompPageHeaderBackdropShadow";

export const CompPageHeader: React.FC<IGenCompPageHeader> = ({
  backgroundImage,
  backgroundVideo,
  headline,
  id,
}) => {
  const media = useImageMedia();

  const _image = backgroundImage.find(
    (image) => image?.__typename === "Asset"
  ) as IGenAsset;

  const _video = backgroundVideo as IGenVideo;

  return (
    <SCompPageHeader id={id} isBackgroundImage={!!_image?.src}>
      <SCompPageHeaderBackdropShadow />
      {_video ? (
        <Video id={_video.id} vimeoVideoId={_video.vimeoVideoId}></Video>
      ) : (
        <>
          {_image?.src ? (
            <SCompPageHeaderBg>
              <ImageWithAspectRatio
                src={_image.src}
                bronze={{ ratio: 1.173 }}
                silver={{ ratio: 0.33 }}
                resolution={{
                  width: media,
                  height: ~~(
                    media * (media >= BREAKPOINTS.PLATINUM ? 0.33 : 1.173)
                  ),
                }}
                alt={_image.title}
              />
            </SCompPageHeaderBg>
          ) : null}
        </>
      )}
      {headline ? (
        <SCompPageHeaderHeadlineWrapper>
          <GridPadding>
            <Grid>
              <GridItem
                bronze={{ start: 1, end: 4 }}
                silver={{ start: 3, end: 8 }}
              >
                <SCompPageHeaderHeadline>{headline}</SCompPageHeaderHeadline>
              </GridItem>
            </Grid>
          </GridPadding>
        </SCompPageHeaderHeadlineWrapper>
      ) : null}
    </SCompPageHeader>
  );
};
