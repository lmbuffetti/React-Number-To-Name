import React, { Component } from 'react';
import { numberToEnglish } from '../utils/function';

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
                <div className="formConverter validate-form">
                    <span className="formConverter-title">Number to Word Converter</span>
                    <div className="wrap-input validate-input">
                        <input className={`input ${value ? 'has-val' : ''}`} type="text" name="value" value={value} onChange={this.handleUpdate} />
                        <span className="focus-input" data-placeholder="INSERT VALUE" />
                    </div>

                    <div className="container-formConverter-btn">
                        <div className="wrap-formConverter-btn">
                            <div className="formConverter-bgbtn" />
                            {numberToEnglish(value)}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FormConvertNumnber;
