import { createSlice } from "@reduxjs/toolkit";

export const applicationsSlice = createSlice({
    name: "applications",
    initialState: {
        homeFolder: false,
    },
    reducers: {
        homeFolder: (state, action) => {
            console.log(action.payload);
            state.homeFolder = action.payload;
        },
    }
});

export const { homeFolder } = applicationsSlice.actions

export default applicationsSlice.reducer;

// value: window.localStorage.getItem('counter') ? parseInt(window.localStorage.getItem('counter')) : 1,
