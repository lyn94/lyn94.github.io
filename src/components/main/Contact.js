import React from 'react';
import { ContactMe } from '../styled/Style'
import { AiOutlineMail, AiOutlineGithub, AiOutlinePhone } from "react-icons/ai";

const Contact = () => {
    return (
        <ContactMe className="ContactWrap">
            <div className="titleBox">
                <h2 className="title">Contact Me</h2>
                <h3 className="subTitle">궁금한 점이 있으시다면, 언제든 연락주세요.</h3>
            </div>
            
            <div className="contactBox">
                <ul>
                    <li>
                        <span><AiOutlineMail /></span>
                        <p><a href="mailto:lyn_94@naver.com">lyn_94@naver.com</a></p>
                    </li>
                    <li>
                        <span><AiOutlineGithub /></span>
                        <p><a href="https://github.com/lyn94">https://github.com/lyn94</a></p>
                    </li>
                    <li>
                        <span><AiOutlinePhone /></span>
                        <p>Please refer to my resume.</p>
                    </li>
                </ul>
            </div>
        </ContactMe>
    );
};

export default Contact;