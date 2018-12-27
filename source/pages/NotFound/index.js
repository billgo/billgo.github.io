import React from "react";
import Application from 'app/components/Application';
import NotFound from 'app/components/NotFound';

export default (props) => (
  <Application title="404 Page" {...props} >
    <NotFound />
  </Application>
)