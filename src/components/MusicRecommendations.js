import { useState, useEffect } from "react";
import MusicResults from "./MusicResults";

function MusicRecommendations(props) {
  // initialize state to hold music recommendations
  const [musicReco, setMusicReco] = useState([]);
  // state to hold number of API results rendered to the page
  const [batch, setBatch] = useState(4);
  // function for whether or not error message modal is visible or not
  const [modalVisible, setModalVisible] = useState(false);

  // event handler, increase number of API results rendered to the page +4
  const moreResults = () => {
    setBatch(batch + 4);
  };

  useEffect(() => {
    const proxiedUrl = "https://tastedive.com/api/similar";

    // only return once if user passes a value and submits the form
    if (props.searchedMusician) {
      const url = new URL("http://proxy.hackeryou.com");
      url.search = new URLSearchParams({
        reqUrl: proxiedUrl,
        "params[q]": props.searchedMusician,
        "params[type]": `music`,
        "params[info]": 1,
        "params[limit]": batch,
        "params[k]": `427150-musicfin-6Q1BY68L`,
      });

      fetch(url)
        .then((response) => {
          return response.json();
        })
        .then((jsonResponse) => {
          const results = jsonResponse.Similar.Results;
          // make a copy of the array to not mutate original fetched data
          const allData = [...results];

          // specific error handling since API always returns a successful call, even if it's an invalid search query
          if (jsonResponse.Similar.Info[0].Type === "music") {
            setMusicReco(allData);
          } else if (jsonResponse.Similar.Info[0].Type === "unknown") {
            throw new Error("invalid musician name");
          }
        })
        .catch((error) => {
          // modal error display; if error occurs, let the modal be visible
          if (error.message) {
            setModalVisible(true);
          }
        });
    }
    // re-renders the component on these two conditions: 1. if user passes a value to the search input; 2. if batch variable is updated
  }, [props.searchedMusician, batch]);

  return (
    <>
      <section className="musicResults">
        {/* conditional operator, changing the on-screen message depending on whether or not results have been rendered to the page */}
        {musicReco.length >= 4 ? (
          <p className="resultsHeading">
            Ok, so you like <span>{props.searchedMusician}</span>, but have you
            heard of...
          </p>
        ) : (
          <p>You spin me right round, baby, right round...</p>
        )}

        {musicReco.map((musician) => {
          return (
            // pass retrieved API data as props to child component
            <MusicResults
              key={musician.yID}
              name={musician.Name}
              blurb={musician.wTeaser}
              infoLink={musician.wUrl}
              videoLink={musician.yUrl}
            />
          );
        })}
      </section>
      <div className="loadMore">
        {/* only show "load more results" button after first batch of four results are rendered */}
        {musicReco.length >= 4 ? (
          <button onClick={moreResults}>Gimme, gimme more</button>
        ) : null}
      </div>
      {/* if error message occurs, display the modal */}
      {modalVisible === true ? (
        <div className="modal">
          <p>
            Can't find that musician! Want to try again? Honey, I'm still free,
            take a chance on me.
          </p>
          <button
            onClick={() => {
              setModalVisible(false);
            }}
          >
            Close
          </button>
        </div>
      ) : null}
    </>
  );
}

export default MusicRecommendations;
