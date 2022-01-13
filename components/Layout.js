import React from 'react';
import PropTypes from 'prop-types';
import Navbar from './Navbar';
import {Toaster} from 'react-hot-toast';

/**
 * Layout component for applying a default
 *  layout to the entire app
 * @param {child_components} children
 * @return {JSX}
 */
export default function Layout({children}) {
  return (
    <>
      <Navbar />
      {children}
      <Toaster />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
