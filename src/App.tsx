import React, { useState } from 'react';
import './App.css';
import { Box, Flex } from 'theme-ui';
import { Indicators } from './components/Indicators/Indicators';
import { Headings } from './components/Headings/Headings';
import { CardList } from './components/CardList/CardList';
import { Slideshow } from './components/Slideshow/Slideshow';

const description =
    'When sugar was first introduced to England in the twelfth century, it was grouped with other tropical spices like ginger.';
const data = [
    {
        title: 'Canada',
        buttonColor: '#B86446',
        description: `1 ${description}`,
        image: '/images/canada-bg.jpg',
        item: [
            {
                title: '11',
                rate: 4,
                image: '/images/canada-3.jpg',
            },
            {
                title: '11',
                rate: 4,
                image: '/images/canada-2.jpg',
            },
            {
                title: '12',
                rate: 4,
                image: '/images/canada-1.jpg',
            },
            {
                title: '14',
                rate: 4,
                image: '/images/canada-4.jpg',
            },
        ],
    },
    {
        title: 'Sweden',
        buttonColor: '#B86446',
        description: `2 ${description}`,
        image: '/images/sweden-bg.jpg',
        item: [
            {
                title: '21',
                rate: 4,
                image: '/images/sweden-1.jpg',
            },
            {
                title: '22',
                rate: 4,
                image: '/images/sweden-2.jpg',
            },
            {
                title: '23',
                rate: 4,
                image: '/images/sweden-3.jpg',
            },
            {
                title: '24',
                rate: 4,
                image: '/images/sweden-4.jpg',
            },
        ],
    },
    {
        title: 'Norway',
        buttonColor: '#B86446',
        description: `3 ${description}`,
        image: 'https://via.placeholder.com/1920x1080?text=21',
        item: [
            {
                title: '31',
                rate: 4,
                image: 'https://via.placeholder.com/468x600?text=31',
            },
            {
                title: '33',
                rate: 4,
                image: 'https://via.placeholder.com/468x600?text=33',
            },
            {
                title: '33',
                rate: 4,
                image: 'https://via.placeholder.com/468x600?text=33',
            },
            {
                title: '34',
                rate: 4,
                image: 'https://via.placeholder.com/468x600?text=34',
            },
        ],
    },
    {
        title: 'Switzerland',
        buttonColor: '#B86446',
        description: `4 ${description}`,
        image: 'https://via.placeholder.com/1920x1080?text=21',
        item: [
            {
                title: '41',
                rate: 4,
                image: 'https://via.placeholder.com/468x600?text=41',
            },
            {
                title: '44',
                rate: 4,
                image: 'https://via.placeholder.com/468x600?text=44',
            },
            {
                title: '43',
                rate: 4,
                image: 'https://via.placeholder.com/468x600?text=43',
            },
            {
                title: '44',
                rate: 4,
                image: 'https://via.placeholder.com/468x600?text=44',
            },
        ],
    },
    {
        title: 'Finland',
        buttonColor: '#B86446',
        description: `5 ${description}`,
        image: 'https://via.placeholder.com/1920x1080?text=21',
        item: [
            {
                title: '51',
                rate: 4,
                image: 'https://via.placeholder.com/468x600?text=51',
            },
            {
                title: '55',
                rate: 4,
                image: 'https://via.placeholder.com/468x600?text=55',
            },
            {
                title: '53',
                rate: 4,
                image: 'https://via.placeholder.com/468x600?text=53',
            },
            {
                title: '54',
                rate: 4,
                image: 'https://via.placeholder.com/468x600?text=54',
            },
        ],
    },
    {
        title: 'Germany',
        buttonColor: '#B86446',
        description: `6 ${description}`,
        image: 'https://via.placeholder.com/1920x1080?text=21',
        item: [
            {
                title: '61',
                rate: 4,
                image: 'https://via.placeholder.com/468x600?text=61',
            },
            {
                title: '66',
                rate: 4,
                image: 'https://via.placeholder.com/468x600?text=66',
            },
            {
                title: '63',
                rate: 4,
                image: 'https://via.placeholder.com/468x600?text=63',
            },
            {
                title: '64',
                rate: 4,
                image: 'https://via.placeholder.com/468x600?text=64',
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
            <Flex sx={{ justifyContent: 'space-between', ml: 40, mt: 40 }}>
                <Indicators
                    total={data.length}
                    currentIdx={currentIdx}
                    onSelect={setCurrentIdx}
                />
                <Headings data={data} currentIdx={currentIdx} width="26vw" />
                <CardList list={data[currentIdx].item} width="54vw" />
            </Flex>
        </Flex>
    );
}

export default App;
