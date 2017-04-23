import Document, { Head, Main, NextScript } from 'next/document'
import flush from 'styled-jsx/server'
import isNode from '../utils/isnode'
import jquery from 'jquery'



export default class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head } = renderPage()
    const styles = flush()
    return { html, head, styles }
  }

  render () {
    return (
     <html>
       <Head>
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&amp;subset=cyrillic" rel="stylesheet" />
          <link rel="stylesheet" href="static/css/fa/css/font-awesome.min.css" />


          <link rel="stylesheet" href="static/css/ui/semantic.css" />
          <link rel="stylesheet" href="static/css/ui/components/dropdown.min.css" />


          <link rel="stylesheet" href="static/css/global.css" />
          <link rel="stylesheet" href="static/css/normalize.css" />
       </Head>
       <body>
         {this.props.customValue}
         <Main />
         <NextScript />

       </body>
     </html>
    )
  }
}



