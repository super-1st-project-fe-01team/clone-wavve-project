import React from 'react';
import {Link} from "react-router-dom";
import styles from "./Footer.module.css";


const Footer = () => {
    return (

        <footer>
            <div id={styles.footerNotice}>
                <div className={styles.noticeWrap}>
                    <h3><Link to="#">공지사항</Link></h3>
                    <p><Link to="#">[업데이트] 6월 1주 프로그램 리스트</Link></p>
                    <div className={styles.noticeButton}>
                        <button className={`${styles.button} ${styles.buttonLeft}`}><img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAAXNSR0IArs4c6QAAAlBJREFUaAXtVktrGlEUzvioYqELpRCyiIss7CK7/gJdNMEEQjdSunATfNEEugi0BPoDmkV3iY/4qGIKFUIXDdJmY6kEAv0FdhNw405oScWq0Xx3IQyDEqLn5AFnNvfOnbnf+b7vnHNnZmbkEgfEAXFAHBAHxAFxQBwQB+6iA8lk8i01LxM14FV4iURiZzAYPL/qves+t1x3w6Tvg7yGTOxhfGq3259NijNunzbuAeV6qVQyN5vNj8CcdzqdK4FA4JwSX2GxZwQiHkDEZ8Sy22y2JYhoU4tQeKwZQSk5UEpfEOevpmkvI5FIl0OEwmRr9mKx+Kjf73+DkAbK6QWnCCWEJSP5fN7VarW+IwunELCJcaCCcV7kGcnlcrMQUQX542g0unETIpRBpELS6bS73W6fgHweIrY5M2DEJhMCEYvdbrdqMpk+QMR7YyDuezIhvV5vGWSr6IldbtKj8MmEWK3WTyipBfyCpHBSkeGOIj1qjfTUKhQKD9HoRwjU8Hg8Qa/X2xsVlGONVIgiWC6XbfV6/RBZuXC73QG/3/+fg7gRk1yIClCpVCy1Wu0AU5fD4VgLBoP/jIGp71mEKJKqT9Av+5g+wUnmxyHwh5q8Ho+tKdH4/Vgsto7xF0T9yGazj/WBqedsQoZE8U15DSFfO53Oz0wmMzdcpx7ZSstIFGW2hbVXZrPZFwqFzozPp72/MSGKaDwej6DU3qFnfOFw+Pe05PX72UtLHww9k0SZvVG/9/r1eztPpVKr95a8EBcHxAFxQBwQB8QBcUAcEAdu3YFLPjOyQF+dJGYAAAAASUVORK5CYII="
                            alt="이전"/></button>
                        <button className={`${styles.button} ${styles.buttonRight}`}><img
                            src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6MTU2RTc3QzVDNUU2MTFFNzhGNzQ4QUM1NTY5RjA2NDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6MTU2RTc3QzZDNUU2MTFFNzhGNzQ4QUM1NTY5RjA2NDMiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDoxNTZFNzdDM0M1RTYxMUU3OEY3NDhBQzU1NjlGMDY0MyIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDoxNTZFNzdDNEM1RTYxMUU3OEY3NDhBQzU1NjlGMDY0MyIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PvXeOssAAAH+SURBVHja7Jm/SwJhGMe9y0uwMJCCajAiyKU/oDGnQlwkkCDQIEKFhraioaWphpaI9PxFYg7SEtERDRmJU/9AjrY06VSHeZfX9wZBGsLhunz1eeB4Hz249/nc932f53k5TtM0Sz8Yb+kTIxACIRACIRACIRACGQQQURT3OI6zdHv1LAi6aX8sFjtmXhGbzbYMmCXAnGPkzALhjD6P6MulUCiM1uv1W/x8dTqdG4FA4OsXBXt3syPwd10ZuOMAugLYMJOKtC0ejwt4fh6uA//7w+GwzJQibUPgCpbWGoJ9a7Vad7lczsGkIh1vnYM6pxgX7Xb7cigUqjGlSAecFolEtjHey7JcymQyk0xXdsDsA+ai0WiUk8nkDNMtCmCOeJ4/URSlBJgFpnstJIEzDCVVVVeYBcHm5lH1RSyxOUEQ8kxlrbYVi0VrpVLJwp1C9vIFg8EPo+Y3DUSSJFu1Wi3g/pDL5Vr1er2fRqZfU0Cy2ewI0u413Jrb7V73eDyq0XXkz0FQCMdQ1SW4L8hYW7jfYq5FSafTEwj0EcE/R6PRzZ8QTNSRVCo13Ww2nwByAyV2mDyzJxKJWRS8ss4DJQ6YPFgBYh574gHPPQREvIu6Ysi8VqPfjN6uI7hdQFyaXWkNvURR9P3H/Bx9QyQQAiEQAiEQAiEQAiGQgQH5FmAAnG5iNuw7AaQAAAAASUVORK5CYII="
                            alt="다음"/></button>
                    </div>
                </div>
            </div>
            <div id={styles.footerMenu}>
                <ul>
                    <li><Link to="#">회사소개</Link></li>
                    <li><Link to="#">서비스 소개</Link></li>
                    <li><Link to="#">이용약관</Link></li>
                    <li><Link to="#">개인정보 처리방침</Link></li>
                    <li><Link to="#">고객센터</Link></li>
                </ul>
                <span>콘텐츠웨이브 주식회사</span>
                <span>대표이사 이태현</span>
                <span className={styles.lastBorder}
                >고객센터 1599-3709 (평일 09:00~18:00 / 점심시간 12:00~13:00 / 주말 및
          공휴일 휴무)</span
                >
                <br/>
                <span>사업자등록번호 220-88-38020</span>
                <span className={styles.lastBorder}>호스팅서비스제공자 : 마이크로소프트 유한회사, 구글클라우드코리아 유한회사, 아마존웹서비시즈코리아 유한회사</span>
                <br/>
                <span>통신판매업 신고번호 : 제 2021-서울영등포-0585호</span>
                <span className={`${styles.lastBorder} ${styles.link}`}
                >통신판매업 정보 공개 :
          <Link to="http://www.ftc.go.kr/bizCommPop.do?wrkr_no=220-88-38020" target="_blank"
          >http://www.ftc.go.kr/bizCommPop.do?wrkr_no=220-88-38020</Link
          ></span
                >
                <br/>
                <span>서울특별시 영등포구 여의나루로 60 포스트타워 19층</span>
                <span className={styles.lastBorder}>전자우편주소 : helpdesk@wavve.com</span>
                <br/>
                <span className={styles.lastBorder}> Copyright© 콘텐츠웨이브(주) All rights reserved.</span>

                <div id={styles.footerService}>
                    <h4>
                        <img
                            src="https://www.wavve.com/img/ico-footer-wavve-on.d4912b54.svg"
                            alt="wavve-on"
                        />
                    </h4>
                    <select name="wavveOn-service" id="wavveOn-selectbox">
                        <option value="" selected disabled hidden>
                            사업자용 웨이브 가입
                        </option>
                        <option value="introduce">웨이브온 서비스 소개</option>
                        <option value="pc">웨이브온 PC방 서비스</option>
                        <option value="library">웨이브온 도서관 서비스</option>
                        <option value="hospital">웨이브온 병원 서비스</option>
                        <option value="lodgment">웨이브온 숙박 서비스</option>
                        <option value="common">웨이브온 일반 서비스</option>
                    </select>
                    <div className={styles.sns}>
                        <Link to="https://www.facebook.com/Wavve.official/" target="_blank" rel="noopener noreferrer">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABXUExURUdwTCcnJyYmJiUlJScnJyYmJiYmJiUlJScnJy4uLiUlJVVVVf///ysrKyYmJiYmJiUlJSUlJf///zMzM+bm5rm5uUlJSTw8PJOTk8fHx6Ojo/Dw8GlpaSKgx6gAAAARdFJOUwA3jtT6yH/sXRCpAwEe33P+GdQUZQAAAatJREFUWMOtl9mWwiAMhil7Udumi6067/+cU3EZdSCB4n/Vczz5TEICCWMR1VY71RgpTaOctjXLUsVFBy/qoBO8SrWuWwFBiTbFj1obiMpoCrG3iLlH2D1mf1BASh2Q3BlIkIlm00pIkrRB8x2HZPFdwN5Bhtx/Aocs8c//t5CpjzxUMhcg387iYCBb5qUe9go2SP3VpIVNeqahxgMYjlcNgSAenaUx62XsvZbAj5p2YL6bhwF3F1rEgVOPAaD1ABG3/+lxgPA1hDgw3a0vl0sQABXRBLcMnAe0JZAIpLcfkX9YY6g75Aw94IQAuhqtwgSAxauIBKy15Mo8cCzWiMu46naI168xcmEo1kQA5/5NsaNomEkDxOIwTKYBzrFSSQUsUUAshGGe5+PN+/VrltEQGvIYJ6wOGqbKACqhkFCASyjlCS9lWwawCe084e2MXSg0QOBXGg3g+KVKAyr8WicBgnhYSEBLPG0U4PG66q0ATT7v/mGfKQfKB4zyEad4yCof8zakwX551P3CsF087pcvHKsPpStP+dJVvvaVL55fWH2DyzdkLd956/8vx6XV0bOYnOQAAAAASUVORK5CYII="
                                alt="Wavve 페이스북"/>
                        </Link>
                        <Link to="https://m.post.naver.com/my.nhn?memberNo=12375258" target="_blank"
                              rel="noopener noreferrer">
                            <img
                                src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAABOUExURUdwTCYmJicnJyUlJSYmJicnJyYmJiUlJS0tLSYmJiYmJigoKCUlJSUlJf7+/iUlJbm5ufHx8VtbW3h4eOTk5DIyMikpKZ+fn0VFRczMzO6Le3EAAAAOdFJOUwCON9T5YcjsFHvfU6WxjM/C1AAAAa5JREFUWMOtl+uSgyAMhRGRi1qj2Gp9/xdd7bqtFxJw0/OjM52RzyQcJBECka1crUujlCl17SorLklmORyUZzJ1tXWn1SvD2aTlBlCZOKIglr8QBf16DVFpIghpIEEGrWahIEkKSSODZGWh9Te4oBvr/cEYCrioQx2kugpQu72wBi7LbP1w8k8T0MlRVAFSAJ8yBBJIAryTcPA/ADi8gmmANYRAACug67r1JwxYQ8gxQAvwuDc9QIsB8peHgAAMngSAxA7BHwBgJAEZksEGMHgKMOdggQL4YfmHA8CKigT0YwRQBTdxA2g8DXCijgDuDxJQC40D4kZajmRJAGJWnlUKwwMYoXgAxQewUyiBpVJoHkAjRmrPGbSIkcJWnj8kBy2ODFo5fJjAHwEekMNkkeTG/foRecwiH5RZ03b9NCCNG3GvP7sN4Enc8pKzixL7rCcqRy+WfR2xCq4XC94cTHQF37crGsKvnRALfS5XIoRlJ7pnvEfBOyyPWnDfZ+FHsu+Jg5jUZA1DNIFvtHn8RpPf6vKbbX67zx84+CMPf+jij31fGDz5o+8Xhu9r4/8P6gi556iJuXoAAAAASUVORK5CYII="
                                alt="Wavve 네이버 포스트"/>
                        </Link>
                    </div>
                </div>
            </div>

        </footer>
    );
};

export default Footer;