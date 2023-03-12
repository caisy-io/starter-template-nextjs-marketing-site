import { gql } from "@apollo/client";

export const f_video = gql`
  fragment Video on Video {
    __typename
    id
    vimeoVideoId
  }
`;
