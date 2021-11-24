import { useState, useEffect } from 'react';
import firebase from './firebase'

// Firebase stores user's search history
function SearchHistory(props) {
    const [musicianHistory, setMusicianHistory] = useState([]);
    let [clearHistoryButton, setClearHistoryButton] = useState(`Shh, that's a secret`)

    // Clears entire Firebase search history and changes button text based on event
    const onDelete = () => {
        const dbRef = firebase.database().ref();
        dbRef.remove();
        setClearHistoryButton(`What music library?`)
    }

    useEffect(() => {
        const dbRef = firebase.database().ref();
        dbRef.on('value', (response) => {
            const newState = [];
            const data = response.val();
            for (let key in data) {
                newState.push({key: key, name: data[key]})
            }
            setMusicianHistory(newState);
        })
    }, [])

    return (
        <>
        {/* Only render this section once user submits a search query */}
        {props.searchedMusician
        ?
        <>
            <section className="searchHistory">
            <p>There will always be a special place in your music library for:</p>
                <ul>
                {/* adding index parameter to determine whether or not a comma should be added to the list items (not for last child) */}
                {musicianHistory.map((musician, index) => {
                    return (
                        <li key={musician.key}>
                            <p>{index
                                ? ', '
                                : null}
                                {musician.name}
                            </p>
                        </li>
                    )
                })}
                </ul>
            <button onClick={() => onDelete()}>{clearHistoryButton}</button>
            </section>
            </>
        : null }
        </>
    )
}

export default SearchHistory;