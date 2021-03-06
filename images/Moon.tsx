import * as React from 'react';

export const Moon = ({fillColor}) => {
    return (
        <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M13.42,9.88c-0.07-0.07-0.2-0.1-0.3-0.05c-0.85,0.47-1.82,0.72-2.82,0.72c-3.25,0-5.87-2.62-5.87-5.86
            c0-0.97,0.25-1.95,0.72-2.82c0.05-0.1,0.03-0.22-0.05-0.3C5.02,1.5,4.9,1.48,4.8,1.53C2.77,2.67,1.5,4.82,1.5,7.14
            c0,3.52,2.85,6.36,6.37,6.36c2.32,0,4.47-1.27,5.6-3.32C13.52,10.08,13.5,9.96,13.42,9.88z" fill={fillColor}/>
            <rect width="15" height="15"/>
        </svg>
    );
};
