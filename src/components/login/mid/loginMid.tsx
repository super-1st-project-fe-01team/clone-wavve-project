import React, { useState, useEffect } from "react";
import styles from "./loginMid.module.css";
import Data from '../../data/data.json';


const LoginMid: React.FC = () => {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [alertMessage, setAlertMessage] = useState('');
  const [idAlertMessage, setIdAlertMessage] = useState('');
  const [passwordAlertMessage, setPasswordAlertMessage] = useState('');

  const idHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value;
    setId(currentValue);
    if (currentValue !=='') {
      setIdAlertMessage('');
    }
  };

  const passwordHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    const currentValue = e.target.value;
    setPassword(currentValue);
    if (currentValue !== '') {
      setPasswordAlertMessage('');
    }
  };

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!id || !password) {
      setIdAlertMessage(!id ? '메일 또는 아이디를 입력해주세요' : '');
      setPasswordAlertMessage(!password ? '비밀번호를 입력해주세요' : '');
      return;
    }

    const foundUser = Data.find((user: any) => user.id === id && user.password === password);
    if (foundUser) {
      console.log('성공');
    } else {
      alert("입력하신 정보에 해당하는 계정을 찾을 수 없습니다. ID, PW를 확인해주세요");
      console.log('실패');
    }
  };


  return (
      <div>
        <div className={styles.midTitle}>Wavve 계정으로 로그인</div>
        {/*{alertMessage && <div className={styles.alert}>{setEmailAlertMessage}</div>}*/}
        <form onSubmit={submitHandler}>
          <div className={styles.midLoginBox}>
            <input
                className={styles.inputId}
                type="text"
                value={id}
                onChange={idHandler}
                placeholder="이메일 주소 또는 아이디"
            />
            {idAlertMessage && <p style={{ color: '#FF27A3' }}>{idAlertMessage}</p>}
            <input
                className={styles.inputPassword}
                type="password"
                value={password}
                onChange={passwordHandler}
                placeholder="비밀번호"
            />
            {passwordAlertMessage && <p style={{ color: '#FF27A3' }}>{passwordAlertMessage}</p>}
          </div>
          <div className={styles.checkBox}>
            <input className={styles.check} type="checkbox" />
            <span className={styles.checkBoxDetail}>아이디 저장</span>
            <input className={styles.check} type="checkbox" />
            <span className={styles.checkBoxDetail}>자동 로그인</span>
          </div>
          <div>
            <button type="submit" className={styles.loginBtn}>로그인</button>
            <div className={styles.midInfoFind}>
              <span>아이디 찾기 </span>
              <span className={styles.divider}> 비밀번호 재설정 </span>
              <span> 회원가입</span>
            </div>
          </div>
        </form>
      </div>
  );
};

export default LoginMid;