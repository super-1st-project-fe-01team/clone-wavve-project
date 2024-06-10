import React, {useState} from 'react';

const Notice = () => {

  const[isClick,setClick] = useState(false);


  const buttonHandler= ()=>{
    setClick(!isClick); //엥 이거 에러떠야하지않나? state 직접 못 건드리지 않나

  }


  return (
      <div>
        <button onClick={buttonHandler}>
          <div>
            <span>공지사항</span>
            <span>서비스 안내</span>
          </div>
        </button>
        {isClick && <div className="noticeContent"><span>날짜</span> <span>내용</span></div>}
      </div>
  );
};

export default Notice;