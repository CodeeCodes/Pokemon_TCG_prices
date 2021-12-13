import React, { useState, useEffect } from "react";
let axios = require("axios").default;

export default function Single_card() {
  const [card, getSingleCard] = useState([]);
  const [single, getSingle] = useState([]);

  const card_options = {
    method: "GET",
    url: "https://pokemon-tcg-card-prices.p.rapidapi.com/card",
    params: {
      setId: "33ee55f4-30d0-4900-850f-36a351fb9719",
      set: "vivid-voltage",
      series: "sword-and-shield",
    },
    headers: {
      "x-rapidapi-host": "pokemon-tcg-card-prices.p.rapidapi.com",
      "x-rapidapi-key": "52f19ac566msh98914ac4f41b70ap184c2fjsn7fb7b27edf87",
    },
  };
  const card_call = async () => {
    await axios
      .request(card_options)
      .then(function (response) {
        console.log(response.status + " okaay");
        getSingleCard([response.data.results]);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(
    () => {
      card_call();
    },
    [getSingleCard],
    2000
  );

  let single_card;
  if (card && card.length != 0) {
    single_card = card[0].map(function (card) {
      let single = card.name + " , " + card.cardId;
      console.log(single)
    });
  }

  return <div className="single_card"></div>;
}
