//Libs
import React, { useState, useLayoutEffect } from 'react';
import {connect} from 'react-redux';

//Components
import Header from '../components/Header';

// Styles
import '../assets/styles/containers/Cart.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faInfoCircle, faMinus, faPlus, faTrash } from '@fortawesome/free-solid-svg-icons';

const ItemCartToPay = props => {
    const {id, amount, myCart, trends} = props;
    
    console.log(props);

    const searchItem = trends.filter(item => item.id === id);
    const item = searchItem[0];

    // Functions to format price
    const formatCurrency = (locales, currency, fractionDigits, number) =>{
        var formatted = new Intl.NumberFormat(locales, {
            style: 'currency',
            currency: currency,
            minimumFractionDigits: fractionDigits
        }).format(number);

        return formatted;
    }

    return (
        <>
        <div className="row mb-4">
            <div className="col-md-5 col-lg-3 col-xl-3">
                <div className="view zoom overlay z-depth-1 rounded mb-3 mb-md-0">
                    <img className="img-fluid w-100"
                        src={item.cover} 
                        alt={item.title} />
                </div>
            </div>
            <div className="col-md-7 col-lg-9 col-xl-9">
                <div>
                    <div className="d-flex justify-content-between">
                        <div>
                            <h5>{item.title}</h5>
                            <p className="mb-3 text-muted text-uppercase small">Shirt - Universal</p>
                            <p className="mb-2 text-muted text-uppercase small">Color: Universal</p>
                            <p className="mb-3 text-muted text-uppercase small">Size: Universal</p>
                        </div>
                        <div className="amount-selector">
                            <div className="def-number-input number-input safari_only mb-0 w-100">
                                <button>
                                    <FontAwesomeIcon icon={faMinus} />
                                </button>
                                <input className="quantity" min="0" name="quantity" defaultValue={amount} type="number" />
                                <button>
                                    <FontAwesomeIcon icon={faPlus}/>
                                </button>
                            </div>
                            {/* Nota diseñada para los elementos finales o ultimos en stock */}
                            {/* <small id="passwordHelpBlock" className="form-text text-muted text-center">
                                (Note, 1 piece)
                            </small> */}
                        </div>
                    </div>
                    <div className="d-flex justify-content-between align-items-center options-item-selector">
                        <div>
                            <button href="#!" type="button" className="small text-uppercase mr-3">
                                <FontAwesomeIcon icon={faTrash}/>
                                Eliminar producto
                            </button>
                        </div>
                        <p className="mb-0">
                            <span>
                                <strong id="summary">{formatCurrency("en-US", "USD", 2, item.price)}</strong>
                            </span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <hr className="mb-4" />
        </>
    )
}

const mapStateToProps = state => {
    return {
        myCart: state.myCart,
        trends: state.trends,
        user: state.user
    }
}

export default connect(mapStateToProps, null)(ItemCartToPay)