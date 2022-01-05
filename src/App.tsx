import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Flex } from 'theme-ui';
import { Indicators } from './components/Indicators/Indicators';
import { Headings } from './components/Headings/Headings';
import { CardList } from './components/CardList/CardList';

const description =
    'When sugar was first introduced to England in the twelfth century, it was grouped with other tropical spices like ginger.';
const data = [
    {
        title: 'Canada',
        buttonColor: '#B86446',
        description: `1 ${description}`,
        item: [
            {
                title: '11',
                rate: 4,
                image: 'https://via.placeholder.com/468x600?text=11',
            },
            {
                title: '11',
                rate: 4,
                image: 'https://via.placeholder.com/468x600?text=11',
            },
            {
                title: '12',
                rate: 4,
                image: 'https://via.placeholder.com/468x600?text=12',
            },
            {
                title: '14',
                rate: 4,
                image: 'https://via.placeholder.com/468x600?text=14',
            },
        ],
    },
    {
        title: 'Sweden',
        buttonColor: '#B86446',
        description: `2 ${description}`,
        item: [
            {
                title: '21',
                rate: 4,
                image: 'https://via.placeholder.com/468x600?text=21',
            },
            {
                title: '22',
                rate: 4,
                image: 'https://via.placeholder.com/468x600?text=22',
            },
            {
                title: '23',
                rate: 4,
                image: 'https://via.placeholder.com/468x600?text=23',
            },
            {
                title: '24',
                rate: 4,
                image: 'https://via.placeholder.com/468x600?text=24',
            },
        ],
    },
    {
        title: 'Norway',
        buttonColor: '#B86446',
        description: `3 ${description}`,
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
            <Flex sx={{ justifyContent: 'space-between', ml:40, mt: 40 }}>
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
