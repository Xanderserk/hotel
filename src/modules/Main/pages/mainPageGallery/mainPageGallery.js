import React from 'react';
import { FlexBox } from '@thewhite/react-flex-layout';
import './mainPageGallery.scss';

class MainPageGallery extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            arrImg: [
                'images/hotel-room-01.jpeg',
                'images/hotel-room-02.jpeg',
                'images/hotel-room-03.jpeg',
                'images/hotel-room-04.jpeg',
                'images/hotel-room-05.jpeg',
                'images/hotel-room-06.jpeg',
            ],
        }
    }

    render() {
        return (
            <div
                className='main-page-gallery__wrapper'
            >
                <FlexBox
                    node={'ul'}
                    row={'ctr'}
                    className={'main-page-gallery__advantage'}
                >
                    <li>
                        <i class="fa fa-coffee" aria-hidden="true"></i> 
                        &nbsp; Бесплатный завтрак
                    </li>
                    <li>
                        <i class="fa fa-wifi" aria-hidden="true"></i>
                        &nbsp; Бесплатный WI-FI
                    </li>
                    <li>
                    <i class="fa fa-leaf" aria-hidden="true"></i>
                        &nbsp; Приятная атмосфера
                    </li>
                </FlexBox>
                <FlexBox
                    node={'h1'}
                    column={'ctr'}
                >
                    Галерея
                </FlexBox>
                <FlexBox
                    rowWrap={'ctr'}
                >
                    {
                        this.state.arrImg.map((img, index) => {
                            return (
                                <img
                                    src={img}
                                    key={index}
                                    className={'main-page-gallery__img'}
                                />
                            )
                        })
                    }
                </FlexBox>
            </div>
        )
    }
}

export default MainPageGallery;
