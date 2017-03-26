import React from 'react';
import Layout from '../../components/Layout';
import New from './New';

const title = 'New Deployment';

export default {

  path: '/new',

  action() {
    return {
      title,
      component: <Layout><New title={title} /></Layout>,
    };
  },

};
