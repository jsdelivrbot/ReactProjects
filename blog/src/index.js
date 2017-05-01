import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import promise from 'redux-promise';

import PostsIndex from './components/post-index';
import PostNew from './components/post-new';
import PostShow from './components/post-show';
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
  <BrowserRouter>
      <div>
          <Switch>
              <Route path="/post/new" component={PostNew}/>
              <Route path="/posts/:id" component={PostShow}/>
              <Route path="/" component={PostsIndex}/>
          </Switch>
      </div>
  </BrowserRouter>
  </Provider>
  , document.querySelector('.container'));
