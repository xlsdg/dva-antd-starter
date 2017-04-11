import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'dva';

import Main from '../components/layout/main';

import styles from './page03.css';

function Page03({location}) {
  return (
    <Main location={location}>
      <div className={styles.normal}>
        Route Component: Page03
      </div>
    </Main>
  );
}

Page03.propTypes = {
  location: PropTypes.object.isRequired
};

function mapStateToProps() {
  return {};
}

export default connect(mapStateToProps)(Page03);
