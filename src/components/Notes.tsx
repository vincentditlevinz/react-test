import React from 'react';

type NoteData = {userId: number, id: number, title: string, body: string}
type NoteResult = {data: Array<NoteData>}
const Notes = ({data}: NoteResult) => {
    return (
        <div>
            <ul>
                {data && data.map((item: NoteData, index: number) => <li key={index}>{item.title}</li>)}
            </ul>
        </div>
    );
};
export default Notes;