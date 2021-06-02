import React from 'react';
import { Link } from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import { addToCart } from '../actions';
import { Button } from 'bootstrap';

const ItemCard = (props) =>{
    const {id, title, description, price, rating, cover} = props;
    
    const handleAddToCart = () => {
        props.addToCart({
            id, cover, title, description, rating
        });
    };

    return(
        <div key={id} >
            <div className="modal fade" id="itemModalInformation" tabIndex="-1" aria-labelledby="labelItemModal" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="labelItemModal">Nombre del producto: {title}</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <h6>Descripción</h6>
                                <p>{description}</p>
                                <h6>Precio</h6>
                                <p>{price}</p>
                                <h6>Rating</h6>
                                <p>{rating}</p>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                                <button type="button" className="btn btn-success" onClick={handleAddToCart}>Agregar al carrito</button>
                            </div>
                        </div>
                    </div>
                </div>
            <button className="card" data-bs-toggle="modal" data-bs-target="#itemModalInformation">
                <img src={cover} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    {/* <Button onClick={handleAddToCart} className="btn btn-dark">Añadir al carrito</Button> */}
                </div>
            </button>
        </div>
    )
};

const mapDispatchToProps = {
    addToCart
}

export default connect(null, mapDispatchToProps)(ItemCard)