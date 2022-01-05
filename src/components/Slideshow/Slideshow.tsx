import React, { useEffect, useRef } from 'react';
import { LinearCopy } from 'gl-react';
import { Surface } from 'gl-react-dom';
// import GLTransition from 'react-gl-transition';
// import GLTransitions from 'gl-transitions';
import GLImage from 'gl-react-image';

function usePrevious<T>(value: T) {
    const ref = useRef<T>();

    useEffect(() => {
        ref.current = value;
    }, [value]);

    return ref.current;
}

export const Slideshow = (props: {
    slides: { image: string }[];
    duration?: number;
    currentIdx: number;
}) => {
    const previousIdx = usePrevious(props.currentIdx);
    const to = props.slides[props.currentIdx].image;
    const from = previousIdx !== undefined && props.slides[previousIdx].image || null;
    // const transition = GLTransitions[0];
    // const progress = 0.3;

    return (
        <Surface width={300} height={300} >
            <GLImage
                source={to}
                resizeMode="stretch"
                zoom={1}
                center={[0.5, 0.5]}
            />
        </Surface>
    );

    // return progress > 0 ? (
    //     <GLTransition
    //         from={<GLImage source={from} />}
    //         to={<GLImage source={to} />}
    //         progress={progress}
    //         transition={transition}
    //     />
    // ) : (
    //     <LinearCopy>{from}</LinearCopy>
    // );
};
