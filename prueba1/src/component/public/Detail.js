import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation } from "react-router-dom";
import RickAndMortyService from "../../service/RickAndMorty.service";

const Detail = () => {
  const [RickAndMorty, setRickAndMorty] = useState({});
  const { id } = useParams();
  //const { pathname } = useLocation();

  useEffect(() => {
    RickAndMortyService.getAllCharactersById(id).then((data) =>
      setRickAndMorty(data)
    );
  }, [ ]); //Al usar el useParams, que me "trae" el id,
  //en esta línea, lo puedo obviar

  const detailCard = {
    width: "80%",
    margin: "auto",
    background: "white",
  };

  return (
    <div className="row m-3" style={{ background: "gainsboro" }}>
      <div className="col-md-12" style={detailCard}>
        <div className="card flex-md-row mb-4 box-shadow h-md-250">
          <img
            className="img-fluid rounded-start imgDetalle"
            alt="img del personaje"
            height="auto"
            src={RickAndMorty.image}
          />
          <div className="card-body d-flex flex-column align-items-start">
            <strong className="d-inline-block mb-2 text-success">
              {RickAndMorty.species}
            </strong>
            <h3 className="mb-0 text.dark">{RickAndMorty.name}</h3>
            <div className="mb-1 text-muted">
              {new Date(RickAndMorty.created).toLocaleDateString()}
            </div>
            <div className="mb-1 text-muted"></div>
            <p className="card-text mb-auto">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <ul className="list-group mt-1">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus adc facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
            <Link to={"/"} className="mt-3 btn btn-primary btn-lg">
              Volver
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Detail;
