import { createSlice } from '@reduxjs/toolkit'

export const tokenSlice = createSlice({
    name: 'token',
    initialState: {
        token: -1,
    },
    reducers: {
        setToken: (state, { payload }) => {
            state.token = payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setToken } = tokenSlice.actions

export default tokenSlice.reducer