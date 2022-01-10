import React, { useEffect, useState } from 'react';
import { animated, useTransition } from 'react-spring';
import { Box, Flex, Text, AspectImage, ThemeUIStyleObject } from 'theme-ui';
import { useDelayedState } from '../../hooks/delayed-state';

const Controls = (props: { onNext?: () => void; onPrev?: () => void }) => (
    <Flex
        sx={{
            color: 'white',
            fontSize: 32,
        }}
    >
        <Flex
            sx={{
                justifyContent: 'center',
                alignItems: 'center',
                width: '3.5vw',
                height: '3.5vw',
                borderRadius: '4vw',
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
                width: '3.5vw',
                height: '3.5vw',
                borderRadius: '4vw',
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

export const AspectRatio = ({
    ratio = 4 / 3,
    children,
    ...props
}: React.PropsWithChildren<{ ratio: number; sx?: ThemeUIStyleObject }>) => (
    <Box
        sx={{
            position: 'relative',
            //   overflow: 'hidden',
        }}
    >
        <Box
            sx={{
                width: '100%',
                height: 0,
                paddingBottom: 100 / ratio + '%',
            }}
        />
        <Box
            {...props}
            sx={{
                position: 'absolute',
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
            }}
        >
            {children}
        </Box>
    </Box>
);



const IMAGE_RATIO = 401 / 569;

const Card = ({
    image,
    w,
    delay,
    duration = 450,
}: {
    image: string;
    w: string;
    delay: number;
    duration?: number;
}) => {
    const [delayedImage] = useDelayedState(image, delay);
    const cardTransition = useTransition<
        any,
        {
            keys: (item: any) => any;
            from: {
                transform: string;
            };
            enter: {
                transform: string;
            };
            leave: {
                transform: string;
            };
            config: {
                tension: number;
                friction: number;
                duration: number;
            };
            trail: number;
        }
    >(delayedImage, {
        keys: (item: any) => item,
        from: { transform: 'rotateY(180deg)' },
        enter: { transform: 'rotateY(0deg)' },
        leave: { transform: 'rotateY(-180deg)' },
        config: { tension: 220, friction: 120, duration },
    });

    return (
        <Box sx={{}}>
            <AspectRatio
                ratio={IMAGE_RATIO}
                sx={{
                    transition: `transform ${duration}ms`,
                    transformStyle: 'preserve-3d',
                }}
            >
                {/* phiên bản mới ko dùng map nữa, 'props item k' là prop bình thường thôi chứ ko phải của map
                keys nằm trong props nhưng vẫn lấy ra được vì useTransition map sẵn */}
                {cardTransition((props, item, k) => (
                    <animated.div
                        style={{
                            ...props,
                            position: 'absolute',
                            width: w,
                            backfaceVisibility: 'hidden',
                            transition: `width ${duration}ms`,
                            perspective: 1000,
                        }}
                        key={k.key}
                    >
                        <AspectImage
                            src={item}
                            ratio={IMAGE_RATIO}
                            sx={{
                                objectFit: 'cover',
                                width: '100%',
                                height: '100%',
                                borderRadius: 9,
                            }}
                        />{' '}
                    </animated.div>
                ))}
            </AspectRatio>
        </Box>
    );
};

const CardTitle = ({
    dotSize,
    rate,
    title,
    delay,
    duration = 550,
}: {
    dotSize: number;
    rate: number;
    title: string;
    delay: number;
    duration?: number;
}) => {
    const [delayedTitle] = useDelayedState(title, delay);
    const [delayedRate] = useDelayedState(rate, delay);
    const titleTransition = useTransition<
        any,
        {
            keys: (item: any) => any;
            from: {
                transform: string;
            };
            enter: {
                transform: string;
            };
            leave: {
                transform: string;
            };
            config: {
                tension: number;
                friction: number;
                duration: number;
            };
            trail: number;
        }
    >(
        { title: delayedTitle, rate: delayedRate },
        {
            keys: (item: any) => item.title,
            from: { opacity: 0 },
            enter: { opacity: 1 },
            leave: { opacity: 0 },
            config: { tension: 220, friction: 120, duration },
        }
    );
    return (
        <Box sx={{ height: 75 }}>
            {titleTransition((props, item, k) => (
                <animated.div
                    style={{
                        ...props,
                        position: 'absolute',
                    }}
                    key={k.key}
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
                                    //...
                                    opacity: idx < (item.rate ?? 0) ? 1 : 0.5,
                                    transition: 'all 500ms',
                                }}
                            />
                        ))}
                    </Flex>
                </animated.div>
            ))}
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
        <Flex
            sx={{
                width,
                overflow: 'hidden',
                position: 'relative',
                alignItems: 'center',
            }}
        >
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
                            <CardTitle
                                delay={150 * idx}
                                {...{ ...item, dotSize }}
                            />
                            <Card
                                delay={150 * idx}
                                image={item.image}
                                w={`calc((${width} / ${isBig ? 2.5 : 2.8})`}
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
        </Flex>
    );
}
