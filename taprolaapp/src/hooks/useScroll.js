import React from 'react';
import { useEffect } from 'react';

export default function useScroll(parent) {
    useEffect(() => {
        parent.scrollIntoView({ behavior: 'smooth' });
    }, []);
}