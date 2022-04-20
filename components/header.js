// 자바스크립트로 생성된 html components
function header () {
    return `
    <header id="main-header" class="container">
    <h1><a href="./"><img src="./images/logo.png" alt="남양로고"></a></h1>
    <div class="gnb-box"></div>
    <nav id="gnb">
        <ul>
            <li><a href="./company-info.html">회사소개</a>
                <ul class="depth2">
                    <li><a href="./company-info.html">기업소개</a></li>
                    <li><a href="#">투자정보</a></li>
                    <li><a href="#">인재채용</a></li>
                </ul>
            </li>
            <li><a href="#">제품소개</a>
                <ul class="depth2">
                    <li><a href="#">아기용</a></li>
                    <li><a href="#">커피</a></li>
                    <li><a href="#">유제품</a></li>
                    <li><a href="#">영양보조식</a></li>
                    <li><a href="#">건강기능식품</a></li>
                    <li><a href="#">음료</a></li>
                    <li><a href="#">특수, 기타</a></li>
                    <li><a href="#">가정배달제품</a></li>
            </ul>
        </li>
            <li><a href="#">지속가능경영</a>
                <ul class="depth2">
                    <li><a href="#">상생경영</a></li>
                    <li><a href="#">윤리경영</a></li>
                    <li><a href="#">가족친화 경영</a></li>
                </ul>
            </li>
            <li><a href="#">IR</a>
                <ul class="depth2">
                    <li><a href="#">경영정보</a></li>
                    <li><a href="#">재무정보</a></li>
                </ul>
            </li>
            <li><a href="#">PR</a>
                <ul class="depth2">
                    <li><a href="#">공지사항</a></li>
                    <li><a href="#">광고</a></li>
                </ul>
            </li>
        </ul>
    </nav>       

    <div class="right-menu">        
        <button id="searh-btn" class="pc-only">
            <img src="./images/search.svg" alt="search">
        </button>
        <select name="Language" id="Language" class="pc-only">
            <option value="">Korean</option>
            <option value="">English</option>
            <option value="">Chinese</option>
        </select>

        <!-- 모바일용 토글버튼 -->
        <button id="gnb-toggle-btn" class="mobile-only">
            <img src="./images/m-toggle.svg" alt="toggle-btn">
        </button>
    </div>
</header>
    `
 }
  
  // 문서에 html 생성
  const headerName = '.header-component'; // class 요소명
  document.querySelector(headerName).innerHTML = header();