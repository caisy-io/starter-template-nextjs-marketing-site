import React from "react";
import { Img } from "../../base-components/img/Img";
import { BREAKPOINTS } from "../../constants/styles/mediaquerys";
import useImageMedia from "../../hooks/useImageMedia";
import {
  IGenAsset,
  IGenCompSectionHeader,
  // IGenVideo,
} from "../../utils/types_gen";
// import { Video } from "../video/Video";
import { SCompSectionHeader } from "./styles/SCompSectionHeader";
import { SCompSectionHeaderImage } from "./styles/SCompSectionHeaderImage";
import { SCompSectionHeaderText } from "./styles/SCompSectionHeaderText";

export const CompSectionHeader: React.FC<IGenCompSectionHeader> = ({
  title,
  image,
}) => {
  const media = useImageMedia();

  const _image = image.find(
    (image) => image?.__typename === "Asset"
  ) as IGenAsset;

  // const _video = image.find(
  //   (image) => image?.__typename === "Video"
  // ) as IGenVideo;

  return (
    <SCompSectionHeader>
      <SCompSectionHeaderImage dominantColor={_image?.dominantColor}>
        {/* {_video ? (
          <Video id={_video.id} vimeoVideoId={_video.vimeoVideoId}></Video>
        ) : ( */}
        <>
          {_image && (
            <Img
              src={_image?.src}
              resolution={{
                width: media,
                height: ~~(media * (media >= BREAKPOINTS.SILVER ? 0.3 : 1)),
              }}
            />
          )}
        </>
        {/* )} */}
      </SCompSectionHeaderImage>
      <SCompSectionHeaderText>{title ?? ""}</SCompSectionHeaderText>
    </SCompSectionHeader>
  );
};
