import { RootState } from "@/redux/store";
import { CounterState } from "@/redux/type";
import { createSlice } from "@reduxjs/toolkit";

const initialState: CounterState = { value: 0 };

const CounterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increment: (state) => {
            state.value += 1;
        },
        decrement: (state) => {
            state.value -= 1;
        }
    }
})

export default CounterSlice.reducer;

export const selectCount = (state: RootState) => state.counter.value;

export const { increment, decrement } = CounterSlice.actions;