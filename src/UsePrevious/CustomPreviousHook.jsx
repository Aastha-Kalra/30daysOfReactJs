import { useEffect, useRef } from 'react';

const usePrevious = (value) => {
    const previousRef = useRef();
    useEffect(() => {
        previousRef.current = value;
    }, [value]);
    return previousRef.current;
};

export default usePrevious;

