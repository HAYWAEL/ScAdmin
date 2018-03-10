import { connect } from 'dva';
import router from 'umi/router';
import styles from './page.css';
import { Button } from 'antd-mobile';


function App(props) {
  

  return (
    <div className={styles.normal}>
      <h2>
        {props.text} @ {props.pathname}
      </h2>
      <div
        onClick={() => {
          router.goBack();
        }}
      >
        Back
      </div>
      
      <div>
        test: {props.a} | {props.b}
      </div>

      <Button
        onClick={() => {
          props.dispatch({
            type: 'products/fetch',
            payload: {},
          });
        }}
      >
        Set Title
      </Button>
    </div>
  );
}

export default connect(state => {
  return {
    pathname: state.routing.location.pathname,
    text: state.global.text,
    products: state.products,
    b: state.b,
  };
})(App);
