"use client";

import Button from "@/components/Button";
import Count from "@/components/Count";

import { decrement, increment } from "@/redux/features/CounterSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";

const Counter = () => {
  const dispatch = useAppDispatch();
  const counter = useAppSelector((state) => state.counter.value);

  const handleIncrement = () => {
    dispatch(increment());
  };

  const handleDecrement = () => {
    dispatch(decrement());
  };

  return (
    <div>
      <Count count={counter} />
      <div>
        <Button handler={handleIncrement}>Increment</Button>
        <Button handler={handleDecrement}>Decrement</Button>
      </div>
    </div>
  );
};

export default Counter;
