import React from 'react'
import { Col, Row } from 'antd'
import classNames from 'classnames'
import styles from './index.less'

const GlobalFooter = ({ className, links, copyright }) => {
  const clsString = classNames(styles.globalFooter, className);
  return (
    <Row className={styles.globalFooter}>
      <Row className={styles.contacts}>
        <Col span={12} offset={4}>
          <Row>
            <Col span={24}>
              <div className={styles.head}>Copyright (c) 2018 New Zealand New Milk</div>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <div className={styles.txt}>Contacts</div>
            </Col>
            <Col span={12}>
              <div className={styles.txt}>Address</div>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <div className={styles.txt}>Email: info@nznewmild.co.nz</div>
            </Col>
            <Col span={12}>
              <div className={styles.txt}>138 Pavilion Drive</div>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <div className={styles.txt}>Phone: +64-9-282 4255</div>
            </Col>
            <Col span={12}>
              <div className={styles.txt}>Auckland Airport, Auckland</div>
            </Col>
          </Row>
          <Row>
            <Col span={12}>
              <div className={styles.txt}>Fax: +64-9-282 4256</div>
            </Col>
            <Col span={12}>
              <div className={styles.txt}>Auckland, New Zealand</div>
            </Col>
          </Row>
        </Col>
        <Col span={4}>
          <img src="/images/logo_w.jpg" alt="" height={120} />
        </Col>
      </Row>
      <Row>
        <Col span={24} className={styles.copyright}>
          <p>Produced by Xebni.com</p>
          <p>Units 3, 9 Orbit Drive, Rosedale, Auckland, New Zealand</p>
        </Col>
      </Row>
    </Row>
  );
};

export default GlobalFooter;
