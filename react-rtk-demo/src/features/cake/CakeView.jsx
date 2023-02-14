import React, { useState } from 'react';
import { useSelector, useDispatch, useStore } from 'react-redux';
import { ordered, restocked } from './cakeSlice';

export const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();
  const [restockQuantity, setRestockQuantity] = useState(1);

  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button
        onClick={() => {
          dispatch(ordered());
        }}
      >
        Order a Cake
      </button>
      <input
        type='number'
        value={restockQuantity}
        onChange={(e) => setRestockQuantity(parseInt(e.target.value))}
      />
      <button
        onClick={() => {
          dispatch(restocked(restockQuantity));
        }}
      >
        Restock Cakes
      </button>
    </div>
  );
};
