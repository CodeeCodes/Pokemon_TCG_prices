import React, { useState, useEffect } from "react";
let axios = require("axios").default;

export default function Multi_cards() {
  const [cards, getCards] = useState([]);

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
        console.log(response);
        getCards([response.data.results]);
      })
      .catch(function (error) {
        console.error(error);
      });
  };

  // console.log(set[0]);

  let show_cards;
  if (cards.length > 0) {
    show_cards = cards[0].map(function (card) {
      return (
        <div className="set_returned_div" key={card.setId}>
          <h2 className="set_returned_name">{card.name}</h2>
          <h3 className="set_returned_high_price">{"Highest sold Price "}</h3>
          <h4 className="set_returned_series">{card.series}</h4>
          <h5 className="set_returned_series">{card.set}</h5>
        </div>
      );
    });
  }

  useEffect(() => {
    card_call();
  }, [getCards]);
  console.log(cards[0]);

  return (
    <div className="set_card">
      <h2 className="set_card_heading">Pokemon Cards</h2>
      <button className="set_card_button">GET POKEMON</button>
      <div className="set_list">{show_cards}</div>
    </div>
  );
}
