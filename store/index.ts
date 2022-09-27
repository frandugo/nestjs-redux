import { configureStore } from '@reduxjs/toolkit'

import productReducer from './slices/productSlice'
import asideReducer from './slices/asideSlice'

export const store = configureStore({
    reducer: {
        store: productReducer,
        aside: asideReducer
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch