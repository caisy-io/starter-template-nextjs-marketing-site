import { ApolloQueryResult } from "@apollo/client";
import React from "react";
import { Footer } from "../components/footer/Footer";
import { Header } from "../components/header/Header";
import { PageNotFound } from "../components/page-not-found/PageNotFound";
import { Page } from "../components/page/Page";
import { client } from "../utils/gql/client";
import { q_footer } from "../utils/gql/queries/q_footer";
import { q_mega_menu } from "../utils/gql/queries/q_mega_menu";
import { q_page } from "../utils/gql/queries/q_page";
import { q_slugs } from "../utils/gql/queries/q_slugs";
import { q_universal_text } from "../utils/gql/queries/q_universal_text";
import { IPage } from "../utils/types";
import { IGenPage, IGenQuery } from "../utils/types_gen";
type ISlugPage = Pick<IPage, "navigation" | "footer" | "Page"> & {
  isIndexPage: boolean | null;
};

const NextjsPage = (props: ISlugPage) => {
  const is404 =
    !props.Page ||
    (!props.isIndexPage &&
      props?.Page?.slug === (props?.navigation?.home?.[0] as IGenPage)?.slug);

  const getFirstCompHeight = () => {
    switch (props?.Page?.components?.[0]?.__typename) {
      case "CompHeroSlider":
        return { bronze: 1, silver: 1 };
      case "CompPageHeader":
        return { bronze: 0.3, silver: 0.3 };
      default:
        return { bronze: 0.3, silver: 0.3 };
    }
  };

  const homePageSlug = (props?.navigation?.home?.[0] as IGenPage)?.slug;

  return (
    <>
      {props.navigation && (
        <Header
          homePageSlug={homePageSlug}
          firstCompoentHeight={getFirstCompHeight()}
          legalSection={props?.footer?.legalSection}
          {...props.navigation}
        />
      )}
      {props.Page && !is404 && (
        <Page homePageSlug={homePageSlug} {...props.Page} />
      )}
      {is404 && <PageNotFound homePageSlug={homePageSlug} />}
      {props.footer && (
        <Footer
          {...({
            is404,
            homePageSlug,
            ...props.footer,
            ...props.navigation,
          } as any)}
        />
      )}
    </>
  );
};
export const getStaticProps = async ({ params, locale = "en" }) => {
  if (!params) {
    return {
      revalidate: 1,
      props: {},
    };
  }

  const navQuery = client.query({
    query: q_mega_menu,
    variables: { locale },
    fetchPolicy: "no-cache",
  });

  let slug = params.slug;
  if (params.isIndexPage) {
    const navRes = await navQuery;
    slug = navRes?.data?.MainNavigation?.home?.[0]?.slug;
  }

  // console.log(` slug`, slug, locale);

  const [resPage, resNav, resFooter, resUniversalText]: [
    ApolloQueryResult<Pick<IGenQuery, "allPage">>,
    ApolloQueryResult<Pick<IGenQuery, "MainNavigation">>,
    ApolloQueryResult<Pick<IGenQuery, "Footer">>,
    ApolloQueryResult<Pick<IGenQuery, "UniversalText">>
  ] = await Promise.all([
    client.query({
      query: q_page,
      variables: { slug, locale },
      fetchPolicy: "no-cache",
    }),
    navQuery,
    client.query({
      query: q_footer,
      variables: { locale },
      fetchPolicy: "no-cache",
    }),
    client.query({
      query: q_universal_text,
      variables: { locale },
      fetchPolicy: "no-cache",
    }),
  ]);

  if (
    !params?.isIndexPage &&
    (resNav?.data?.MainNavigation?.home?.[0] as IGenPage)?.slug == params.slug
  ) {
    return {
      redirect: {
        destination: "/",
      },
    };
  }

  return {
    revalidate: 1,
    props: {
      isIndexPage: params?.isIndexPage || null,
      navigation: resNav?.data?.MainNavigation || null,
      footer: resFooter?.data?.Footer || null,
      universalText: resUniversalText?.data?.UniversalText || null,
      Page: resPage?.data?.allPage?.edges?.[0]?.node || null,
    },
  };
};

export const getStaticPaths = async ({ locales }) => {
  const allSlugs: any[] = [];
  const allPagePrmoises: any[] = [];
  const allNavPromises: any[] = [];
  locales?.map((locale) => {
    allPagePrmoises.push(
      client.query({
        query: q_slugs,
        variables: { locale },
        fetchPolicy: "no-cache",
      })
    );
    allNavPromises.push(
      client.query({
        query: q_mega_menu,
        variables: { locale },
        fetchPolicy: "no-cache",
      })
    );
  });

  const homePageSlugs = (await Promise.all(allNavPromises))?.map(
    (navRes) => navRes?.data?.MainNavigation?.home?.[0]?.slug
  );

  const results = await Promise.all(allPagePrmoises);

  results.map((resSlugs: { data: Pick<IGenQuery, "allPage"> }) => {
    const slugs: any[] = [];
    resSlugs?.data?.allPage?.edges?.map(
      (e) => e?.node?.slug && slugs.push(e?.node?.slug)
    );

    slugs.map((s) => {
      if (!allSlugs.includes(s) && !homePageSlugs.includes(s)) {
        allSlugs.push(s);
      }
    });
  });

  const uniqueCaseInsensitive = (value, index, self) =>
    self.findIndex((item) => value.toLowerCase() === item.toLowerCase()) ===
    index;

  const paths = allSlugs
    .filter(uniqueCaseInsensitive)
    .map((s) => ({ params: { slug: s } }));

  return {
    fallback: true,
    paths,
  };
};

export default NextjsPage;
