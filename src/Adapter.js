const API = "https://api.tvmaze.com/shows";

const Adapter = {
  getShows() {
    return fetch(API).then((res) => res.json());
  },
  getShowEpisodes(showId) {
    return fetch(`https://api.tvmaze.com/shows/${showId}/episodes`).then((res) =>
      res.json()
    );
  },
};

export default Adapter;