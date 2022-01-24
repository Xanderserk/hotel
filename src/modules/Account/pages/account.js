import React from 'react';
import { FlexBox } from '@thewhite/react-flex-layout';
import './account.scss'
import { NavLink } from 'react-router-dom';
import { AccountAction } from '../actions/accountActions';

class Account extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            firstName: '',
            login: '',
            middleName: '',
            password: '',
            passwordCheck: '',
            phone: '',
            secondName: '',
            validate: false,
        }
    }

    onSubmit = (event) => {
        console.log('запущена функция onSubmit');
        event.preventDefault();
        let params = {
            email: this.state.email,
            firstName: this.state.firstName,
            login: this.state.login,
            middleName: this.state.middleName,
            password: this.state.password,
            phone: this.state.phone,
            secondName: this.state.secondName,
        };
        
        AccountAction.getAuthorizedUser(params)
            .then((Response) => {
                console.log('1');
                Response.ok
                    ? window.open(`${window.location.pathname}#/regSuccess`, '_self')
                    : console.log('ошибка!');
            });
            
    }

    render() {
        console.log(this.state);
        return (
            <FlexBox
                column={'center center'}
                className={'account__wrapper'}
            >
                <FlexBox
                    column={'ctr'}
                    className={'account__box'}
                >
                    <h1>
                        Регистрация
                    </h1>
                    <NavLink 
                        to='/login'
                    >
                        У меня уже есть аккаунт
                    </NavLink>
                    <FlexBox
                        node={'form'}
                        column={'ctr'}
                        className='account__box-wrapper'
                        onSubmit={this.onSubmit}
                    >
                        <FlexBox
                            rowWrap={'ctr'}
                            className={'account__box-input-block'}
                        >
                            <FlexBox
                                column={'start start'}
                                className='account__box-input'
                            >
                                <p
                                    className='account__box-item'
                                >
                                    Имя
                                </p>
                                <input
                                    className='account__input'
                                    placeholder='Имя'
                                    name='firstName'
                                    value={this.state.firstName}
                                    onChange={(e) => this.setState(
                                        { firstName: e?.target?.value ?? null },
                                    )}
                                />
                            </FlexBox>
                            <FlexBox
                                column={'start start'}
                                className='account__box-input'
                            >
                                <p
                                    className='account__box-item'
                                >
                                    Фамилия
                                </p>
                                <input
                                    className='account__input'
                                    placeholder='Фамилия'
                                    name='secondName'
                                    value={this.state.secondName}
                                    onChange={(e) => this.setState(
                                        { secondName: e?.target?.value ?? null },
                                    )}
                                />
                            </FlexBox>
                            <FlexBox
                                column={'start start'}
                                className='account__box-input'
                            >
                                <p
                                    className='account__box-item'
                                    >
                                    Отчество
                                </p>
                                <input
                                    className='account__input'
                                    placeholder='Отчество'
                                    name='middleName'
                                    value={this.state.middleName}
                                    onChange={(e) => this.setState(
                                        { middleName: e?.target?.value ?? null }
                                    )}
                                />
                            </FlexBox>
                        </FlexBox>
                        <FlexBox
                            rowWrap={'ctr'}
                            className='account__box-input-block'
                        >
                            <FlexBox
                                column={'start start'}
                                className='account__box-input'
                            >
                                <p
                                    className='account__box-item'
                                >
                                    Логин
                                </p>
                                <input
                                    className='account__input'
                                    placeholder='Логин'
                                    name='login'
                                    value={this.state.login}
                                    onChange={(e) => this.setState(
                                        { login: e?.target?.value ?? null },
                                    )}
                                />
                            </FlexBox>
                            <FlexBox
                                column={'start start'}
                                className='account__box-input'
                            >
                                <p
                                    className='account__box-item'
                                >
                                    Телефон
                                </p>
                                <input
                                    className='account__input'
                                    placeholder='Телефон'
                                    name='phone'
                                    value={this.state.phone}
                                    onChange={(e) => this.setState(
                                        { phone: e?.target?.value ?? null },
                                    )}
                                />
                            </FlexBox>
                            <FlexBox
                                column={'start start'}
                                className='account__box-input'
                            >
                                <p
                                    className='account__box-item'
                                >
                                    E-mail
                                </p>
                                <input
                                    className='account__input'
                                    placeholder='email'
                                    name='email'
                                    value={this.state.email}
                                    onChange={(e) => this.setState(
                                        { email: e?.target?.value ?? null },
                                        // () => console.log({ email: this.state.email }),
                                    )}
                                />
                            </FlexBox>
                        </FlexBox>
                        <FlexBox
                            rowWrap={'ctr'}
                            className={'account__box-input-block'}
                        >
                            <FlexBox
                                column={'start start'}
                                className='account__box-input'
                            >
                                <p
                                    className='account__box-item'
                                >
                                    Пароль
                                </p>
                                <input
                                    className='account__input'
                                    placeholder='Пароль'
                                    type='password'
                                    name='password'
                                    value={this.state.password}
                                    onChange={e => this.setState(
                                        { password: e?.target?.value ?? null }
                                    )}
                                />
                            </FlexBox>
                            <FlexBox
                                column={'start start'}
                                className='account__box-input'
                            >
                                <p
                                    className='account__box-item'
                                >
                                    Повтор пароля
                                </p>
                                <input
                                    className='account__input'
                                    placeholder='Повтор пароля'
                                    type='password'
                                    name='passwordCheck'
                                    value={this.state.passwordCheck}
                                    onChange={e => this.setState(
                                        { passwordCheck: e.target.value },
                                    )}
                                />
                            </FlexBox>
                        </FlexBox>
                        <div
                        className='little-red-alert__wrapper'
                        >
                        {
                            this.state.password != this.state.passwordCheck &&
                            <div
                                className='little-red-alert'
                            >
                                Пароль не совпадает
                            </div>
                        }
                        </div>
                        <br />
                        <button
                            className='account__button'
                            // onClick={() => this.onSubmit()}
                            type='submit'
                        > 
                            Зарегистрироваться
                        </button>
                    </FlexBox>
                </FlexBox>
            </FlexBox>
        )
    }
}

export default Account;
