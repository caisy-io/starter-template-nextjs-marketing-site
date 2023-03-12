import { SVideo } from "./styles/SVideo";
import React, { useState, useEffect } from "react";
import { IGenVideo } from "../../utils/types_gen";

export const Video: React.FC<
  Omit<IGenVideo, "__typename"> & { inline?: boolean }
> = ({ vimeoVideoId, inline, ...props }) => {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <SVideo inline={inline}>
      {props.children}
      <div
        style={
          {
            transitionStyle: "opacity",
            transitionTimingFunction: "ease",
            transitionDuration: "0.3s",
            transitionDelay: "0.8s",
            opacity: mounted ? 1 : 0,
          } as any
        }
      >
        <iframe
          src={`https://player.vimeo.com/video/${vimeoVideoId}?background=1&autoplay=1&loop=1&byline=0&title=0&muted=1&sidedock=0&controls=0&portrait=0`}
          loading="lazy"
          frameBorder="0"
          allow="autoplay; picture-in-picture"
          allowFullScreen={false}
        ></iframe>
      </div>
    </SVideo>
  );
};
