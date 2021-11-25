import { useState } from 'react';
import UserSearchQuery from './UserSearchQuery';
import MusicRecommendations from './MusicRecommendations';
import SearchHistory from './SearchHistory';

function DisplayResults() {
    const [searchResult, setSearchResult] = useState('');

    const handleSubmit = (event, userInput) => {
        event.preventDefault();
        setSearchResult(userInput);
    }

    return (
        <section className="results">
            {/* Pass down props to children components */}
            <UserSearchQuery
                searchValue={handleSubmit} />
            <MusicRecommendations
                searchedMusician={searchResult} />
            <SearchHistory
                searchedMusician={searchResult} />
        </section>
    )
}

export default DisplayResults;