import { useState } from 'react';
import './css/common.css';

import Gnb from './components/Gnb';
import Header from './components/Header';
import PrdList from './components/PrdList';
import products from './data/products.json'; //제이슨 데이터는 변수가됨!
import TabBar from './components/TabBar';
import Pop from './components/Pop';
import BottomSheet from './components/BottomSheet';

function App() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [popupTitle, setPopupTitle] = useState("");
  const [popupContent, setPopupContent] = useState("");
  
  const [isBottomOpen, setIsBottomOpen] = useState(false);
  const [bottomTitle,setBottomTitle] = useState("");
  const [bottomContent,setBottomContent] = useState("");
  
  const handlePopupOpen = (title, content) => {
    setPopupTitle(title);
    setPopupContent(content);
    setIsPopupOpen(true);
  };
  
  const handlePopupClose = () => {
    setIsPopupOpen(false);
  };

  const handleBottomOpen = (title,content) =>{
    setBottomTitle(title);
    setBottomContent(content);
    setIsBottomOpen(true);
  }

  const handleBottomClose = () =>{
    setIsBottomOpen(false);
  }

  return (
    <>
      <div className="content">
        <Header onPopupOpen={handlePopupOpen}/>
        <div className="container">
          <Gnb/>
          <PrdList 
          products={products}
          onbottomOpen={handleBottomOpen}
          />
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

      {isBottomOpen && 
        <BottomSheet
          onClose={handleBottomClose}
          title={bottomTitle}
          content={bottomContent}
        />
      }
    </>
  );
}

export default App;
