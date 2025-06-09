import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Shoe } from "@/lib/mockShoes";

type CartItem = Shoe & { quantity: number};

type CartState = {
    items: CartItem[];
};

const initialState: CartState = {
    items: [],
};

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addToCart: (state, action: PayloadAction<Shoe>) => {
            const existing = state.items.find(items => items.id === action.payload.id);
            if (existing) {
                existing.quantity += 1;
            } else {
                state.items.push({...action.payload, quantity: 1});
            }
        },
        removeFromCart: (state, action: PayloadAction<string>) => {
            state.items = state.items.filter(item => item.id !== action.payload);
        },
        clearCart: (state) => {
            state.items = [];
        },
    },
});

export const { addToCart, removeFromCart, clearCart } = cartSlice.actions;
export default cartSlice.reducer;
