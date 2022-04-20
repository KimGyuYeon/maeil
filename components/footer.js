// footer component
function footer() {
    return `
    <footer id="main-footer">
        <div class="container">
            <div class="menu-box">
                <ul class="footer-menu">                    
                    <li><a href="#">이용약관</a><span>|</span></li>
                    <li><a href="#"><strong>개인정보처리방침</strong></a><span>|</span></li>
                    <li><a href="#">전자입찰(협력사용)</a></li>         
                </ul>
                <ul class="sns-group">
                    <li><a href="#"><img src="./images/ico_youtube.png" alt="YouTube"></a></li>
                    <li><a href="#"><img src="./images/ico_insta.png" alt="insta"></a></li>
                    <li><a href="#"><img src="./images/ico_facebook.png" alt="facebook"></a></li>
                    <li><a href="#"><img src="./images/ico_kakaoP.png" alt="kakaop"></a></li>
                    <li><a href="#"><img src="./images/ico_kakao.png" alt="kakao"></a></li>
                </ul>
            </div> <!-- menu-box -->       
            <div class="line pc-only"></div>
            <div class="footer-info">
                <div class="footer-info-text">
                    <p>서울시 종로구 종로 1길 50 더 케이 트윈타워 A동 </p>
                    <p>대표전화 : 1588-1539</p>
                    <p class="copy">Copyright(c) 2022 by Maeil Dairies Co.Ltd All rights reserved.</p>
                </div>
                <div class="sitemap-link pc-only">
                    <button id="site-map-btn" class="pc-only">사이트맵</button>
                        <select name="family-link" id="family-link">
                            <option value="">패밀리사이트</option>
                            <option value="">매일홀딩스</option>
                            <option value="">매일헬스뉴트리션</option>
                            <option value="">제로투세븐</option>
                            <option value="">상하농원</option>
                            <option value="">폴바셋(엠즈씨드)</option>
                        </select>                        
                </div>
            </div><!-- footer-info -->            
            <a href="#" class="top-btn"><img src="./images/top-btn.svg" alt="위로가기"></a>
        </div> <!-- container -->
        
    </footer>

    <!-- 사이트맵 레이어 팝업창 -->
    <div class="sitemap-modal pc-only">
        <ul>
            <li><a href="./company-info.html">회사소개</a>
                <ul>
                    <li><a href="./company-info.html">기업소개</a></li>
                    <li><a href="#">투자정보</a></li>
                    <li><a href="#">인재채용</a></li>
                </ul>
            </li>
            <li><a href="#">제품소개</a>
                <ul>
                    <li><a href="#">아기용</a></li>
                    <li><a href="#">커피</a></li>
                    <li><a href="#">우유</a></li>
                    <li><a href="#">영양보조식</a></li>
                    <li><a href="#">건강기능식품</a></li>
                    <li><a href="#">음료</a></li>
                    <li><a href="#">특수,기타</a></li>
                    <li><a href="#">가정배달제품</a></li>
                </ul>
            </li>
            <li><a href="#">지속가능경영</a>
                <ul>
                    <li><a href="#">상생경영</a></li>
                    <li><a href="#">윤리경영</a></li>
                    <li><a href="#">가족친화경영</a></li>
                </ul>
            </li>
            <li><a href="#">IR</a>
                <ul>
                    <li><a href="#">경영정보</a></li>
                    <li><a href="#">재무정보</a></li>
                </ul>
            </li>
            <li><a href="#">PR</a>
                <ul>
                    <li><a href="#">공지사항</a></li>
                    <li><a href="#">광고</a></li>
                </ul>
            </li>
        </ul>
        <button id="sitemap-modal-close">
            <img src="./images/close-btn.svg" alt="닫기">
        </button>
    </div> <!--site map modal-->
    
    `
  }
  
  const footerName = '.footer-component'; // class 요소명
  document.querySelector(footerName).innerHTML = footer();