import { createSlice } from '@reduxjs/toolkit'

export const trackInfoSlice = createSlice({
    name: 'trackInfo',
    initialState: {
        track: {},
    },
    reducers: {
        setTrack: (state, { payload }) => {
            state.track = payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setTrack } = trackInfoSlice.actions

export default trackInfoSlice.reducer