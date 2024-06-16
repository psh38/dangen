import React from "react";

function Header({onPopupOpen}) {
  const handleLocationClick = () => {
    onPopupOpen("지역선택", "지역선택설명설명");
  };

  const handleSearchClick = () => {
    onPopupOpen("검색", "검색검색검색검색");
  };

  const handleNotificationClick = () => {
    onPopupOpen("알림", "알림알림알림알림알림알림");
  };

  return (
    <header>
      <div className="container">
        <div className="location">
          <button type="button" onClick={handleLocationClick}>
            지역이름
          </button>
        </div>
        <ul className="utill-list">
          <li>
            <button type="button" onClick={handleSearchClick}>
              <span className="blind">검색</span>검색
            </button>
          </li>
          <li>
            <button type="button" onClick={handleNotificationClick}>
              <span className="blind">알림</span>알림
            </button>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Header;