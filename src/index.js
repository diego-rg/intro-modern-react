import React from "react";
import ReactDOM from "react-dom";
import Comment from "./Comment";
import ApprovalCard from "./ApprovalCard"; //Non fa falta poñer Comment.js xa que o fai Webpack
import avatar from "./images/avatar.jpg";

//Creamos o compoñente de React. Para poñer un componente como fillo doutro nestealo no tag e pasalo como props no componente
const App = () => {
  return (
    <div className="ui container comments app-container">
      <ApprovalCard>
        <div>
          <h4>Atención!</h4>
          <p>Quieres confirmar los cambios?</p>
        </div>
      </ApprovalCard>
      <ApprovalCard>
        <Comment author="Jose" date="01/03/2022" text="Muahahahaha" avatar={avatar} />
      </ApprovalCard>
      <ApprovalCard>
        <Comment author="Ana" date="14/02/2022" text="Hohoho" avatar={avatar} />
      </ApprovalCard>
      <ApprovalCard>
        <Comment author="Pepe" date="21/01/2022" text="Hihihi" avatar={avatar} />
      </ApprovalCard>
    </div>
  );
};
//Props: propiedades ou sistema para pasar datos de un compoñente pai a un fillo, para logo consumilos o fillo

//Renderizamos o compoñente con unha función de ReactDOM no noso index.html, dentro do div #root:
//Tamén funciona con document.getElementById("root")
ReactDOM.render(<App />, document.querySelector("#root"));
