import { createGlobalStyle } from "styled-components";

const Globalstyle = createGlobalStyle `
    /* RESET */
    html, body {
        height: 100%;
    }
    /*여백 초기화*/
    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed, 
    figure, figcaption, footer, header, hgroup, 
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
        margin: 0;
        padding: 0;
        border: 0;
        box-sizing: border-box;
    }

    /*a링크 초기화*/
    a { text-decoration: none; color: #222; transition: all 0.3s; }
    a:hover {color: #79b4b7;}
    
    /*폰트 초기화*/
    body, input, textarea, select, button, table, em, address {
        font-family: 'Montserrat', 'Nanum Gothic','Malgun Gothic','맑은 고딕',dotum,'돋움',sans-serif;
        color:#222;    font-size: 14px;    line-height: 1.5;}
        

    /*블릿기호 초기화*/
    dl, ul, li, ol menu {list-style: none;}

    /*제목 태그 초기화*/
    h1, h2, h3, h4, h5, h6 {font-size: 14px; font-weight: normal;}

    /*테두리 초기화*/
    img, fieldset {border: 0 none;}

    /* 버튼 초기화 */
    button { border: 0; background-color: rgba(0,0,0,0); padding: 0;}

    /* 테이블 초기화 */
    table {border-collapse: collapse; border-spacing:0; }

    /*반응형 이미지*/
    img, video {width: 100%;}

    /* clearfix */
    .clearfix{*zoom:1;}
    .clearfix:before, .clearfix:after { display: block; content: '';line-height: 0;}
    .clearfix:after {clear: both;}

    /*IR 효과 : 이미지 대체텍스트*/
    /*1. 의미있는 이미지의 대체 텍스트를 제공하는 경우*/
    .ir_pm {display: block;overflow: hidden; font-size: 0; line-height: 0; text-indent:-9999px;}
    /*2. 의미있는 이미지의 대체 텍스트로 이미지가 없어도 대체 텍스트를 보여주고자 할 때*/
    .ir_wa {display: block;overflow: hidden; position: relative; z-index: -1;
    width: 100%; height: 100%;}
    /*3.대체 텍스트가 아닌 접근성을 위한 숨김 텍스트를 제공할 때*/
    .ir_su {overflow: hidden; position: absolute; width: 0;height: 0;line-height: 0;text-indent: -9999px;}

    /* 전체 적용되는 스타일 */
    body {
        background-color: #FEFBF3;
    }

    .section {
        min-height: calc(100vh - 100px);
        flex: 1;
    }

    .container {
        width: 1240px;
        margin: 0 auto;
        
    }
    

    /* Project.js , Contact.js 공통 titleBox */
    .titleBox {
        text-align: center;
        padding: 150px 0 100px;
        h2.title{
            font-size: 3.5em;
        }
        h3.subTitle {
            font-size: 0.9em;
            margin-top: 20px;
        }
    }


`
export default Globalstyle