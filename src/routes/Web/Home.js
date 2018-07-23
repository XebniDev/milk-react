import React, { Component } from 'react';
import { connect } from 'dva';
import {
  Row, Col,
} from 'antd';
import { Link } from 'dva/router';


import styles from './Home.less'

@connect(({ home }) => ({
  home,
}))
export default class Home extends Component {

  render() {
    return (
      <div className={styles.content}>
        <Row className={styles.content1}>
          <Col span={24}>
            <div className={styles.txt}><span>GREEN FOOD</span></div>
          </Col>
        </Row>
        <Row className={styles.content2}>
          <Col span={14}>
            <div>
              <img src="/images/home_small1.png" alt="" height={750} width={880} />
            </div>
          </Col>
          <Col span={6}>
            <div className={styles.content2_title}>Green Food Introduction:</div>
            <div className={styles.content2_txt}>
              In the beautiful and clean South
              Island of New Zealand, there is
              a naturally rich grassland, which
              is the Canterbury plain. Located
              at the foot of the Southern Alps,
              the Canterbury plain is nourished
              by Rangitata River, which is
              converged by pure thawing water
              flowing quietly from Alps’
              melting glaciers.
            </div>
          </Col>
        </Row>
        <Row className={styles.content3}>
          <Col span={8} className={styles.content3_img1}>
            <div className={styles.content3_img1_text}>
              <span>
                <Link to="/Aboutus">OUR FARM</Link>
              </span>
            </div>
          </Col>
          <Col span={8} className={styles.content3_img2}>
            <div className={styles.content3_img1_text}>
              <span>
                <Link to="/Ourfacility">OUR FACILITY</Link>
              </span>
            </div>
          </Col>
          <Col span={8} className={styles.content3_img3}>
            <div className={styles.content3_img1_text}>
              <span>
                <Link to="/Products">OUR PRODUCTS</Link>
              </span>
            </div>
          </Col>
        </Row>
        <Row className={styles.content4}>
          <Col span={8} offset={2}>
            <div className={styles.content2_txt && styles.content4_left}>
              On this fertile and original land, many original
              pastures are scattered. With natural pasture,
              pure water, fine varieties of dairy cows and
              grazing type of breeding (New Zealand is one
              of the few in the world to breed herbivores by
              grazing method), relying on such unique
              factors, Canterbury becomes a base for high
              quality milk sources in the world. The pure
              water and natural grassland make sure the
              milk produced there is free from any pollution.
              All the cows are fed by the wild alfalfa and rye
              grass as the main feed.Excellent dairy cows
              that have been bred and multiplied in New
              Zealand’s unique climate and environment
              over the past 100 years yield only quality-assured milk.
            </div>
          </Col>
          <Col span={12}>
            <div>
              <img src="/images/home_small2.png" alt="" />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            <div className={styles.content5}>
              <p className={styles.content5_text}>THERE IS NOTHING </p>
              <p className={styles.content5_text}>BUT PURE MILK IN THE BOTTLE.</p>
              <div className={styles.contactme}><Link to="/contactus"><span>CONTACT US</span></Link></div>
            </div>
          </Col>
        </Row>
      </div>
    );
  };
}