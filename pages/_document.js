import Document, { Head, Main, NextScript } from 'next/document';
import flushDefault from 'styled-jsx/server';
import isNode from '../utils/isnode';
import config from '../app.config.js';
import { flush } from 'next-style-loader/applyStyles';

class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flushDefault()
    const scopedCSS = flush()
    return { html, head, errorHtml, chunks, styles, scopedCSS }
  }
  render () {
    return (
     <html>
       <Head>
          {this.props.scopedCSS.tag}
          <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600,700&amp;subset=cyrillic" rel="stylesheet" />
          <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"/>
          <link rel="stylesheet" href={config.static + "/css/ui/semantic.css"} />
          <link rel="stylesheet" href={config.static + "/frontend/global.css"} />
          <link rel="stylesheet" href={config.static + "/frontend/loader.css"} />
          <link rel="stylesheet" href={config.static + "/libs/quill/quill.snow.css"} />
          <link rel="stylesheet" href={config.static + "/css/ui/datepicker.css"} />
          <link rel="stylesheet" href={config.static + "/css/ui/input-range.css"} />
          <link rel="stylesheet" href={config.static + "/css/ui/autocorrect.css"} />
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

export default MyDocument;