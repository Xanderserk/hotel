import React from 'react';
import { NavLink } from 'react-router-dom';
import { FlexBox } from '@thewhite/react-flex-layout';
import './aboutProfile.scss'

export class AboutProfile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            oldPassword: null,
            newPassword: null,
            trueNewPassword: null
        }
    }
    render() {
        return (
            <FlexBox
                node={'div'}
                className={'about-profile'}
            >
                <FlexBox
                node={'div'}
                row={'start center'}
                className={'about-profile-title'}
                >
                    Профиль
                </FlexBox>
                <FlexBox
                    node={'div'}
                    className={'about-profile__form'}
                >
                    <FlexBox
                    node={'div'}
                    row={'start center'}
                    className={'about-profile__form-title'}
                    >
                        Изменить пароль
                    </FlexBox>
                    <FlexBox
                        node={'div'}
                        row={'start center'}
                        className={'about-profile__form-container'}
                    >
                        <FlexBox
                            node={'div'}
                            className={'about-profile__form-container-wrapper'}
                        >
                            <p
                                className='about-profile__form-container--labels'
                            >
                                Действующий пароль
                            </p>
                            <input
                                className='about-profile__form-container--inputs'
                                placeholder='Пароль'
                                type='password'
                                name='password'
                                onChange={(e) => this.setState(
                                    { oldPassword: e?.target?.value ?? null },
                                )}
                            />
                        </FlexBox>
                        <FlexBox
                            node={'div'}
                            className={'about-profile__form-container-wrapper'}
                        >
                        <p
                            className='about-profile__form-container--labels'
                        >
                            Новый пароль
                        </p>
                        <input
                            className='about-profile__form-container--inputs'
                            placeholder='Новый пароль'
                            type='password'
                            name='password'
                            onChange={(e) => this.setState(
                                { newPassword: e?.target?.value ?? null },
                            )}
                        />
                        </FlexBox>
                        <FlexBox
                            node={'div'}
                            className={'about-profile__form-container-wrapper'}
                        >
                        <p
                            className='about-profile__form-container--labels'
                        >
                            Новый пароль еще раз
                        </p>
                        <input
                            className='about-profile__form-container--inputs'
                            placeholder='Новый пароль'
                            type='password'
                            name='password'
                            onChange={(e) => this.setState(
                                { trueNewPassword: e?.target?.value ?? null },
                            )}
                        />
                        </FlexBox>
                        <FlexBox
                            node={'button'}
                            className={'about-profile__form-container-button'}
                        >
                            Изменить
                        </FlexBox>
                    </FlexBox>
                </FlexBox>
            </FlexBox>
        )
    }
}
