import React from 'react';
import {Helmet} from "react-helmet";

export default class Header extends React.Component {
  render() {
    return(
      <Helmet>
        <meta charset="utf-8" />
        <title>DeepTees</title>
      </Helmet>
    );
  }
}
