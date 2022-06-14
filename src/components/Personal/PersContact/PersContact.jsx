import { useState } from "react"
import PersNav from "../PersNav/PersNav"

function PersContact() {

  const initialValues = {
    name: "",
    email: "",
    pass: "",
  }
  const [data, setData] = useState({...initialValues});

  const onChangeHandler = (ev) => {
    setData({
      ...data,
      [ev.target.name]: ev.target.value,
    })
  }
  const onSubmitHandler = (ev) => {
    ev.preventDefault();
    console.log(data)
  }
  return (
    <div>
      <PersNav />
      <div className="container">
        <h1>Contact Form</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="d-md-flex">
            <div className="m-3">
              <label className="form-label">Name:</label>
              <input
                type="text"
                name="name"
                value={data.name}
                className="form-control"
                onChange={onChangeHandler}
                placeholder="Name" />
            </div>
            <div className="m-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                name="email"
                value={data.email}
                className="form-control"
                onChange={onChangeHandler}
                placeholder="Email" />
            </div>
            <div className="m-3">
              <label className="form-label">Password:</label>
              <input
                type="password"
                name="pass"
                value={data.pass}
                className="form-control"
                onChange={onChangeHandler}
                placeholder="Password" />
            </div>
          </div>
          <div className="m-3">
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default PersContact