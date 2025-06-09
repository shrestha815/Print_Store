import React from 'react'
import { mockShoes } from '@/lib/mockShoes';
import Image from 'next/image';
import { notFound } from 'next/navigation';

type ShoeDetailProps = {
    params: {
        id: string;
    };
};

export default function ShoeDetailPage({ params }: ShoeDetailProps) {
    const shoe = mockShoes.find((shoe)=>(shoe.id === params.id));

    //if shoe is not found 
    if(!shoe) {
        return notFound();
    }

    return (
        <main className="px-6 py-10 max-w-4xl mx-auto">
            <div className ="grid grid-cols-1 md:grid-cols-2 gap-10">

                {/* Shoe Image Placement */}
                <div className="relative w-full h-96">
                    <Image
                    src = {shoe.image}
                    alt = {shoe.name}
                    fill
                    className= "object-cover rounded-x1"
                    sizes="(max-width: 768px) 100vw, 50vw"
                    />
                </div>

                {/* Shoe Information */}
                <div>
                    <h1 className="text-3xl font-bold mb-2">{shoe.name}</h1>
                    <p className="text-gray-500 text-lg mb-4">{shoe.brand}</p>
                    <p className="text-2xl font-bold text-blue-600 mb-6">{shoe.price}</p>

                    <p className="mb-6 text-gray-700">{shoe.description}</p>

                    <div className="mb-4">
                        <h3 className="font-semibold mb-2">Available Sizes:</h3>
                        <div className="flex gap-2 flex-wrap">
                            {shoe.sizes.map((size)=>(
                                <span
                                key = {size}
                                className="px-3 py-1 border rounded-full text-sm hover:bg-gray-200 curson-pointer">
                                    {size}
                                </span>
                            ))}
                        </div>
                    </div>

                    <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
                        Add to Cart
                    </button>

                </div>
            </div>

        </main>
    );
}
