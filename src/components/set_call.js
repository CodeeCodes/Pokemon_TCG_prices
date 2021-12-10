import React, { useState, useEffect } from "react";
let axios = require("axios").default;

export default function Multi_sets() {
  const [set, getSets] = useState([]);

  const set_options = {
    method: "GET",
    url: "https://pokemon-tcg-card-prices.p.rapidapi.com/set",
    // params: { set: "vivid-voltage", series: "sword-and-shield", limit: "20" },
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
  useEffect(() => {
    set_call();
  }, [getSets]);

  console.log(set);

  let show_set = () => {
    if (set.length > 0) {
      show_set = set.map(function (set) {
        console.log(set);
        return (
          <div className="set_returned_div">
            <h3 className="set_returned_name">{set.name}</h3>
          </div>
        );
      });
    }
  };
  return (
    <div className="set_card">
      <h2 className="set_card_heading">Pokemon Sets</h2>
      <button className="set_card_button" onClick={show_set}>
        GET POKEMON
      </button>
    </div>
  );
}
