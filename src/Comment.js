import React from "react";
import avatar from "./images/avatar.jpg"

//Compoñente: código que estaría duplicado en JSX, que ten un propósito concreto, reutilizable. Nome en UpperCammelCase
const Comment = (props) => {
  //Props: propiedades ou sistema para pasar datos de un compoñente pai a un fillo, para logo consumilos o fillo
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src={avatar} alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
      </div>
      <div className="metadata">
        <span className="date">{props.date}</span>
      </div>
      <div className="text">{props.text}</div>
    </div>
  );
};

export default Comment;
