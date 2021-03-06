import React from 'react';
import {render} from 'react-dom';
import createHashHistory from 'history/lib/createHashHistory';
import {Router, useRouterHistory} from 'react-router';
import routes from './routes';
import './index.css';

// Fix onTouchTap issues
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

const history = useRouterHistory(createHashHistory)();

render(
  <Router history={history} routes={routes}/>,
  document.getElementById('app')
);
