import React, { Component } from 'react';
import { connect } from 'dva';
import {
  Row, Col,
} from 'antd';
import { Link } from 'dva/router';


import styles from './Aboutus.less'

@connect(({ home }) => ({
  home,
}))
export default class Aboutus extends Component {

  render () {
    return (
      <div className={styles.content}>
        <Row className={styles.content1}>
          <Col span={24}>
            <div className={styles.txt}><span>OUR FARM</span></div>
          </Col>
        </Row>
        <Row className={styles.content2}>
          <Col span={14}>
            <div>
              <img src="/images/Aboutus_small1.jpg" alt="" />
            </div>
          </Col>
          <Col span={6}>
            <div className={styles.content2_title}>THE COW:</div>
            <div className={styles.content2_txt}>
              With the privilege of
              enjoying six acres of
              grassland each cow
              according to New Zealand
              regulations, the world’s
              happiest cows live happily
              on the fairy
              land,producing unique
              milk in pleasant mood.
            </div>
          </Col>
        </Row>
        <Row className={styles.content3}>
          <Col span={4} offset={4}>
            <div className={styles.title}><span>About us</span></div>
            <div className={styles.normal}>
              <span>
              We are a consumer ready
                Infant Formula
                Manufacturer which is
                located in Auckland.
                In 2014, we formed a joint
                venture with Aspen
                Holdings, a top global
                pharmaceutical and
                nutritional company based
                in South Africa to
                manufacture S26 infant
                formulas for Australian
                market.
              </span>
            </div>
          </Col>
        </Row>
        <Row className={styles.content4}>
          <Col span={8} offset={2}>
            <div className={styles.content2_txt && styles.content4_left}>
              The milk originated from here has been processed and exported
              to more than 140 countries and regions around the world.
              New Pure Milk’s raw milk is exactly based here.
            </div>
          </Col>
          <Col span={12}>
            <div>
              <img src="/images/aboutus_small2.jpg" alt="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={styles.content5}>
              <div className={styles.contactme}><Link to="/contactus"><span>CONTACT US</span></Link></div>
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}