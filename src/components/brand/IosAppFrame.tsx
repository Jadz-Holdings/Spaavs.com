/**
 * Static iOS rendering of the SPAAVS Mobile App.
 * The screen shows a hands-free service request, which the driver speaks
 * instead of handling the phone.
 */
export function IosAppFrame() {
  return (
    <figure className="mx-auto w-full max-w-[300px]">
      <div className="rounded-[2.7rem] border border-[#1a1a1a] bg-[#111111] p-[10px] shadow-[0_24px_50px_-28px_rgba(0,0,0,0.55)]">
        <div className="relative overflow-hidden rounded-[2.15rem] bg-[#f7fbfb] text-[#111111]">
          <div className="flex items-center justify-between px-6 pt-3 text-[11px] font-medium">
            <span>9:41</span>
            <span className="flex items-center gap-1" aria-hidden>
              <span className="h-1.5 w-1.5 rounded-full bg-[#111]" />
              <span className="h-1.5 w-1.5 rounded-full bg-[#111]" />
              <span className="h-2.5 w-4 rounded-sm border border-[#111]" />
            </span>
          </div>
          <div
            className="absolute left-1/2 top-2 h-6 w-24 -translate-x-1/2 rounded-full bg-[#111]"
            aria-hidden
          />

          <div className="px-5 pb-4 pt-6">
            <p className="text-[11px] uppercase tracking-[0.16em] text-[#087e7b]">
              SPAAVS
            </p>
            <p className="mt-1 font-display text-[1.65rem] leading-none">
              Hands-free
            </p>
            <div className="mx-auto mt-6 flex h-24 w-24 items-center justify-center rounded-full border border-[#0abab5] bg-white">
              <span className="h-10 w-10 rounded-full bg-[#0abab5]" aria-hidden />
            </div>
            <p className="mt-4 text-center text-sm font-medium">Listening</p>
            <p className="mt-2 text-center font-display text-lg leading-snug">
              “Add detailing to this visit.”
            </p>
            <p className="mt-2 text-center text-xs leading-relaxed text-[#444]">
              Both hands stay on the wheel.
            </p>
          </div>

          <div className="mx-4 mb-4 rounded-2xl border border-[#d7eeee] bg-white px-4 py-3">
            <p className="text-[10px] uppercase tracking-[0.14em] text-[#087e7b]">
              When you park
            </p>
            <p className="mt-1 text-sm font-medium">Bay B2 · Level 2</p>
            <p className="mt-1 text-xs leading-relaxed text-[#444]">
              Detailing added to this visit.
            </p>
          </div>

          <div className="grid grid-cols-4 border-t border-[#d7eeee] bg-white px-2 py-3 text-center text-[10px]">
            <span className="text-[#5f6b6b]">Park</span>
            <span className="font-medium text-[#087e7b]">Services</span>
            <span className="text-[#5f6b6b]">Guide</span>
            <span className="text-[#5f6b6b]">Visit</span>
          </div>
          <div className="flex justify-center bg-white pb-2" aria-hidden>
            <span className="h-1 w-24 rounded-full bg-[#111]" />
          </div>
        </div>
      </div>
      <figcaption className="mt-3 text-center text-xs leading-relaxed text-[var(--ink-muted)]">
        iOS rendering of the SPAAVS Mobile App taking a hands-free service
        request.
      </figcaption>
    </figure>
  );
}
