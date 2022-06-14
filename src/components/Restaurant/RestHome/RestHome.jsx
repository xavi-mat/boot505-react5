import RestDish from './RestDish/RestDish';
import './RestHome.css';

function RestHome({ dishes }) {
  const dish = dishes.map(dish => (
    <RestDish key={dish.id} {...dish} />
  ))
  return (
    <div className="container" >
      <div className="d-flex flex-wrap justify-content-center">
        {dish}
      </div>
    </div>
  )
}

export default RestHome