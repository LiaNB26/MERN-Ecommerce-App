import React from "react";
import { Helmet } from "react-helmet";

const HelmetTitle = ({ title }) => {
  return (
    <Helmet>
      <title>{`ProShop | ${title}`}</title>
    </Helmet>
  );
};

HelmetTitle.defaultProps = {
  title: "Welcome To ProShop",
};

export default HelmetTitle;
