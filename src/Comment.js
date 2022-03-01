import React from "react";

//Compoñente: código que estaría duplicado en JSX, que ten un propósito concreto, reutilizable. Nome en UpperCammelCase
const Comment = (props) => {
  //Props: propiedades ou sistema para pasar datos de un compoñente pai a un fillo, para logo consumilos o fillo
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={props.avatar} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
        <div className="metadata">
          <span className="date">{props.date}</span>
        </div>
        <div className="text">{props.text}</div>
      </div>
    </div>
  );
};

export default Comment;
