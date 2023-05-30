"use client"

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import userSlice from "../reducerSlice/userSlice";
import logger from "redux-logger";


const reducer = combineReducers({

    nameManash: userSlice,  //nameManash is the name of reducer
});

const store = configureStore({

    reducer,
    middleware:[logger] //store is being configured
})

export default store;
