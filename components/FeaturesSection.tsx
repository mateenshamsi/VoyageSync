export default function FeaturesSection() {
  const features = [
    {
      icon: 'solar:inbox-archive-bold-duotone',
      color: 'indigo',
      title: 'Smart Inbox Parsing',
      description: 'Simply forward emails from airlines and hotels. We extract the details instantly using deterministic parsers.',
    },
    {
      icon: 'solar:card-transfer-bold-duotone',
      color: 'emerald',
      title: 'Expense Splitting',
      description: 'Track shared costs in multiple currencies. We handle the math and settle debts automatically.',
    },
    {
      icon: 'solar:cloud-download-bold-duotone',
      color: 'amber',
      title: 'Offline Access',
      description: 'Access tickets, maps, and reservation numbers without data roaming. Your trip lives on your device.',
    },
  ];

  return (
    <section className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <div className="inline-flex xl:bg-clip-text xl:text-transparent text-xs font-medium bg-[conic-gradient(from_180deg,var(--tw-gradient-stops))] from-lime-400 via-lime-600 to-lime-400 border-white/10 border rounded-full mb-4 px-3 py-1 gap-x-1.5 gap-y-1.5 items-center">
            <span className="iconify" data-icon="solar:magic-stick-3-bold-duotone"></span>
            What&apos;s Inside
          </div>
          <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-4">
            Everything you need to travel lightly.
          </h2>
          <p className="text-lg text-slate-400">From parsing PDF tickets to calculating who owes who.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-[#0A0A0A] border border-white/10 rounded-2xl p-8 hover:border-white/20 transition-all duration-300"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-${feature.color}-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl`}></div>
              <div className={`w-12 h-12 bg-${feature.color}-500/10 rounded-xl flex items-center justify-center text-${feature.color}-400 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <span className="iconify text-2xl" data-icon={feature.icon}></span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
              <p className="text-lg text-slate-500 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}