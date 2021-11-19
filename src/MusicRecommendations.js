import { useState, useEffect } from 'react';
import MusicResults from './MusicResults'

function MusicRecommendations() {
    // initialize state to hold music recommendations
    const [ musicReco, setMusicReco ] = useState([]);

    useEffect(() => {
        const proxiedUrl = 'https://tastedive.com/api/similar';

        const url = new URL('http://proxy.hackeryou.com');
        url.search = new URLSearchParams({
            reqUrl: proxiedUrl,
            'params[q]': `glass-animals`,
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
                console.log(jsonResponse.Similar.Results)
                setMusicReco(jsonResponse.Similar.Results)
            })
    }, [])

    return (
        <section className="musicResults">
            <p className="resultsHeading">Have you heard of...</p>
            {
                musicReco.map(musician => {
                    console.log(musician)
                    return (
                        <MusicResults
                            key={musician.yID}
                            name={musician.Name}
                            // blurb={musician.wTeaser}
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