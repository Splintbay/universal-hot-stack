import React, { Component, PropTypes } from 'react';

export default class Html extends Component {
  static propTypes = {
    component: PropTypes.object
  }

  render() {
    const {component} = this.props;
    const title = "Universal Hot Stack";
    return (
      <html lang="en-ud">
        <head>
           <meta charSet="utf-8"/>
           <title>{title}</title>

           <link rel="shortcut icon" href="/favicon.ico" />
           <script src="http://localhost:3001/dist/bundle.js"></script>
        </head>
        <body>
           <div id="content" dangerouslySetInnerHTML={{__html: React.renderToString(component)}}/>
        </body>
      </html>
    )
  }
}
