/** @jsxImportSource @emotion/react */
import { jsx } from 'theme-ui';
import React from 'react';

import { Slideshow } from './Slideshow';

export default {
    title: 'Slideshow',
    component: Slideshow,
};

export const Default = () => {
    const [currentIdx, setCurrentIdx] = React.useState(0);
    const data = [
        {
            image: 'http://via.placeholder.com/468x600?text=21',
        },
        {
            image: 'http://via.placeholder.com/468x600?text=22',
        },
        {
            image: 'http://via.placeholder.com/468x600?text=23',
        },
        {
            image: 'http://via.placeholder.com/468x600?text=24',
        },
    ];

    return (
        <div
            style={{ backgroundColor: '#333', width: '100vw', height: '100vh' }}
        >
            <Slideshow slides={data} currentIdx={currentIdx} />
        </div>
    );
};
