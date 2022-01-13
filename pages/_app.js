import React from 'react';
import PropTypes from 'prop-types';
import '../styles/globals.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from '../components/Layout';


/**
 * Main App wrapper
 * @param {node_component} Component
 * @return {JSX}
 */
function MyApp({Component, pageProps}) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;

MyApp.propTypes = {
  Component: PropTypes.node.isRequired,
  pageProps: PropTypes.any,
};
