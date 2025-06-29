import { React, useState } from "react";
import { CssBaseline } from "@mui/material";
import Header from "./components/Header";
import Preview from "./components/preview";
import Codespace from "./components/codeSpace";

function App() {
  const [code, setCode] = useState({
    html: "",
    css: "",
    js: "",
  });

  return (
    <>
      <CssBaseline />
      <Header />
      <Codespace onCodeChange={setCode} />
      <Preview html={code.html} css={code.css} js={code.js} />
    </>
  );
}

export default App;
