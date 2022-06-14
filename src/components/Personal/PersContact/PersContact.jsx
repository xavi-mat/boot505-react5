import { useState } from "react"
import { useNavigate } from "react-router-dom";
import PersNav from "../PersNav/PersNav"

function PersContact({ db }) {

  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    msg: "",
  }
  const [data, setData] = useState({ ...initialValues });
  const [message, setMessage] = useState(null);
  const [isBtnActive, setIsBtnActive] = useState(false);

  const validateInput = (input) =>
    input.value.length < 5 ?
      (<div key={input.name}><strong>{input.name}</strong> must have at least 5 characters</div>) :
      null;

  const handleInputChange = (ev) => {
    setData({
      ...data,
      [ev.target.name]: ev.target.value,
    })
    let msg = [];
    msg.push(validateInput(document.querySelector('#form-name')));
    msg.push(validateInput(document.querySelector('#form-email')));
    msg.push(validateInput(document.querySelector('#form-msg')));
    setMessage(msg);
    setIsBtnActive(msg.every(m => !m));
  }
  const handleSubmit = (ev) => {
    ev.preventDefault();
    const newUser = {
      ...data,
      date: (new Date()).toLocaleDateString(
        'en',
        { day: 'numeric', month: 'long', year: 'numeric' }
      )
    }
    db.saveUser(newUser);
    setMessage("Data has been saved. You'll be redirected to the messages list.")
    clearState();
    setTimeout(() => {
      navigate('/personal/other');
    }, 1000);
  }
  const clearState = () => {
    setData({ ...initialValues });
  }
  return (
    <div>
      <PersNav />
      <div className="container">
        <h1>Contact Form</h1>
        <form onSubmit={handleSubmit}>
          <div className="d-md-flex">
            <div className="m-3">
              <label className="form-label">Name:</label>
              <input
                type="text"
                id="form-name"
                name="name"
                value={data.name}
                className="form-control"
                onChange={handleInputChange}
                placeholder="Name" />
            </div>
            <div className="m-3">
              <label className="form-label">Email:</label>
              <input
                type="email"
                id="form-email"
                name="email"
                value={data.email}
                className="form-control"
                onChange={handleInputChange}
                placeholder="Email" />
            </div>
          </div>
          <div className="m-3">
            <label className="form-label">Message:</label>
            <textarea id="form-msg"
              name="msg"
              value={data.msg}
              className="form-control"
              onChange={handleInputChange}
              placeholder="Write your message"></textarea>
          </div>
          <div className="m-3">
            <input
              type="submit"
              className="btn btn-primary me-3"
              disabled={!isBtnActive}
              value="Send" />
            <input
              type="reset"
              className="btn btn-secondary"
              onClick={clearState}
              value="Reset" />
          </div>
        </form>
        <div>
          {message}
        </div>
      </div>
    </div>
  )
}

export default PersContact