import React, { Component } from 'react';
import Loadable from 'react-loadable';
import { Loading } from '../../components/Loading';

const FormConvert = Loadable({
    loader: () => import('../../components/FormConvertNumnber'),
    loading: Loading,
});

class Home extends Component {
    render() {
        return (
            <div className="bg-home">
                <div className="container-home">
                    <div className="wrap-home">
                        <FormConvert />
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
