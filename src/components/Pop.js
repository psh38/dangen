import React from "react";

function Pop({onClose, title, content}) {
  return (
    <div className="popup">
      <div className="pop-cont">
        <h2>{title}</h2>
        <p>{content}</p>
        <button type="button" onClick={onClose}>
          닫기
        </button>
      </div>
    </div>
  );
}

export default Pop;