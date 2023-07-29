import React , {useState} from "react";
import Increase from './add.png'
import Decrease from './minus.png'
import Delete from './delete.png'

const CartItem = () => {

    const [ price , setPrice ] = useState(17999) ;
    const [ qty , setQty ] = useState(1) ;
    const [ img , setImg ] = useState('') ;
    const [ name , setName ] = useState('Realme 9 pro 5g') ;

    const increaseQuanity = () => {
        setQty( qty+1 ) ;
    }

    const decreaseQuanity = () =>{
        if( qty === 0 )  return ;
        setQty( qty-1 ) ;
    }

    const deleteProduct = () =>{
        setQty(0) ;
    }

    return (
        <div className="cart-item" >
            <div className="left-block" >
                <img style={styles.image} />
            </div>
            <div className="right-block">
                <div style={{ fontSize : 25 }} >{name}</div>
                <div style={{ color : '#777' }} >Rs: {price}</div>
                <div style={{ color : '#777' }} >Qty: {qty}</div>
                <div className="card-item-actions" >
                    <img alt = "Increase" 
                        className="action-icons" 
                        src = {Increase}
                        onClick={increaseQuanity} 
                    />
                    <img alt = "Decrease" 
                        className="action-icons" 
                        src = {Decrease} 
                        onClick={decreaseQuanity}
                    />
                    <img alt = "Delete" 
                        className="action-icons" 
                        src = {Delete} 
                        onClick={deleteProduct}
                    />
                </div>
            </div>
        </div>
    );
}

const styles = {
    image :{
        height : 110 ,
        width : 110 , 
        borderRadius : 4 ,
        background : '#ccc'
    }
}
 
export default CartItem;