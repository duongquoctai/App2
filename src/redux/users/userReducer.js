import { createSlice } from "@reduxjs/toolkit"

import { fetchUsers } from "./actions"

export const userReducer = createSlice({
    name: "userInfo",
    initialState: {
        users: {
            data: [],
            loading: false
        },
    },

    reducers: {},
    extraReducers: {

        [fetchUsers.pending]: (state) => {
            state.users.loading = true
        },
        [fetchUsers.fulfilled]: (state, action) => {
            state.users.data = action.payload
            state.users.loading = false
        },
        [fetchUsers.rejected]: (state) => {
            state.users.loading = false
        },


    }
})
export default userReducer.reducer
