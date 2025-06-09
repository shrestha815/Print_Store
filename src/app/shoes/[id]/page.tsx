import { mockShoes } from '@/lib/mockShoes';
import { notFound } from 'next/navigation';
import ShoeDetail from '@/components/ShoeDetails';

type ShoeDetailProps = {
  params: {
    id: string;
  };
};

export default function ShoeDetailPage({ params }: ShoeDetailProps) {
  const shoe = mockShoes.find((shoe) => shoe.id === params.id);
  if (!shoe) return notFound();

  return (
    <main className="px-6 py-10 max-w-4xl mx-auto">
      <ShoeDetail shoe={shoe} />
    </main>
  );
}
