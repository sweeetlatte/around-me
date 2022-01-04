import React, { useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { Box, Flex, Text, Image, AspectImage, AspectRatio } from 'theme-ui';

const Controls = (props: { onNext?: () => void; onPrev?: () => void }) => (
    <Flex
        sx={{
            color: 'white',
            fontSize: 32,
            position: 'absolute',
            bottom: 0,
            left: 25,
        }}
    >
        <Flex
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 80,
                height: 80,
                borderRadius: 80,
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                mr: 18,
                cursor: 'pointer',
            }}
            onClick={props.onPrev}
        >
            ‹
        </Flex>
        <Flex
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                width: 80,
                height: 80,
                borderRadius: 80,
                backgroundColor: 'rgba(255, 255, 255, 0.3)',
                cursor: 'pointer',
            }}
            onClick={props.onNext}
        >
            ›
        </Flex>
    </Flex>
);

const Pagination = (props: { current: number; total: number }) => (
    <Flex sx={{ alignItems: 'center', color: 'white' }}>
        <Text>{props.current.toString().padStart(2, '0')}</Text>
        <Box
            sx={{
                width: 25,
                height: 2,
                backgroundColor: 'white',
                opacity: 0.5,
                mx: 25,
            }}
        />
        <Text sx={{ opacity: 0.5 }}>
            {props.total.toString().padStart(2, '0')}
        </Text>
    </Flex>
);

const Card = ({ image, w }: { image: string; w: string }) => {
    const transition = useTransition(image, {
        keys: (item) => item,
        from: { transform: 'rotateY(180deg)' },
        enter: { transform: 'rotateY(0deg)' },
        leave: { transform: 'rotateY(-180deg)' },
        config: { tension: 220, friction: 120, duration: 2000 },
    });
    // phiên bản mới ko dùng map nữa là prop bình thường thôi chứ ko phải của map
    // keys nằm trong props nhưng vẫn lấy ra được vì useTransition map sẵn
    return (
        <Box sx={{ perspective: 1000 }}>  
            <AspectRatio
                ratio={401 / 569}
                sx={{
                    transition: 'transform 0.6s',
                    transformStyle: 'preserve-3d',
                }}
            >
                {transition((props, item, k) => (
                    <animated.div
                        style={{
                            ...props,
                            position: 'absolute',
                            width: w,
                            backfaceVisibility: 'hidden',
                            transition: 'width 0.6s',
                        }}
                        key={k.key}
                    >
                        <AspectImage src={item} ratio={401 / 569} />
                    </animated.div>
                ))}
            </AspectRatio>
        </Box>
    );
};

export function CardList(props: {
    list: {
        title: string;
        rate: number;
        image: string;
    }[];
    width?: string;
}) {
    const { width = '50vw' } = props;
    const [currentIdx, setCurrentIdx] = useState(0);
    useEffect(() => {
        setCurrentIdx(0);
    }, [props.list]);
    return (
        <Box sx={{ width, overflow: 'hidden' }}>
            <Flex
                sx={{
                    justifyContent: 'flex-start',
                    alignItems: 'center',
                    position: 'relative',
                    left: `calc((${width} / 2.5 + 40px) * ${-currentIdx})`,
                    transition: 'left 500ms',
                }}
            >
                {props.list.map((item, idx) => {
                    const isBig = idx <= currentIdx;
                    const dotSize = isBig ? 12 : 9;

                    return (
                        <Box
                            sx={{
                                mr: '40px',
                                width: `calc(${width} / ${isBig ? 2.5 : 2.8})`,
                                // ...
                                flexShrink: 0,
                                transition: 'width 500ms',
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
                                {/* "_": skip the unwanted param */}
                                {Array.from({ length: 5 }).map((_, idx) => (
                                    <Box
                                        sx={{
                                            width: dotSize,
                                            height: dotSize,
                                            mr: dotSize,
                                            my: 25,
                                            borderRadius: dotSize,
                                            backgroundColor: 'white',
                                            opacity: idx < item.rate ? 1 : 0.5,
                                            transition: 'all 500ms',
                                        }}
                                    />
                                ))}
                            </Flex>

                            <Card
                                image={item.image}
                                w={`calc(${width} / ${isBig ? 2.5 : 2.8})`}
                            />
                        </Box>
                    );
                })}
            </Flex>

            <Flex
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    left: 25,
                }}
            >
                <Controls
                    onNext={() => {
                        if (currentIdx + 1 < props.list.length)
                            setCurrentIdx(currentIdx + 1);
                    }}
                    onPrev={() => {
                        if (currentIdx > 0) setCurrentIdx(currentIdx - 1);
                    }}
                />
            </Flex>

            <Flex
                sx={{
                    position: 'absolute',
                    bottom: 0,
                    right: 70,
                }}
            >
                <Pagination
                    current={currentIdx + 1}
                    total={props.list.length}
                />
            </Flex>
        </Box>
    );
}
