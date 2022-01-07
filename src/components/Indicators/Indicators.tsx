/** @jsxImportSource @emotion/react */
import { Box, Text } from 'theme-ui';
import React from 'react';

import { Flex } from 'theme-ui';

const Dot = (props: { active?: boolean; size: string; duration: string }) => {
    return (
        <Flex
            sx={{
                alignItems: 'center',
                justifyContent: 'center',
                width: props.size,
                height: props.size,
            }}
        >
            <Flex
                sx={{
                    width: props.active ? '100%' : 8,
                    height: props.active ? '100%' : 8,
                    backgroundColor: 'white',
                    borderRadius: 100,
                    transition: `${props.duration} ease`,
                    boxShadow: '0px 0px 4px 2px rgba(0, 0, 0, 0.1)',
                }}
            ></Flex>
        </Flex>
    );
};

const Pagination = (props: { current: number; total: number }) => (
    <Flex
        sx={{
            alignItems: 'center',
            color: 'white',
            transform: 'rotate(-90deg)',
            height: 80,
            fontSize: 14,
        }}
    >
        <Text>{props.current.toString().padStart(2, '0')}</Text>
        <Text sx={{ opacity: 0.5, mx: '12px' }}>/</Text>
        <Text sx={{ opacity: 0.5 }}>
            {props.total.toString().padStart(2, '0')}
        </Text>
    </Flex>
);

export function Indicators(props: {
    total: number;
    currentIdx: number;
    onSelect?: (idx: number) => void;
    width?: string;
    height?: string;
    maxDisplayingDots?: number;
    duration?: string;
}) {
    // const {} = props: dùng để lấy các thuộc tính trong props
    // giá trị sau dấu "="" dùng để backup, nếu không có giá trị sau dấu = thì khi lấy giá trị của các thuộc tính không nhận giá trị đầu vào sẽ là null
    // khi có các giá trị này, nếu không có giá trị đầu vào thì giá trị được lấy ra sẽ là giá trị sau dấu "="
    const {
        height = '90vh',
        width = '56px',
        maxDisplayingDots = 6,
        duration = '350ms',
    } = props;
    const [hoveringIdx, setHoveringIdx] = React.useState<number | null>(null);

    return (
        <Flex
            sx={{
                height,
                width,
                flexDirection: 'column',
            }}
        >
            <Flex
                css={{
                    flex: 1,
                    position: 'relative',
                    justifyContent: 'center',
                    overflow: 'hidden',
                }}
            >
                <Box css={{ opacity: 0.5 }}>
                    <div
                        css={{
                            width: '2px',
                            height: '100%',
                            ml: '50%',
                            backgroundColor: 'rgba(255, 255, 255, 0.5)',
                            boxShadow: '0px 0px 4px 2px rgba(0, 0, 0, 0.05)',
                        }}
                    ></div>
                    {Array.from({ length: props.total }).map((_, idx) => (
                        <Box
                            sx={{
                                position: 'absolute',
                                left: 0,
                                top: `calc(${height} / 2 + ${height} / ${
                                    maxDisplayingDots + 1
                                } * ${idx - props.currentIdx})`,
                                transition: `top ${duration} ease`,
                            }}
                        >
                            <Dot
                                key={idx}
                                size={width}
                                active={
                                    idx === props.currentIdx ||
                                    idx === hoveringIdx
                                }
                                duration={duration}
                            />
                        </Box>
                    ))}
                </Box>
                <Box>
                    {Array.from({ length: props.total }).map((_, idx) => (
                        <Flex
                            sx={{
                                alignItems: 'center',
                                justifyContent: 'center',
                                position: 'absolute',
                                left: 0,
                                top: `calc(${height} / 2 + ${height} / ${
                                    maxDisplayingDots + 1
                                } * ${idx - props.currentIdx})`,
                                width,
                                height: width,
                                fontSize: 16,
                                fontWeight: 'bold',
                                color: 'white',
                                cursor: 'pointer',
                                transition: `top ${duration} ease`,
                            }}
                            onMouseEnter={() => setHoveringIdx(idx)}
                            onMouseLeave={() => setHoveringIdx(null)}
                            onClick={() => props.onSelect?.(idx)}
                        >
                            <Box
                                sx={{
                                    cursor: 'pointer',
                                    transition: `transform ${duration} ease`,
                                    transform: `scale(${
                                        idx === props.currentIdx ||
                                        idx === hoveringIdx
                                            ? '1,1'
                                            : '0,0'
                                    })`,
                                }}
                            >
                                {`${idx + 1}`}
                            </Box>
                        </Flex>
                    ))}
                </Box>
            </Flex>
            <Pagination current={props.currentIdx + 1} total={props.total} />
        </Flex>
    );
}
