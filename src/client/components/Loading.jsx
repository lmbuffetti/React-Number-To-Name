import React from 'react';
import Logo from '../../assets/images/logo.svg';

export const Loading = () => (
    <section className="spinner-wrapper">
        <div id="loading">
            <div id="loading-center">
                <div id="loading-center-absolute">
                    <img src={Logo} alt="Loading" />
                    <div className="object" />
                    <div className="object" />
                    <div className="object" />
                    <div className="object" />
                    <div className="object" />
                    <div className="object" />
                    <div className="object" />
                    <div className="object" />
                    <div className="object" />
                    <div className="object" />
                </div>
            </div>
        </div>
    </section>
);
