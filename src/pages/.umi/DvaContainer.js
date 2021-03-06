import { Component } from 'react';
import dva from 'dva';
import createLoading from 'dva-loading';

const app = dva({
  history: window.g_history,
});
window.g_app = app;
app.use(createLoading());
app.use(require('../../plugins/onError.js').default);
app.model({ ...(require('C:/Users/Administrator/Desktop/cp/umi-master/examples/with-dva/src/models/global.js').default) });
app.model({ ...(require('C:/Users/Administrator/Desktop/cp/umi-master/examples/with-dva/src/pages/index/model.js').default) });
app.model({ ...(require('C:/Users/Administrator/Desktop/cp/umi-master/examples/with-dva/src/pages/list/models/a.js').default) });
app.model({ ...(require('C:/Users/Administrator/Desktop/cp/umi-master/examples/with-dva/src/pages/list/models/b.js').default) });

class DvaContainer extends Component {
  render() {
    app.router(() => this.props.children);
    return app.start()();
  }
}

export default DvaContainer;
