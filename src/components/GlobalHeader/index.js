import React, { PureComponent } from 'react';
import { Menu, Icon, Row, Tag, Col, Avatar, Divider, Tooltip } from 'antd';
import moment from 'moment';
import groupBy from 'lodash/groupBy';
import Debounce from 'lodash-decorators/debounce';
import { Link } from 'dva/router';
import NoticeIcon from '../NoticeIcon';
import HeaderSearch from '../HeaderSearch';
import styles from './index.less';

export default class GlobalHeader extends PureComponent {
  componentWillUnmount() {
    this.triggerResizeEvent.cancel();
  }

  getNoticeData() {
    const { notices } = this.props;
    if (notices == null || notices.length === 0) {
      return {};
    }
    const newNotices = notices.map(notice => {
      const newNotice = { ...notice };
      if (newNotice.datetime) {
        newNotice.datetime = moment(notice.datetime).fromNow();
      }
      // transform id to item key
      if (newNotice.id) {
        newNotice.key = newNotice.id;
      }
      if (newNotice.extra && newNotice.status) {
        const color = {
          todo: '',
          processing: 'blue',
          urgent: 'red',
          doing: 'gold',
        }[newNotice.status];
        newNotice.extra = (
          <Tag color={color} style={{ marginRight: 0 }}>
            {newNotice.extra}
          </Tag>
        );
      }
      return newNotice;
    });
    return groupBy(newNotices, 'type');
  }

  toggle = () => {
    const { collapsed, onCollapse } = this.props;
    onCollapse(!collapsed);
    this.triggerResizeEvent();
  };
  /* eslint-disable*/
  @Debounce(600)
  triggerResizeEvent() {
    const event = document.createEvent('HTMLEvents');
    event.initEvent('resize', true, false);
    window.dispatchEvent(event);
  }
  render() {
    const {
      currentUser = {},
      collapsed,
      fetchingNotices,
      isMobile,
      logo,
      onNoticeVisibleChange,
      onMenuClick,
      onNoticeClear,
    } = this.props;
    return (
      <div>
        <Row>
          <Col span={4} offset={4}>
            <img src="/images/logo.png" alt="" height={120} />
          </Col>
          <Col span={12}>
            <Menu
              mode="horizontal"
              className={styles.menu}
            >
              <Menu.Item key="contactus">
                <Link to="/contactus">CONTACT US</Link>
              </Menu.Item>
              <Menu.Item key="ourfacility">
                <Link to="/ourfacility">OUR FACILITY</Link>
              </Menu.Item>
              <Menu.Item key="products">
                <Link to="/products">PRODUCTS</Link>
              </Menu.Item>
              <Menu.Item key="aboutus">
                <Link to="/aboutus">ABOUT US</Link>
              </Menu.Item>
              <Menu.Item key="home">
                <Link to="/home">HOME</Link>
              </Menu.Item>
            </Menu>
          </Col>
        </Row>
      </div>
    );
  }
}
