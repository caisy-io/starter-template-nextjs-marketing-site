import parse from "html-react-parser";

export const renderCustomHtmlElements = (html) => {
  try {
    return parse(html);
  } catch {
    return null;
  }
};
