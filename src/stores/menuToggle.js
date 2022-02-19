import { createSlice } from "@reduxjs/toolkit";

export const menuToggleSlice = createSlice({
    name: "menuToggle",
    initialState: {
        value: false,
    },
    reducers: {
        menuOpen: (state) => {
            state.value = true;
        },
        menuClose: (state) => {
            state.value = false;
        },
        menuToggle: (state, action) => {
            state.value = !state.value;
        }
    }
});

export const { menuOpen, menuClose, menuToggle } = menuToggleSlice.actions

export default menuToggleSlice.reducer;

// value: window.localStorage.getItem('counter') ? parseInt(window.localStorage.getItem('counter')) : 1,
