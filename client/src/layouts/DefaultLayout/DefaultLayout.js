import PropTypes from "prop-types";
import React, { Fragment } from "react";

import { Header } from "../../components";
import { Footer } from "../../components";
import PostUi from "../../pages/PostUi/PostUi";

const DefaultLayout = ({ children }) => {
  return (
    <Fragment>
      <Header />
      {children}
      <Footer />
    </Fragment>
  );
};

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired
};

export default DefaultLayout;
