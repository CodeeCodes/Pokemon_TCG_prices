import React, { useState, useEffect } from "react";
let axios = require("axios").default;

export default function Search() {
  const [cards, setCards] = useState([]);
  const [found, getFoundCard] = useState([]);
  const card_options = {
    host: "https://api.pokemontcg.io/v2/cards",
    headers: {
      "X-Api-Key": "52f19ac566msh98914ac4f41b70ap184c2fjsn7fb7b27edf87",
    },
  };

  const card_call = async () => {
    await axios
      .get(card_options.host)
      .then(function (response) {
        // console.log(response.data.data);
        setCards([response.data.data]);
      })
      .catch(function (error) {
        console.error(error);
      });
  };
  useEffect(
    () => {
      card_call();
    },
    [setCards],
    1000
  );

  const Search = (key) => {
    if (cards && cards.length > 0) {
      let new_cards = cards[0];
      const new_results = new_cards.filter((new_cards) =>
        new_cards.name.toUpperCase().includes(key.toUpperCase())
      );
      console.log(new_results);
      getFoundCard([new_results]);
      console.log("new_results", new_results);
    }
  };
  let show_cards;
  if (found && found.length > 0) {
    show_cards = found[0].map(function (card) {
      let price = card.cardmarket;
      if ((price && price != null) || undefined) {
        let new_price = price.prices;
        let average_price = new_price.averageSellPrice;
        let card_image = card.images.small;

        return (
          <div className=" card_returned_div_back" key={card.id}>
            <img className="card_returned_image" src={card_image}></img>
            <h4 className="card_returned_name">{card.name}</h4>
            <h4 className="card_returned_high_price">
              {"Card Rarity: "}
              {card.rarity}
            </h4>
            <h5 className="card_returned_type">{card.types}</h5>
            <h5 className="card_returned_series">{card.set.series}</h5>
            <h5 className="card_returned_set">{card.set.name}</h5>
            <h5 className="card_returned_last_sold">
              {" "}
              {"Last Updated: "}
              {card.tcgplayer.updatedAt}
            </h5>
            <h5 className="card_returned_amount_sold">
              {" "}
              {"Amount on market: "}
              {card.nationalPokedexNumbers}
            </h5>
            <h5 className="card_returned_last_sold_price">
              {" "}
              {"Average Sold Price: "} {average_price}
            </h5>
            {/* <div className="card_returned_div_front"></div> */}
          </div>
        );
      }
    });
  }

  return (
    <div className="search_main">
      <h1 className="search_heading">Search:</h1>
      <input
        className="search_input"
        type="text"
        onChange={(event) => Search(event.target.value)}
      />
      <div className="search">{show_cards}</div>
    </div>
  );
}
