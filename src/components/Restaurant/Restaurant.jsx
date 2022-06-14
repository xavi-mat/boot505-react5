import RestHeader from "./RestHeader/RestHeader"
import RestHome from "./RestHome/RestHome"

function Restaurant({dishes}) {
  return (
    <div>
    <RestHeader/>
    <RestHome dishes={dishes}/>
    </div>
  )
}

export default Restaurant