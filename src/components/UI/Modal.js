import React from "react";
import * as ReactDOM from 'react-dom';

export default function Modal(props) {
  return (
    <>
      {ReactDOM.createPortal(
        <>{props.children}</>,
        document.getElementById("modal")
      )}
    </>
  );
}
