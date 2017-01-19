const ReactDOMServer = require('react-dom/server');

import React from 'react';

/**
 *
 * @param Component
 * @param {object} props
 * @returns {*}
 */
exports.render = (Component, props) => {
  return ReactDOMServer.renderToString(<Component {...props}/>);
};