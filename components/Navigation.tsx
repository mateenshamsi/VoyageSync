import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2 text-white">
          <span className="iconify text-2xl text-white" data-icon="solar:globe-bold-duotone"></span>
          <span className="text-lg font-medium tracking-tight">VoyageSync</span>
        </div>
        <div className="flex items-center gap-6">
          <Link href="#" className="text-sm font-medium text-slate-400 hover:text-white transition-colors hidden sm:block">
            Log in
          </Link>
          <Link href="#" className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-slate-200 transition-colors">
            Try for free
          </Link>
        </div>
      </div>
    </nav>
  );
}