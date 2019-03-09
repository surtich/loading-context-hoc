import React from "react";

const login = ({ userName, password }) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve(userName === "kk" && password === "kk");
    }, 2000);
  });
export const LoginContainer = Component => props => (
  <Component login={login} {...props} />
);
