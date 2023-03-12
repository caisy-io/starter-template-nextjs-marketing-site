import React from "react";
import { SText } from "./styles/SText";
import { RichText } from "../../base-components/rich-text/RichText";

interface IText {
  json: any;
}

export const Text: React.FC<IText> = ({ ...props }) => {
  if (!props.json?.content) {
    return null;
  }

  return (
    <SText>
      <RichText content={props.json.content} />
    </SText>
  );
};
