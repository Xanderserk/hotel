import React from 'react';
import { NavLink } from 'react-router-dom';
import { FlexBox } from '@thewhite/react-flex-layout';
import './reservedRooms.scss'

export class ReservedRooms extends React.Component {
    render() {
        return (
            <FlexBox
                node={'div'}
                className={'reserved-rooms'}
            >
                <FlexBox
                    node={'div'}
                    row={'start center'}
                    className={'reserved-rooms-title'}
                >
                    Забронированные комнаты
                </FlexBox>
                <FlexBox
                    node={'table'}
                    className={'reserved-rooms-table'}
                >
                    <tr
                        className={'reserved-rooms-table-main'}
                    >
                        <td>ФИО</td>
                        <td>Дата приезда</td>
                        <td>Дата отъезда</td>
                        <td>К оплате</td>
                        <td>Метод оплаты</td>
                        <td>Подробнее</td>
                    </tr>
                    <tr>
                        <td
                            className={'reserved-rooms-table-main--bold'}
                        >
                            Иванов Иван Иванович
                        </td>
                        <td>01.01.2021</td>
                        <td>05.01.2021</td>
                        <td>3300</td>
                        <td>На ресепшене</td>
                        <td>Подробнее</td>
                    </tr>
                    <tr>
                        <td
                            className={'reserved-rooms-table-main--bold'}
                        >
                            Орехов Пётр Сергеевич
                        </td>
                        <td>01.01.2021</td>
                        <td>05.01.2021</td>
                        <td>3300</td>
                        <td>Картой</td>
                        <td>Подробнее</td>
                    </tr>
                    <tr>
                        <td
                            className={'reserved-rooms-table-main--bold'}
                        >
                            Данилов Данил Данилович
                        </td>
                        <td>01.01.2021</td>
                        <td>05.01.2021</td>
                        <td>3300</td>
                        <td>На ресепшене</td>
                        <td>Подробнее</td>
                    </tr>
                </FlexBox>
            </FlexBox>
        )
    }
}