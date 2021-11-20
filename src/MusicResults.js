function MusicResults(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <article>
                <ul>
                    {/* Render first two sentences returned from API description */}
                    <li>{props.blurb.split('.', 3) + '...'} <a href="{props.infoLink}">Read more</a></li>
                    <li>{props.videoLink}</li>
                </ul>
            </article>
        </div>
    )
}

export default MusicResults;