import React from 'react';

import {
    HeaderContainer,
    OptionsContainer,
    OptionLink
} from './header.styles';
import {Col, Row} from "react-bootstrap";
import {Search} from 'react-bootstrap-icons';
import {ReactComponent as Logo} from '../../logo.svg';

const Header = (props) => (
    <HeaderContainer>
        <OptionsContainer>
            <Row>
                <Col lg={3} md={2}>
                    <OptionLink to={'/'}>
                        <Logo style={{height: '24px'}}/>
                    </OptionLink>
                </Col>
                <Col lg={6} md={7}>
                    <OptionLink to='/drops'>Drops</OptionLink>
                    <OptionLink to='/marketplace'>Marketplace</OptionLink>
                    <OptionLink to='/profile'>Profile</OptionLink>
                    <OptionLink to='/rally-io'>Rally.io</OptionLink>
                </Col>
                <Col lg={1}>
                    <OptionLink to='#'>
                        <Search color="white" size={22}/>
                    </OptionLink>
                </Col>
                <Col lg={2}>
                    <OptionLink to='/login-signup'>Login / Sign Up</OptionLink>
                </Col>
            </Row>
        </OptionsContainer>
    </HeaderContainer>
);

export default Header;