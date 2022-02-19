import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
    name: "counter",
    initialState: {
        value: window.localStorage.getItem('counter') ? parseInt(window.localStorage.getItem('counter')) : 1,
    },
    reducers: {
        increment: (state) => {
            state.value += 1;
            window.localStorage.setItem('counter', state.value);
        },
        decrement: (state) => {
            state.value -= 1;
            window.localStorage.setItem('counter', state.value);
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload;
            window.localStorage.setItem('counter', state.value);
        }
    }
});

export const { increment, decrement, incrementByAmount } = counterSlice.actions

export default counterSlice.reducer;