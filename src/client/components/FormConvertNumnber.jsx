import React, { Component } from 'react';
import { convertNumber } from '../utils/function';

class FormConvertNumnber extends Component {
    constructor(props) {
        super(props);
        this.state = { value: '' };
        this.handleUpdate = this.handleUpdate.bind(this);
    }

    handleUpdate(e) {
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    render() {
        const { value } = this.state;
        return (
            <div id="formConverterNumber">
                <div className="contact2-form validate-form">
                    <span className="contact2-form-title">Number to Word Converter</span>
                    <div className="wrap-input2 validate-input">
                        <input className={`input2 ${value ? 'has-val' : ''}`} type="text" name="value" value={value} onChange={this.handleUpdate} />
                        <span className="focus-input2" data-placeholder="INSERT VALUE" />
                    </div>

                    <div className="container-contact2-form-btn">
                        <div className="wrap-contact2-form-btn">
                            <div className="contact2-form-bgbtn" />
                            {convertNumber(value)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormConvertNumnber;
