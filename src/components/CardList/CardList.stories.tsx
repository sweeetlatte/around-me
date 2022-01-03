import React from 'react';

import { CardList } from './CardList';

export default {
    title: 'CardList',
    component: CardList,
};

export const Default = () => {
    const [currentIdx, setCurrentIdx] = React.useState(0);
    // const description =
    // React.useEffect(() => {
    //     setTimeout(() => {
    //         setCurrentIdx((currentIdx + 1) % data.length);
    //     }, 1000)
    // }, [currentIdx])

    return (
        <div
            style={{ backgroundColor: '#333', width: '100vw', height: '100vh' }}
        >
            <CardList
                width="100vw"
                list={[
                    {
                        title: '1',
                        rate: 4,
                        image: 'https://via.placeholder.com/468x600?text=1',
                    },
                    {
                        title: '1',
                        rate: 4,
                        image: 'https://via.placeholder.com/468x600?text=1',
                    },
                    {
                        title: '1',
                        rate: 4,
                        image: 'https://via.placeholder.com/468x600?text=1',
                    },
                    {
                        title: '1',
                        rate: 4,
                        image: 'https://via.placeholder.com/468x600?text=1',
                    },
                ]}
            />
        </div>
    );
};