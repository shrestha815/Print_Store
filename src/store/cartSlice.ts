import { createSlice } from "@reduxjs/toolkit";
import { Shoe } from "@/lib/mockShoes";

type CartItem = Shoe & { quantity: number};

type CartState = {
    items: CartItem[];
};

const initialState: CartState = {
    items: [],
};

