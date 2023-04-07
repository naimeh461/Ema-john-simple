import React from 'react';
import "./ReviewItem.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan } from '@fortawesome/free-solid-svg-icons'
const ReviewItem = ({product, handleRemoveFromCart}) => {
    const {img,id,name,price , quantity} = product;
    return (
        <div className='review-item'>
            <img src={img} alt="" />
            <div className='review-info'>
                <h3>{name}</h3>
                <h4>Price: <span className='orange'>${price}</span> </h4>
                <h4>Quantity: <span className='orange'>{quantity}</span></h4>
            </div>
            <button onClick={() => handleRemoveFromCart(id)} ><FontAwesomeIcon className='btn-delete' icon={faTrashCan} style={{color: "#f10e0e",}} /></button>
        </div>
    );
};

export default ReviewItem;