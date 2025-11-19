import { FeeStructure } from "./FeeStructure";

export function Opportunities() {
  const marketMovers = [
    {
      name: "Tbilisi • Vake Vista",
      symbol: "TBI-01",
      icon: "🏙️",
      price: "₾1,150 per 1% share",
      change: "+16% projected IRR",
      volume: "Funding status · 78%",
    },
    {
      name: "Batumi • Seaside Residences",
      symbol: "BTM-02",
      icon: "🌊",
      price: "₾920 per 1% share",
      change: "+14% projected IRR",
      volume: "Funding status · 52%",
    },
    {
      name: "Kutaisi • Riverside Lofts",
      symbol: "KTS-03",
      icon: "🌉",
      price: "₾640 per 1% share",
      change: "+12% projected IRR",
      volume: "Funding status · 34%",
    },
    {
      name: "Tbilisi • Old Town Revival",
      symbol: "TBI-04",
      icon: "🏛️",
      price: "₾1,320 per 1% share",
      change: "+18% projected IRR",
      volume: "Just listed · day 1",
    },
  ];

  return (
    <section
      id="opportunities"
      className="grid gap-8 lg:grid-cols-[1.05fr_0.95fr]"
    >
      <div className="self-start rounded-[2.5rem] border border-white/5 bg-white/5 p-7 backdrop-blur">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-white">
            Active raises this week
          </h2>
          <span className="rounded-full border border-white/10 px-3 py-1 text-xs uppercase tracking-[0.3em] text-white/50">
            Escrow protected
          </span>
        </div>
        <div className="mt-5 space-y-3">
          {marketMovers.map((asset) => {
            const positive = asset.change.startsWith("+");
            return (
              <div
                key={asset.symbol}
                className="flex items-center justify-between rounded-2xl border border-white/10 bg-black/30 px-4 py-3 transition hover:border-emerald-300/40 hover:bg-black/50"
              >
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-2xl">
                    {asset.icon}
                  </span>
                  <div>
                    <p className="text-lg font-semibold text-white">
                      {asset.name}
                    </p>
                    <p className="text-xs uppercase tracking-[0.2em] text-white/40">
                      Total volume {asset.volume}
                    </p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-lg font-semibold text-white">
                    {asset.price}
                  </p>
                  <p
                    className={`text-sm font-medium ${
                      positive ? "text-emerald-300" : "text-rose-400"
                    }`}
                  >
                    {asset.change}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="space-y-6">
        <div className="rounded-[2.5rem] border border-white/10 bg-linear-to-br from-white/10 via-neutral-900/80 to-neutral-900/95 p-8 backdrop-blur">
          <h2 className="text-2xl font-semibold text-white">
            Investment management & exit
          </h2>
          <p className="mt-3 text-sm text-white/70">
            After funding, the SPV acquires the apartment, rental income is
            tracked, and your dashboard shows your shareholding—never a wallet
            balance. Want to exit early? Use the Transfer Board for a
            peer-to-peer, escrow-managed sale.
          </p>
          <ul className="mt-6 space-y-4">
            <li className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/80">
                Dashboard tracking
              </p>
              <p className="mt-2 text-sm text-white/70">
                View ownership like “5% in Tbilisi Apt #1 LLC” with rent
                distributions and documents in one place.
              </p>
            </li>
            <li className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/80">
                Transfer Board
              </p>
              <p className="mt-2 text-sm text-white/70">
                Post your shares to interested investors. The same escrow flow
                moves funds buyer-to-seller and updates the SPV cap table.
              </p>
            </li>
            <li className="rounded-2xl border border-white/10 bg-black/30 p-5">
              <p className="text-sm uppercase tracking-[0.3em] text-emerald-200/80">
                Payday event
              </p>
              <p className="mt-2 text-sm text-white/70">
                At exit, profits land in the SPV bank account. We deduct the
                success fee, then distribute principal and gains directly to
                every linked bank account.
              </p>
            </li>
          </ul>
        </div>
      </div>

      <FeeStructure />
    </section>
  );
}
