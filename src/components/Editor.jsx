import { React, useState } from "react";
import { Box } from "@mui/material";
import CloseFullscreenIcon from "@mui/icons-material/CloseFullscreen";
import CodeMirror from "@uiw/react-codemirror";
import { oneDark } from "@codemirror/theme-one-dark";
import { html } from "@codemirror/lang-html";
import { css } from "@codemirror/lang-css";
import { javascript } from "@codemirror/lang-javascript";

const getExtension = (label = "") => {
  switch (label.toLowerCase()) {
    case "html":
      return html();
    case "css":
      return css();
    case "js":
    case "javascript":
      return javascript();
    default:
      return html();
  }
};

function Editor({ label, value, onChange, icon, color }) {
  const [open, setOpen] = useState(true);
  return (
    <Box className="editor" style={open ? null : { flexGrow: 0 }}>
      <Box className="header">
        <Box className="label">
          <Box className="tab" style={{ backgroundColor: color }}>
            {icon}
          </Box>
          <Box>{label}</Box>
        </Box>
        <CloseFullscreenIcon
          sx={{ cursor: "pointer" }}
          onClick={() => setOpen((prevState) => !prevState)}
        />
      </Box>

      <CodeMirror
        className="codemirror"
        value={value}
        theme={oneDark}
        extensions={[getExtension(label)]}
        onChange={(val) => onChange(val)}
        basicSetup={{
          lineNumbers: true,
          highlightActiveLine: true,
          autocompletion: true,
        }}
      />
    </Box>
  );
}

export default Editor;
