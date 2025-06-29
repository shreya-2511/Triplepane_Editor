import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";

function Preview({ html, css, js }) {
  const [srcDoc, setSrcDoc] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setSrcDoc(`
          <html>
            <head><style>${css}</style></head>
            <body>
            ${
              html.trim() ||
              '<h2 style="color: #999;">Preview will appear here</h2>'
            }
              <script>${js}<\/script>
            </body>
          </html>
        `);
    }, 250);

    return () => clearTimeout(timeout);
  }, [html, css, js]);

  return (
    <Box className="preview">
      <iframe
        srcDoc={srcDoc}
        title="Live Preview"
        sandbox="allow-scripts"
        frameBorder="0"
        width="100%"
        height="100%"
      />
    </Box>
  );
}

export default Preview;
