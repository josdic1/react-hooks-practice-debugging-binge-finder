import React from "react";

function TVShow(props) {
  return (
    <div>
      <br />
      <img src={props.image.medium} onClick={props.selectShow} alt="" />
    </div>
  );
}

export default TVShow;
