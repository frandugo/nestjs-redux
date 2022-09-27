import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { RootState } from 'store'

export interface ProductState {
    state: boolean
}

const initialState: ProductState = {
    state : false
}

export const asideSlice = createSlice({
    name: 'aside',
    initialState,
    reducers: {
        setStatusAside: (state, action: PayloadAction<boolean>): any  => {
            state.state = action.payload
        }
    }
})

export const { setStatusAside } = asideSlice.actions


// Getters
export const getAsideState = (state: RootState) => state.aside.state

export default asideSlice.reducer