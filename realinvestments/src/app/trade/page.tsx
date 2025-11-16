import Link from "next/link";

export const metadata = {
  title: "Real Investment | Current Raises",
  description:
    "Commit capital to Georgian real estate SPVs, monitor escrow progress, and stay informed on raise updates in one place.",
};

const activeRaises = [
  { code: "TBI-01", name: "Vake Vista", target: "₾2.4M", funded: "78%", closing: "Closes in 3 days" },
  { code: "BTM-02", name: "Seaside Residences", target: "₾1.9M", funded: "52%", closing: "Closes in 5 days" },
  { code: "KTS-03", name: "Riverside Lofts", target: "₾1.1M", funded: "34%", closing: "Closes in 6 days" },
  { code: "TBI-04", name: "Old Town Revival", target: "₾3.2M", funded: "New", closing: "Opened today" },
];

const recentCommitments = [
  { property: "TBI-01", investor: "M. Dvalishvili", amount: "₾35,000", ownership: "1.5%", time: "16:21" },
  { property: "BTM-02", investor: "S. Gelashvili", amount: "₾18,000", ownership: "0.9%", time: "15:58" },
  { property: "TBI-04", investor: "G. Natelashvili", amount: "₾52,000", ownership: "1.6%", time: "15:42" },
  { property: "KTS-03", investor: "A. Chikovani", amount: "₾9,500", ownership: "0.7%", time: "15:37" },
];

const roundUpdates = [
  {
    title: "Escrow audit scheduled",
    body: "TBI-01 escrow reconciliation with partner bank at 18:00. Updated statement uploaded to the data room.",
  },
  {
    title: "Transfer Board inquiry",
    body: "Two investors requested early-exit slots for BTM-02. Bulletin board opening once compliance approval clears.",
  },
];

