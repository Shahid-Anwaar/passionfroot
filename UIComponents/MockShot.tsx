export default function MockShot({
  tone = "neutral",
  className = "",
}: {
  tone?: "neutral" | "purple" | "blue" | "green";
  className?: string;
}) {
  const map: Record<string, string> = {
    neutral: "from-white/60 to-white/10",
    purple: "from-purple-200/70 to-purple-100/20",
    blue: "from-sky-200/70 to-sky-100/20",
    green: "from-emerald-200/70 to-emerald-100/20",
  };

  return (
    <div className={`rounded-2xl border border-black/10 bg-gradient-to-b ${map[tone]} p-4 ${className}`}>
      <div className="flex items-center justify-between">
        <div className="h-3 w-28 rounded bg-black/10" />
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
          <span className="h-2.5 w-2.5 rounded-full bg-black/10" />
        </div>
      </div>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="h-20 rounded-xl bg-black/5" />
        <div className="h-20 rounded-xl bg-black/5" />
        <div className="sm:col-span-2 h-28 rounded-xl bg-black/5" />
      </div>
    </div>
  );
}
