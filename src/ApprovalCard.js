import React from "react";

//Pasamos o componente Comments como fillo do componente ApprovalCard
const ApprovalCard = (props) => {
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div className="ui basic green button">Aprobar</div>
          <div className="ui basic red button">Rechazar</div>
        </div>
      </div>
    </div>
  );
};

export default ApprovalCard;
