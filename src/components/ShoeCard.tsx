'use client';
import { Shoe } from '@/lib/mockShoes';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react'

type ShoeCardProps = {
  shoe: Shoe;
}

export default function ShoeCard({ shoe }: ShoeCardProps ) {
  return (
    <Link href={`/shoes/${shoe.id}`}>
      <div className="bg-white shadow-md rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-lg">
        <div className="relative w-full h-64">
          <Image
            src = {shoe.image}
            alt = {shoe.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
            />
        </div>
        <div className="p-4">
          <h3 className="text-lg font-semibold">{shoe.name}</h3>
          <p className="text-sm text-gray-500">{shoe.brand}</p>
          <p className="mt-2 font-bold text-blue-600">${shoe.price}</p>
        </div>
      </div>
    </Link>
  );
}

