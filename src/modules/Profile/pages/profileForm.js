import React from 'react';
import '../../../index.scss'
import { NavLink } from 'react-router-dom';
import { FlexBox } from '@thewhite/react-flex-layout';
import { AuthService } from '../../Login/pages/authService/authService';
import './profileForm.scss';
import classnames from 'classnames';
import { ReservedRooms } from './windows/reservedRooms/reservedRooms';
import { Servese } from './windows/servese/servese';
import { RoomsList } from './windows/roomList/roomsList';
import { AboutProfile } from './windows/aboutProfile/aboutProfile';



export class ProfileForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            profileFormButtons:
                [
                    {
                        name: 'Забронированные комнаты',
                        active: true
                    },
                    {
                        name: 'Сервис',
                        active: false
                    },
                    {
                        name:'Список комнат',
                        active: false
                    },
                    {
                        name: 'Профиль',
                        active: false
                    },
                ]
        }
    }

    buttonSelect(serialIndex) {
        this.state.profileFormButtons.map((item, index) => {
            index === serialIndex
                ? item.active = true
                : item.active = false

                console.log(item)
        })
    }

    render() {
        return(
            <FlexBox
                node={'div'}
                column={'space-around center'}
                className={'profile-form'}
            >
                <FlexBox
                    node={'header'}
                    row={'space-between center'}
                    className={'profile-form__header'}
                >
                    <FlexBox
                        node={'div'}
                        className={'profile-form__header-title'}
                    >
                        Кабинет сотрудника
                    </FlexBox>
                    <FlexBox
                        node={'div'}
                        row={'center center'}
                        className={'profile-form__header-container'}
                    >
                        <FlexBox
                            node={'div'}
                            className={'profile-form__header-container-username'}
                        >
                            Пользователь:
                        </FlexBox>
                        <FlexBox
                            node={'button'}
                            className={'profile-form__header-container-exit'}
                            onClick={AuthService.logOut}
                        >
                            Выйти
                        </FlexBox>
                    </FlexBox>
                </FlexBox>
                <FlexBox
                    node={'div'}
                    row={'space-between start'}
                    className={'profile-form__form'}
                >
                    <FlexBox
                        node={'div'}
                        column={'space-around center'}
                        className={'profile-form__form-menu'}
                    >
                        {
                            this.state.profileFormButtons.map(((item, index) => {
                                console.log(item)
                                return(
                                    <FlexBox
                                        key={index}
                                        className={classnames(
                                            'profile-form__form-menu-buttons',
                                            {'profile-form__form-menu-buttons--selected': item.active}
                                        )}
                                        row={'center center'}
                                        onClick={() => {
                                            this.buttonSelect(index);
                                            this.setState({profileFormButtons: this.state.profileFormButtons});
                                        }}
                                    >
                                        {item.name}
                                    </FlexBox>
                                )
                            }))
                        }
                    </FlexBox>
                    <FlexBox
                            node={'div'}
                            className={'profile-form__form-window'}
                    >
                        {
                            this.state.profileFormButtons.map((item) => {
                                if (item.name === 'Забронированные комнаты' && item.active === true) {
                                    return (
                                        <ReservedRooms />
                                    )
                                }
                                if (item.name === 'Сервис' && item.active === true) {
                                    return (
                                        <Servese />
                                    )
                                }
                                if (item.name === 'Список комнат' && item.active === true) {
                                    return (
                                        <RoomsList />
                                    )
                                }
                                if (item.name === 'Профиль' && item.active === true) {
                                    return (
                                        <AboutProfile />
                                    )
                                }
                            })
                            
                        } 
                    </FlexBox>
                </FlexBox>
            </FlexBox>
        )
    }
}