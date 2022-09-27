import { createSlice, current } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

import type { RootState } from './../index'
import { ProductCartInterface } from '@/interfaces/productInterface'

export interface ProductState {
    cart: object[]
    total: number
}

const initialState: ProductState = {
    cart: [],
    total: 0
}

export const productSlice = createSlice({
    name: 'store',
    initialState,
    reducers: {
        addProduct: (state, action: PayloadAction<ProductCartInterface>) => {
            let total: number = 0
            let product: ProductCartInterface | undefined;
            product = state.cart.find((product: ProductCartInterface) => product.id === action.payload.id)
            if(product && typeof product !== undefined) {
                product.quantity = Number(product?.quantity) + Number(action.payload?.quantity)
            }else{
                state.cart.push(action.payload)
            }            
            state.cart.map((item) : any => {
                total = total + (item?.price * item?.quantity)
            })
            state.total = total
        },
        removeProduct: (state, action: PayloadAction<number>): any => {
            let total: number = 0
            const productFiltered = state.cart.filter(product => product.id !== action.payload)
            productFiltered.map((item) : any => {
                total = total + (item?.price * item?.quantity)
            })
            return {
                ...state.cart,
                cart: productFiltered,
                total: total
            }
        },
        removeAllProducts: (state) => {
            return {
                cart: [],
                total: 0
            }
        },
        getProductsCart: (state) => {
            state.cart
        },
    }
})

export const { getProductsCart, addProduct, removeProduct, removeAllProducts } = productSlice.actions


// Getters
export const getCart = (state: RootState) => state.store.cart
export const getCartQuantity = (state: RootState) => state.store.cart.length
export const getTotal = (state: RootState) => state.store.total

export default productSlice.reducer