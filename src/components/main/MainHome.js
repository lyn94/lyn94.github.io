import React from 'react';
import Container from './Container';
import Header from './Header';
import Footer from './Footer'
import { MainHomeWrap } from '../styled/Style'

const MainHome = () => {
    return (
        <MainHomeWrap>
            <Header />
            <Container />
            <Footer />
        </MainHomeWrap>
    );
};

export default MainHome;