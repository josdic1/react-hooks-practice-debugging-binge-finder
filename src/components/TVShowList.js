import React from "react";
import { Grid } from "semantic-ui-react";
import TVShow from "./TVShow.js";

function TVShowList({ shows, searchTerm, selectShow }) {
  const filteredShows = searchTerm
    ? shows.filter((s) => s.name.toLowerCase().includes(searchTerm))
    : shows;

  return (
    <div className="TVShowList">
      <Grid>
        {filteredShows.map((s) => (
          <TVShow show={s} key={s.id} selectShow={selectShow} />
        ))}
      </Grid>
    </div>
  );
}

export default TVShowList;
