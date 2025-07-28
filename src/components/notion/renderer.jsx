import React from "react";
import { NotionRenderer } from "react-notion-x";

import "react-notion-x/src/styles.css";
import "prismjs/themes/prism-tomorrow.css";
import "katex/dist/katex.min.css";
import "./notion.css"
import "../Loader.css"

// React.lazy for third-party components
const Code = React.lazy(() =>
  import("react-notion-x/build/third-party/code").then((m) => ({ default: m.Code }))
);
const Collection = React.lazy(() =>
  import("react-notion-x/build/third-party/collection").then((m) => ({ default: m.Collection }))
);
const Equation = React.lazy(() =>
  import("react-notion-x/build/third-party/equation").then((m) => ({ default: m.Equation }))
);
const Modal = React.lazy(() =>
  import("react-notion-x/build/third-party/modal").then((m) => ({ default: m.Modal }))
);


export const NotionPage= ({ recordMap, rootPageId }) => {
  if (!recordMap) {
    return <div className="loader pt-36"></div>;
  }

  return (
    <div className="notion__container w-full pt-16">
        <NotionRenderer
          recordMap={recordMap}
          fullPage={true}
          darkMode={true}
          rootPageId={rootPageId}
          previewImages={true}
          components={{
            // Replace next/link with normal <a> tag or react-router-dom if needed
            nextLink: ({ href, children, ...props }) => (
              <a href={href} {...props}>
                {children}
              </a>
            ),
            Code,
            Collection,
            Equation,
            Modal,
          }}
        />
    </div>
  );
};
