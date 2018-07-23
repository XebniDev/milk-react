import React, { Component } from 'react';
import { connect } from 'dva';
import { Col, Row } from 'antd';
import { Link } from 'dva/router';

import styles from './Products.less';

@connect(({home}) => ({
  home,
}))
export default class Ourfacility extends Component {

  render () {
    return (
      <div className={styles.content}>
        <Row className={styles.content1}>
          <Col span={24}>
            <div className={styles.txt}><span>OUR PRODUCTS</span></div>
          </Col>
        </Row>
        <Row className={styles.content2}>
          <Col span={14}>
            <div>
              <img src="/images/product_small2.jpg" alt="" />
            </div>
          </Col>
          <Col span={6}>
            <div className={styles.content2_title}>Breast feeding is the best</div>
            <div className={styles.content2_txt}>
              In the beautiful and clean South Island of New Zealand, there is a naturally rich
              grassland, which is the Canterbury plain. Located at the foot of the Southern Alps
            </div>
          </Col>
        </Row>
        <Row className={styles.content4}>
          <Col span={8} offset={2}>
            <div className={styles.content2_txt && styles.content4_left}>
              With high quality raw milk, advanced production technology and
              pharmaceutical-grade regulation in New Milk factory, as well
              as the New Zealand government’s strict regulations for dairy products,
              all these factors are combined to provide a safe, green and high protein milk powder,
              the New Pure Milk.
            </div>
          </Col>
          <Col span={12}>
            <div>
              <img src="/images/product_small3.jpg" alt="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={styles.content5}>
              <p className={styles.content5_text}>MORE PRODUCTS</p>
              <p className={styles.content5_text}>COMING SOON</p>
              <div className={styles.contactme}><Link to="/contactus"><span>CONTACT US</span></Link>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}