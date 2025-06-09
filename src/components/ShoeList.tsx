'use client';

import ShoeCard from './ShoeCard';
import { mockShoes } from '@/lib/mockShoes';
import { useSearchParams, useRouter } from 'next/navigation';
import { useMemo } from 'react';

const SHOES_PER_PAGE = 4;

export default function ShoeList() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const currentPage = parseInt(searchParams.get('page') || '1', 10);
  const totalPages = Math.ceil(mockShoes.length / SHOES_PER_PAGE);

  const paginatedShoes = useMemo(() => {
    const start = (currentPage - 1) * SHOES_PER_PAGE;
    return mockShoes.slice(start, start + SHOES_PER_PAGE);
  }, [currentPage]);

  const goToPage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      router.push(`/shop?page=${page}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
        {paginatedShoes.map((shoe) => (
          <ShoeCard key={shoe.id} shoe={shoe} />
        ))}
      </div>

      <div className="flex justify-center items-center px-6 py-4 gap-4">
        <button
          onClick={() => goToPage(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Previous
        </button>

        <span className="text-sm text-gray-700">
          Page {currentPage} of {totalPages}
        </span>

        <button
          onClick={() => goToPage(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-200 rounded disabled:opacity-50"
        >
          Next
        </button>
      </div>
    </>
  );
}
