import React from 'react';
import {Route, Switch} from "react-router-dom";

import './App.scss';

import Header from './components/header/header.component';
import MarketplacePage from './pages/marketplace/marketplace.component';
import ExtraPage from './pages/extra-page/extra-page.component';
import {Container} from "react-bootstrap";

class App extends React.Component {

    render() {
        return (
            <Container fluid>
                <Header/>
                <Switch>
                    <Route exact path='/' component={MarketplacePage}/>
                    <Route exact path='/drops' component={ExtraPage}/>
                    <Route exact path='/marketplace' component={MarketplacePage}/>
                    <Route exact path='/profile' component={ExtraPage}/>
                    <Route exact path='/rally-io' component={ExtraPage}/>
                    <Route exact path='/login-signup' component={ExtraPage}/>
                </Switch>
            </Container>
        );
    }
}

export default App;