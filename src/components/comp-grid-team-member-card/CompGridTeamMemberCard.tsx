import React from "react";
import ImageWithAspectRatio from "../../base-components/image-with-aspect-ratio/ImageWithAspectRatio";
import { BREAKPOINTS } from "../../constants/styles/mediaquerys";
import useImageMedia from "../../hooks/useImageMedia";
import { Linkedin } from "../../constants/svgs/Linkedin";
import { IGenCompGridTeamMemberCard } from "../../utils/types_gen";
import { SCompGridTeamMemberCard } from "./styles/SCompGridTeamMemberCard";
import { SCompGridTeamMemberCardImage } from "./styles/SCompGridTeamMemberCardImage";
import { SCompGridTeamMemberCardLinkedin } from "./styles/SCompGridTeamMemberCardLinkedin";
import { SCompGridTeamMemberCardName } from "./styles/SCompGridTeamMemberCardName";
import { SCompGridTeamMemberCardText } from "./styles/SCompGridTeamMemberCardText";
import { SCompGridTeamMemberCardTitle } from "./styles/SCompGridTeamMemberCardTitle";
import { SCompGridTeamMemberCardWrapper } from "./styles/SCompGridTeamMemberCardWrapper";

export const CompGridTeamMemberCard: React.FC<IGenCompGridTeamMemberCard> = ({
  image,
  jobTitle,
  name,
  linkToLinkedInProfile,
}) => {
  const media = useImageMedia();

  return (
    <SCompGridTeamMemberCard>
      {image?.src && (
        <SCompGridTeamMemberCardImage>
          <ImageWithAspectRatio
            src={image.src}
            bronze={{ ratio: 1.06 }}
            gold={{ ratio: 1.159 }}
            resolution={{
              width: media,
              height: ~~(
                media * (media >= BREAKPOINTS.PLATINUM ? 1.06 : 1.156)
              ),
            }}
          />
        </SCompGridTeamMemberCardImage>
      )}
      <SCompGridTeamMemberCardWrapper>
        <SCompGridTeamMemberCardText>
          <SCompGridTeamMemberCardName>{name}</SCompGridTeamMemberCardName>
          <SCompGridTeamMemberCardTitle>
            {jobTitle}
          </SCompGridTeamMemberCardTitle>
        </SCompGridTeamMemberCardText>

        {linkToLinkedInProfile && (
          <SCompGridTeamMemberCardLinkedin>
            <a href={linkToLinkedInProfile} target="_blank">
              <Linkedin />
            </a>
          </SCompGridTeamMemberCardLinkedin>
        )}
      </SCompGridTeamMemberCardWrapper>
    </SCompGridTeamMemberCard>
  );
};
