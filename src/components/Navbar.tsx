'use client';

import React from 'react'
import { ShoppingCart } from 'lucide-react';
import { useSelector } from 'react-redux';
import { RootState } from '@/store';
import CartDrawer from './CartDrawer';

export default function Navbar() {
    const cartItems = useSelector((state:RootState) => state.cart.items);
    const [open, setOpen] = React.useState(false);

    const toggleCart = () => setOpen((prev) => !prev);

    return (
        <nav className="shadow-sm sticky top-0 left-0 z-50">
            <div className="h-[80px] w-full bg-gradient-to-b from-gray-900 to-gray-800 flex items-center justify-between max-w-7xl px-6 mx-auto shadow-lg rounded-b-lg border-b border-gray-700 relative">
                <h2 className="text-3xl text-gray-200">Kick Exchange</h2>

                <div className="flex items-center gap-4">
                    {/* cart icon with count */}
                    <div className="relative cursor-pointer" onClick={toggleCart}>
                        <ShoppingCart className="text-gray-300" />
                        {cartItems.length > 0 && (
                            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full px-1.5">
                                {cartItems.length}
                            </span>
                        )}
                    </div>
                    <p className="text-slate-300/80 text-sm cursor-pointer"> Log In </p>
                    <p className="text-slate-300/80 text-sm cursor-pointer">Sign Up</p>
                </div>
            </div>
            <CartDrawer isOpen={open} onClose={toggleCart}/>
            {/* */}
        </nav>
  )
}