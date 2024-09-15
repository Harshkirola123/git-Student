import {configureStore} from '@reduxjs/toolkit'
import studentReducer from '../feature/Slicer/studentSlice'


export const store = configureStore({
    reducer: studentReducer
})