import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { GSBase } from "../constants/styles/global-style";
import { UniversalTextProvider } from "../provider/universalText";
import { IPage } from "../utils/types";
import { IGenAsset } from "../utils/types_gen";
import { renderCustomHtmlElements } from "../utils/helpers/renderCustomHtmlElements";
import { forceCheck } from "react-lazyload";

function hexToRgbA(hex, alpha) {
  let c;
  if (/^#([A-Fa-f0-9]{3}){1,2}$/.test(hex)) {
    c = hex.substring(1).split("");
    if (c.length == 3) {
      c = [c[0], c[0], c[1], c[1], c[2], c[2]];
    }
    c = "0x" + c.join("");
    return (
      "rgba(" +
      [(c >> 16) & 255, (c >> 8) & 255, c & 255].join(",") +
      "," +
      alpha +
      ")"
    );
  }
  return undefined;
}

export default function App({ Component, pageProps }) {
  const router = useRouter();
  React.useEffect(() => {
    // to fix Lazyload bug "you need to scroll to show images at the top of the page"
    typeof window != "undefined" && setTimeout(forceCheck, 0);
  }, [router.asPath]);

  React.useEffect(() => {
    if (typeof window != "undefined") {
      // to fix Lazyload bug "you need to scroll to show images at the top of the page"
      setTimeout(forceCheck, 1000);
    }
  }, []);
  const { Page: page } = pageProps as IPage;

  const meta = {
    title: page?.metaTitle,
    description: page?.metaDescription,
    author: page?.metaAuthor,
    keywords: page?.metaKeywords,
    metaImage: page?.featuredImage?.[0] as IGenAsset,
  };

  const primaryColor = pageProps.universalText?.primaryColor;
  const secondaryColor = pageProps.universalText?.secondaryColor;

  const primaryColor100 =
    primaryColor && hexToRgbA(primaryColor, "1")
      ? hexToRgbA(primaryColor, "1")
      : "rgba(29,0,84,1)";

  const primaryColor80 =
    primaryColor && hexToRgbA(primaryColor, "0.8")
      ? hexToRgbA(primaryColor, "0.8")
      : "rgba(29,0,84,0.800)";

  const secondayColor100 =
    secondaryColor && hexToRgbA(secondaryColor, "1")
      ? hexToRgbA(secondaryColor, "1")
      : "rgba(80,100,180,1)";

  const secondayColor80 =
    secondaryColor && hexToRgbA(secondaryColor, "0.8")
      ? hexToRgbA(secondaryColor, "0.8")
      : "rgba(80,100,180,0.800)";

  return (
    <>
      <Head>
        {pageProps?.universalText?.customHtml &&
          renderCustomHtmlElements(pageProps.universalText.customHtml)}
        <title>{meta.title || "Demo"}</title>
        {meta.title && <meta name={"title"} content={meta.title} />}
        {meta.description && (
          <meta name={"description"} content={meta.description} />
        )}
        {meta.author && <meta name={"author"} content={meta.author} />}
        {meta.keywords && <meta name={"keywords"} content={meta.keywords} />}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="*"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@600;700&family=Roboto:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <meta
          name="viewport"
          content="width=device-width,initial-scale=1.0,minimum-scale=1.0, maximum-scale = 1.0, user-scalable = no"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin={""}
        />

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />
        <meta property="og:type" content={"website"} />
        <meta property="twitter:card" content={"summary"} />
        <meta
          property="og:title"
          content={meta.title || "demo-project-42.vercel.app"}
        />
        <meta
          property="twitter:title"
          content={meta.title || "demo-project-42.vercel.app"}
        />
        <meta property="og:description" content={meta.description} />
        <meta property="twitter:description" content={meta.description} />
        <meta
          property="og:url"
          content={
            "https://demo-project-42.vercel.app/" +
            router.locale +
            router.asPath
          }
        />
        <meta
          property="twitter:url"
          content={
            "https://demo-project-42.vercel.app/" +
            router.locale +
            router.asPath
          }
        />
        {meta.metaImage && meta.metaImage.src && (
          <meta
            property="og:image"
            content={meta.metaImage.src + "?w=1200&h=627"}
          />
        )}
        {meta.metaImage && meta.metaImage.src && (
          <meta
            property="twitter:image"
            content={meta.metaImage.src + "?w=1200&h=627"}
          />
        )}
        <meta
          property="og:image:alt"
          content={meta.metaImage ? meta.metaImage.title : "Demo projectimage"}
        />
        <meta
          property="twitter:image:alt"
          content={meta.metaImage ? meta.metaImage.title : "Demo project image"}
        />
        <meta
          property="og:locale"
          content={`${router.locale.toLowerCase()}_${router.locale.toUpperCase()}`}
        />
        {router &&
          router.locales?.map((l) => {
            if (l === router.locale) {
              return null;
            }
            return (
              <meta
                key={`${l.toLowerCase()}_${l.toUpperCase()}`}
                property="og:locale:alternate"
                content={`${l.toLowerCase()}_${l.toUpperCase()}`}
              />
            );
          })}
      </Head>
      <GSBase
        primaryColor100={primaryColor100}
        primaryColor80={primaryColor80}
        secondayColor100={secondayColor100}
        secondayColor80={secondayColor80}
      />
      <UniversalTextProvider universalText={pageProps.universalText}>
        <Component {...pageProps} />
      </UniversalTextProvider>
    </>
  );
}
