import React from 'react';
import { Router as DefaultRouter, Route, Switch } from 'react-router-dom';
import dynamic from 'umi/dynamic';
import { routerRedux } from 'dva/router';



let Router = DefaultRouter;
const { ConnectedRouter } = routerRedux;
Router = ConnectedRouter;


export default function() {
  return (
<Router history={window.g_history}>
  <Switch>
    <Route exact path="/admin" component={require('../admin.js').default} />
    <Route exact path="/cards" component={require('../cards/page.js').default} />
    <Route exact path="/" component={require('../index/page.js').default} />
    <Route exact path="/list" component={() => React.createElement(require('C:/Users/Administrator/AppData/Roaming/npm/node_modules/umi/node_modules/.0.11.0@umi-build-dev/lib/Compiling.js').default, { route: '/list' })} />
    <Route exact path="/login" component={require('../login.js').default} />
    <Route exact path="/product" component={require('../product/page.js').default} />
    <Route exact path="/signIn" component={require('../signIn/page.js').default} />
  </Switch>
</Router>
  );
}
