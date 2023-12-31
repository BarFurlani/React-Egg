import { Link } from "react-router-dom";

const Card = ({ RickAndMorty }) => {
  
  return (
    <div className="col">
      <div className="card shadow-sm">
        <img
          className="bd-placeholder-img card-img-top"
          width="auto"
          height="225"
          src={RickAndMorty.image}
          alt="imagen"
        />
        <h3 className="mb-0 text-dark">{RickAndMorty.name}</h3>
        <div className="card-body">
          <p className="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
          <div className="d-flex justify-content-between align-items-center">
            <div className="btn-group">
              <Link to={`/details/${RickAndMorty.id}/`}>
                <button
                  type="button"
                  className="btn btn-sm btn-outline-secondary"
                >
                  Ver
                </button>
              </Link>
              <button
                type="button"
                className="btn btn-sm btn-outline-secondary"
              >
                Editar
              </button>
            </div>
            <small className="text-body-secondary">9 mins</small>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
