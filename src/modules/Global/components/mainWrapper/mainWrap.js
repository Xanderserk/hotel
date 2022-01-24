import React from 'react';
import Header from '../header/header';
import Footer from '../footer/footer';
import './mainWrap.scss'

class MainWrap extends React.Component {
    // eslint-disable-next-line
    constructor(props) {
        super(props);
    };

    // componentDidMount() {
    //     // console.log({ props: this.props });
    // }

    render() {
        return (
            <div
                className='main-wrap'
            >
                <Header />
                <div
                    className='main-wrap__content'
                >
                    {this.props.children}
                </div>
                <Footer />
            </div>
        );
    }
}

export default MainWrap;