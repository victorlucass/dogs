import React from "react";

export function Head(props) {
  React.useEffect(() => {
    document.title = props.title + " | Dogs";
  }, [props]);

  return <></>;
}
