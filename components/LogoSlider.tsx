'use client';

export default function LogoSlider() {
 const logos = [
{ icon: "simple-icons:lonelyplanet", color: "text-[#2AACE2]" },
{ icon: "simple-icons:nationalgeographic", color: "text-yellow-400" },
// { icon: "simple-icons:condé-nast-traveler", color: "text-white" }, // if needed verify 'condenast'
{ icon: "simple-icons:reddit", color: "text-orange-500" }, // travel communities

  // { icon: "simple-icons:lonelyplanet", color: "text-[#2AACE2]" },
  // { icon: "simple-icons:nationalgeographic", color: "text-yellow-400" },
  { icon: "simple-icons:airbnb", color: "text-[#FF5A5F]" },
  { icon: "simple-icons:bookingcom", color: "text-[#003580]" },
  { icon: "simple-icons:tripadvisor", color: "text-[#34E0A1]" },
  { icon: "simple-icons:googlemaps", color: "text-[#4285F4]" },
  { icon: "simple-icons:qatarairways", color: "text-[#5C0E32]" },
  { icon: "simple-icons:emirates", color: "text-red-600" },
  { icon: "simple-icons:agoda", color: "text-[#E12F65]" },
  { icon: "simple-icons:singaporeairlines", color: "text-[#FFB612]" },
// { icon: "simple-icons:lonelyplanet", color: "text-[#2AACE2]" },
// { icon: "simple-icons:nationalgeographic", color: "text-yellow-400" },
// { icon: "simple-icons:condé-nast-traveler", color: "text-white" }, // if needed verify 'condenast'
{ icon: "simple-icons:reddit", color: "text-orange-500" }, // travel communities
  // { icon: "simple-icons:lonelyplanet", color: "text-[#2AACE2]" },
  // { icon: "simple-icons:nationalgeographic", color: "text-yellow-400" },
  { icon: "simple-icons:airbnb", color: "text-[#FF5A5F]" },
  { icon: "simple-icons:bookingcom", color: "text-[#003580]" },
  { icon: "simple-icons:tripadvisor", color: "text-[#34E0A1]" },
  // { icon: "simple-icons:googlemaps", color: "text-[#4285F4]" },
  { icon: "simple-icons:qatarairways", color: "text-[#5C0E32]" },
  { icon: "simple-icons:emirates", color: "text-red-600" },
  { icon: "simple-icons:agoda", color: "text-[#E12F65]" },
  { icon: "simple-icons:singaporeairlines", color: "text-[#FFB612]" },

];

  return (
    <section className="py-16 border-y border-white/5 bg-white/[0.01] overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <p className="text-sm font-medium text-slate-500 mb-10 flex items-center justify-center gap-2">
          <span className="iconify" data-icon="solar:star-bold-duotone"></span>
          Featured in
        </p>
        
        <div className="logo-slider">
          <div className="logo-track">
            {/* First set */}
            {logos.map((logo, index) => (
              <div key={`logo-1-${index}`} className="logo-item">
                <span className={`iconify text-4xl ${logo.color}`} data-icon={logo.icon}></span>
              </div>
            ))}
            {/* Duplicate set for seamless loop */}
            {logos.map((logo, index) => (
              <div key={`logo-2-${index}`} className="logo-item">
                <span className={`iconify text-4xl ${logo.color}`} data-icon={logo.icon}></span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}