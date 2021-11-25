function MusicResults(props) {
    return (
        <article>
            <div>
                <h2>{props.name}</h2>
                {/* Render first 50 words from the description to the page */}
                <p>{props.blurb.split(' ', 50).join(' ') + '...'} <a href={props.infoLink} target="_blank" rel="noreferrer">Read more</a></p>
            </div>
            <div>
                <iframe src={props.videoLink} frameBorder="0" title="YouTube Music Video"></iframe>
            </div>
        </article>
    )
}

export default MusicResults;