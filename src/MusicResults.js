function MusicResults(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <article>
                <ul>
                    {/* <li>{props.blurb.split(' ', 30) + '...'}</li> */}
                    <li><a href={props.infoLink}>What they're all about</a></li>
                    <li>{props.videoLink}</li>
                </ul>
            </article>
        </div>
    )
}

export default MusicResults;