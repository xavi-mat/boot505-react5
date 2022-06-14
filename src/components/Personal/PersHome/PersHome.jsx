import PersNav from "../PersNav/PersNav";
import chibi from '../../../assets/jochibi.jpg'

const PersHome = (props) => {
    const bioLine = props.bioItems.map((line, num) => <p key={num}>{line}</p>)
    return (
        <div>
            <PersNav />
            <div className="container row">
                <div className="col-md-4">
                    <img className="img-fluid rounded" src={chibi} alt="careto" />
                </div>
                <div className="col-md-8 mt-3">
                    <h4>Bio</h4>
                    {bioLine}
                </div>
            </div>
        </div>
    );
}

export default PersHome;