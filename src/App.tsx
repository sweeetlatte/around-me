import React, { useState } from 'react';
import './App.css';
import { Box, Flex } from 'theme-ui';
import { Indicators } from './components/Indicators/Indicators';
import { Headings } from './components/Headings/Headings';
import { CardList } from './components/CardList/CardList';
import { Slideshow } from './components/Slideshow/Slideshow';

const data = [
    {
        title: 'Canada',
        buttonColor: '#c8d4db',
        description:
            'Canada is a country in North America that extends from the Atlantic Ocean in the east, to the Pacific Ocean in the west.',
        image: '/images/canada-bg.jpg',
        item: [
            {
                title: '11',
                rate: 4,
                image: '/images/canada-4.jpg',
            },
            {
                title: '11',
                rate: 4,
                image: '/images/canada-1.jpg',
            },
            {
                title: '12',
                rate: 4,
                image: '/images/canada-2.jpg',
            },
            {
                title: '14',
                rate: 4,
                image: '/images/canada-3.jpg',
            },
        ],
    },
    {
        title: 'Sweden',
        buttonColor: '#dcb3c0',
        description:
            'Sweden is a country located in Northern Europe bordering the Baltic Sea, Gulf of Bothnia, Kattegat, and Skagerrak.',
        image: '/images/sweden-bg.jpg',
        item: [
            {
                title: '21',
                rate: 4,
                image: '/images/sweden-3.jpg',
            },
            {
                title: '22',
                rate: 4,
                image: '/images/sweden-4.jpg',
            },
            {
                title: '23',
                rate: 4,
                image: '/images/sweden-2.jpg',
            },
            {
                title: '24',
                rate: 4,
                image: '/images/sweden-1.jpg',
            },
        ],
    },
    {
        title: 'Norway',
        buttonColor: '#88b2d8',
        description:
            'Norway is a country in Northern Europe occupying the western portion of the Scandinavian Peninsula.',
        image: '/images/norway-bg.jpg',
        item: [
            {
                title: '31',
                rate: 4,
                image: '/images/norway-1.jpg',
            },
            {
                title: '33',
                rate: 4,
                image: '/images/norway-2.jpg',
            },
            {
                title: '33',
                rate: 4,
                image: '/images/norway-3.jpg',
            },
            {
                title: '34',
                rate: 4,
                image: '/images/norway-4.jpg',
            },
        ],
    },
    {
        title: 'Switzerland',
        buttonColor: '#dcceb6',
        description:
            'Switzerland is a landlocked country in Central Europe. Neighboring countries include Austria, France, Italy.',
        image: '/images/swit-bg.jpg',
        item: [
            {
                title: '41',
                rate: 4,
                image: '/images/swit-1.jpg',
            },
            {
                title: '44',
                rate: 4,
                image: '/images/swit-2.jpg',
            },
            {
                title: '43',
                rate: 4,
                image: '/images/swit-3.jpg',
            },
            {
                title: '44',
                rate: 4,
                image: '/images/swit-4.jpg',
            },
        ],
    },
    {
        title: 'Finland',
        buttonColor: '#8c9cac',
        description:
            'Finland is a country located in Northern Europe bordering the Baltic Sea, Gulf of Bothnia, and the Gulf of Finland.',
        image: '/images/fin-bg.jpg',
        item: [
            {
                title: '51',
                rate: 4,
                image: '/images/fin-1.jpg',
            },
            {
                title: '55',
                rate: 4,
                image: '/images/fin-2.jpg',
            },
            {
                title: '53',
                rate: 4,
                image: '/images/fin-3.jpg',
            },
            {
                title: '54',
                rate: 4,
                image: '/images/fin-4.jpg',
            },
        ],
    },
    {
        title: 'Germany',
        buttonColor: '#c5d3db',
        description:
            'Germany is a country located in the heart of Western Europe. It is bordered by Denmark, Poland, Czechia, Austria, Switzerland.',
        image: '/images/ger-bg.jpg',
        item: [
            {
                title: '61',
                rate: 4,
                image: '/images/ger-1.jpg',
            },
            {
                title: '66',
                rate: 4,
                image: '/images/ger-2.jpg',
            },
            {
                title: '63',
                rate: 4,
                image: '/images/ger-3.jpg',
            },
            {
                title: '64',
                rate: 4,
                image: '/images/ger-4.jpg',
            },
        ],
    },
];

function App() {
    const [currentIdx, setCurrentIdx] = useState(0);

    return (
        <Flex
            sx={{
                justifyContent: 'space-between',
                flexDirection: 'column',
                backgroundColor: '#333',
                minHeight: '100vh',
            }}
        >
            <Box
                sx={{
                    width: '100vw',
                    height: '100vh',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    backgroundColor: '#a7a7a7',
                }}
            >
                <Slideshow slides={data} currentIdx={currentIdx} />
            </Box>
            <Flex />
            <Flex sx={{ justifyContent: 'space-between', mt: '2vw' }}>
                <Box sx={{ ml: '2vw' }}>
                    <Indicators
                        total={data.length}
                        currentIdx={currentIdx}
                        onSelect={setCurrentIdx}
                    />
                </Box>
                <Headings data={data} currentIdx={currentIdx} width="26vw" />
                <CardList list={data[currentIdx].item} width="54vw" />
            </Flex>
        </Flex>
    );
}

export default App;
