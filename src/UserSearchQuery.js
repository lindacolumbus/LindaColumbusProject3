import { useState } from 'react';

function UserSearchQuery(props) {
    // initialize state to hold user input
    const [userInput, setUserInput] = useState('');

    const handleChange = (event) => {
        setUserInput(event.target.value);
    }

    return (
        <section className="userSearch">
            <div className="instructions">
                <p>Are you still listening to that album you liked back in high school? Only have 10 songs that are stuck on repeat? It's time to find some new music for your playlist! </p>
            </div>
            {/* Callback function to pass value to parent (DisplayResults) component */}
            {/* Second function is clearing input field on submit  */}
            <form onSubmit={(event) => { props.searchValue(event, userInput); setUserInput('') }}>
                <label htmlFor="userSearch">Enter the name of a musician or band you love:</label>
                <input id="userSearch" type="text" placeholder="Search" value={userInput} onChange={handleChange} />
                <button className="submit">Here we are now, entertain us</button>
            </form>
        </section>
    )
}

export default UserSearchQuery;