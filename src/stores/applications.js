import { createSlice } from "@reduxjs/toolkit";

export const applicationsSlice = createSlice({
    name: "applications",
    initialState: {
        OpenFolders: [],
    },
    reducers: {
        Folder: (state, action) => {
            const FolderValue = action.payload[0];
            const Status = action.payload[1];
            if (Status) {
                state.OpenFolders = state.OpenFolders.filter(function (e) { return e !== FolderValue });
                state.OpenFolders.push(FolderValue);
            } else {
                state.OpenFolders = state.OpenFolders.filter(function (e) { return e !== FolderValue });
            }

        },
    }
});

export const { Folder } = applicationsSlice.actions

export default applicationsSlice.reducer;

// value: window.localStorage.getItem('counter') ? parseInt(window.localStorage.getItem('counter')) : 1,
