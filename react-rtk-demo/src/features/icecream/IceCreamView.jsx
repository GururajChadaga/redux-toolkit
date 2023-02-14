import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ordered, restocked } from './iceCreamSlice';

export const IceCreamView = () => {
  const [restockQuantity, setRestockQuantity] = useState(1);
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();
  return (
    <div>
      <h2>Number of Ice Creams - {numOfIceCreams}</h2>
      <button
        onClick={() => {
          dispatch(ordered());
        }}
      >
        Order an Ice Cream
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
        Restock Ice Creams
      </button>
    </div>
  );
};
