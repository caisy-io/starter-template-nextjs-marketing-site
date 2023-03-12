export { default } from "./[slug]";
import { getStaticProps as getStaticPropsSlug } from "./[slug]";

export const getStaticProps = async ({ params, locale = "en" }) => {
  return getStaticPropsSlug({
    params: {
      ...params,
      isIndexPage: true,
    },
    locale,
  });
};
