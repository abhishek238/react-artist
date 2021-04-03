import React from 'react';
import {withRouter} from 'react-router-dom';
import {ExtraContainer} from './extra-page.styles';

const getExtraPageName = (slug) => {
    if (slug === '/drops') {
        return 'Drops';
    } else if (slug === '/profile') {
        return 'Profile';
    } else if (slug === '/rally-io') {
        return 'Rally.io';
    } else if (slug === '/login-signup') {
        return 'Log In & Sign Up';
    } else {
        return 'Unknown page';
    }
}

const ExtraPage = ({match}) => {
    return (
        <ExtraContainer>
            <h2>This route is reserved for {getExtraPageName(match.path)} Page</h2>
            <p>Once this page is ready, you will able to explore the page contents</p>
        </ExtraContainer>
    )
}

export default withRouter(ExtraPage);
