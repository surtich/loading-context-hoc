import React, { useState } from "react";
import { LoadingContext } from "./loadingContext";
import { withLoadingProvider } from "./withLoadingProvider";
import { Spin } from "antd";

export default () => WrappedComponent => props => {
  const [loading, setLoading] = useState(false);

  return (
    <LoadingContext.Provider value={{ loading, setLoading }} delay={250}>
      <Spin spinning={loading}>
        <WrappedComponent {...props} />
      </Spin>
    </LoadingContext.Provider>
  );
};
