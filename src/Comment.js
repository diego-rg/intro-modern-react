import React from "react";

//Compoñente: código que estaría duplicado en JSX, que ten un propósito concreto, reutilizable. Nome en UpperCammelCase
const Comment = (props) => {
  //Props: propiedades ou sistema para pasar datos de un compoñente pai a un fillo, para logo consumilos o fillo
  return (
    <div className="comment">
      <a href="/" className="avatar">
        <img src="/" alt="avatar" />
      </a>
      <div className="content">
        <a href="/" className="author">
          {props.author}
        </a>
      </div>
      <div className="metadata">
        <span className="date">28/2/2022 18:55:23</span>
      </div>
      <div className="text">Blah blah blah!</div>
    </div>
  );
};

export default Comment;
