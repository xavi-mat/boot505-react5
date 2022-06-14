import RestHeader from "../RestHeader/RestHeader"
import { useState } from "react"
import { useNavigate } from "react-router-dom";

function RestReserve({ db }) {

  const navigate = useNavigate();

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    guests: "",
    date: "",
    time: "",
    type: "",
    message: "",
  }
  const [data, setData] = useState({ ...initialValues });

  const handleInputChange = (ev) => {
    setData({
      ...data,
      [ev.target.name]: ev.target.value,
    })
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    const newReservation = {
      ...data,
      createdAt: new Date(),
    }
    db.saveReservation(newReservation);
    clearState();
    navigate('/restaurant/reservations')
  }
  const clearState = () => {
    setData({ ...initialValues });
  }

  return (
    <>
      <RestHeader />
      <div className="container">
        <h1>Make a reservation</h1>
        <form onSubmit={handleSubmit}>
          <div className="d-sm-flex">
            <div className="my-3 mx-1 flex-fill">
              <label className="form-label">Name</label>
              <input type="text" className="form-control"
                id="form-name" name="name" onChange={handleInputChange} value={data.name} placeholder="Name" required />
            </div>
            <div className="my-3 mx-1 flex-fill">
              <label className="form-label">Email</label>
              <input type="email" className="form-control"
                id="form-email" name="email" onChange={handleInputChange} value={data.email} placeholder="Email" required />
            </div>
          </div>
          <div className="d-sm-flex">
            <div className="my-3 mx-1 flex-fill">
              <label className="form-label">Phone</label>
              <input type="text" className="form-control"
                id="form-phone" name="phone" onChange={handleInputChange} value={data.phone} placeholder="Phone" required />
            </div>
            <div className="my-3 mx-1 flex-fill">
              <label className="form-label">#of Guests</label>
              <input type="number" className="form-control"
                id="form-guests" name="guests" onChange={handleInputChange} value={data.guests} placeholder="#of Guests" required />
            </div>
          </div>
          <div className="d-sm-flex">
            <div className="my-3 mx-1 flex-fill">
              <label className="form-label">Date</label>
              <input type="date" className="form-control"
                id="form-date" name="date" onChange={handleInputChange} value={data.date} placeholder="Date" required />
            </div>
            <div className="my-3 mx-1 flex-fill">
              <label className="form-label">Time</label>
              <input type="time" className="form-control"
                id="form-time" name="time" onChange={handleInputChange} value={data.time} placeholder="Time" required />
            </div>
          </div>
          <div className="d-sm-flex">
            <div className="my-3 mx-1 flex-fill">
              <label className="form-label">Reservation Type</label>
              <select className="form-select" onChange={handleInputChange} id="form-type" name="type" required>
                <option value="Dinner">Dinner</option>
                <option value="VIP">VIP</option>
                <option value="Birthday">Birthday</option>
                <option value="Anniversary">Anniversary</option>
                <option value="Private">Private</option>
                <option value="Wedding">Wedding</option>
                <option value="Corporate">Corporate</option>
                <option value="Holiday">Holiday</option>
              </select>
            </div>
            <div className="my-3 mx-1 flex-fill">
              <label className="form-label">Any special requests</label>
              <textarea className="form-control" onChange={handleInputChange}
                id="form-message" name="message" value={data.message}></textarea>
            </div>
          </div>
          <div className="text-center">
            <button type="submit" className="btn btn-primary w-50">Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}

export default RestReserve