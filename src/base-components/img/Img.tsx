import React, { useEffect, useRef, useState } from "react";
import LazyLoad from "react-lazyload";
// import {BREAKPOINTS} from "../../constants/styles/mediaquerys";
import { SImg } from "./styles/SImg";

type resolution = { width: number; height?: number };

// interface IResponsiveImageResolution {
//   bronze: resolution;
//   silver?: resolution;
//   gold?: resolution;
//   platinum?: resolution;
//   diamond?: resolution;
// }

export interface IImg {
  src: string /** link to file */;
  children?: any;
  alt?: string;
  cover?: boolean;
  contain?: boolean;
  placeholderHeight?:
    | string
    | number /** lazyload preloader height ==> default: 0 */;
  offset?: number /** offset lazyload trigger ==> default: 100 */;
  resolution: resolution;
  // | IResponsiveImageResolution /** set the quality/resolution of the image in px/width ==> default: 50 */;
  lazyload?: boolean /** should the image be lazyloaded on scroll? ==> default: true */;
  onLoad?: () => void /** trigger when image is loaded ==> default: null */;
}

const ImgInner: React.FC<IImg> = ({ src, alt, children, onLoad, ...props }) => {
  const imgRef = useRef();
  const [loaded, setLoaded] = useState(false);
  // const resolution= props.resolution || BREAKPOINTS.SILVER
  useEffect(() => {
    if (imgRef.current) {
      //@ts-ignore
      if (imgRef.current.complete) {
        setLoaded(true);
        onLoad && onLoad();
      } else {
        //@ts-ignore
        imgRef.current.onload = () => {
          setLoaded(true);
          onLoad && onLoad();
        };
      }
    }

    return () => {
      //@ts-ignore
      if (imgRef.current && imgRef.current.onload) {
        //@ts-ignore
        imgRef.current.onload = null;
      }
    };
  }, [src, props.resolution]);

  const _src =
    src && src.substring(src.length - ".svg".length, src.length) === ".svg"
      ? `${src}`.replace("https://caisy.io", "https://assets.caisy.io")
      : `${src}`.replace("https://caisy.io", "https://assets.caisy.io") +
        `${props?.resolution?.height ? `?w=${props.resolution.width}` : ""}${
          props?.resolution?.height ? `&h=${props.resolution.height}` : ""
        }`;

  return (
    <SImg loaded={loaded} {...props}>
      <img src={_src} alt={alt ?? ""} ref={imgRef} />
      {children}
    </SImg>
  );
};

export const Img = ({
  lazyload = true,
  cover = true,
  offset = 100,
  ...props
}: IImg) => {
  if (lazyload) {
    return (
      <LazyLoad
        height={
          props.placeholderHeight ? `${props.placeholderHeight}` : undefined
        }
        offset={offset}
        once={true}
      >
        <ImgInner {...props} cover={cover} />
      </LazyLoad>
    );
  }

  return <ImgInner {...props} cover={cover} />;
};
