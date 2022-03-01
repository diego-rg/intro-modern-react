import React from "react";
import ReactDOM from "react-dom";

//Creamos o compoñente de React:
const App = () => {
  return (
    <div>
      <div className="ui container comments">
        <div className="comment">
            <a href="/" className="avatar">
                <img src="/" alt="avatar" />
            </a>
            <div className="content">
                <a href="/" className="author">Eu</a>
            </div>
            <div className="metadata">
                <span className="date">28/2/2022 18:55:23</span>
            </div>
            <div className="text">
                Blah blah blah!
            </div>
        </div>
    </div>
    </div>
  );
};

//Renderizamos o compoñente con unha función de ReactDOM no noso index.html, dentro do div #root:
//Tamén funciona con document.getElementById("root")
ReactDOM.render(<App />, document.querySelector("#root"));