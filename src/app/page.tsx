import Navbar from "@/components/Navbar";
import ShoeList from '@/components/ShoeList';

export default function Home() {
  return (
    <div className="min-h-screen bg-blend-color from-gray-200 to-gray-50 text-gray-700 dark:text-white">
      <Navbar/>
      <ShoeList/>
    </div>
  );
}
