import { React, useState, useEffect } from "react";
import Editor from "./Editor";

function Codespace({ onCodeChange }) {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");

  useEffect(() => {
    onCodeChange({ html, css, js });
  }, [html, css, js, onCodeChange]);

  return (
    <div className="space">
      <Editor
        label="HTML"
        value={html}
        onChange={setHtml}
        icon="/"
        color="#FF3C41"
      />
      <Editor
        label="CSS"
        value={css}
        onChange={setCss}
        icon="✲"
        color="#0EBEFF"
      />
      <Editor
        label="JS"
        value={js}
        onChange={setJs}
        icon="❬ ❭"
        color="#FCD000"
      />
    </div>
  );
}

export default Codespace;
