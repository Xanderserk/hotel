import React from 'react';

export class AuthService extends React.Component {

    static CHECK_USER = false;

    /**
     * Записываем информацию по токену 
     */
    static setToken(res) {
        let token = res.access_token;
        if (!res) {
            token = null
        }

        localStorage.setItem('token', JSON.stringify(token));
    }

    /**
     * Выходим из учетки
     */
    static logOut() {
        localStorage.removeItem('token');
        window.open(`${window.location.pathname}#/login`, '_self')
    }
}