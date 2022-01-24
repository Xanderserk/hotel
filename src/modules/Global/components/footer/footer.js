import { FlexBox } from '@thewhite/react-flex-layout';
import React from 'react';
import { NavLink } from 'react-router-dom';
import './footer.scss';

function Footer() {
    return (
        <footer
            className='footer__wrapper'
        >
            <FlexBox
                node={'nav'}
                row={'ctr'}
                className='footer__block'
            >
                <FlexBox
                    node={'ul'}
                    row={'ctr'}
                    className='footer__links'
                >
                    <li>
                        <NavLink
                            to='/company'
                            className='footer__links-text'
                        >
                            О компании
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/account'
                            className='footer__links-text'
                        >
                            Личный кабинет
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/info'
                            className='footer__links-text'
                        >
                            Правовая информация
                        </NavLink>
                    </li>
                </FlexBox>
            </FlexBox>
            <img
                    src='./images/footer-image.png'
                    alt={'Footer'}
                    className={'footer-image'}
                />
            <FlexBox
                node={'div'}
                row={'start center'}
                className='footer__copyright'
            >
            &copy; 2021 Copyright: &nbsp;
                <a 
                    href='https://thewhite.ru/'
                >
                    https://github.com/Xanderserk
                </a>
            </FlexBox>
        </footer>
    )
}

export default Footer;