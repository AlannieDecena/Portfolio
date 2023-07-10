import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import CardTemplate from './CardTemplate';
import { Link } from 'react-router-dom';


export default function AnimeArrived() {
  useEffect(() => {
    fetch('https://kitsu.io/api/edge/trending/anime')
      .then((response) => response.json())
      .then((json) => {
        console.log(json.data);
        getinfo(json);
      })
      .catch((error) => console.error(`Caught error: ${error}`));
  }, []);

  function getinfo(json) {
    let synopsis = json.data.map((anime) => anime.attributes.synopsis);
    const randomPick = synopsis[Math.floor(Math.random() * synopsis.length)];
    let heading = 'You are now';
    let cardList = document.getElementById('card-list');
    if (cardList) {
      ReactDOM.render(
        <CardTemplate title={heading} text={randomPick} />,
        cardList
      );
    }
  }

  return (
    <div className="arrivedRoot">
      <div className="arrivedbody">
      <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/animehome">
            X
          </Link>
        </div>
      </nav>

      <div id="card-list"></div>
      </div>
    </div>
  );
}
