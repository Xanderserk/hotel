import React from 'react'
import './mainPageBooking.scss'
import { FlexBox } from '@thewhite/react-flex-layout';
import { MainPageBookingAction } from '../../actions/mainPageBookingActions'
import mainImg from '../../.././../assets/images/main-img.jpg'

class MainPageBooking extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            endDate: '',
            startDate: '',
        }
    }

    onSubmit = (event) => {
        console.log(this.state)
        event.preventDefault();
        let params = {
            endDate: this.state.endDate,
            startDate: this.state.startDate,
        };
        MainPageBookingAction.getAuthorizedUser(params);
    }

    render() {
        return (
            <FlexBox
                column={'ctr'}
                className={'booking__wrapper'}
            >
                <FlexBox
                    node={'form'}
                    column={'ctr'}
                    className={'booking__box'}
                    onSubmit={this.onSubmit}
                >
                    <h1>Забронировать комнату</h1>
                    <div
                        className='booking__check'
                    >
                        <p>
                            Дата приезда
                        </p> &nbsp; &nbsp;
                        <input
                            className='booking__input'
                            type='date'
                            name='startDate'
                            value={this.state.startDate}
                            onChange={(e) => this.setState(
                                { startDate: e?.target?.value ?? null },
                            )}
                        >
                        </input>
                    </div>
                    <br/>
                    <div
                        className='booking__check'
                    >
                        <p>
                            Дата отъезда
                        </p> &nbsp; &nbsp;
                        <input
                            className='booking__input'
                            type='date'
                            name='endDate'
                            value={this.state.endDate}
                            onChange={e => this.setState (
                                { endDate: e?.target?.value ?? null },
                            )}
                        >
                        </input>
                    </div>
                    <br />
                    <button
                        className='booking__button'
                        type='submit'
                        // onClick={() => console.log('Отправка данных на сервер')}
                    > 
                        Показать свободные комнаты
                    </button>
                </FlexBox>
            </FlexBox>
        )
    }
}

export default MainPageBooking;