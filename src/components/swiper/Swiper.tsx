import React from "react";
import SwiperCore from "swiper";
import {Swiper as SwiperComponent, SwiperSlide} from "swiper/react";
import {debounce} from "../../utils/helpers/debounce";

interface ISwiper extends SwiperComponent {
  slides: any[];
  plugins?: any[];
}

export const Swiper: React.FC<ISwiper> = ({
  children,
  slides,
  plugins = [],
  ...props
}) => {
  SwiperCore.use(plugins);
  
  const resizeUpdate = React.useCallback(debounce((swiper) => swiper.update(), 300), [])
  
  return (
    <SwiperComponent {...props} onResize={(swiper) => {
      props.onResize?.(swiper);
      resizeUpdate(swiper);
    }}>
      {children}
      {slides?.map?.((slide, index) => (
        <SwiperSlide key={index}>{slide}</SwiperSlide>
      ))}
    </SwiperComponent>
  );
};
