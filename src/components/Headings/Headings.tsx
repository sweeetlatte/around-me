import React from 'react';
import { Box, Button, Text } from 'theme-ui';
import { useTransition, animated } from 'react-spring';

// Có props: props sẽ nhận vào 1 object gồm active, children,... sau đó mới gán props cho Heading
// Không có props: Heading sẽ nhận vào 1 object gồm active, children,... nên khi lấy giá trị sẽ lấy trực tiếp mà không cần thông qua props
const Heading = ({
    active,
    children,
    textColor,
}: React.PropsWithChildren<{ active?: boolean; textColor: string }>) => {
    const commonStyles = {
        fontWeight: 'bold',
        fontSize: active ? '6.2vw' : '4.2vw',
        letterSpacing: '-1px',
        transition: 'font-size 800ms, opacity 800ms',
    };

    return (
        <Box
            sx={{
                position: 'relative',
            }}
        >
            <Text
                sx={{
                    opacity: active ? 0 : 1,
                    color: '#B86446',
                    backgroundImage:
                        'linear-gradient(rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0))',
                    backgroundClip: 'text',
                    textFillColor: 'transparent',
                    '-webkit-background-clip': 'text',
                    '-webkit-text-fill-color': 'transparent',
                    ...commonStyles,
                }}
            >
                {children}
            </Text>
            <Text
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    color: textColor,
                    opacity: active ? 1 : 0,
                    ...commonStyles,
                }}
            >
                {children}
            </Text>
        </Box>
    );
};

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
    const fadingTextPropsTransition = useTransition(data[currentIdx], {
        keys: (item) => item.title,
        from: { opacity: -2 },
        enter: { opacity: 1 },
        leave: { opacity: -2 },
        config: { tension: 220, friction: 120, duration: 2000 },
    });
    const fadingButtonPropsTransition = useTransition(data[currentIdx], {
        keys: (item) => item.title,
        from: { opacity: 0 },
        enter: { opacity: 1 },
        leave: { opacity: 0 },
        config: { tension: 220, friction: 120, duration: 500, delay: 100 },
    });

    return (
        <Box
            sx={{
                position: 'relative',
                width,
                height,
            }}
        >
            <Text
                sx={{
                    position: 'absolute',
                    top: `calc(${height} / 2 + 40px)`,
                    color: 'white',
                    fontSize: 16,
                    lineHeight: 2,
                }}
            >
                {fadingTextPropsTransition((props, item, k) => (
                    <animated.div
                        key={k.key}
                        style={{ ...props, position: 'absolute', width }}
                    >
                        <Text
                            sx={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                '-webkit-line-clamp': '2' as any,
                                '-webkit-box-orient': 'vertical' as any,
                            }}
                        >
                            {item.description}
                        </Text>
                        <Button
                            sx={{
                                color: 'black',
                                fontWeight: 'bold',
                                backgroundColor: item.buttonColor,
                                padding: '15px 30px',
                                display: 'block',
                                mt: 10,
                            }}
                        >
                            Explore
                            <Text
                                sx={{
                                    ml: 80,
                                    opacity: `calc(${props.opacity.get()} + 1)`,
                                }}
                            >
                                →
                            </Text>
                        </Button>
                    </animated.div>
                ))}
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
                            : { bottom: `calc(${height} - 106px)` }),
                        opacity: Math.abs(currentIdx - idx) < 2 ? 1 : 0,
                    }}
                >
                    <Heading
                        textColor={item.buttonColor}
                        active={idx === currentIdx}
                    >
                        {item.title}
                    </Heading>
                </Box>
            ))}
        </Box>
    );
}
