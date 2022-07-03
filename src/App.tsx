import { useState } from 'react';
import { Box, Flex } from 'theme-ui';

import './App.css';

import { Indicators } from './components/Indicators/Indicators';
import { Headings } from './components/Headings/Headings';
import { CardList } from './components/CardList/CardList';
import { Slideshow } from './components/Slideshow/Slideshow';

const data = [
    {
        title: 'Canada',
        buttonColor: '#FFFFFF',
        description:
            'Canada is a country in North America that extends from the Atlantic Ocean in the east, to the Pacific Ocean in the west.',
        image: '/images/canada-bg-compressed.jpg',
        item: [
            {
                title: 'Vancouver',
                rate: 1,
                image: '/images/canada-4.jpg',
            },
            {
                title: 'Toronto',
                rate: 2,
                image: '/images/canada-1.jpg',
            },
            {
                title: 'Takakkaw',
                rate: 3,
                image: '/images/canada-2.jpg',
            },
            {
                title: 'Tobermory',
                rate: 4,
                image: '/images/canada-3.jpg',
            },
        ],
    },
    {
        title: 'Sweden',
        buttonColor: '#FFFFFF',
        description:
            'Sweden is a country located in Northern Europe bordering the Baltic Sea, Gulf of Bothnia, Kattegat, and Skagerrak.',
        image: '/images/sweden-bg.jpg',
        item: [
            {
                title: 'Stockholm',
                rate: 1,
                image: '/images/sweden-3.jpg',
            },
            {
                title: 'Vittangi',
                rate: 2,
                image: '/images/sweden-4.jpg',
            },
            {
                title: 'Malmö',
                rate: 3,
                image: '/images/sweden-2.jpg',
            },
            {
                title: 'Globen',
                rate: 4,
                image: '/images/sweden-1.jpg',
            },
        ],
    },
    {
        title: 'Norway',
        buttonColor: '#FFFFFF',
        description:
            'Norway is a country in Northern Europe occupying the western portion of the Scandinavian Peninsula.',
        image: '/images/norway-bg.jpg',
        item: [
            {
                title: 'Hovden',
                rate: 1,
                image: '/images/norway-1.jpg',
            },
            {
                title: 'Vossestrand',
                rate: 2,
                image: '/images/norway-2.jpg',
            },
            {
                title: 'Bergen',
                rate: 3,
                image: '/images/norway-3.jpg',
            },
            {
                title: 'Svolvær',
                rate: 4,
                image: '/images/norway-4.jpg',
            },
        ],
    },
    {
        title: 'Turkey',
        buttonColor: '#FFFFFF',
        description:
            'Located mainly on the Anatolian Peninsula in Western Asia, with a small portion on the Balkan Peninsula in Southeast',
        image: '/images/tur-bg.jpg',
        item: [
            {
                title: 'Melikgazi',
                rate: 1,
                image: '/images/tur-4.jpg',
            },
            {
                title: 'Istanbul',
                rate: 2,
                image: '/images/tur-2.jpg',
            },
            {
                title: 'Göreme',
                rate: 3,
                image: '/images/tur-3.jpg',
            },
            {
                title: 'Sultanahmet',
                rate: 4,
                image: '/images/tur-1.jpg',
            },
        ],
    },
    {
        title: 'Finland',
        buttonColor: '#FFFFFF',
        description:
            'Finland is a country located in Northern Europe bordering the Baltic Sea, Gulf of Bothnia, and the Gulf of Finland.',
        image: '/images/fin-bg.jpg',
        item: [
            {
                title: 'Tavastia Proper',
                rate: 1,
                image: '/images/fin-1.jpg',
            },
            {
                title: 'Nuuksio',
                rate: 2,
                image: '/images/fin-2.jpg',
            },
            {
                title: 'Uusimaa',
                rate: 3,
                image: '/images/fin-3.jpg',
            },
            {
                title: 'Tampere',
                rate: 4,
                image: '/images/fin-4.jpg',
            },
        ],
    },
    {
        title: 'Germany',
        buttonColor: '#FFFFFF',
        description:
            'Germany is a country located in the heart of Western Europe. It is bordered by Denmark, Poland, Czechia, Austria, Switzerland.',
        image: '/images/ger-bg.jpg',
        item: [
            {
                title: 'Bayern',
                rate: 1,
                image: '/images/ger-1.jpg',
            },
            {
                title: 'Tauber',
                rate: 2,
                image: '/images/ger-2.jpg',
            },
            {
                title: 'Heidelberg',
                rate: 3,
                image: '/images/ger-3.jpg',
            },
            {
                title: 'Hamburg',
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
                justifyContent: 'space-evenly',
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
            <Flex sx={{ justifyContent: 'space-between' }}>
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
