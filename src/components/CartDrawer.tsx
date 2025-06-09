'use client';

import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from '@/store';
import { removeFromCart } from "@/store/cartSlice";
import { X } from 'lucide-react';
import Image from "next/image";

type Props = {
  isOpen: boolean;
  onClose: ()=> void;
};

export default function CartDrawer({ isOpen, onClose }: Props) {
  const cartItems = useSelector((state: RootState) => state.cart.items);
  const dispatch = useDispatch<AppDispatch>();

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  return(
    <div
    className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="flex justify-between items-center p-4 border-b">
        <h2 className="text-lg font-bold text-gray-800 ">Your Cart</h2>
        <button onClick={onClose} title="Close cart"><X className="w-5 text-black"/></button>
      </div>

      <div className="p-4 space-y-4 overflow-y-auto h-[calc(100%-160px)]">
        {cartItems.length === 0 ?(
            <p className="text-gray-500">Your Cart is empty.</p>
        ):(
            cartItems.map((item)=> (
                <div key={item.id} className="className={`flex gap-4 py-4 ${
                index !== cartItems.length - 1 ? 'border-b-2 border-gray-300' : ''
                }`}">
                    <div className= "relative w-16 h-16 flex-shrink-0">
                        <Image
                        src={item.image}
                        alt={item.name}
                        fill
                        className="object-cover rounded"
                    />
                    </div>

                    <div className="flex-1">
                        <h4 className="font-medium text-gray-800">{item.name}</h4>
                        <p className="text-sm text-gray-500">${item.price}</p>
                    </div>

                    <button
                    onClick={() => dispatch(removeFromCart(item.id))}
                    className="text-red-500 hover:underline text-sm"
                    >
                        Remove
                    </button>
                </div>
            ))
        )}
      </div>

      <div className="p-4 border-t">
        <p className="font-semibold">Total: ${total.toFixed(2)}</p>
        <button className="mt-2 w-full py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
            Checkout
        </button>
      </div>
    </div>
  )
}
