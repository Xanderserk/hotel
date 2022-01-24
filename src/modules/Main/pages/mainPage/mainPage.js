import React from 'react';
import '../../../../index.scss'
import MainPageBooking from '../mainPageBooking/mainPageBooking';
import MainPageGallery from '../mainPageGallery/mainPageGallery';

class MainPage extends React.Component {
    render() {
        return(
            <div>
                <MainPageBooking />
                <MainPageGallery />
            </div>
        )
    }
}

export default MainPage;

// import { mainPageTemplate } from './mainPageTemplate';

// export default class MainPage extends React.Component {
//     constructor(props) {
//         super(props);

//         this.state = {
//             name: null,
//             number: 0,
//             boolean: false,
//         };
//     }

//     componentDidMount() {
//         this.newFunction({});
//     }

//     /**
//      * Просто банальная функция
//      * @param {*} params
//      */
//     newFunction = (params) => {
//         this.setState(
//             { name: 'Alex' },
//             () => console.log({ name: this.state.name }),
//         );
//         console.log({ name: this.state.name });
//     }

//     render() {
//         return mainPageTemplate(this);
//     }
// }