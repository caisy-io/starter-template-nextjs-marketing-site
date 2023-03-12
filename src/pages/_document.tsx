import React from "react";
import { ServerStyleSheet } from "styled-components";
import Document, {
  DocumentContext,
  Head,
  Html,
  Main,
  NextScript,
} from "next/document";
import { renderCustomHtmlElements } from "../utils/helpers/renderCustomHtmlElements";

export default class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          {this.props?.__NEXT_DATA__?.props?.pageProps?.universalText
            ?.customHtmlBody &&
            renderCustomHtmlElements(
              this.props.__NEXT_DATA__.props.pageProps.universalText
                .customHtmlBody
            )}
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
