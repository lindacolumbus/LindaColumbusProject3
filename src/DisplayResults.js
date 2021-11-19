import { useState } from 'react';
import UserSearchQuery from './UserSearchQuery';
import MusicRecommendations from './MusicRecommendations';

function DisplayResults() {

    const [searchResult, setSearchResult] = useState('');

    const handleSubmit = (event, userInput) => {
        event.preventDefault();
        setSearchResult(userInput);
        console.log(userInput)

    }

    return (
        <section className="results">
            <UserSearchQuery 
                searchValue={handleSubmit}/>
            <MusicRecommendations 
                searchedMusician={searchResult}
                />
        </section>
    )
}

export default DisplayResults;