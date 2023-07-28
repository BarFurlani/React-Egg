import React, { useEffect, useState } from "react";
import Card from "./Card";
import RickAndMortyService from "../../service/RickAndMorty.service";

const Cards = () => {
  const [RickAndMorty, setRickAndMorty] = useState([]);

  useEffect(() => {
    RickAndMortyService.getAllCharacters()
      .then((data) => setRickAndMorty(data.results))
      .catch((error) => console.log(error));
  }, []); //este input puede o no estar, lo procesa igual

  const cardList = RickAndMorty.map((m) => (
    <Card RickAndMorty={m} key={m.id} />
  ));

  return (
    <div className="album py-5 bg-body-tertiary">
      <div className="container">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
          {cardList}
        </div>
      </div>
    </div>
  );
};

export default Cards;
