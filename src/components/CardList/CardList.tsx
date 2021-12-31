import React, { useEffect, useState } from 'react'
import { Box, Flex, Text, Image, AspectImage } from 'theme-ui';

export function CardList(props: {
    list: {
        title: string,
        rate: number,
        image: string
    }[];
    width?: string
}) {
    const { width = '50vw' } = props;
    const [currentIdx, setCurrentIdx] = useState(0);
    useEffect(() => {
        setCurrentIdx(0)
    }, [props.list])
    return (
        <Flex
            sx={{
                justifyContent: 'flex-start',
                alignItems: 'center',
                width,
                overflow: 'hidden'
            }}
        >
            {props.list.map(
                (item, idx) => {
                const isBig = idx <= currentIdx;
                const dotSize = isBig ? 12 : 9;

                return (
                    <Box
                    sx={{
                        mr: '40px',
                        width: `calc(${width} / ${isBig ? 2.5 : 2.8})`,
                        // ...
                        flexShrink: 0
                        }}
                    >
                        <Text
                            sx={{
                                color: 'white',
                                fontWeight: 'bold',
                            }}
                        >
                            {item.title}
                        </Text>
                        <Flex>
                            {/* dấu _: skip param 1 */}
                            {Array.from({length: 5}).map((_, idx) => 
                                <Box 
                                sx={{
                                    width: dotSize,
                                    height: dotSize,
                                    mr: dotSize,
                                    my: 25,
                                    borderRadius: dotSize,
                                    backgroundColor: 'white',
                                    opacity: idx < item.rate ? 1 : 0.5
                                }} 
                                />
                            )}
                        </Flex>

                        <AspectImage 
                            src={item.image} 
                            ratio={401 / 569} 
                            
                            />
                    </Box>
                );}
            )}
        </Flex>
    )
}
