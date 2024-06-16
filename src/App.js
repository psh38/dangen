import { useState } from 'react';
import './css/common.css';

import Gnb from './components/Gnb';
import Header from './components/Header';
import PrdList from './components/PrdList';
import products from './data/products.json'; //제이슨 데이터는 변수가됨!
import TabBar from './components/TabBar';
import Pop from './components/Pop';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupContent, setPopupContent] = useState("");

  const handlePopupOpen = (title, content) => {
    setPopupTitle(title);
    setPopupContent(content);
    setIsPopupOpen(true);
  };

  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  return (
    <>
      <div className="content">
        <Header onPopupOpen={handlePopupOpen}/>
        <div className="container">
          <Gnb/>
          <PrdList products={products}/>
        </div>
        <TabBar/>
      </div>
      {isPopupOpen && (
        <Pop
          onClose={handlePopupClose}
          title={popupTitle}
          content={popupContent}
        />
      )}
    </>
  );
}

export default App;
