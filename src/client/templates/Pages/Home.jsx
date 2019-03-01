import React, { Component } from 'react';
import FormConvert from '../../components/FormConvertNumnber';

class Home extends Component {
    render() {
        return (
            <div className="bg-contact2">
                <div className="container-contact2">
                    <div className="wrap-contact2">
                        <FormConvert />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
