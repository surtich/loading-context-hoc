import React from "react";
export const LoadingContext = React.createContext({
  loading: false,
  setLoading: (state: boolean) => {}
});
