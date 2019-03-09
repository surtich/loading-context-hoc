import React from "react";
import { LoadingContext } from "./loadingContext";

const withLoadingConsumer = (
  method = "mutate"
) => WrappedComponent => ownProps => {
  return (
    <LoadingContext.Consumer>
      {({ loading, setLoading }) => {
        const props = {
          ...ownProps,
          [method]: (...args) => {
            setLoading(true);
            return ownProps[method](...args).then(result => {
              setLoading(false);
              return result;
            });
          }
        };

        return <WrappedComponent {...props} />;
      }}
    </LoadingContext.Consumer>
  );
};

export default withLoadingConsumer;
