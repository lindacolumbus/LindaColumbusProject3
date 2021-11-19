import { useState, useEffect } from 'react';
import MusicRecommendations from './MusicRecommendations';

function UserSearchQuery(props) {
    // initialize state to hold user input
    const [ userInput, setUserInput ] = useState('');

    const handleChange = (event) => {
        setUserInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        // console.log(userInput)
    }

    return (
        <section className="userSearch">
            <div className="instructions">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore animi alias, id pariatur, soluta omnis officia dolorem earum at illo eius non quas repellat aliquid nostrum molestiae laudantium? Earum, maxime!</p>
            </div>
            <div className="searchForm">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="userSearch">Name of musician or band</label>
                    <input id="userSearch" type="text" placeholder="Search" value={userInput} onChange={handleChange} />
                    <button>Submit</button>
                </form>
            </div>
            <MusicRecommendations />
        </section>
    )
}

export default UserSearchQuery;

{/* <button onClick={() => {
    props.getResults(userInput);
    console.log(userInput)
}}>Search</button> */}