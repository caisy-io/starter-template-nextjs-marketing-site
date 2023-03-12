import { client } from "../utils/gql/client";
import { q_slugs } from "../utils/gql/queries/q_slugs";
import { getStaticPaths } from "./[slug]";

const Sitemap = () => {
  return null;
};

export const getServerSideProps = async ({ res }) => {
  const locales = ["en", "de", "fr", "es", "nl", "ru"];
  const _qres = client.query({
    query: q_slugs,
    variables: { locale: "en" },
    fetchPolicy: "no-cache",
  });

  const { paths } = await getStaticPaths({ locales });
  const allPagesSlugs = (await _qres)?.data?.allPage?.edges;

  const baseUrl =
    `${process.env.NEXT_PUBLIC_BASE_URL}` ||
    "https://demo-project-47.vercel.app";
  const allSlugs = [
    "",
    ...paths.map((slug) => slug?.params?.slug).filter((s) => !!s),
  ];

  const slugToPrio = (slug: string) => {
    if (slug == "") {
      return "1";
    }

    const xfound = allPagesSlugs?.find((e) => e?.node?.slug === slug);
    if (xfound && xfound.node.sitemapPriority) {
      const n = parseInt(
        xfound.node.sitemapPriority.toString().replace(`Priority`, "")
      );
      if (!isNaN(n)) {
        return "" + n / 100;
      }
    }
    return "0.6";
  };

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
    xmlns:xhtml="http://www.w3.org/1999/xhtml">
        ${allSlugs
          .sort((a, b) => {
            const numberA = parseFloat(slugToPrio(a));
            const numberB = parseFloat(slugToPrio(b));
            return numberA > numberB ? -1 : 1;
          })
          .map((slug) => {
            return `
            <url>
              <loc>${baseUrl}/${slug}</loc>
              ${locales
                .map(
                  (loc) => `
                <xhtml:link
               rel="alternate"
               hreflang="${loc}"
               href="${baseUrl}/${loc}/${slug}"/>
              `
                )
                .join("")}
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>${slugToPrio(slug)}</priority>
            </url>
          `;
          })
          .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.setHeader("Cache-Control", `max-age=${60 * 60 * 1}`); // 1 hour cache
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};

export default Sitemap;
