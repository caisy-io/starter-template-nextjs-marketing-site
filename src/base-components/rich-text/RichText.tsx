import { RichTextRenderer } from "@caisy/rich-text-react-renderer";

export const RichText = ({ content }) => {
  return (
    <>
      <RichTextRenderer node={{ type: "doc", content }} />
    </>
  );
};
