import React, { useState } from "react";
import "antd/dist/antd.css";
import { render } from "react-dom";
import Login from "./login";
import { Button, Modal } from "antd";
import withLoadingProvider from "./hoc/withLoadingProvider";

import "./styles.css";

const LoginWithLoading = withLoadingProvider()(Login);

function App() {
  const [visible, setVisible] = useState(false);
  const hideModal = () => setVisible(false);
  return (
    <div className="App">
      <Button onClick={() => setVisible(true)}>Login</Button>
      <Modal visible={visible} onOk={hideModal} onCancel={hideModal}>
        <LoginWithLoading />
      </Modal>
    </div>
  );
}

const rootElement = document.getElementById("root");
render(<App />, rootElement);
