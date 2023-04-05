import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import CartItme from './CartItem.js';
import Modal from '../UI/Wrapper/Modal';
import styles from './Cart.module.css';
const Cart = (props) => {
  const cartCtx = useContext(CartContext);

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  const hasItems = cartCtx.items.length > 0;

  const cartItemRemoveHandler = (id) => {
    cartCtx.removeItem(id);
  };

  const cartItemAddHandler = (item) => {
    cartCtx.addItem({ ...item, amount: 1 });
  };

  const cartItems = (
    <ul className={styles['cart-items']}>
      {cartCtx.items.map((item) => {
        return (
          <CartItme
            key={item.id}
            name={item.name}
            amount={item.amount}
            price={item.price}
            onRemove={cartItemRemoveHandler.bind(null, item.id)}
            onAdd={cartItemAddHandler.bind(null, item)}
          ></CartItme>
        );
      })}
    </ul>
  );

  return (
    <Modal onCartCloseHandler={props.onCartCloseHandler}>
      {cartItems}
      <div className={styles.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div className={styles.actions}>
        <button
          className={styles['button--alt']}
          onClick={props.onCartCloseHandler}
        >
          Close
        </button>
        {hasItems && <button className={styles.button}>Order</button>}
      </div>
    </Modal>
  );
};
export default Cart;
