import React from 'react';
import styles from './Header.module.css';

import mealsImage from '../../asset/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
const Header = (props) => {
  return (
    <React.Fragment>
      <header className={styles.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton
          onCartOpenHandler={props.onCartOpenHandler}
        ></HeaderCartButton>
      </header>
      <div className={styles['main-image']}>
        <img src={mealsImage} alt="A table full of delicious food!"></img>
      </div>
    </React.Fragment>
  );
};
export default Header;
