interface Props {
  title: string;
  value: string;
  growth: string;
}

export default function StatsCard({
  title,
  value,
  growth,
}: Props) {
  return (
    <div className="relative overflow-hidden rounded-[28px] border border-white/[0.06] bg-[#111111]/70 p-6 backdrop-blur-2xl">

      {/* Glow */}
      <div className="absolute right-[-40px] top-[-40px] h-[120px] w-[120px] rounded-full bg-[#D4A64F]/10 blur-3xl" />

      <div className="relative z-10">

        <p className="mb-5 text-xs uppercase tracking-[0.3em] text-gray-500">
          {title}
        </p>

        <div className="mb-3 flex items-end gap-3">

          <h2 className="text-5xl font-semibold tracking-tight">
            {value}
          </h2>

          <span className="mb-2 text-green-400">
            ↑ {growth}
          </span>

        </div>

        <p className="text-sm text-gray-500">
          vs last month
        </p>

      </div>

    </div>
  );
}