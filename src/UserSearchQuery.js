import { useState } from 'react';
import MusicRecommendations from './MusicRecommendations';

function UserSearchQuery() {
    // initialize state to hold user input
    const [ userInput, setUserInput ] = useState('');
    const [ searchQuery, setSearchQuery ] = useState('');

    const handleChange = (event) => {
        setUserInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        setSearchQuery(userInput);
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
            <MusicRecommendations 
                userSearch={searchQuery}/>
        </section>
    )
}

export default UserSearchQuery;