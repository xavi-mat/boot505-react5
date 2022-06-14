import PersNav from "../PersNav/PersNav"

function PersContact() {
  const onChangeHandler = (ev) => { }
  const onSubmitHandler = (ev) => { }
  return (
    <div>
      <PersNav />
      <div className="container">
        <h1>Contact Form</h1>
        <form onSubmit={onSubmitHandler}>
          <div className="d-md-flex">
            <div class="m-3">
              <label class="form-label">Name:</label>
              <input
                type="text"
                name="name"
                class="form-control"
                onChange={onChangeHandler}
                placeholder="Name" />
            </div>
            <div class="m-3">
              <label class="form-label">Email:</label>
              <input
                type="email"
                name="email"
                class="form-control"
                onChange={onChangeHandler}
                placeholder="Email" />
            </div>
            <div class="m-3">
              <label class="form-label">Password:</label>
              <input
                type="password"
                name="pass"
                class="form-control"
                onChange={onChangeHandler}
                placeholder="Password" />
            </div>
          </div>
          <div class="m-3">
            <input type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  )
}

export default PersContact