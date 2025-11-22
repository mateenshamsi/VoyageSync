import Image from 'next/image';
import { Rocket } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-white/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="text-center max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
        {/* Headline Group */}
        <div className="max-w-4xl mx-auto space-y-8">
          <h1 className="text-5xl md:text-7xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/50 leading-[1.1]">
            Turn Confirmation Emails<br />into Seamless Journeys
          </h1>
          
          <p className="text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Plan trips, sync calendars, and split expenses in one dashboard.
            <br className="hidden md:block" />
            <span className="inline-flex items-center gap-1 mt-2 text-sm text-slate-500 border-b border-dashed border-slate-700 hover:text-slate-300 cursor-pointer transition-colors">
              VoyageSync is deterministic, not generative AI. See how it works
            </span>
          </p>

          <div className="flex flex-col items-center gap-4 pt-4">
            <button className="group relative inline-flex items-center gap-2 bg-white text-black px-8 py-3.5 rounded-full text-base font-medium hover:bg-slate-200 transition-all">
              <Rocket className="w-5 h-5" />
              <span>Start planning for free</span>
            </button>
            <p className="text-xs text-slate-600 font-medium">Pro access starting at just $12/mo</p>
          </div>
        </div>

        {/* Product Visualization (Phones) */}
        <div className="mt-20 relative mx-auto max-w-5xl">
          <div className="relative border border-white/10 bg-[#0A0A0A] rounded-[2.5rem] p-8 md:p-16 overflow-hidden">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900/50 via-[#0A0A0A] to-[#0A0A0A]"></div>

            {/* Phones Container */}
            <div className="relative h-[400px] md:h-[600px] w-full flex justify-center items-center perspective-[2000px]">
              
              {/* Left Phone (Itinerary) */}
              <div className="absolute left-1/2 -translate-x-[110%] md:-translate-x-[85%] top-10 w-[280px] md:w-[320px] h-[600px] bg-[#050505] rounded-[2.5rem] border-[6px] border-[#1a1a1a] shadow-2xl shadow-black origin-bottom-right rotate-[-6deg] scale-90 z-10 opacity-60 hover:opacity-100 transition-all duration-500 hover:z-30 hover:scale-100 overflow-hidden">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex justify-between items-center mb-6">
                    <span className="text-lg font-semibold text-white">Itinerary</span>
                    <div className="flex gap-2">
                      <span className="iconify text-slate-500" data-icon="solar:share-bold-duotone"></span>
                    </div>
                  </div>
                  
                  <div className="space-y-6 relative pl-4 border-l border-slate-800">
                    <div className="relative">
                      <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-white ring-4 ring-black"></div>
                      <div className="mb-1 flex justify-between text-xs text-slate-400 font-medium">
                        <span>1 Nov, Sat</span>
                        <span>10:45 AM</span>
                      </div>
                      <div className="bg-slate-900/50 p-3 rounded-xl border border-white/5">
                        <div className="text-sm text-white font-medium">Flight to Narita (NRT)</div>
                        <div className="text-xs text-slate-500 mt-1">JL 005 • Seat 4A • On Time</div>
                      </div>
                    </div>
                    
                    <div className="relative">
                      <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-slate-600 ring-4 ring-black"></div>
                      <div className="mb-1 flex justify-between text-xs text-slate-400 font-medium">
                        <span>1 Nov, Sat</span>
                        <span>03:00 PM</span>
                      </div>
                      <div className="bg-slate-900/50 p-3 rounded-xl border border-white/5">
                        <div className="text-sm text-white font-medium">Check-in: Aman Tokyo</div>
                        <div className="text-xs text-slate-500 mt-1">Otemachi Tower • Conf #8829</div>
                        <div className="flex gap-2 mt-3">
                          <button className="flex-1 bg-white/10 py-1.5 rounded text-[10px] text-white hover:bg-white/20">Map</button>
                          <button className="flex-1 bg-white/10 py-1.5 rounded text-[10px] text-white hover:bg-white/20">Call</button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Phone (Expenses) */}
              <div className="absolute left-1/2 translate-x-[10%] md:translate-x-[-15%] top-10 w-[280px] md:w-[320px] h-[600px] bg-[#050505] rounded-[2.5rem] border-[6px] border-[#1a1a1a] shadow-2xl shadow-black origin-bottom-left rotate-[6deg] scale-90 z-10 opacity-60 hover:opacity-100 transition-all duration-500 hover:z-30 hover:scale-100 overflow-hidden">
                <div className="p-6 h-full flex flex-col">
                  <div className="flex justify-between items-center mb-8">
                    <span className="text-white text-sm" data-icon="solar:arrow-left-linear"></span>
                    <span className="text-sm font-medium text-white">New Expense</span>
                    <span className="w-4"></span>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="text-xs text-slate-500 font-medium uppercase tracking-wider">Amount</label>
                      <div className="flex items-baseline gap-2 border-b border-slate-700 pb-2 mt-1">
                        <span className="text-lg text-slate-400">¥</span>
                        <span className="text-3xl text-white font-medium">12,500</span>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-slate-500 font-medium uppercase tracking-wider">Category</label>
                      <div className="mt-3 flex gap-3 overflow-x-auto no-scrollbar">
                        <div className="flex flex-col items-center gap-2 min-w-[60px]">
                          <div className="w-12 h-12 rounded-full bg-white text-black flex items-center justify-center">
                            <span className="iconify text-lg" data-icon="solar:dining-bold"></span>
                          </div>
                          <span className="text-[10px] text-white">Food</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 min-w-[60px] opacity-50">
                          <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                            <span className="iconify text-lg" data-icon="solar:bus-bold"></span>
                          </div>
                          <span className="text-[10px] text-slate-400">Transport</span>
                        </div>
                        <div className="flex flex-col items-center gap-2 min-w-[60px] opacity-50">
                          <div className="w-12 h-12 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center">
                            <span className="iconify text-lg" data-icon="solar:ticket-bold"></span>
                          </div>
                          <span className="text-[10px] text-slate-400">Activity</span>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="text-xs text-slate-500 font-medium uppercase tracking-wider">Split With</label>
                      <div className="mt-2 flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-indigo-500 border-2 border-black flex items-center justify-center text-[10px] text-white font-bold">JM</div>
                        <div className="w-8 h-8 rounded-full bg-emerald-500 border-2 border-black flex items-center justify-center text-[10px] text-white font-bold">SK</div>
                        <div className="w-8 h-8 rounded-full bg-slate-800 border-2 border-black flex items-center justify-center text-slate-400 text-xs">+</div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-auto">
                    <button className="w-full bg-white text-black py-3 rounded-xl font-medium text-sm">Save Expense</button>
                  </div>
                </div>
              </div>

              {/* Center Phone (Dashboard) */}
              <div className="absolute left-1/2 -translate-x-1/2 top-0 w-[300px] md:w-[340px] h-[620px] bg-[#050505] rounded-[3rem] border-[8px] border-[#1a1a1a] shadow-[0_0_60px_-15px_rgba(255,255,255,0.1)] z-20 overflow-hidden">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-7 bg-[#1a1a1a] rounded-b-2xl z-30"></div>
                
                <div className="h-full flex flex-col relative">
                  <div className="h-[55%] relative">
                    <Image 
                      src="https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?q=80&w=1000&auto=format&fit=crop" 
                      alt="Japan"
                      fill
                      className="object-cover opacity-80"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/40 to-transparent"></div>
                    
                    <div className="absolute top-10 left-6 right-6 flex justify-between items-center">
                      <div className="flex flex-col">
                        <span className="text-xs font-medium text-white/80 uppercase tracking-wider">Current Trip</span>
                        <div className="flex items-center gap-1 text-white">
                          <span className="text-sm font-semibold">Elite Member</span>
                          <span className="iconify text-[10px] text-amber-400" data-icon="solar:star-bold"></span>
                        </div>
                      </div>
                      <button className="w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-white/20 transition">
                        <span className="iconify" data-icon="solar:bell-bold"></span>
                      </button>
                    </div>

                    <div className="absolute bottom-8 left-6 right-6">
                      <h3 className="text-2xl font-semibold text-white leading-tight mb-1">Kyoto, Osaka & Tokyo</h3>
                      <div className="flex items-center gap-2 text-xs text-gray-300">
                        <span className="iconify" data-icon="solar:calendar-bold"></span>
                        <span>Nov 1 - Nov 14 • 14 Days</span>
                      </div>
                      <div className="flex -space-x-2 mt-4">
                        <Image src="https://i.pravatar.cc/100?img=3" alt="User 1" width={24} height={24} className="rounded-full border border-black" />
                        <Image src="https://i.pravatar.cc/100?img=5" alt="User 2" width={24} height={24} className="rounded-full border border-black" />
                      </div>
                    </div>
                  </div>

                  <div className="flex-1 px-6 pb-6 -mt-4 relative z-10">
                    <div className="grid grid-cols-2 gap-3">
                      <button className="bg-[#1A1A1A] p-4 rounded-2xl border border-white/5 flex flex-col items-start gap-2 group hover:bg-[#222] transition">
                        <span className="iconify text-xl text-indigo-400" data-icon="solar:map-point-bold-duotone"></span>
                        <span className="text-sm font-medium text-slate-200">Itinerary</span>
                      </button>
                      <button className="bg-[#1A1A1A] p-4 rounded-2xl border border-white/5 flex flex-col items-start gap-2 group hover:bg-[#222] transition">
                        <span className="iconify text-xl text-emerald-400" data-icon="solar:wallet-bold-duotone"></span>
                        <span className="text-sm font-medium text-slate-200">Expenses</span>
                      </button>
                      <button className="bg-[#1A1A1A] p-4 rounded-2xl border border-white/5 flex flex-col items-start gap-2 group hover:bg-[#222] transition">
                        <span className="iconify text-xl text-amber-400" data-icon="solar:passport-bold-duotone"></span>
                        <span className="text-sm font-medium text-slate-200">Docs</span>
                      </button>
                      <button className="bg-[#1A1A1A] p-4 rounded-2xl border border-white/5 flex flex-col items-start gap-2 group hover:bg-[#222] transition">
                        <span className="iconify text-xl text-pink-400" data-icon="solar:gallery-bold-duotone"></span>
                        <span className="text-sm font-medium text-slate-200">Photos</span>
                      </button>
                    </div>

                    <div className="mt-auto pt-6 flex justify-around items-center text-slate-500 border-t border-white/5">
                      <span className="iconify text-xl text-white" data-icon="solar:home-bold"></span>
                      <span className="iconify text-xl hover:text-white transition" data-icon="solar:magnifer-linear"></span>
                      <span className="iconify text-xl hover:text-white transition" data-icon="solar:user-circle-linear"></span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-3xl mx-auto mt-12 text-center px-4">
          <p className="text-lg text-slate-500">
            Planning trips, organizing travel documents, and managing shared expenses can be overwhelming. VoyageSync simplifies this process by consolidating everything into one intuitive platform.
          </p>
        </div>
      </div>
    </section>
  );
}