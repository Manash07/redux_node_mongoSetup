"use client"

import { createSlice } from "@reduxjs/toolkit";

export const initialState = {

    userName:"",
    token:""
}

const userSlice = createSlice({

        name:"user",
        initialState,
        reducers:{

            setLogin: (state, actions) => {

                console.log(actions.payload)
                const {...userData} = actions.payload
     
                return {
                  ...state,
                  ...userData
                }

            }
        }

})

export const { setLogin } = userSlice.actions;
export default userSlice.reducer;