import { connect } from 'dva';
import router from 'umi/router';
import Link from 'umi/link';
import styles from './page.less';
import { Layout, Menu, Breadcrumb, Icon, Button, Row, Col, Card, Checkbox, Alert, Form, Input } from 'antd';
const { Header, Content, Footer } = Layout;
const { Meta } = Card;
const FormItem = Form.Item;


function App(props) {
   


    return (
        <Layout className="layout">
            <section className={styles.Header}>
                <Header style={{ background: 'none' }} >

                    <div className={styles.logo}  ><img alt="logo" className={styles.logoPic} src={require('../../assets/CombinedShape.svg')} />
                        <span className={styles.title}>Card Premium</span> </div>
                    {/* <div className={styles.fr}> */}

                    <Menu
                        theme="dark"
                        mode="horizontal"
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                        className={styles.fr}
                    >
                        <Menu.Item key="3"><Link to="/admin"><Icon type="shopping-cart" />购物车</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/admin"><Icon type="message" />消息</Link></Menu.Item>
                        <Menu.Item key="1"><Link to="/admin"><Icon type="user" />会员</Link></Menu.Item>
                    </Menu>
                </Header>
            </section>
            <Card>
            <Form  className="login-form">
                <FormItem>
                    <Input prefix={<Icon type="user" style={{ color: 'rgba(0,0,0,.25)' }} />} placeholder="Username" />

                </FormItem>
                <FormItem>

                    <Input prefix={<Icon type="lock" style={{ color: 'rgba(0,0,0,.25)' }} />} type="password" placeholder="Password" />

                </FormItem>
                <FormItem>

                    <Checkbox>Remember me</Checkbox>

                    <a className="login-form-forgot" href="">Forgot password</a>
                    <Button type="primary" htmlType="submit" className="login-form-button">
                        Log in
          </Button>
                    Or <a href="">register now!</a>
                </FormItem>
            </Form>
            </Card>


            <Footer style={{ textAlign: 'center', background: '#fff' }}>
                Card Premium ©2018 Created by MUGE
    </Footer>
        </Layout>
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
