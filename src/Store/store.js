import { configureStore } from '@reduxjs/toolkit'
import tokenSlice from './tokenSlice'
import trackInfoSlice from './trackInfoSlice'

export default configureStore({
    reducer: {
        tokenSlice,
        trackInfoSlice,
    }
})