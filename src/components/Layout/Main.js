import React, {PropTypes} from 'react';
import {Layout, BackTop} from 'antd';

import Header from './Header';
import Footer from './Footer';

import styles from './Main.css';

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
