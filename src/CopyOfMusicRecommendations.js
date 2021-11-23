import { useState, useEffect } from 'react';
import MusicResults from './MusicResults';

function MusicRecommendations(props) {
    // initialize state to hold music recommendations
    const [musicReco, setMusicReco] = useState([]);
    // const [musicReco, setMusicReco] = useState([ [{}, {}, {}, {}], [{}, {}, {}, {}], [{}, {}, {}, {}], [{}, {}, {}, {}], [{}, {}, {}, {}]]);
    // const recommendations = [...musicReco];
    // const slicedRecommendations = recommendations.slice(0, 4)
    // const [currentPage, setCurrentPage] = useState(0)

    // const handleClick = (event) => {
    //     event.preventDefault();
    // }

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
                'params[limit]': 4,
                'params[k]': `427150-musicfin-QVZ0ESID`
            });

            fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((jsonResponse) => {
                    // Specific error handling since API always returns a successful call, even if it's an invalid parameter
                    if (jsonResponse.Similar.Info[0].Type === 'music') {
                        // console.log(jsonResponse.Similar.Results)
                        setMusicReco(jsonResponse.Similar.Results);
                    } else if (jsonResponse.Similar.Info[0].Type === 'unknown') {
                        throw new Error('invalid musician name')
                    }
                })
                .catch((error) => {
                    console.log(error.message)
                    // Modal error display
                    if (error.message) {
                        alert('caught the error')
                    }
                })
        }
    }, [props.searchedMusician])

    return (
        <section className="musicResults">
            {/* Conditional operator, changing the on-screen message depending on whether or not the form has been submitted */}
            {props.searchedMusician
                ? <p className="resultsHeading">Ok, so you like <span>{props.searchedMusician}</span>, but have you heard of...</p>
                : <p>Waiting to hit play...</p>}

            {
                musicReco.map(musician => {
                    // console.log(musician)
                    return (
                        // Pass retrieved API data as props to child component
                        <MusicResults
                            key={musician.yID}
                            name={musician.Name}
                            blurb={musician.wTeaser}
                            infoLink={musician.wUrl}
                            videoLink={musician.yUrl}
                        />
                    )
                })
            }

            {/* <button onClick={handleClick}>Load more results</button> */}


            {/* Create component for modal? Pass toggle state as props??? */}
        </section>
    )
}

export default MusicRecommendations;