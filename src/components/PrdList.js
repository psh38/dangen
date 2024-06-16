import React from "react";

function PrdList( {products} ){
  return(
    <ul className="prd-list">
      {products.map((product)=>{
        return <li key={product.id}>
          <a href="/" className="block">
            <div className="top">
              <div className="img-wrap">
                <img src="" alt="이미지"/>
              </div>
              <div className="prd-info-wrap">
                <div className="prd-info">
                  <span className="tit">{product.tit}</span>
                  <ul className="info-list">
                    {product.info.map((info,idx)=>{ //현재요소, index, 원본배열
                      return <li key={idx}>{info}</li>
                    })}
                  </ul>
                  <div className={`item-info ${product.status === 'sponsored' ? 'sponsored' : ''}`}>
                    {product.status &&  product.status !== 'sponsored' && (
                      <span className={`flag ${product.status}`}>
                        {product.status === 'complete' ? '거래완료' : product.status === 'share' ? '나눔중' : ''}
                      </span>
                    )}
                    {(product.status !== 'share' || !product.status) && product.price && (
                      <span className="txt">
                        {product.price}
                      </span>
                    )}
                  </div>
                </div>
                <div className="kebab-menu">
                  <button type="button">
                    <span className="blind">옵션 더보기</span>
                    옵션
                  </button>
                </div>
              </div>
            </div>
            <div className="bottom-list">
              {product.counts ? (
                <>
                  {product.counts.application && (
                    <div className="application">
                      <span className="blind">단골</span> 👩{' '}
                      <span className="num">{product.counts.application}</span>
                    </div>
                  )}
                  {product.counts.chat && (
                    <div className="chat">
                      <span className="blind">채팅</span> 📃{' '}
                      <span className="num">{product.counts.chat}</span>
                    </div>
                  )}
                  {product.counts.interest && (
                    <div className="interest">
                      <span className="blind">관심</span> ❤{' '}
                      <span className="num">{product.counts.interest}</span>
                    </div>
                  )}
                </>
              ) : (
                <div className="btn">바로가기 &gt;</div>
              )}
            </div>
          </a>
        </li>
      })}
    </ul>
  )
}

export default PrdList;