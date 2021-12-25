import React, { useState, useEffect } from "react";
let axios = require("axios").default;

export default function Multi_cards() {
  const [cards_2, getCards2] = useState({});
  const [isFetching, getIsfetching] = useState([false]);
  let page = 1;

  const card_options = {
    headers: "X-Api-Key= 52f19ac566msh98914ac4f41b70ap184c2fjsn7fb7b27edf87",
  };

  const card_call = async () => {
    await axios
      .get(
        `https://api.pokemontcg.io/v2/cards?pageSize=10&page=${page}?`,
        card_options.headers
      )
      .then(function (response) {
        // console.log(response.data.data);
        const new_pokemon = [response.data.data];
        getCards2(...new_pokemon, new_pokemon);
      })
      .catch(function (error) {
        console.error(error);
      });
    page++;
  };

  function handleScroll(e) {
    e.preventDefault();
    if (
      window.innerHeight + e.target.documentElement.scrollTop + 1 >=
      e.target.documentElement.scrollHeight
    ) {
      card_call();
      getIsfetching(true);
    }
  }

  let show_cards;
  if (cards_2 && cards_2.length > 0) {
    // console.log(cards_2);
    let m_cards = cards_2;
    show_cards = m_cards.map(function (card) {
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

  useEffect(() => {
    card_call();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="card">
      <h2 className="card_heading">Pokemon Cards</h2>
      <div className="card_list">{show_cards}</div>

      {"Fetching more list items..."}
    </div>
  );
}
