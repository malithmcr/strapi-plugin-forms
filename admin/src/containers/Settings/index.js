/*
 *
 * HomePage
 *
 */

import React, { memo } from 'react';
// import PropTypes from 'prop-types';
import pluginId from '../../pluginId';
import Wrapper from './Wrapper';

const Settings = () => {
  return (
    <Wrapper>
      <h1>Strapi Forms</h1>
      <p>Easy way to collect leads</p>
    </Wrapper>
  );
};

export default memo(Settings);
