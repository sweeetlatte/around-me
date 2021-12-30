import React from 'react'
import { Box, Text } from 'theme-ui'

const Heading = ({active, children}: React.PropsWithChildren<{active ?: boolean}>) => {
    const commonStyles = {
        fontWeight: 'bold',
        fontSize: active ? '150px' : '90px',
        letterSpacing: '-1px',
        transition: 'font-size 800ms, opacity 800ms'
    }

    return <Box
        sx={{
            position: 'relative'
        }}
    >
        <Text 
            sx={{
                
                opacity: active ? 0 : 1,
                color: '#B86446',
                backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0))',
                backgroundClip: 'text',
                textFillColor: 'transparent',
                '-webkit-background-clip': 'text',
                '-webkit-text-fill-color': 'transparent',
                ...commonStyles
            }}
        >
            {children}
        </Text>
        <Text 
            sx={{
                position: 'absolute',
                top: 0,
                left: 0,
                color: '#B86446',
                opacity: active ? 1 : 0,
                ...commonStyles
            }}
        >
            {children}
        </Text>
    </Box>  
}

export function Headings(props: {
    data: {
        title: string;
        description ?: string;
    }[];
    currentIdx: number;
    onExplore ?: (idx: number) => void;
    width ?: string;
    height ?: string;
}) {
    const {data, currentIdx, width='50vw', height='80vh'} = props;
    return (
        <Box 
            sx={{
                position: 'relative',
                width,
                height
            }}
        >
            {data.map((item, idx) => (
                <Box
                    key={idx}
                    sx={{
                        position: 'absolute',
                        transition: 'all 800ms',
                        ...(currentIdx === idx 
                            ? { bottom: `calc(${height} / 2)` } 
                            : currentIdx < idx 
                            ? { bottom: 0 } 
                            : {top: 0}),
                        opacity: Math.abs(currentIdx - idx) < 2 ? 1 : 0
                    }}
                >
                    <Heading active={idx === currentIdx}>
                        {item.title}
                    </Heading>
                </Box>
            ))}
        </Box>
    )
}
