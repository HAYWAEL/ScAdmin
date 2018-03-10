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
                        defaultSelectedKeys={['2']}
                        style={{ lineHeight: '64px' }}
                        className={styles.fr}
                    >
                    <Menu.Item key="3"><Link to="/admin"><Icon type="shopping-cart" />购物车</Link></Menu.Item>
                        <Menu.Item key="2"><Link to="/admin"><Icon type="message" />消息</Link></Menu.Item>
                        <Menu.Item key="1"><Link to="/admin"><Icon type="user" />会员</Link></Menu.Item>  
                    </Menu>
                </Header>
                <div class={styles.titleContent}>
                    <img src={require('../../assets/ScreenCopy@3x.png')} class={styles.leftBg} />
                    <div class={styles.ContentInfo}>
                        <img src={require('../../assets/Icon@3x.png')} width="80" height="80" class={styles.Icon} />
                        <div class={styles.topTitle}>
                            <p>卡券优享</p>
                            <p>APP</p>
                        </div>
                        <div class={styles.topText}>
                            <p>发现你身边的优质生活</p>
                            <p>用更少的钱，享受更优质的生活</p>
                            <p>服务与出行体验。</p>
                        </div>
                        <Button ghost size="large" style={{ marginRight: "20px" }}>即将上线</Button>
                        <Button size="large">登录</Button>
                    </div>

                </div>
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
            <div style={{ background: '#fff', padding: 24, textAlign: "center", color: "#2097FF" ,cursor: "pointer"}}><Link to="/cards">发现更多特惠卡券</Link></div>
            <Row style={{ background: '#fff', padding: 24 }}>
                <Col span={6} offset={4} className={styles.listTitle}>服务简介</Col>
            </Row>
            <Row style={{ background: '#fff', padding: 24, minHeight: 280 }}>
                <Col span={4} offset={4} ><Card  bordered={false} style={{ width: 300 }}>
                    <h2>生活服务</h2>
                    <p>出售包括出行、娱乐、美食、旅行等各个类别的优质卡券，让你在生活的点点滴滴中省钱。同时享受到更出色的服务品质。</p>
                    
                </Card></Col>
                <Col span={4} offset={2}><Card  bordered={false} style={{ width: 300 }}>
                    <h2>生活服务</h2>
                    <p>出售包括出行、娱乐、美食、旅行等各个类别的优质卡券，让你在生活的点点滴滴中省钱。同时享受到更出色的服务品质。</p>
                    
                </Card></Col>
                <Col span={4} offset={2}><Card  bordered={false} style={{ width: 300 }}>
                    <h2>生活服务</h2>
                    <p>出售包括出行、娱乐、美食、旅行等各个类别的优质卡券，让你在生活的点点滴滴中省钱。同时享受到更出色的服务品质。</p>
                    
                </Card></Col>

            </Row>
            <Row style={{ background: '#fff' }}>
                <Col span={6} offset={3} ><img className={styles.phoneItem} src={require('../../assets/ScreenCopy3@3x.png')} style={{ marginTop: "130px" }} /></Col>
                <Col span={6}  ><img className={styles.phoneItem} src={require('../../assets/Screen@3x.png')} /></Col>
                <Col span={6}  ><img className={styles.phoneItem} src={require('../../assets/ScreenCopy2@3x.png')} style={{ marginTop: "130px" }} /></Col></Row>
            <Row >
                <Col span={6} offset={3} ><img src={require('../../assets/dreamstime.png')} style={{ width: 507, height: 639 }} /></Col>
                <Col span={6} offset={3} ><div className={styles.personInfo}>
                    <p style={{ fontSize: "54px" }}>方晓</p>
                    <p style={{
                        fontSize: "22px",
                        color: "#666", margin: "16px 0 32px 0"
                    }}>电影艺术助导</p>
                    <p style={{
                        color: "#666",
                        fontSize: 18,
                        width: 270,
                        paddingBottom: 60
                    }}>“我平时购物出行基本都是用信用卡，存了很多积分用不了。用了卡券优享之后，我发现这些积分居然都可以直接变现。每个月能帮我省几百块钱的生活开支。”</p>
                </div></Col>
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
