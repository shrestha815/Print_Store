import React from 'react'
import ShoeCard from '@/components/ShoeCard';
import { mockShoes } from '@/lib/mockShoes';
import { useSearchParams, useRouter, useSearchParams } from 'next/navigation';
import { useMemo } from 'react';

const SHOES_PER_PAGE = 4;

export default function ShopPage() {
    const searchParams = useSearchParams();
    const router = useRouter();

    const currentPage = parseInt(searchParams.get('page')||'1', 10);
    const totalPages = Math.ceil(mockShoes.length / SHOES_PER_PAGE);

    const paginatedShoes = useMemo(()=>{
        const start = (currentPage-1) *SHOES_PER_PAGE;
        return mockShoes.slice(start, start + SHOES_PER_PAGE);
    }, [currentPage]);

    const goToPage = (page: number) =>{
        if (page>=1 && page <=totalPages) {
            router.push('/shop?page=${page}');
        }
    };

    return (
        <main className="px-6 py-10">
            <h1 className="text-3xl font-bold mb-6">Shop Shoes</h1>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
                {paginatedShoes.map((shoe) => (
                <ShoeCard key={shoe.id} shoe={shoe} />
            ))}
            </div>

            { /* Pagination Controls */}

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {mockShoes.map((shoe) => (
                <ShoeCard key={shoe.id} shoe={shoe}/>
            ))}
            </div>
        </main>
    )
}