import React from "react";

const Loader = (props) => {
  return (
    <div className="ui active dimmer">
      <div className="ui text loader">{props.msg}</div>
    </div>
  );
};

Loader.defaultProps = {
  msg: "Cargando...",
};

export default Loader;