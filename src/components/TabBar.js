import React from "react";

function TabBar(){
  return(
    <nav className="tab-bar">
      <ul>
        <li>
          <button type="button">홈</button>
        </li>
        <li>
          <button type="button">동네생활</button>
        </li>
        <li>
          <button type="button">내 근처</button>
        </li>
        <li>
          <button type="button">채팅</button>
        </li>
        <li>
          <button type="button">나의 당근</button>
        </li>
      </ul>
    </nav>
  )
}

export default TabBar;