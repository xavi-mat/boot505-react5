import PersNav from "../PersNav/PersNav"

function PersOther({ db }) {
  db.loadUsers();
  let users;
  if (db.users.length) {
    users = db.users.map((u, i) => (
      <div key={i} className="card mb-3">
        <div className="card-header">
          <strong>{u.name}</strong>
        </div>
        <div className="card-body">
          {u.msg}
        </div>
        <div className="card-footer text-end">
          {u.date}
        </div>
      </div>
    ))
  } else {
    users = (<div className="text-muted">(Empty list)</div>);
  }

  return (
    <div>
      <PersNav />
      <div className="container">
        <h1>Messages List</h1>
        {users}
      </div>
    </div>
  )
}

export default PersOther