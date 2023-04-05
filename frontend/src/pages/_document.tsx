import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <link rel={'shortcut icon'} href={'/favicon.png'} />
          <link rel={'apple-touch-icon'} sizes={'32x32'} href={'/favicon-32x32.png'} />
          <link rel={'icon'} sizes={'32x32'} href={'/favicon-32x32.png'} />
          <link rel={'icon'} sizes={'16x16'} href={'/favicon-16x16.png'} />
        </Head>
        <body>
        <Main />
        <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
