import React, { useState } from "react";
import Episode from "./Episode.js"

function SelectedShowContainer({ selectedShow, episodes }) {
  const [selectedSeason, setSelectedSeason] = useState(1);

  const uniqueSeasons = [...new Set(episodes.map(e => e.season))];

  function handleSelectionChange(e) {
    setSelectedSeason(Number(e.target.value));
  }

  const filteredEpisodes = episodes.filter(e => e.season === selectedSeason);

  return (
    <div style={{ position: "static" }}>
      <h2>{selectedShow.name}</h2>
      <img src={selectedShow.image.medium} alt="" />
      <p dangerouslySetInnerHTML={{ __html: selectedShow.summary }}></p>
      <p>Premiered: {selectedShow.premiered}</p>
      <p>Status: {selectedShow.status}</p>
      <p>Average Rating: {selectedShow.rating.average}</p>
      
      <select onChange={handleSelectionChange}>
        {uniqueSeasons.map(season => (
          <option key={season} value={season}>
            Season {season}
          </option>
        ))}
      </select>

      {filteredEpisodes.map(e => (
        <Episode key={e.id} eachEpisode={e} />
      ))}
    </div>
  );
}

export default SelectedShowContainer;
