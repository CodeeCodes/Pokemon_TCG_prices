import React, { useState, useEffect } from "react";
let axios = require("axios").default;
// let dot = require("dotenv").config();
const process = require("process");

export default function Search() {
  const [cards, setCards] = useState([]);
  const [found, getFoundCard] = useState([]);
  const card_options = {
    host: "https://api.pokemontcg.io/v2/cards",
    // headers: process.env.POKEMON_APP_API_KEY,
  };
  //console.log(process);
  async function card_call() {
    await axios
      .get(card_options.host, card_options.headers)
      .then(function (response) {
        // console.log(response.data.data);
        setCards([response.data.data]);
      })
      .catch(function (error) {
        console.error(error);
      });
  }
  useEffect(() => {
    card_call();
  }, []);

  //Search Function
  const Search = (key) => {
    if (cards && cards.length > 0 && key !== "") {
      let new_cards = cards[0];
      const new_results = new_cards.filter((new_cards) =>
        new_cards.name.toUpperCase().includes(key.toUpperCase())
      );
      // console.log(new_results);
      getFoundCard([new_results]);
      console.log("new_results", new_results);
    }
  };
  let show_cards;
  if (found && found.length > 0) {
    show_cards = found[0].map((card) => {
      // console.log(found);
      let price = card.cardmarket;
      if ((price && price != null) || undefined) {
        let new_price = price.prices;
        let average_price = new_price.averageSellPrice;
        let card_image = card.images.small;

        return (
          <div className="card" key={card.id}>
            <div className=" card_returned_div_back">
              <div className=" card_returned_div_back_image">
                <img
                  className="card_returned_image"
                  src={card_image}
                  alt="for presentational card images"
                ></img>
              </div>
              <div className="card_returned_div_info">
                {" "}
                <h4 className="card_returned_name">{card.name}</h4>
                <h4 className="card_returned_high_price">
                  {"Card Rarity: "}
                  {card.rarity}
                </h4>
                <h5 className="card_returned_type">{card.types}</h5>
                <h5 className="card_returned_series">{card.set.series}</h5>
                {/* <h5 className="card_returned_set">{card.set.name}</h5> */}
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
              </div>
            </div>
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
        onChange={(event) => {
          event.preventDefault();
          Search(event.target.value);
        }}
      />
      <div className="search">{show_cards}</div>
    </div>
  );
}
