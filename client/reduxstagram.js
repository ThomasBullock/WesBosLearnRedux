import React from 'react';
import { render } from 'react-dom';
import { Route } from 'react-router-dom';
import { ConnectedRouter } from 'react-router-redux';
import { Provider } from 'react-redux';
import store, { history } from './store';
import App from './components/App';
//import Single from './components/Single';
//import PhotoGrid from './components/PhotoGrid';

import css from './styles/style.styl';

// const router = (
//   <Provider store={store}>
//     <Router history={history}>
//       <Route path='/' component={App}>
//         <IndexRoute component={PhotoGrid}></IndexRoute>
//         <Route path='/view/:postId' component={Single}></Route>
//       </Route>
//     </Router>
//   </Provider>
// )

import Raven from 'raven-js';
import { sentry_url } from './data/config';

Raven.config(sentry_url).install();


const router = (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Route path='/' component={App} />
    </ConnectedRouter>
  </Provider>
)

render(router, document.getElementById('root'));