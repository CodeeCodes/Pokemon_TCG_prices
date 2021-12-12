import React, { useState, useEffect } from "react";
let axios = require("axios").default;

export default function Multi_sets() {
  const [set, getSets] = useState([]);

  const set_options = {
    method: "GET",
    url: "https://pokemon-tcg-card-prices.p.rapidapi.com/set",
    headers: {
      "x-rapidapi-host": "pokemon-tcg-card-prices.p.rapidapi.com",
      "x-rapidapi-key": "52f19ac566msh98914ac4f41b70ap184c2fjsn7fb7b27edf87",
    },
  };

  const set_call = async () => {
    await axios
      .request(set_options)
      .then(function (response) {
        console.log(response);
        getSets([response.data.results]);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  let show_set;
  if (set.length > 0) {
    show_set = set[0].map(function (set) {
      return (
        <div className="set_returned_div" key={set.setId}>
          <h3 className="set_returned_name">{set.name}</h3>
          <h4 className="set_returned_series">{set.series}</h4>
          <h5 className="set_returned_series">{set.set}</h5>
        </div>
      );
    });
  }

  useEffect(
    () => {
      set_call();
    },
    [getSets],
    2000
  );

  return (
    <div className="set_card_div">
      <h2 className="set_card_heading">Pokemon Sets</h2>
      <button className="set_card_button">GET POKEMON</button>
      <div className="set_list"> {show_set}</div>
    </div>
  );
}
