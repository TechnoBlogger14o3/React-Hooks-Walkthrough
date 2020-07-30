import React, { useState, useEffect } from 'react';
import NewSongForm from './NewSongForm';

const SongList = () => {
    
    var randomID = Math.floor(Math.random() * 100) + 1;

    const [songs, setSongs] = useState([
        { title: 'almost home', id: 1},
        { title: 'memory gospel', id: 2},
        { title: 'this wild darkness', id: 3}
    ]);
    
    const[age, setAge] = useState(20);

    const addSong = (title) => {
        setSongs([...songs, { title: title, id: randomID}]);
    }
    
    useEffect(() => {
        console.log('useEffect Songs', songs);
    }, [songs])

    useEffect(() => {
        console.log('useEffect Age', age);
    }, [age])

    return ( 
        <div className='song-list'>
            <ul>
                {songs.map(song => {
                    return (<li key={song.id}>{song.title}</li>);
                })}
            </ul>

            <NewSongForm addSong={addSong}/>

            <button onClick={() => setAge(age + 1)}>Add 1 to Age = {age}</button>
        </div>
     );
}
 
export default SongList;