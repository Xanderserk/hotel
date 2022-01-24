import React from 'react'
import './registrationSucsess.scss'
import { FlexBox } from '@thewhite/react-flex-layout'
import { NavLink } from 'react-router-dom'

class RegistrationSuccess extends React.Component {
    render() {
        return (
            <FlexBox
                column={'center center'}
                className={'registrationSuccess__wrapper'}
            >
                <FlexBox
                    column={'ctr'}
                    className={'registrationSuccess__box'}
                >
                    <h1>
                        Регистрация прошла успешно!
                    </h1>
                    <NavLink
                        to='/'
                    >
                        Перейти к бронированию
                    </NavLink>
                </FlexBox>
            </FlexBox>
        )
    }
}

export default RegistrationSuccess;