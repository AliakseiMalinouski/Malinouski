import React from 'react';
import { Container } from '../components/Container.jsx';
import { useState } from 'react';
import { useEffect } from 'react';

export const PageContainer = () => {

    const [newArray, setNewArray] = useState([]);

    useEffect(() => {
        fetch("https://gist.githubusercontent.com/AliakseiMalinouski/16cd68b98a0e568dadbcf4b5c29ab385/raw/80ae8b5c53a0ec81e1947f6126df94cd2992c16f/BreakingBadBaseArray", { method: 'get' })
            .then(response => {
                if (!response.ok) {
                    alert('Error with connection');
                }
                else {
                    return response.json();
                }
            })
            .then(data => {
                setNewArray(data);
            })
            .catch(error => {
                alert("Error " + error);
        })
    }, [])

    return (
        <Container array={newArray} />
    )
}