import RestHeader from "./RestHeader/RestHeader"
import RestHome from "./RestHome/RestHome"

function Restaurant({ dishes }) {
  return (
    <>
      <RestHeader />
      <RestHome dishes={dishes} />
    </>
  )
}

export default Restaurant