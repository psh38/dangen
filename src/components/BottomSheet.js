import React from "react";

function BottomSheet({onClose,title,content}) {
  return (
    <div className='bottom-sheet-container' onClick={onClose}>
      <div className={`bottom-sheet ${onClose ? 'show' : ''}`}>
        <div className='bottom-sheet-header'>
          <button className="bottom-sheet-header-close close-button" onClick={onClose}>
            닫기
          </button>
          {title}
        </div>
        <div className="bottom-sheet-body">
          <div className="content">
            {content}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BottomSheet;