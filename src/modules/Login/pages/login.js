import React from 'react';
import './login.scss'
import { FlexBox } from '@thewhite/react-flex-layout';
import { NavLink } from 'react-router-dom';
import { LoginAction } from './actions/loginAction';
import { AuthService } from './authService/authService';

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: null,
            password: null,
        }
    }

    userAuthorization = (event) => {
        console.log('запущена функция userAuthorization');
        event.preventDefault();
        LoginAction.getAuthorizationAccessUser(this.state.username, this.state.password)
            .then((res) => {
                    AuthService.setToken(res);
                    window.open(`${window.location.pathname}#/profile`, '_self')
                    AuthService.CHECK_USER = true;
                }
            )
            .catch((err) => console.log(err))
    }

    render() {
        return(
            <FlexBox
                column={'center center'}
                className={'login__wrapper'}
            >
                <FlexBox
                    node={'form'}
                    column={'ctr'}
                    className={'login__box'}
                >
                    <h1>
                        Введите логин и пароль
                    </h1>
                    <NavLink 
                        to='/account'
                    >
                        Перейти к регистрации
                    </NavLink>
                    <FlexBox
                        column={'ctr'}
                        className='login__box-wrapper'
                    >
                        <FlexBox
                            node={'div'}
                            rowWrap={'ctr'}
                            className='login__box-input-block'
                        >
                            <FlexBox
                                node={'div'}
                                column={'start start'}
                                className='login__box-input'
                            >
                                <p
                                    className='login__box-item'
                                >
                                    Логин
                                </p>
                                <input
                                    className='login__input'
                                    placeholder='Логин'
                                    name='username'
                                    onChange={(e) => this.setState(
                                        {username: e?.target?.value ?? null },
                                    )}
                                />
                            </FlexBox>
                        </FlexBox>
                        <FlexBox
                            node={'div'}
                            rowWrap={'ctr'}
                            className={'login__box-input-block'}
                        >
                            <FlexBox
                                node={'div'}
                                column={'start start'}
                                className='login__box-input'
                            >
                                <p
                                    className='login__box-item'
                                >
                                    Пароль
                                </p>
                                <input
                                    className='login__input'
                                    placeholder='Пароль'
                                    type='password'
                                    name='password'
                                    onChange={(e) => this.setState(
                                        { password: e?.target?.value ?? null },
                                    )}
                                />
                            </FlexBox>
                        </FlexBox>
                        <br />
                        <button
                            className='login__button'
                            onClick={this.userAuthorization}
                        > 
                            Войти в личный кабинет
                        </button>
                    </FlexBox>
                </FlexBox>
            </FlexBox>
        )
    }
}

export default Login;