import React from 'react';
import { NavLink } from 'react-router-dom';
import { FlexBox } from '@thewhite/react-flex-layout';
import './roomList.scss'

export class RoomsList extends React.Component {
    render() {
        return (
            <FlexBox
            node={'div'}
            className={'room-list'}
        >
            <FlexBox
                node={'div'}
                row={'start center'}
                className={'room-list-title'}
            >
                Все комнаты
            </FlexBox>
            <FlexBox
                node={'table'}
                className={'room-list-table'}
            >
                <tr
                    className={'room-list-table-main'}
                >
                    <td>Номер комнаты</td>
                    <td>Этаж</td>
                    <td>Количество кроватей</td>
                    <td>Наличие TV</td>
                    <td>Наличие балкона</td>
                    <td>Наличие холодильника</td>
                    <td>Готова к бронированию</td>
                    <td>Запретить / разрешить бронь</td>
                </tr>
                <tr>
                    <td
                        className={'room-list-table-main--bold'}
                    >
                        1
                    </td>
                    <td>1</td>
                    <td>2</td>
                    <td>+</td>
                    <td>+</td>
                    <td>-</td>
                    <td>+</td>
                    <td>Сменить статус</td>
                </tr>
                <tr>
                    <td
                        className={'room-list-table-main--bold'}
                    >
                        2
                    </td>
                    <td>1</td>
                    <td>1</td>
                    <td>+</td>
                    <td>-</td>
                    <td>+</td>
                    <td>+</td>
                    <td>Сменить статус</td>
                </tr>
                <tr>
                    <td
                        className={'room-list-table-main--bold'}
                    >
                        3
                    </td>
                    <td>2</td>
                    <td>2</td>
                    <td>-</td>
                    <td>+</td>
                    <td>-</td>
                    <td>+</td>
                    <td>Сменить статус</td>
                </tr>
            </FlexBox>
        </FlexBox>
        )
    }
}