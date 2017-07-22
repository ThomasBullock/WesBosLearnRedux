import { createStore, compose, applyMiddleware } from 'redux';
import { routerReducer, routerMiddleware } from 'react-router-redux';
//import { browserHistory } from 'react-router';
import createHistory from 'history/createBrowserHistory';
import rootReducer from './reducers/index';
import comments from './data/comments';
import posts from './data/posts';

// create an object for the default data
const defaultState = {
	posts: posts,
	comments: comments
}

const enhancers = compose(
	window.devToolsExtension ? window.devToolsExtension() : f => f
);

// const store = createStore(rootReducer, defaultState, enhancers);
// export const history = syncHistoryWithStore(browserHistory, store);

export const history = createHistory();
const middleware = routerMiddleware(history);

const store = createStore(
  rootReducer,  // combined reducer created in ./reducers/index
  defaultState,
  enhancers,
  applyMiddleware(middleware)
)

if(module.hot) {
	module.hot.accept('./reducers/', () => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store;
