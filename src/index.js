import React from "react";
import ReactDOM from "react-dom";

const getTime = () => {
  return new Date().toLocaleTimeString();
};

//Creamos o compoñente de React:
const App = () => {
  return (
    <div>
      <h1>{getTime()}</h1>
      <h2>Hora actual:</h2>
    </div>
  );
};

//Renderizamos o compoñente con unha función de ReactDOM no noso index.html, dentro do div #root:
//Tamén funciona con document.getElementById("root")
ReactDOM.render(<App />, document.querySelector("#root"));