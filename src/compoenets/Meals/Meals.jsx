//음식 목록을 렌더링 할 jsx 파일
import React from 'react';
import AvailableMeals from './AvailableMeals';
import MealsSummary from './MealsSummary';
const Meals = (props) => {
  return (
    <React.Fragment>
      <MealsSummary></MealsSummary>
      <AvailableMeals></AvailableMeals>
    </React.Fragment>
  );
};
export default Meals;
