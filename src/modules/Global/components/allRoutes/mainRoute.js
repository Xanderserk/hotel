import React, { Component } from 'react';
import MainWrap from '../mainWrapper/mainWrap'
import MainPage from '../../../Main/pages/mainPage/mainPage';
import About from '../../../About/pages/about';
import { Route, HashRouter, Switch } from 'react-router-dom';
import Company from '../../../Company/pages/company';
import Account from '../../../Account/pages/account';
import Info from '../../../Info/pages/info';
import Login from '../../../Login/pages/login';
import RegistrationSuccess from '../../../RegistrationSuccess/pages/registrationSuccess';
import { ProfileForm } from '../../../Profile/pages/profileForm';

class MainRoute extends Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <HashRouter>
                <Switch>
                    <MainWrap
                        location={this.props.location}
                    >
                        <Switch>
                            <Route
                                exact={true}
                                path='/'
                                component={MainPage}
                            />
                            <Route
                                exact={true}
                                path='/account'
                                component={Account}
                            />
                            <Route
                                exact={true}
                                path='/about'
                                component={About}
                            />
                            <Route 
                                exact={true}
                                path='/company'
                                component={Company}
                            />
                            <Route 
                                exact={true}
                                path='/info'
                                component={Info}
                            />
                            <Route 
                                exact={true}
                                path='/login'
                                component={Login}
                            />
                            <Route 
                                exact={true}
                                path='/regSuccess'
                                component={RegistrationSuccess}
                            />
                            <Route 
                                exact={true}
                                path='/profile'
                                component={ProfileForm}
                            />
                        </Switch>
                    </MainWrap>
                </Switch>
            </HashRouter>
        )
    }
}

export default MainRoute;