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
    const { duration = 1500 } = props;
    const previousIdx = usePrevious(props.currentIdx);
    const to = props.slides[props.currentIdx].image;

    // "a && b" <=> if (a) b;
    // Vế trước: previousIdx !== null đúng thì mới thực hiện vế sau: gán props.slides[previousIdx].image cho from
    // Nếu previousIdx !== null => gán props.slides[previousIdx].image cho from
    // Nếu previousIdx == null => from = null
    const from =
        (previousIdx !== null && props.slides[previousIdx].image) || null;

    // 9, 7, 5
    const transition = GLTransitions[5];
    const [progress, setProgress] = useState(0);
    const INTERVAL = 1000 / 60;

    // Mỗi lần thay đổi currentIdx thì reset lại progress
    useEffect(() => {
        setProgress(0);
    }, [props.currentIdx]);
    useEffect(() => {
        if (progress < 1) {
            setTimeout(() => {
                setProgress(progress + INTERVAL / duration);
            }, INTERVAL);
        }
    }, [progress]);

    const vw = Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0)
    const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)

    return (
        <Surface width={vw} height={vh}>
            {progress < 1 && from ? (
                <GLTransition
                    from={<GLImage source={from} resizeMode="cover"/>}
                    to={<GLImage source={to} resizeMode="cover" />}
                    progress={progress}
                    transition={transition}
                />
            ) : (
                <GLImage source={to} resizeMode="cover" />
            )}
        </Surface>
    );
};
