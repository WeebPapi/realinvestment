export function FeeStructure() {
  const trustSignals = [
    {
      title: "Sourcing fee",
      body: "2-3% one-time fee taken from the total funds raised to cover legal structuring and detailed due diligence.",
    },
    {
      title: "Success fee",
      body: "15-20% of profit only when the SPV sells the property—your capital returns before fees are calculated.",
    },
    {
      title: "Early exit penalty",
      body: "Time-based vesting on profit share: 18% in year 1, 12% in year 2, 6% in year 3—then zero beyond year three.",
    },
  ];

  return (
    <div
      id="fee-structure"
      className="mt-6 rounded-[2.5rem] border border-white/10 bg-emerald-400/20 p-8 text-white shadow-[0_30px_80px_rgba(134,239,172,0.45)] lg:col-span-2 lg:mt-0"
    >
      <p className="text-sm uppercase tracking-[0.4em] text-white/70">
        Fair & transparent fees
      </p>
      <h3 className="mt-3 text-2xl font-semibold text-white">
        We win when investors win
      </h3>
      <ul className="mt-4 space-y-4 text-sm text-white/80">
        {trustSignals.map((signal) => (
          <li
            key={signal.title}
            className="rounded-2xl border border-neutral-900/10"
          >
            <p className="text-s uppercase tracking-[0.3em] text-white/70 font-bold">
              {signal.title}
            </p>
            <p className="mt-2">{signal.body}</p>
          </li>
        ))}
        <li className="rounded-2xl border border-neutral-900/10">
          <p className="text-xs uppercase tracking-[0.3em] text-white/70">
            Transaction fee
          </p>
          <p className="mt-2">
            Instead of bank withdrawal fees, we charge a flat 5 GEL bank
            transfer fee on final profit payouts to cover processing.
          </p>
        </li>
      </ul>
      <button
        type="button"
        className="mt-6 inline-flex items-center justify-center rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-emerald-200 transition hover:bg-black"
      >
        Download fee schedule
      </button>
    </div>
  );
}
