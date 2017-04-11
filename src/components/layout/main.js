import React from 'react';
import PropTypes from 'prop-types';
import {Layout, BackTop} from 'antd';

import Header from './header';
import Footer from './footer';

import styles from './main.css';

function Main({children, location}) {
  return (
    <Layout className={styles.normal}>
      <Layout.Header className={styles.header}>
        <Header location={location} />
      </Layout.Header>
      <Layout.Content className={styles.content}>
        <div className={styles.container}>
          {children}
        </div>
        <BackTop />
      </Layout.Content>
      <Layout.Footer className={styles.footer}>
        <Footer />
      </Layout.Footer>
    </Layout>
  );
}

Main.propTypes = {
  children: PropTypes.element.isRequired,
  location: PropTypes.object.isRequired
};

export default Main;
