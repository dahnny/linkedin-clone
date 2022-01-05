import { createSlice } from "@reduxjs/toolkit";

const userReducer = createSlice({
    name: "user",
    initialState: {user: null},
    reducers: {
        setUser(state, action){
            state.user = action.payload.user
        }
    }
})

export const userActions = userReducer.actions;
export default userReducer;