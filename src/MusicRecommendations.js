import { useState, useEffect } from 'react';
import MusicResults from './MusicResults'

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
                'params[limit]': 3,
                'params[k]': `427150-musicfin-QVZ0ESID`
            });

            fetch(url)
                .then((response) => {
                    return response.json();
                })
                .then((jsonResponse) => {
                    setMusicReco(jsonResponse.Similar.Results)
                })
        }
    }, [props.searchedMusician])

    return (
        <section className="musicResults">
            <p className="resultsHeading">Ok, so you like <span> {props.searchedMusician}</span>, but have you heard of...</p>
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
        </section>
    )
}

export default MusicRecommendations;