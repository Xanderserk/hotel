import React from 'react';
import { NavLink } from 'react-router-dom';
import { FlexBox } from '@thewhite/react-flex-layout';
import './header.scss'

function Header() {
    return (
        <FlexBox
            node={'header'}
            row={'space-around center'}
            className={'header'}
        >
            <FlexBox
                node={'div'}
                row={'center center'}
                className={'header-wrap'}
            >
                <img
                    src='./images/hotel-logo.png'
                    alt={'Hotel logo'}
                    className={'header-logo'}
                />
                <FlexBox
                node={'div'}
                row={'center center'}
                className={'header-title'}
            >
                Гостиница
            </FlexBox>
                <nav
                    className={'header-navigation'}
                >
                    <FlexBox
                        node={'ul'}
                        row={'center center'}
                        className={'header-nav__links'}
                    >
                        <li
                            className={'header-nav__link'}
                        >
                            <NavLink
                                to='/'
                                className={'header-nav__link-text'}
                            >
                                    Домой
                            </NavLink>
                        </li>
                        <li
                            className={'header-nav__link'}
                        >
                            <NavLink
                                to='/account'
                                className={'header-nav__link-text'}
                            >
                                    Личный кабинет
                            </NavLink>
                        </li>
                        <li
                            className={'header-nav__link'}
                        >
                            <NavLink
                                to='/about'
                                className={'header-nav__link-text'}
                            >
                                    О нас
                            </NavLink>
                        </li>
                    </FlexBox>
                </nav>
            </FlexBox>
            <FlexBox
                node={'div'}
                row={'center center'}
                className={'header-info'}
            >
                +7 (999)-888-88-88 | Хабаровск, ул. Комсомольская 73Б
            </FlexBox>
        </FlexBox>
    )
}

export default Header;