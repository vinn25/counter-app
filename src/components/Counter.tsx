"use client";

import Button from "@/components/Button";
import Count from "@/components/Count";

import {
  decrement,
  decrementByAmount,
  increment,
  incrementByAmount,
} from "@/redux/features/CounterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Counter = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.value);

  const num = 5;

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  const handleIncrementByAmount = () => {
    dispatch(incrementByAmount(num));
  };

  const handleDecrementByAmount = () => {
    dispatch(decrementByAmount(num));
  };

  return (
    <div>
      <Count count={counter} />
      <div>
        <Button handler={handleIncrement}>Increment</Button>
        <Button handler={handleDecrement}>Decrement</Button>
        <Button handler={handleIncrementByAmount}>Increment By Amount</Button>
        <Button handler={handleDecrementByAmount}>Decrement By Amount</Button>
      </div>
    </div>
  );
};

export default Counter;
