import React from 'react'

import { Headings } from './Headings';

export default {
    title: 'Headings',
    component: Headings,
};

export const Default = () => {
    const [currentIdx, setCurrentIdx] = React.useState(0);
    const description = 'When sugar was first introduced to England in the twelfth century, it was grouped with other tropical spices like ginger, cinnamon, and saffron, and used by the very wealthy to season savory dishes.'
    const data = [
        { title: 'Canada', description },
        { title: 'Sweden', description },
        { title: 'Norway', description },
        { title: 'Switzerland', description },
        { title: 'Finland', description },
        { title: 'Germany', description }
    ];
    React.useEffect(() => {
        setTimeout(() => {
            setCurrentIdx((currentIdx + 1) % data.length);
        }, 1000)
    }, [currentIdx])

    return (
        <div style={{ backgroundColor: '#333', width: '100vw', height: '100vh' }}>
            <Headings 
                data={data} 
                currentIdx={currentIdx} 
            />
        </div>
    )
}
