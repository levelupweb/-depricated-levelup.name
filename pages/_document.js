import Document, { Head, Main, NextScript } from 'next/document';
import flush from 'styled-jsx/server';
import isNode from '../utils/isnode';
import config from '../app.config.js';

class MyDocument extends Document {
  static getInitialProps ({ renderPage }) {
    const { html, head, errorHtml, chunks } = renderPage()
    const styles = flush()
    return { html, head, errorHtml, chunks, styles }
  }
  render () {
    return (
     <html>
       <Head>
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