import { configureStore } from "@reduxjs/toolkit";

import menuToggleReducer from './stores/menuToggle'
import applicationsReducer from './stores/applications'

export default configureStore({
    reducer: {
        menuToggle: menuToggleReducer,
        applications: applicationsReducer,
    },
});