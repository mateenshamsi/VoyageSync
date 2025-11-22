export default function Footer() {
  return (
    <footer className="border-t border-white/5 py-12 text-center">
      <div className="flex justify-center items-center gap-2 mb-6">
        <span className="iconify text-xl text-white" data-icon="solar:globe-bold-duotone"></span>
        <span className="text-white font-semibold tracking-tight">VoyageSync</span>
      </div>
      <p className="text-sm text-slate-600">© 2024 VoyageSync Inc. Crafted for explorers.</p>
    </footer>
  );
}