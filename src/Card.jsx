import { useDispatch } from "react-redux"
import { inc,remove } from "./reducers/counter-reducer"

function Card({product}) {
    const dispatch = useDispatch()
    return (
        <div className="container">
            <div className="row">
                <div className="col-lg-12">
                    <div className="card mb-3">
                        <div className="row g-0">
                            <div className="col-md-4">
                                <img src={product.thumbnail} className="img-fluid rounded-start" alt="..." />
                            </div>
                            <div className="col-md-8">
                                <div className="card-body">
                                    <div >

                                        <h5 className="card-title">{product.title}</h5>
                                        <div className="col text-end">
                                            <span className="quan">Quantity:
                                            </span>
                                            <select id="quantity" value={product.quantity} onChange={(e)=>{
                                                dispatch(inc({id:product.id,quantity:e.target.value}))
                                            }}  >
                                                <option value="1">1</option>
                                                <option value="2">2</option>
                                                <option value="3">3</option>
                                                <option value="4">4</option>
                                                <option value="5">5</option>
                                            </select>
                                            <span className="dummy"> <b> {`$${product.price*product.quantity}`}</b>  </span>
                                            <span className="price"></span>
                                        </div>
                                    </div>

                                    <p className="card-text">{product.description}</p>
                                    <p className="card-text"><small className="text-body-secondary">{`Ratings: ${product.rating}`}</small></p>
                                    <div className="col text-end">
                                        <button className="btn btn-danger" onClick={()=>{dispatch(remove({id:product.id}))}} >Remove</button>
                                    </div>

                                    <hr></hr>

                                    <div className="d-flex justify-content-between">

                                        <p className="card-text"><small className="text-body-secondary">SUBTOTAL</small></p>
                                        <p className="subtotal">{`$${product.price*product.quantity}`}</p>
                                    </div>
                                    <div className="d-flex justify-content-between">
                                        <p className="card-text"><small className="text-body-secondary">SHIPPING</small></p>
                                        <p className="shipping">FREE</p>
                                    </div>

                                    <hr></hr>

                                    <div className="d-flex justify-content-between">
                                        <p className="card-text"><small className="text-body-secondary">TOTAL</small></p>
                                        <b><p className="total">{`$${product.price*product.quantity}`}</p></b>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card