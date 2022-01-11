import './Styles.css';
// import Header from './components/Header';
// import DisplayResults from './components/DisplayResults';
import Footer from './components/Footer';


import { useState } from 'react';
import UserSearchQuery from './components/UserSearchQuery';
import MusicRecommendations from './components/MusicRecommendations';
import SearchHistory from './components/SearchHistory';

// function DisplayResults() {
//     const [searchResult, setSearchResult] = useState('');

//     const handleSubmit = (event, userInput) => {
//         event.preventDefault();
//         setSearchResult(userInput);
//     }

function App() {

    const [searchResult, setSearchResult] = useState('');

    const handleSubmit = (event, userInput) => {
        event.preventDefault();
        setSearchResult(userInput);
    }

    return (
        <div className={searchResult ? 'searching' : ''}>
            <a href="#mainContent" class="skipLink">Skip to main content</a>

            <header>
                <h1>Taste Maker</h1>
            </header>

            <main class="wrapper" id="mainContent">
                <section className="results">
                    {/* Pass down props to children components */}
                    <UserSearchQuery
                        searchValue={handleSubmit} />
                    <MusicRecommendations
                        searchedMusician={searchResult} />
                    <SearchHistory
                        searchedMusician={searchResult} />
                </section>
            </main>
            <Footer />
        </div>
    );
}

export default App;