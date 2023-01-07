import React, { useState, useEffect } from "react";
let axios = require("axios").default;

export default function Multi_sets() {
  const [set, getSets] = useState([]);

  const set_options = {
    host: "https://api.pokemontcg.io/v2/sets",
    headers: process.env.POKEMON_APP_API_KEY,
  };

  //async api call for card sets

  const set_call = async () => {
    await axios
      .get(set_options.host, set_options.headers)
      .then(function (response) {
        // console.log(response.data.data);
        getSets([response.data.data]);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  //
  let show_set;
  if (set.length > 0) {
    show_set = set[0].map((set) => {
      return (
        <div className="set_returned_div" key={set.id}>
          <img
            className="set_returned_image"
            src={set.images.logo}
            alt="for presentational card images"
          ></img>
          <h1 className="set_returned_name">{set.name}</h1>
          <h2 className="set_returned_series">{set.series}</h2>
          <h3 className="set_returned_release_date">
            {"Released on: "}
            {set.releaseDate}
          </h3>
          <img
            className="set_returned_image_small"
            src={set.images.symbol}
            alt="for presentational card images"
          ></img>
        </div>
      );
    });
  }

  useEffect(() => {
    set_call();
  }, []);

  // What is returned to the webpage 
  return (
    <div className="set_card_div">
      <h2 className="set_card_heading">Pokemon Sets</h2>
      {/* <button className="set_card_button">GET POKEMON</button> */}
      <div className="set_list"> {show_set}</div>
    </div>
  );
}
