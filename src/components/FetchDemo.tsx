import React, { useState, useEffect } from 'react';
import Notes from './Notes';
const FetchDemo = () => {
    const [notes, setNotes] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const fetchData = () => {
        fetch('http://localhost:8081/notes')
            .then((response) => response.json())
            .then((data) => {
                setIsLoading(false);
                setNotes(data);
            })
            .catch((error) => {
                setIsLoading(false);
                setIsError(true);
                console.log(error);
            });
    };
    useEffect(() => {
        fetchData();
    }, []);
    if (isLoading) {
        return <div>Loading...</div>;
    }
    return (
        <div>
            <h1>Fetch Example</h1>
            {notes && <Notes data={notes} />}
            {isError && <div>Error fetching data.</div>}
        </div>
    );
};
export default FetchDemo;