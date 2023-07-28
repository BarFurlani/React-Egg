import React, { Component } from "react";
import Cards from "./Cards";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = { RickAndMorty: [] };
  }

  componentDidMount() {}

  render() {
    return (
      <main>
        <section className="py-5 text-center container">
          <div className="row py-lg-5">
            <div className="col-lg-6 col-md-8 mx-auto">
              <h1 className="fw-light">Primer ejercicio prueba React</h1>
              <p className="lead text-body-secondary">
                Realizado por Bárbara R. Furlani en el curso de fullstack
                impartido por Egg Educación, en Mendoza Argentina.
              </p>
              <p>
                <a href="#" className="btn btn-primary my-2">
                  Main call to action
                </a>
                <a href="#" className="btn btn-secondary my-2">
                  Secondary action
                </a>
              </p>
            </div>
          </div>
        </section>
        <Cards />
      </main>
    );
  }
}
