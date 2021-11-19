import './Styles.css';
// import { useEffect, useState } from 'react';
import UserSearchQuery from './UserSearchQuery';
import MusicRecommendations from './MusicRecommendations';

function App() {

    return (
        <div className="App">
            <header>
                <h1>Taste Reco App</h1>
            </header>
            <main class="wrapper">
                <UserSearchQuery />
                {/* <MusicRecommendations /> */}
            </main>
        </div>
    );
}

export default App;


// MORE HUMAN-SPEAK
// On page load, user is presented with an input element and a search button and prompted to enter the name of a musician/band they enjoy
// App takes the user's input on button submit, interprets it as a search parameter (spaces become "-") and is sent to the API
// Other API parameters are specified (API key, number of returned results, type of recommendation, YouTube link, etc.)
// API retrieves data and returns 3 recommendations
// Recommended musician's name and link to YouTube video is rendered to the page in a new section, as new list items
// Integrate error handling to take into account blank, misspelled or non-existent musicians in the API database


// MORE TECHNICAL-SPEAK
// *** App Component ***
// Create state items to hold data coming from the third-party API and the user input
// - similar music recommendation
// - userQuery

// Once the component has been loaded (mounted) call the local method (getReco) to get a list of recommended similar musicians

// A local method (getReco) to make the third-party API call with or without user input
// - when successful, update the state (recommendation) with new data
// - if unsuccessful, display the error message

// A local method (handleChange) to handle the onChange event to update state (userQuery) with user input

// Render the application
// - header
// - form with user input to find similar musicians
// - use the imported Result component
// - footer

// *** Result Component ***
// Create a component to display data from the third-party API
// This component will get data (similar artists) passed in as props
// Use .map() to render out 3 pieces of data



// https://tastedive.com/read/api
// MVP
// User inputs the name of a musician, and the API returns a set of 3 similar artists which get rendered to the page

// STRETCH GOALS
// Broaden the scope of the recommendation app, so that it returns recommendations for musicians, tv shows, books, and movies
// Store user input history into Firebase, and provide the user the option to view user search history, which pulls from Firebase
// Randomizer: create the option to hit a button to return a random musician
