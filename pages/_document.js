import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <html>
            <Head>
                <link rel="shortcut icon" href="/static/img/favicon.ico"/>
                <style>{`body { margin: 0 } /* custom! */`}</style>
            </Head>
            <body className="custom_class">
            <Main />
            <NextScript />
            </body>
            </html>
        )
    }
}