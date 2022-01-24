import React from 'react';
import { NavLink } from 'react-router-dom';
import { FlexBox } from '@thewhite/react-flex-layout';
import './servese.scss'


export class Servese extends React.Component {
    render() {
        return (
            <FlexBox
                node={'div'}
                row={'center center'}
                className={'service-button'}
            >
                Заселить без регистрации
            </FlexBox>
        )
    }
}