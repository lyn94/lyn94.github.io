import React, { useEffect, useState } from 'react';
import { Main } from '../styled/Style'
import '../utils/js/myScript'

const Intro = () => {
    // 타이핑효과
    const txt = '안녕하세요,\n 프론트엔드 개발자 이유나 입니다.'
    const [ text, setText ] = useState('')
    const [ count, setCount ] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setText(text + txt[count]); // 이전 set한 문자 + 다음 문자
            setCount(count + 1); // 개수 만큼 체크 
        }, 100);
        if (count === txt.length)  {  // Count를 따로 두지 않고 Text.length 체크도 가능
            clearInterval(interval); // 문자열 체크를 통해 setInterval을 해제합니다
        }
        return () => clearInterval(interval); // 언마운트시 setInterval을 해제합니다
    })
    
    
    return (
        <Main>
            <div className="titleBox">
                <h2 className="title"> { text } <span class="blink">|</span></h2>
            </div>
            
        </Main>
    );
};

export default Intro;