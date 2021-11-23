import { useState, useEffect } from 'react';
import MusicResults from './MusicResults';

function MusicRecommendations(props) {
    // initialize state to hold music recommendations
    const [musicReco, setMusicReco] = useState([]);
    // state to hold number of API results rendered to the page
    const [batch, setBatch] = useState(4);

    // event handler, increase number of API results rendered to the page +4
    const moreResults = () => {
        setBatch(batch + 4)
    }

    const [userInput, setUserInput] = useState('');

    const handleChange = (event) => {
        setUserInput(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(userInput)
    }

    useEffect(() => {
        const proxiedUrl = 'https://tastedive.com/api/similar';

        // Only return once if user passes a value and submits the form
        if (props.searchedMusician) {

            const url = new URL('http://proxy.hackeryou.com');
            url.search = new URLSearchParams({
                reqUrl: proxiedUrl,
                'params[q]': props.searchedMusician,
                'params[type]': `music`,
                'params[info]': 1,
                'params[limit]': batch,
                'params[k]': `427150-musicfin-QVZ0ESID`
            });
        
            fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((jsonResponse) => {
                    // store fetched API data (array of objects) in a variable
                    const results = jsonResponse.Similar.Results;
                    // make a copy of the array to not mutate original fetched data
                    const allData = [...results];
                    
                    // Specific error handling since API always returns a successful call, even if it's an invalid parameter
                    if (jsonResponse.Similar.Info[0].Type === 'music') {
                        setMusicReco(allData);
                        
                    } else if (jsonResponse.Similar.Info[0].Type === 'unknown') {
                        throw new Error('invalid musician name')
                    }
                })
                .catch((error) => {
                    // Modal error display
                    if (error.message) {
                        alert('caught the error')
                    }
                })
            }
    // re-renders the component on these two conditions: 1. if user adds a value to the search input; 2. if batch variable is updated
    }, [props.searchedMusician, batch])

    return (
        <>
            <section className="musicResults">
                {/* Conditional operator, changing the on-screen message depending on whether or not the form has been submitted */}
                {props.searchedMusician 
                ? <p className="resultsHeading">Ok, so you like <span>{props.searchedMusician}</span>, but have you heard of...</p> 
                : <p>You spin me right round, baby, right round...</p>}

                {
                    musicReco.map(musician => {                            
                        return (
                            // Pass retrieved API data as props to child component
                            <MusicResults
                                key={musician.yID}
                                name={musician.Name}
                                blurb={musician.wTeaser}
                                infoLink={musician.wUrl}
                                videoLink={musician.yUrl}
                            />
                        )}
                    )
                } 

                {/* Create component for modal? Pass toggle state as props??? */}

            </section>
            <div className="loadMore">
                {/* Only show "load more results" button after first batch of four results are rendered */}
                {props.searchedMusician
                    ? <button onClick={moreResults}>Gimme, gimme more</button>
                    : null}
            </div>
        </>
    )
}

export default MusicRecommendations;