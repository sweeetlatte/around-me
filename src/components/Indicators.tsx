import React from 'react'

import { jsx } from '@emotion/react'
import { Flex } from 'theme-ui'

const Dot = (props: {
    label: string; 
    active ?: boolean
}) => {
    const size = props.active ? 62 : 8;

    return (
        <Flex 
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                width: 62, 
                height: 62,
                color: 'white'}}>
            <Flex
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: props.active ? '100%' : 8,
                    height: props.active ? '100%' : 8,
                    backgroundColor: WHITE,
                    borderRadius: 100,
                    transition: '1s'
                }}>
            <span
                style={{
                    fontSize: props.active ? 16 : 0,
                    fontWeight: 'bold',
                    transition: 'fontsize 1s'
                }}>{props.label}</span>
            </Flex>
        </Flex>
    );
}

const WHITE = "rgba(255,255,255,0.5)";

export function Indicators(props: {
    total: number;
    currentIdx: number;
    onSelect ?: (idx: number) => void
}) {
    return (
        <div style={{position: 'relative'}}>
            <div style={{ width: '2px', height: '100%', backgroundColor: WHITE}}></div>
            {Array.from({length: props.total}).map((_, idx) => (
                <Dot label={`${idx}`} key={idx} active={idx == props.currentIdx} />
            ))}
        </div>
    )
}