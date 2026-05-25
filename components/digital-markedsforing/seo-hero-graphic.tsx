export function SeoHeroGraphic() {
  return (
    <div className="relative overflow-hidden rounded-[20px] border border-apriil-line/80 bg-[#f6f4ef] p-5 md:p-7">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(255,65,1,0.18),transparent_46%)]" />
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(23,23,23,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(23,23,23,0.08)_1px,transparent_1px)] [background-size:34px_34px]" />

      <div className="relative space-y-5">
        <div className="flex items-center gap-3 rounded-full border border-apriil-line/90 bg-white/85 px-3 py-2">
          <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-[#ff4101]/15 text-[10px] font-semibold uppercase tracking-[0.12em] text-apriil-dark">
            SEO
          </span>
          <p className="text-xs font-medium uppercase tracking-[0.11em] text-apriil-muted">
            Search intent signal map
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-[1.06fr_0.94fr]">
          <article className="rounded-[14px] border border-apriil-line/80 bg-white/90 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-apriil-muted">
              Query clusters
            </p>
            <div className="mt-4 space-y-3">
              {[
                ["Kommersiell", "92"],
                ["Sammenligning", "74"],
                ["Informasjon", "58"],
                ["Lokal", "65"],
              ].map(([label, value]) => (
                <div key={label} className="space-y-1">
                  <div className="flex items-center justify-between text-[11px] font-semibold uppercase tracking-[0.1em] text-apriil-muted">
                    <span>{label}</span>
                    <span>{value}</span>
                  </div>
                  <div className="h-1.5 overflow-hidden rounded-full bg-[#ece8df]">
                    <div
                      className="h-full rounded-full bg-[#ff4101]/75"
                      style={{ width: `${value}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </article>

          <article className="rounded-[14px] border border-apriil-line/80 bg-white/90 p-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-apriil-muted">
              SERP readiness
            </p>
            <div className="mt-4 space-y-3">
              {[
                "Title and metadata",
                "Structured heading flow",
                "Internal links",
                "Entity clarity",
              ].map((item, index) => (
                <div
                  key={item}
                  className="grid grid-cols-[auto_1fr_auto] items-center gap-3 rounded-[10px] border border-apriil-line/70 bg-[#faf8f3] px-3 py-2"
                >
                  <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-[#2c2621] text-[10px] font-semibold text-white">
                    {index + 1}
                  </span>
                  <p className="text-xs font-medium text-apriil-dark">{item}</p>
                  <span className="h-2 w-2 rounded-full bg-[#ff4101]" />
                </div>
              ))}
            </div>
          </article>
        </div>

        <article className="rounded-[14px] border border-apriil-line/80 bg-[#151412] p-4 md:p-5">
          <div className="flex items-center justify-between gap-4">
            <p className="text-[11px] font-semibold uppercase tracking-[0.13em] text-[#bfb8ae]">
              Visibility trajectory
            </p>
            <span className="rounded-full border border-[#473f37] px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.12em] text-[#d8d1c6]">
              last 6 months
            </span>
          </div>

          <div className="mt-5 grid h-28 grid-cols-8 items-end gap-2 md:h-36">
            {[22, 26, 31, 37, 44, 53, 61, 74].map((height, index) => (
              <div key={height} className="relative h-full">
                <div
                  className="absolute bottom-0 w-full rounded-t-sm bg-gradient-to-t from-[#ff4101] to-[#ff8a5c]"
                  style={{ height: `${height}%` }}
                />
                {index > 0 ? <span className="absolute -left-1 top-0 h-px w-2 bg-[#6d6359]" /> : null}
              </div>
            ))}
          </div>
        </article>
      </div>
    </div>
  );
}
