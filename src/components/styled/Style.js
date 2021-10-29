import styled from 'styled-components'

export const MainHomeWrap = styled.div`
    position: relative;
    
`

export const HeaderBar = styled.header`
    width: 100%;
    background-color: #F8F0DF;
    .container {
        padding: 20px 0;
        h1 {
        float: left;
        font-weight: bold;
        }
        .Navi { 
            float: right;
                ul li {
                float: left;
                margin: 0 10px;
                
                &:nth-child(1) {
                    margin-left: 0;
                }
            }
        }
    }
`

export const FooterBar = styled.footer`
    position: relative;
    bottom: 0; left: 0;    
    background-color: #9d9d9d;
    width: 100%;
    height: 50px;
    text-align: center;
    padding: 15px 0;
    color: #fff;

`

export const Main = styled.div`
    div.titleBox {
        padding: 0;
        position: absolute;
        top: 40%; left: 50%;
        transform: translate(-50%, -50%);
        h2 {
            font-family:'Do Hyeon', sans-serif;
            font-weight: lighter;
            white-space: pre-wrap;
        }
        
    }
    .blink {
        animation: blink 0.5s infinite;
        font-size: 1em;
    }

    @keyframes blink {
        to {
            opacity: 0;
        }
    }
    
`

export const ProjectBox = styled.ul`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2rem 1rem;
    grid-auto-rows: minmax(300px, auto);
    place-items: center;
    margin-bottom: 80px;
    li {
        width: 380px;
        height: 350px;
        .proTitle{
            height: 60%;
            background-color: #79b4b7;
            text-align: center;
            color: #fff;
            display: flex;
            align-items: center;
            padding: 10px;
            h3 {
                font-size: 2em;
                width: 100%;
                text-align: center;
                word-break: break-word;
            }
        }
        .proBottom {
            height: 40%;
            background-color: #fff;
            padding: 20px;
            span {
                text-align: center;
                display: block;
                padding: 7px 0 0;
                overflow: hidden;
                text-overflow: ellipsis;
                display: -webkit-box;
                -webkit-box-orient: vertical;
                -webkit-line-clamp: 2;
                height: 4em;

            }
            .btns {
                display: flex;
                justify-content: center;
                margin-top: 15px;
                a {
                    display: block;
                    width: 100px;
                    text-align: center;
                    border: 1px solid #000;
                    padding: 5px 0;
                    &.viewBtn {
                        margin-right: 20px
                    }
                    &:hover {
                        background-color: gray;
                        border: 1px solid gray;
                        color: #ffffff;
                    }
                }
            }
            
        }
    }
`

export const ContactMe = styled.div`
    .contactBox {
        padding: 100px 0;
        ul {
            text-align: center;
            li {           
                display: inline-block;
                margin-right: 35px;
                &:last-child {
                    margin-right: 0;
                }
                span {
                    font-size: 32px;
                    margin-right: 12px;
                    vertical-align: middle;
                }
                p { 
                    display: inline-block;
                    font-size: 16px;
                    transition: all 0.3s;
                    &:hover {
                        color: #E02401;
                    }
                    
                }
                &:nth-child(3){
                        font-weight: bold;
                    }
            }
        }
    }
`