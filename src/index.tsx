// @ts-nocheck
// TODO - type

if (process.env.NODE_ENV !== 'production') {
  require('preact/debug');
}

import { setup } from 'goober';
import { createElement } from 'react';
import { createRoot } from 'react-dom/client';
import { Provider } from 'react-redux';

import { App } from 'containers/App';
import { GlobalStyles } from 'global-styles';
import { store } from 'reduxConfig';
import { Router } from 'utils/Router';

setup(createElement);

const root = createRoot(document.getElementById('app')!);

root.render(
  <Provider store={store}>
    <Router>
      <GlobalStyles />
      <App />
    </Router>
  </Provider>,
);
