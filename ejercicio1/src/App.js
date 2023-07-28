import './App.css';

function App() {
  const titulo = "Ejercicio 1";
  const texto =
    "En este ejercicio hay que hacer una funcion que muestre dos componentes.";

  return (
    <div className="modal-dialog" role="document">
      <div className="modal-content rounded-4 shadow">
        <div className="modal-header border-bottom-0">
          <h1 className="modal-title fs-5">
            <i class="fa fa-align-center" aria-hidden="true">
              <u>{titulo}</u>
            </i>
          </h1>
          <h2>(componente 1)</h2>
        </div>
        <div className="modal-body py-0">
          <p align="center">
            <strong>{texto}(Componente 2)</strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;