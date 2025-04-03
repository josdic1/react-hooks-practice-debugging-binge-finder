import React from "react";
import { Input } from "semantic-ui-react";

function Search({ handleSearch, search }) {
  return (
    <Input
      type="text"
      placeholder="Search"
      onChange={handleSearch}
      value={search}
    />
  );
}

export default Search;
