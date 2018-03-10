import { connect } from 'dva';
import router from 'umi/router';
import Link from 'umi/link';
import styles from './page.less';
import { Layout, Menu, Breadcrumb, Icon, Button, Row, Col, Card } from 'antd';
const { Header, Content, Footer } = Layout;
const { Meta } = Card;


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
                        // defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                        className={styles.fr}
                    >
                    <Menu.Item key="3"><Link to="/admin"><Icon type="shopping-cart" />购物车</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/admin"><Icon type="message" />消息</Link></Menu.Item>
                        <Menu.Item key="1"><Link to="/signIn"><Icon type="user" />会员</Link></Menu.Item>  
                    </Menu>
                </Header>
                <img  src={require('../../assets/Group3@2x.png')} style={{ width: '100%' }}/>
            </section>
            <Row style={{ background: '#fff', padding: 24 }}>
                <Col span={6} offset={4} className={styles.listTitle}>特惠卡券</Col>
                <Col span={6} offset={7}><div className={styles.cardButton}>出售卡券</div></Col>
            </Row>
            <Row style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <Col span={2} offset={4} ><Card
                    hoverable
                    style={{ width: 255, padding: "80px 80px 0 80px" }}
                    cover={<img alt="example" src={require('../../assets/taxi@2x.png')} />}
                >
                    <Meta
                        title="Europe Street beat"
                        description="www.instagram.com"
                    />
                </Card></Col>
                <Col span={2} offset={2}><Card
                    hoverable
                    style={{ width: 255, padding: "80px 80px 0 80px" }}
                    cover={<img alt="example" src={require('../../assets/taxi@2x.png')} />}
                >
                    <Meta
                        title="Europe Street beat"
                        description="www.instagram.com"
                    />
                </Card></Col>
                <Col span={2} offset={2}><Card
                    hoverable
                    style={{ width: 255, padding: "80px 80px 0 80px" }}
                    cover={<img alt="example" src={require('../../assets/taxi@2x.png')} />}
                >
                    <Meta
                        title="滴滴快车券 10元"
                        description="www.instagram.com"
                    />
                </Card></Col>
                <Col span={2} offset={2}><Card
                    hoverable
                    style={{ width: 255, margin: "0 auto", textAlign: "center" }}
                    cover={<img alt="example" src={require('../../assets/taxi@2x.png')} style={{ width: "80px", margin: "80px auto 0 auto" }} />}
                >
                    <h3>星巴克大杯 36元</h3>
                    <p>库存 0</p>
                    <p>¥32</p>
                </Card></Col>
            </Row>
            

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