export default function TradePage() {
  return (
    <div className="relative min-h-screen bg-neutral-950 px-6 pb-24 pt-16 text-white sm:px-10 lg:px-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-[-12rem] top-28 h-[22rem] w-[22rem] rounded-full bg-lime-400/20 blur-[160px]" />
        <div className="absolute right-[-10rem] top-10 h-[18rem] w-[18rem] rounded-full bg-emerald-400/25 blur-[160px]" />
      </div>

      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-col gap-12">
        <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.4em] text-emerald-200/70">
              Escrow-backed raises
            </p>
            <h1 className="mt-2 text-4xl font-semibold tracking-tight sm:text-5xl">
              Commit to fractional ownership
            </h1>
            <p className="mt-3 max-w-2xl text-base text-white/70 sm:text-lg">
              Review active SPVs, pass compliance, and lock your capital into escrow—funds move straight to the property&apos;s company once the goal is reached, or return to your bank account if it isn&apos;t.
            </p>
          </div>
          <Link
            href="/portfolio"
            className="self-start rounded-full border border-white/15 px-6 py-2 text-sm font-medium text-white/80 transition hover:border-white/40 hover:text-white"
          >
            View my holdings
          </Link>
        </header>

        <section className="grid gap-8 lg:grid-cols-[1.2fr_0.9fr]">
          <div className="rounded-[2.5rem] border border-white/15 bg-white/5 p-8 backdrop-blur">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <div>
                <h2 className="text-2xl font-semibold">Commit to a property raise</h2>
                <p className="mt-1 text-sm text-white/60">
                  One-week fundraising window per SPV. Capital settles into escrow until the round closes.
                </p>
              </div>
              <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-emerald-200/80">
                <span className="flex h-2 w-2 rounded-full bg-emerald-300" />
                Window open
              </div>
            </div>

            <form className="mt-8 grid gap-6 lg:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">Property SPV</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-lg font-semibold text-white">Select raise</span>
                  <span className="text-xs text-white/40">Codes TBI-01 · BTM-02 · …</span>
                </div>
                <input
                  className="mt-4 w-full rounded-xl bg-white/5 px-4 py-3 text-base text-white/90 outline-none transition focus:bg-white/10 focus:ring-2 focus:ring-emerald-300/60"
                  placeholder="Enter property code"
                  type="text"
                  pattern="^[A-Z0-9\\-]{5,}$"
                />
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">Commitment (₾)</p>
                <div className="mt-3 flex items-center justify-between">
                  <span className="text-lg font-semibold text-white">Link your bank</span>
                  <span className="text-xs text-white/40">Escrow handles settlement</span>
                </div>
                <input
                  className="mt-4 w-full rounded-xl bg-white/5 px-4 py-3 text-base text-white/90 outline-none transition focus:bg-white/10 focus:ring-2 focus:ring-emerald-300/60"
                  placeholder="₾25,000"
                  type="number"
                  step="100"
                />
              </div>
              <div className="lg:col-span-2">
                <button
                  type="button"
                  className="w-full rounded-full bg-gradient-to-r from-emerald-400 via-lime-200 to-emerald-500 px-8 py-3 text-sm font-semibold text-black shadow-[0_0_50px_rgba(134,239,172,0.5)] transition hover:scale-[1.01]"
                >
                  Submit commitment
                </button>
              </div>
            </form>

            <div className="mt-10 grid gap-5 sm:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">Escrow status</p>
                <p className="mt-3 text-lg font-semibold">Bank-confirmed</p>
                <p className="mt-2 text-sm text-emerald-200/80">
                  Funds settle into a licensed third-party escrow account. Release requires raise completion and lawyer sign-off.
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-black/30 p-5">
                <p className="text-xs uppercase tracking-[0.3em] text-white/40">Refund safety</p>
                <p className="mt-3 text-lg font-semibold">Automatic reversals</p>
                <p className="mt-2 text-sm text-emerald-200/80">
                  If the goal is missed, the escrow agent returns 100% of capital to the linked personal bank accounts instantly.
                </p>
              </div>
            </div>
          </div>

          <aside className="flex flex-col gap-6">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Active raises</h3>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/50">
                  Targets
                </span>
              </div>
              <ul className="mt-4 space-y-3">
                {activeRaises.map((raise) => (
                  <li
                    key={raise.code}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {raise.name}
                      </p>
                      <p className="text-[0.7rem] text-white/50">
                        {raise.code} • Target {raise.target}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-emerald-300">{raise.funded}</p>
                      <p className="text-[0.7rem] text-white/50">{raise.closing}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-semibold">Recent commitments</h3>
                <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.25em] text-white/50">
                  Live
                </span>
              </div>
              <ul className="mt-4 space-y-3">
                {recentCommitments.map((commitment) => (
                  <li
                    key={`${commitment.property}-${commitment.time}`}
                    className="flex items-center justify-between rounded-xl border border-white/10 bg-black/40 px-4 py-3"
                  >
                    <div>
                      <p className="text-sm font-semibold text-white">
                        {commitment.property} • {commitment.investor}
                      </p>
                      <p className="text-[0.7rem] text-white/50">
                        {commitment.amount} • {commitment.time}
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-semibold text-emerald-300">
                        {commitment.ownership}
                      </p>
                      <p className="text-xs text-white/70">Ownership</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[2rem] border border-emerald-200/40 bg-emerald-400/15 p-6 text-neutral-900 shadow-[0_30px_80px_rgba(134,239,172,0.4)]">
              <h3 className="text-lg font-semibold text-neutral-900">Round updates</h3>
              <ul className="mt-4 space-y-4">
                {roundUpdates.map((update) => (
                  <li key={update.title} className="rounded-xl border border-white/40 bg-white/50 p-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-neutral-700/80">
                      {update.title}
                    </p>
                    <p className="mt-2 text-sm text-neutral-800">{update.body}</p>
                  </li>
                ))}
              </ul>
              <Link
                href="/portfolio"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-neutral-900 px-5 py-2 text-sm font-semibold text-emerald-200 transition hover:bg-black"
              >
                Review my positions
              </Link>
            </div>
          </aside>
        </section>
      </div>
    </div>
  );
}


