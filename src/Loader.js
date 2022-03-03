import React from "react";

const Loader = (props) => {
  return (
    <div class="ui active dimmer">
      <div class="ui text loader">{props.msg}</div>
    </div>
  );
};

Loader.defaultProps = {
  msg: "Cargando...",
};

export default Loader;