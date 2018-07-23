import React, { Component } from 'react'
import { connect } from 'dva'
import { Col, Row } from 'antd'
import { Link } from 'dva/router'

import styles from './Ourfacility.less'

@connect(({home}) => ({
  home,
}))
export default class Ourfacility extends Component {

  render () {
    return (
      <div className={styles.content}>
        <Row className={styles.content1}>
          <Col span={24}>
            <div className={styles.txt}><span>OUR FACILITY</span></div>
          </Col>
        </Row>
        <Row className={styles.content2}>
          <Col span={16}>
            <div>
              <img src="/images/ourfacility_small1.jpg" alt="" />
            </div>
          </Col>
          <Col span={6}>
            <div className={styles.content2_txt}>
              The following picture shows former New Zealand Prime Minister John key and Consul General of China in Auckland Xu Erwen visiting the New Milk factory.

            </div>
          </Col>
        </Row>
        <Row className={styles.content3}>
          <Col span={24}>
            <div className={styles.title}><span>THE FACTORY</span></div>
          </Col>
        </Row>
        <Row className={styles.content4}>
          <Col span={8} offset={2}>
            <div className={styles.content2_txt && styles.content4_left}>
              With high quality raw milk,advanced production technology and
              pharmaceutical-grade regulation in New Milk factory, as well
              as the New Zealand government’s strict regulations for dairy
              products, all these factors are combined to provide a safe,
              green and high protein milk powder, the New Pure Milk.
            </div>
          </Col>
          <Col span={12}>
            <div>
              <img src="/images/ourfacility_small2.jpg" alt="" />
            </div>
          </Col>
        </Row>
      </div>
    )
  }
}