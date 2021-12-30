/** @jsxImportSource @emotion/react */
import { Box, jsx } from 'theme-ui'
import React from 'react'

import { Flex } from 'theme-ui'

const WHITE = "rgba(255,255,255,0.5)";
const WIDTH = 62;

const Dot = (props: {
    label: string; 
    active ?: boolean
}) => {
    return (
        <Flex 
            sx={{
                alignItems: 'center',
                justifyContent: 'center',
                width: WIDTH, 
                height: WIDTH,
                color: 'white',
                '&:hover': {
                    '> div': {
                        width: '100%',
                        height: '100%',
                        '> span': {
                            fontSize: '16px !important'
                        }
                    }
                }}}>
            <Flex
                sx={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: props.active ? '100%' : 8,
                    height: props.active ? '100%' : 8,
                    /*backgroundColor: WHITE,*/ 
                    backgroundColor: 'white',
                    borderRadius: 100,
                    transition: '400ms',
                    boxShadow: '0px 0px 4px 2px rgba(0, 0, 0, 0.1)'
                }}>
            <span
                css={{
                    fontSize: props.active ? 16 : 0,
                    fontWeight: 'bold',
                    transition: 'font-size 400ms'
                }}>{props.label}</span>
            </Flex>
        </Flex>
    );
}



export function Indicators(props: {
    total: number;
    currentIdx: number;
    onSelect ?: (idx: number) => void;
}) {
    const height = '80vh';

    return (
        <Flex 
            css={{
                position: 'relative', 
                height,
                justifyContent: 'center',
                width: WIDTH
            }}>
            <Box css={{opacity: 0.5}}>
                <div 
                    css={{ 
                        width: '2px', 
                        height: '100%', 
                        ml: '50%',
                        backgroundColor: WHITE
                    }}
                >
                </div>
                {Array.from({length: props.total}).map((_, idx) => (
                    <Box 
                        sx={{
                            position: 'absolute', 
                            left: 0,
                            top: `calc(${height} / 2 + ${height} / 6 * ${idx - props.currentIdx})`,
                        }}
                    >
                        <Dot label={`${idx}`} key={idx} active={idx == props.currentIdx} />
                    </Box>
                ))}
            </Box>
        </Flex>
    )
}