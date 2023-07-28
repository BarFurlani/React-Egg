import React, { useState, useEffect } from 'react'
import { useUserForm } from './../../hooks/Custom.hooks';

const UserForm = () => {

  const {form, setForm, handleChanges} = useUserForm();
  const [areEquals, setAreEquals] = useState(true);
  const [passwordConfirmation, setPasswordConfirmation] = useState();

  const handlePasswordConfirmation = (e) => {
    setPasswordConfirmation(e.target.value);
    
  }

  useEffect(() => {
    const { password } = form;
    setAreEquals(password === passwordConfirmation);
  },[passwordConfirmation])

  const handleSumbit = (e) => {  
    e.preventDefault()
   // UserService.save(form)
    console.log(form);
  }

  return (
    <div className="w-25 mx-auto mt-5">
      <h4 className="mb-3">Regístrate!</h4>
      <form>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            name="email"
            onChange={handleChanges}
          />
          <div id="emailHelp" className="form-text">
            We'll never share your email with anyone else.
          </div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            name="password"
            onChange={handleChanges}
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword2" className="form-label">
            Repetir Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword2"
            onChange={handlePasswordConfirmation}
          />
          {!areEquals && (                //esto es un condicional
            <div className="form-text list-group-item-danger">
              Las contraseñas no coinciden
            </div>
          )}
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button
          disabled={!areEquals} //el boton no funciona si los pass no son =
          type="submit"
          className="btn btn-primary"
          onClick={handleSumbit}
        >
          Registrar
        </button>
      </form>
    </div>
  );
}

export default UserForm
