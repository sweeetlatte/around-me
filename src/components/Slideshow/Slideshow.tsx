import React, { useEffect, useRef, useState } from 'react';
import { LinearCopy } from 'gl-react';
import GLTransitions from 'gl-transitions';
import { Surface } from 'gl-react-dom';
import GLTransition from 'react-gl-transition';
import GLImage from 'gl-react-image';

function usePrevious<T>(value: T) {
    const [temp, setTemp] = useState<T | null>(null);
    const [previous, setPrevious] = useState<T | null>(null);

    useEffect(() => {
        setTemp(value);
        setPrevious(temp);
    }, [value]);

    return previous;
}

export const Slideshow = (props: {
    slides: { image: string }[];
    duration?: number;
    currentIdx: number;
}) => {
    const { duration = 300 } = props;
    const previousIdx = usePrevious(props.currentIdx);
    const [currentIdx, setCurrentIdx] = useState(props.currentIdx);

    const from = props.slides[previousIdx ?? currentIdx].image;
    const to = props.slides[currentIdx].image;

    // 9, 7, 5
    const transition = GLTransitions[5];
    const [progress, setProgress] = useState(0);
    const INTERVAL = 1000 / 60;

    // Mỗi lần thay đổi currentIdx thì reset lại progress
    useEffect(() => {
        setProgress(0);
        setCurrentIdx(props.currentIdx);
    }, [props.currentIdx]);
    useEffect(() => {
        if (progress < 1) {
            setTimeout(() => {
                setProgress(progress + INTERVAL / duration);
            }, INTERVAL);
        }
        // else {
        //     setDoneIdx(props.currentIdx);
        // }
    }, [progress]);

    const vw = Math.max(
        document.documentElement.clientWidth || 0,
        window.innerWidth || 0
    );
    const vh = Math.max(
        document.documentElement.clientHeight || 0,
        window.innerHeight || 0
    );

    return (
        <Surface width={vw} height={vh}>
            {progress > 0 ? (
                <GLTransition
                    from={<GLImage source={from} resizeMode="cover" />}
                    to={<GLImage source={to} resizeMode="cover" />}
                    progress={progress}
                    transition={transition}
                />
            ) : (
                <GLImage source={from} resizeMode="cover" />
            )}
        </Surface>
    );
};
