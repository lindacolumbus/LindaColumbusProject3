import { useState, useEffect } from 'react';
import MusicResults from './MusicResults';

function MusicRecommendations(props) {
    // initialize state to hold music recommendations
    const [musicReco, setMusicReco] = useState([]);

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
                'params[limit]': 20,
                'params[k]': `427150-musicfin-QVZ0ESID`
            });

            fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((jsonResponse) => {
                    // console.log(jsonResponse.Similar.Results);
                    // store fetched API data (array of objects) in a variable
                    const results = jsonResponse.Similar.Results;

                    // loop through the objects, adding a new "batch" increment property
                    for (let i = 0; i < results.length; i++) {
                        results[i].batch = i
                    }

                    // do I need to make a copy of the array with the new "batch" property?
                    
                    console.log(results)
                    
                    // Specific error handling since API always returns a successful call, even if it's an invalid parameter
                    if (jsonResponse.Similar.Info[0].Type === 'music') {
                        // console.log(jsonResponse.Similar.Results)
                        setMusicReco(results);
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
    }, [props.searchedMusician])

    return (
        <>
            <section className="musicResults">
                {/* Conditional operator, changing the on-screen message depending on whether or not the form has been submitted */}
                {props.searchedMusician 
                ? <p className="resultsHeading">Ok, so you like <span>{props.searchedMusician}</span>, but have you heard of...</p> 
                : <p>You spin me right round, baby, right round...</p>}

                {
                    musicReco.map(musician => {
                        // console.log(musician)
                        if (musician.batch < 4) {
                            
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
                    })
                } 

                {/* Create component for modal? Pass toggle state as props??? */}

            </section>
            <div className="loadMore">
                {/* Only show "load more results" button after first batch of four results are rendered */}
                {props.searchedMusician
                    ? <button>Gimme, gimme more</button>
                    : null}
            </div>
        </>
    )
}

export default MusicRecommendations;