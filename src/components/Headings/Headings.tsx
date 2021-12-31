import React from 'react';
import { Box, Button, Text } from 'theme-ui';
import { useTransition, animated } from 'react-spring';

const Heading = ({ active, children }: React.PropsWithChildren<{ active?: boolean }>) => {
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
        description?: string;
        buttonColor: string;
    }[];
    currentIdx: number;
    onExplore?: (idx: number) => void;
    width?: string;
    height?: string;
}) {
    const { data, currentIdx, width = '50vw', height = '80vh' } = props;
    const fadingTextPropsTransition = useTransition(
        data[currentIdx],
        {
            keys: (item) => item.description ?? '',
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: { tension: 220, friction: 120, duration: 2000 },
        }
    );
    return (
        <Box
            sx={{
                position: 'relative',
                width,
                height
            }}
        >
            <Text
                sx={{
                    position: 'absolute',
                    top: `calc(${height} / 2 + 60px)`,
                    color: 'white',
                    fontSize: 16,
                    lineHeight: 2
                }}
            >
                {fadingTextPropsTransition(
                    (props, item, k) =>
                        <animated.div
                            key={k.key}
                            style={{ ...props, position: 'absolute', width }}
                        >
                            <Text>{item.description}</Text>
                            <Button
                                sx={{
                                    color: 'white',
                                    backgroundColor: item.buttonColor,
                                    padding: '15px 30px',
                                    display: 'block'
                                }}
                            >
                                Explore
                                <Text sx={{ ml: 80, opacity: 0.5 }}>→</Text>
                            </Button>
                        </animated.div>
                )}
            </Text>
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
                                : { top: 0 }),
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