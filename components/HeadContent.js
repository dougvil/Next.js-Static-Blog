import Head from 'next/head'
import Link from 'next/link'

export default (props) => {
    const pageTitle = props.pageTitle ? props.pageTitle : "Home" ;
    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>{pageTitle} - Dicas de TV</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css"/>
            <link rel="stylesheet" href="/static/css/styles.css"/>
        </Head>
    )
}