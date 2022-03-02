import React from "react";
import ReactDOM from "react-dom";
// import Comment from "./Comment";
// import ApprovalCard from "./ApprovalCard"; //Non fa falta poñer Comment.js xa que o fai Webpack
import SeasonDisplay from "./SeasonDisplay";
// import avatar from "./images/avatar.jpg";

//Compoñente de clase
class App extends React.Component {
  state = { lat: null, errMsg: "" };
//Gracias a babel podemos refactorizar e non poñer o constructor:
    // window.navigator.geolocation.getCurrentPosition(
    //   (position) => {
    //     this.setState({ lat: position.coords.latitude });
    //   },
    //   (err) => {
    //     this.setState({ lat: 62, errMsg: err });//Xestionamos erro e poñemos un valor aleatorio se falla (ou se usuario bloquea) para probala app
    //   }
    // );
    //Refactorizamos manexando o ciclo de vida
    componentDidMount() {
      window.navigator.geolocation.getCurrentPosition(
        position => this.setState({ lat: position.coords.latitude }),
        err => this.setState({ lat: 62, errMsg: err })//Xestionamos erro e poñemos un valor aleatorio se falla (ou se usuario bloquea) para probala app
      );
    }

  //Modificamos o código para devolver por defecto lat 62 en caso de erro.
  render() {
    if (this.state.errMsg && this.state.lat) {
      return(
      <div>
        <p>Error: {`${this.state.errMsg}. Se usará la latitud por defecto (${this.state.lat}).`}</p>
      </div>
      )
    }
    if (!this.state.errMsg && this.state.lat) {
      return(
      <div>
        <p>Latitud: {this.state.lat}</p>
      </div>
      )
    }
    return <div>Cargando...</div>
  }
}

//Creamos o compoñente de React. Para poñer un componente como fillo doutro nestealo no tag e pasalo como props no componente
// const App = () => {
//   return (
//     <div className="ui container comments app-container">
//       <div>
//         <ApprovalCard>
//           <div>
//             <h4>Atención!</h4>
//             <p>Quieres confirmar los cambios?</p>
//           </div>
//         </ApprovalCard>
//         <ApprovalCard>
//           <Comment
//             author="Jose"
//             date="01/03/2022"
//             text="Muahahahaha"
//             avatar={avatar}
//           />
//         </ApprovalCard>
//         <ApprovalCard>
//           <Comment
//             author="Ana"
//             date="14/02/2022"
//             text="Hohoho"
//             avatar={avatar}
//           />
//         </ApprovalCard>
//         <ApprovalCard>
//           <Comment
//             author="Pepe"
//             date="21/01/2022"
//             text="Hihihi"
//             avatar={avatar}
//           />
//         </ApprovalCard>
//       </div>
//       <div>
//         <SeasonDisplay />
//       </div>
//     </div>
//   );
// };
//Props: propiedades ou sistema para pasar datos de un compoñente pai a un fillo, para logo consumilos o fillo

//Renderizamos o compoñente con unha función de ReactDOM no noso index.html, dentro do div #root:
//Tamén funciona con document.getElementById("root")
ReactDOM.render(<App />, document.querySelector("#root"));
