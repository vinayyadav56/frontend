import React from 'react';
import './loader.css';

export const Loader = () => {
    return (
        <div className="ipl-progress-indicator" id="progress-indicator">
            <div className="ipl-progress-indicator-head">
                <div className="first-indicator"></div>
                <div className="second-indicator"></div>
            </div>
        </div>
    );
}
