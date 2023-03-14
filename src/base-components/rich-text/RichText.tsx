import { RichTextRenderer } from "@caisy/rich-text-react-renderer";

export const RichText = ({ content }) => {
  if (!content) {
    return null;
  }

  return (
    <>
      <RichTextRenderer node={{ type: "doc", content }} />
    </>
  );
};
