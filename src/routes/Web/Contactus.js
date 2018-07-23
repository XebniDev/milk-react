import React, { Component } from 'react'
import { connect } from 'dva'
import { Col, Row } from 'antd'
import { Link } from 'dva/router'

import styles from './Contactus.less'

@connect(({home}) => ({
  home,
}))
export default class Contactus extends Component {

  render () {
    return (
      <div className={styles.content}>
        <Row className={styles.content1}>
          <Col span={24}>
            <div className={styles.txt}><span>CONTACT US</span></div>
          </Col>
        </Row>
        <Row className={styles.content2}>
          <Col span={24}>
            <p className={styles.content2_txt}>
              Email: info@nznewmilk.co.nz
            </p>
            <p className={styles.content2_txt}>
              Phone: +64-9-282 4255
            </p>
            <p className={styles.content2_txt}>
              Fax: +64-9-282 4256
            </p>
          </Col>
        </Row>
        <Row className={styles.content3}>
          <Col span={24}>
            <img src="/images/map.png" alt="" />
          </Col>
        </Row>
      </div>
    )
  }
}