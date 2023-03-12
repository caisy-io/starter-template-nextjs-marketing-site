import React from "react";
import { Img } from "../../base-components/img/Img";
import { IGenCompGridBrandCard } from "../../utils/types_gen";
import { SCompGridBrandCard } from "./styles/SCompGridBrandCard";
import { SCompGridBrandCardContent } from "./styles/SCompGridBrandCardContent";
import { SCompGridBrandCardName } from "./styles/SCompGridBrandCardName";
import { SCompGridBrandCardDescription } from "./styles/SCompGridBrandCardDescription";
import { SCompGridBrandCardImg } from "./styles/SCompGridBrandCardImg";

export const CompGridBrandCard: React.FC<IGenCompGridBrandCard> = ({
  logo,
  style,
  name,
  description,
  linksTo,
}) => {
  const BrandCardComponent: React.FC = () => {
    return (
      <SCompGridBrandCard
        linksTo={!!linksTo}
        withDescription={style === "withDescription"}
      >
        <SCompGridBrandCardImg
          withDescription={style === "withDescription"}
          linksTo={!!linksTo}
        >
          {logo?.src && (
            <Img
              src={logo.src}
              contain={true}
              resolution={{
                width: 250,
              }}
            />
          )}
        </SCompGridBrandCardImg>
        {style === "withDescription" && (
          <SCompGridBrandCardContent>
            {name && <SCompGridBrandCardName>{name}</SCompGridBrandCardName>}
            {description && (
              <SCompGridBrandCardDescription>
                {description}
              </SCompGridBrandCardDescription>
            )}
          </SCompGridBrandCardContent>
        )}
      </SCompGridBrandCard>
    );
  };

  return (
    <>
      {linksTo ? (
        <a href={"https://" + linksTo.replace("https://", "")} target="_blank">
          <BrandCardComponent />
        </a>
      ) : (
        <BrandCardComponent />
      )}
    </>
  );
};
