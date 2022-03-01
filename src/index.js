import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment"; //Non fa falta poñer Comment.js xa que o fai Webpack

//Creamos o compoñente de React:
const App = () => {
  return (
    <div className="ui container comments">
      <Comment author="Jose" />
      <Comment author="Ana" />
      <Comment author="Pepe" />
    </div>
  );
};
//Props: propiedades ou sistema para pasar datos de un compoñente pai a un fillo, para logo consumilos o fillo

//Renderizamos o compoñente con unha función de ReactDOM no noso index.html, dentro do div #root:
//Tamén funciona con document.getElementById("root")
ReactDOM.render(<App />, document.querySelector("#root"));
