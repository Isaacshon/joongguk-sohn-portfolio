import { ArtDetailFrame, ArtWorldFrame } from "@/components/poster-studies/ArtWorldFrame";

function MicroBarcode({ className = "" }: { className?: string }) {
  return (
    <span
      className={`block h-5 bg-[repeating-linear-gradient(90deg,currentColor_0_1px,transparent_1px_3px,currentColor_3px_5px,transparent_5px_8px)] ${className}`}
    />
  );
}

function RouteArrow({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 100 42" fill="none">
      <path d="M2 21h82" stroke="currentColor" strokeWidth="5" />
      <path d="m68 4 18 17-18 17" stroke="currentColor" strokeWidth="5" />
    </svg>
  );
}

export function SeventyNineWorld() {
  return (
    <div className="grid min-w-0 grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
      <div className="min-w-0 md:col-span-2">
        <ArtWorldFrame
          label="79W electric regional mobility identity shown across an electric vehicle, charging interface, rider pass, and station sign"
          className="bg-[#171b1d] shadow-[0_26px_90px_rgba(14,18,20,0.34)]"
        >
          <div className="@container absolute inset-0 text-[#e7efed]">
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(231,239,237,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(231,239,237,.12)_1px,transparent_1px)] [background-size:9.1%_12.5%]" />
            <div className="absolute inset-x-0 top-0 h-[2.2%] bg-[#ff5a24]" />
            <p className="absolute -left-[2%] top-[2%] font-mono text-[clamp(78px,17vw,230px)] font-black leading-none tracking-[-0.13em] text-white/[0.055]">
              79
            </p>

            <div className="absolute left-[5%] top-[6%] flex items-center gap-[3cqw] font-mono uppercase">
              <p className="text-[clamp(23px,4vw,56px)] font-black leading-none tracking-[-0.1em]">
                79<span className="text-[#ff5a24]">W</span>
              </p>
              <div className="border-l border-white/35 pl-[3cqw] text-[clamp(6px,0.78vw,10px)] leading-[1.45] tracking-[0.16em] text-white/65">
                Regional electric
                <br /> mobility network
              </div>
            </div>

            <div className="absolute left-[5%] top-[26%] w-[69%] sm:left-[7%] sm:top-[27%] sm:w-[61%]">
              <div className="relative aspect-[15/6] w-full motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:-translate-x-2">
                <div className="absolute inset-x-[3%] top-[22%] h-[51%] rounded-[45%_54%_16%_14%/60%_58%_34%_34%] bg-[#e7efed] shadow-[0_24px_50px_rgba(0,0,0,.38)]">
                  <div className="absolute left-[30%] top-[8%] h-[39%] w-[38%] -skew-x-[24deg] rounded-t-[35%] bg-[#20282b]" />
                  <span className="absolute left-[5%] top-[15%] font-mono text-[clamp(8px,1.6vw,22px)] font-black tracking-[-0.08em] text-[#171b1d]">
                    79W
                  </span>
                  <span className="absolute bottom-[13%] left-[6%] h-[8%] w-[67%] bg-[#ff5a24]" />
                  <span className="absolute bottom-[13%] right-[7%] h-[8%] w-[10%] bg-[#171b1d]" />
                </div>
                <div className="absolute bottom-[8%] left-[18%] size-[16%] rounded-full border-[clamp(4px,0.9vw,12px)] border-[#171b1d] bg-[#9eb2b2] shadow-[inset_0_0_0_2px_#e7efed]" />
                <div className="absolute bottom-[8%] right-[16%] size-[16%] rounded-full border-[clamp(4px,0.9vw,12px)] border-[#171b1d] bg-[#9eb2b2] shadow-[inset_0_0_0_2px_#e7efed]" />
                <p className="absolute bottom-[-7%] left-[4%] font-mono text-[clamp(6px,0.7vw,9px)] uppercase tracking-[0.16em] text-white/55">
                  Intercity unit 79—014 / zero tailpipe emission
                </p>
              </div>
            </div>

            <div className="absolute right-[5%] top-[8%] w-[27%] rotate-1 border border-white/25 bg-[#242a2c] p-[2.4%] shadow-[0_18px_38px_rgba(0,0,0,.38)] sm:right-[7%] sm:w-[24%] sm:p-[1.8%]">
              <div className="flex items-center justify-between font-mono text-[clamp(6px,0.68vw,9px)] uppercase tracking-[0.14em] text-white/60">
                <span>Charge 04</span>
                <span className="size-2 rounded-full bg-[#ff5a24]" />
              </div>
              <div className="relative mx-auto mt-[10%] aspect-square w-[72%] rounded-full bg-[conic-gradient(#ff5a24_0deg_284deg,#506063_284deg_360deg)] p-[9%]">
                <div className="flex size-full items-center justify-center rounded-full bg-[#242a2c] font-mono text-[clamp(13px,2.6vw,36px)] font-black tracking-[-0.08em]">
                  79<span className="text-[0.45em] text-white/55">%</span>
                </div>
              </div>
              <div className="mt-[9%] grid grid-cols-2 border-t border-white/25 pt-[6%] font-mono text-[clamp(5px,0.58vw,8px)] uppercase leading-[1.4] text-white/55">
                <span>148 km</span>
                <span className="text-right">18 min</span>
              </div>
            </div>

            <div className="absolute bottom-[7%] left-[6%] w-[35%] -rotate-2 bg-[#ff5a24] px-[3%] py-[2.4%] text-[#171b1d] shadow-[0_18px_38px_rgba(0,0,0,.34)] sm:left-[10%] sm:w-[30%] sm:px-[2.2%] sm:py-[1.6%]">
              <div className="flex items-start justify-between">
                <p className="font-mono text-[clamp(10px,2vw,26px)] font-black leading-[0.8] tracking-[-0.08em]">
                  RIDE
                  <br /> 79
                </p>
                <span className="rounded-full border border-current px-[6%] py-[2%] font-mono text-[clamp(5px,0.6vw,8px)] uppercase">
                  Zone W
                </span>
              </div>
              <MicroBarcode className="mt-[12%] w-full" />
              <p className="mt-[5%] font-mono text-[clamp(5px,0.58vw,8px)] uppercase tracking-[0.1em]">
                Flexible regional pass / 24 h
              </p>
            </div>

            <div className="absolute bottom-[6%] right-[7%] h-[36%] w-[20%] text-[#171b1d] sm:right-[10%] sm:h-[39%] sm:w-[17%]">
              <div className="relative h-[82%] border-[clamp(3px,0.45vw,6px)] border-[#e7efed] bg-[#e7efed] p-[10%] shadow-[0_22px_42px_rgba(0,0,0,.42)] motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:-translate-y-2">
                <p className="font-mono text-[clamp(13px,2.3vw,32px)] font-black leading-[0.72] tracking-[-0.1em]">
                  79
                  <br /> WEST
                </p>
                <RouteArrow className="mt-[19%] w-full text-[#ff5a24]" />
                <div className="absolute inset-x-[10%] bottom-[9%] border-t border-black/30 pt-[8%] font-mono text-[clamp(5px,0.55vw,8px)] uppercase leading-[1.35]">
                  Gate 04
                  <br /> Every 12 min
                </div>
              </div>
              <span className="mx-auto block h-[18%] w-[6%] bg-[#8d9b9b]" />
            </div>
          </div>
        </ArtWorldFrame>
      </div>
      <SeventyNineVehicleDetail />
      <SeventyNineStationDetail />
      <SeventyNineTicketAppDetail />
    </div>
  );
}

export function TideholdWorld() {
  return (
    <div className="grid min-w-0 grid-cols-1 gap-3 md:grid-cols-[1.18fr_0.82fr] md:gap-4">
      <div className="min-w-0 md:col-span-2">
        <ArtWorldFrame
          label="Tidehold waterfront regeneration hotel identity shown across an architectural campaign, room key, amenity family, and waterside sign"
          className="bg-[#26343b] shadow-[0_26px_90px_rgba(25,40,46,0.3)]"
        >
          <div className="@container absolute inset-0 overflow-hidden text-[#e4e8e4]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_73%_22%,rgba(220,226,220,.19),transparent_27%),linear-gradient(115deg,transparent_0_60%,rgba(184,106,67,.17)_60%_61%,transparent_61%)]" />
            <div className="absolute left-[4%] top-[7%] z-20">
              <p className="font-serif text-[clamp(29px,5.6vw,78px)] italic leading-[0.72] tracking-[-0.08em]">
                TIDE
                <span className="block pl-[18%] not-italic">HOLD</span>
              </p>
              <p className="mt-[2cqw] font-mono text-[clamp(5px,0.65vw,9px)] uppercase tracking-[0.2em] text-[#d69336]">
                Warehouse 04 / waterfront rooms
              </p>
            </div>

            <div className="tidehold-image-slot absolute bottom-[8%] left-[4%] h-[63%] w-[57%] -rotate-1 overflow-hidden border border-white/35 bg-[linear-gradient(153deg,#b9c4c1_0%,#71858b_30%,#35474f_62%,#19262c_100%)] shadow-[0_28px_65px_rgba(8,18,22,.48)] motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:-translate-y-2 sm:bottom-[7%] sm:left-[7%] sm:h-[69%] sm:w-[52%]">
              <div className="absolute inset-x-[7%] bottom-0 h-[79%] border-x-[clamp(4px,0.7vw,10px)] border-t-[clamp(4px,0.7vw,10px)] border-[#1e3037] bg-[#33474f]">
                <div className="absolute inset-[7%] grid grid-cols-5 gap-[4%]">
                  {Array.from({ length: 15 }, (_, index) => (
                    <span
                      key={index}
                      className={`border border-white/25 ${index === 7 || index === 13 ? "bg-[#d69336] shadow-[0_0_18px_rgba(214,147,54,.55)]" : "bg-[#17252b]/75"}`}
                    />
                  ))}
                </div>
                <div className="absolute bottom-0 left-[11%] h-[26%] w-[26%] bg-[#b86943]">
                  <span className="absolute inset-x-[18%] bottom-0 h-[75%] border-x border-t border-[#26343b]/60" />
                </div>
              </div>
              <div className="absolute inset-x-0 bottom-0 h-[12%] bg-[#18262c] opacity-90 [clip-path:polygon(0_58%,14%_27%,27%_63%,43%_34%,62%_74%,78%_31%,100%_60%,100%_100%,0_100%)]" />
              <div className="absolute right-[6%] top-[7%] border-l border-white/45 pl-[3%] font-mono text-[clamp(5px,0.6vw,8px)] uppercase leading-[1.45] tracking-[0.12em]">
                Old structure
                <br /> New rhythm
              </div>
              <p className="absolute bottom-[6%] right-[5%] font-serif text-[clamp(18px,4vw,56px)] italic leading-none text-white/80">
                Stay with
                <br /> the water.
              </p>
            </div>

            <div className="absolute right-[5%] top-[8%] w-[30%] rotate-2 bg-[#b86943] p-[3%] text-[#25343b] shadow-[0_18px_42px_rgba(8,18,22,.4)] sm:right-[8%] sm:w-[27%] sm:p-[2%]">
              <div className="flex items-start justify-between">
                <p className="font-serif text-[clamp(12px,2.2vw,30px)] italic leading-none">
                  Room 407
                </p>
                <span className="size-[clamp(10px,1.5vw,22px)] rounded-full border border-current" />
              </div>
              <div className="my-[14%] h-px bg-current/40" />
              <p className="font-mono text-[clamp(6px,0.7vw,9px)] uppercase leading-[1.5] tracking-[0.14em]">
                East quay
                <br /> Low tide / 06:42
              </p>
              <MicroBarcode className="mt-[12%] w-[70%]" />
            </div>

            <div className="absolute bottom-[7%] right-[7%] flex h-[38%] w-[27%] items-end justify-center gap-[5%] sm:right-[10%] sm:h-[37%] sm:w-[25%]">
              <div className="relative h-[61%] w-[27%] rounded-t-full border border-[#b86943] bg-[#dce2dc] text-[#26343b] shadow-[0_18px_32px_rgba(8,18,22,.32)]">
                <span className="absolute left-1/2 top-[-13%] h-[16%] w-[38%] -translate-x-1/2 bg-[#b86943]" />
                <p className="absolute inset-x-0 top-[43%] -rotate-90 text-center font-mono text-[clamp(5px,0.58vw,8px)] font-bold uppercase tracking-[0.15em]">
                  Brine wash
                </p>
              </div>
              <div className="relative h-[78%] w-[32%] bg-[#d69336] text-[#26343b] shadow-[0_18px_32px_rgba(8,18,22,.36)]">
                <span className="absolute left-[18%] top-[-9%] h-[10%] w-[64%] rounded-t-sm bg-[#e4e8e4]" />
                <p className="absolute inset-x-0 bottom-[12%] -rotate-90 text-center font-mono text-[clamp(5px,0.58vw,8px)] font-bold uppercase tracking-[0.16em]">
                  Cedar rinse
                </p>
              </div>
              <div className="relative h-[49%] w-[29%] rounded-t-[42%] bg-[#b86943] text-[#e4e8e4] shadow-[0_18px_32px_rgba(8,18,22,.36)]">
                <p className="absolute inset-x-0 top-[22%] text-center font-serif text-[clamp(9px,1.25vw,17px)] italic">
                  T/H
                </p>
              </div>
            </div>

            <div className="absolute right-[2.7%] top-[43%] h-[25%] w-[8%] border border-[#dce2dc]/35 bg-[#18262c] text-[#d69336] shadow-[0_15px_32px_rgba(8,18,22,.38)] sm:right-[4%] sm:w-[7%]">
              <p className="absolute left-1/2 top-[10%] -translate-x-1/2 font-mono text-[clamp(7px,1.1vw,15px)] font-black [writing-mode:vertical-rl]">
                TIDEHOLD
              </p>
              <span className="absolute bottom-[8%] left-1/2 size-[18%] -translate-x-1/2 rounded-full bg-[#b86943]" />
            </div>
          </div>
        </ArtWorldFrame>
      </div>
      <TideholdRoomDetail />
      <TideholdSignDetail />
      <TideholdSeasonDetail />
    </div>
  );
}

export function OffsortWorld() {
  return (
    <div className="grid min-w-0 grid-cols-1 gap-3 md:grid-cols-3 md:gap-4">
      <div className="min-w-0 md:col-span-3">
        <ArtWorldFrame
          label="Offsort circular food brand shown across an irregular-produce package family, market crate, harvest label, and surplus marketplace app"
          className="bg-[#f1e5cf] shadow-[0_26px_90px_rgba(79,39,61,0.24)]"
        >
          <div className="@container absolute inset-0 overflow-hidden text-[#41233c]">
            <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle,#41233c_0_1px,transparent_1.3px)] [background-size:18px_18px]" />
            <div className="absolute -right-[6%] -top-[16%] size-[49%] rounded-[42%_58%_63%_37%/55%_38%_62%_45%] bg-[#ef5638]" />
            <div className="absolute left-[5%] top-[5%] z-20 flex items-end gap-[2cqw]">
              <p className="font-mono text-[clamp(30px,6.5vw,90px)] font-black leading-[0.72] tracking-[-0.12em]">
                OFF
                <br /> SORT
              </p>
              <p className="mb-[0.5cqw] border-l border-current pl-[2cqw] font-mono text-[clamp(5px,0.64vw,9px)] uppercase leading-[1.5] tracking-[0.16em]">
                Shape rejected
                <br /> Taste accepted
              </p>
            </div>

            <div className="absolute left-[6%] top-[30%] flex h-[44%] w-[55%] items-end gap-[4%] sm:left-[9%] sm:top-[27%] sm:h-[48%] sm:w-[48%]">
              <div className="relative h-[82%] w-[42%] -rotate-3 overflow-hidden rounded-t-[48%_15%] bg-[#41233c] p-[7%] text-[#f1e5cf] shadow-[0_24px_48px_rgba(65,35,60,.32)] motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:-translate-y-2">
                <p className="font-mono text-[clamp(8px,1.7vw,24px)] font-black leading-[0.78] tracking-[-0.08em]">
                  CROOKED
                  <br /> TOMATO
                </p>
                <div className="absolute bottom-[16%] left-[12%] size-[58%] rounded-[54%_46%_61%_39%/44%_63%_37%_56%] bg-[#ef5638]">
                  <span className="absolute -top-[10%] left-[42%] h-[23%] w-[9%] rotate-[24deg] bg-[#83a747]" />
                  <span className="absolute -right-[10%] top-[30%] size-[46%] rounded-full bg-[#ef5638]" />
                </div>
                <p className="absolute bottom-[6%] left-[8%] font-mono text-[clamp(5px,0.58vw,8px)] uppercase tracking-[0.13em]">
                  Soup base / 420 g
                </p>
              </div>
              <div className="relative h-[65%] w-[27%] rotate-2 rounded-t-full bg-[#83a747] p-[7%] text-[#41233c] shadow-[0_20px_40px_rgba(65,35,60,.25)]">
                <span className="mx-auto block size-[65%] rounded-[37%_63%_48%_52%/61%_32%_68%_39%] bg-[#f1e5cf]" />
                <p className="absolute inset-x-0 bottom-[8%] text-center font-mono text-[clamp(5px,0.62vw,8px)] font-bold uppercase">
                  Wonky pear
                </p>
              </div>
              <div className="relative h-[52%] w-[25%] -rotate-1 bg-[#ef5638] p-[7%] text-[#f1e5cf] shadow-[0_20px_40px_rgba(65,35,60,.25)]">
                <div className="size-full rounded-full border-[clamp(2px,0.4vw,6px)] border-[#f1e5cf] p-[14%]">
                  <p className="font-mono text-[clamp(6px,0.95vw,13px)] font-black leading-[0.86]">
                    ODD
                    <br /> GOOD
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute bottom-[5%] left-[4%] w-[46%] rotate-1 bg-[#41233c] p-[2.5%] text-[#f1e5cf] shadow-[0_18px_38px_rgba(65,35,60,.3)] sm:left-[7%] sm:w-[39%] sm:p-[1.8%]">
              <div className="grid h-[8cqw] min-h-10 max-h-24 grid-cols-6 gap-[2%] border-y border-[#f1e5cf]/35 py-[4%]">
                {[
                  "bg-[#ef5638]",
                  "bg-[#83a747]",
                  "bg-[#ef5638]",
                  "bg-[#f1e5cf]",
                  "bg-[#83a747]",
                  "bg-[#ef5638]",
                ].map((tone, index) => (
                  <span key={index} className={`${tone} rounded-[50%_35%_48%_41%]`} />
                ))}
              </div>
              <div className="mt-[4%] flex justify-between font-mono text-[clamp(5px,0.62vw,8px)] uppercase tracking-[0.12em]">
                <span>Crate 12 / Market loop</span>
                <span>12.4 kg</span>
              </div>
            </div>

            <div className="absolute right-[7%] top-[22%] w-[27%] rotate-3 rounded-[48%] bg-[#f1e5cf] p-[4%] text-center shadow-[0_18px_38px_rgba(65,35,60,.25)] sm:right-[10%] sm:w-[23%] sm:p-[3%]">
              <div className="rounded-[48%] border-2 border-dashed border-[#41233c] p-[11%]">
                <p className="font-serif text-[clamp(11px,2.2vw,30px)] font-bold italic leading-[0.85]">
                  perfectly
                  <br /> imperfect
                </p>
                <span className="mx-auto mt-[8%] block h-2 w-[42%] bg-[#ef5638]" />
                <p className="mt-[7%] font-mono text-[clamp(5px,0.58vw,8px)] uppercase tracking-[0.1em]">
                  Grade O / save me
                </p>
              </div>
            </div>

            <div className="absolute bottom-[7%] right-[7%] h-[42%] w-[23%] -rotate-2 rounded-[clamp(10px,1.4vw,20px)] border-[clamp(3px,0.45vw,6px)] border-[#41233c] bg-[#f7f0e1] p-[2%] shadow-[0_22px_42px_rgba(65,35,60,.28)] motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:-translate-y-2 sm:right-[11%] sm:h-[48%] sm:w-[20%]">
              <div className="mx-auto mb-[8%] h-[2%] w-[28%] rounded-full bg-[#41233c]" />
              <p className="font-mono text-[clamp(7px,1.25vw,17px)] font-black leading-[0.8] tracking-[-0.08em]">
                SAVE
                <br /> TODAY
              </p>
              <div className="mt-[12%] space-y-[7%]">
                {[
                  ["bg-[#ef5638]", "Tomato lot / 42%"],
                  ["bg-[#83a747]", "Pear box / 31%"],
                  ["bg-[#41233c]", "Root mix / 18%"],
                ].map(([tone, copy]) => (
                  <div
                    key={copy}
                    className="grid grid-cols-[22%_1fr] items-center gap-[8%] border-b border-[#41233c]/25 pb-[6%]"
                  >
                    <span className={`${tone} aspect-square rounded-[42%_58%_47%_53%]`} />
                    <span className="font-mono text-[clamp(4px,0.5vw,7px)] uppercase leading-[1.3]">
                      {copy}
                    </span>
                  </div>
                ))}
              </div>
              <div className="absolute inset-x-[9%] bottom-[7%] bg-[#41233c] py-[5%] text-center font-mono text-[clamp(5px,0.58vw,8px)] font-bold uppercase text-[#f1e5cf]">
                Reserve crate
              </div>
            </div>
          </div>
        </ArtWorldFrame>
      </div>
      <OffsortPackagingDetail />
      <OffsortCrateDetail />
      <OffsortRecipeDetail />
    </div>
  );
}

export function HoralisWorld() {
  return (
    <div className="grid min-w-0 grid-cols-1 gap-3 md:grid-cols-[0.82fr_1.18fr] md:gap-4">
      <div className="min-w-0 md:col-span-2">
        <ArtWorldFrame
          label="Horalis circadian skincare identity shown across a timed product family, ritual card, mobile regimen, and laboratory batch label"
          className="bg-[#e9e2d6] shadow-[0_26px_90px_rgba(43,61,91,0.22)]"
        >
          <div className="@container absolute inset-0 overflow-hidden text-[#263d67]">
            <div className="absolute left-1/2 top-[8%] size-[73%] -translate-x-1/2 rounded-full border border-[#263d67]/15 bg-[conic-gradient(from_205deg,#263d67_0deg_84deg,#c6ccd0_84deg_176deg,#e77b6b_176deg_278deg,#f4eee4_278deg_360deg)] opacity-75 motion-safe:transition-transform motion-safe:duration-[1400ms] motion-safe:group-hover:rotate-12" />
            <div className="absolute left-1/2 top-[18%] size-[54%] -translate-x-1/2 rounded-full bg-[#e9e2d6]" />
            <div className="absolute left-[5%] top-[5%] z-20 flex items-start justify-between sm:left-[7%] sm:right-[7%]">
              <div>
                <p className="font-serif text-[clamp(29px,6vw,82px)] leading-[0.75] tracking-[-0.08em]">
                  HORALIS
                </p>
                <p className="mt-[1.4cqw] font-mono text-[clamp(5px,0.62vw,9px)] uppercase tracking-[0.2em]">
                  Skin follows light
                </p>
              </div>
              <div className="hidden text-right font-mono text-[clamp(5px,0.58vw,8px)] uppercase leading-[1.5] tracking-[0.13em] sm:block">
                Dawn / repair
                <br /> Noon / defend
                <br /> Night / renew
              </div>
            </div>

            <div className="absolute left-[22%] top-[27%] flex h-[49%] w-[57%] items-end justify-center gap-[4%] sm:left-[26%] sm:top-[25%] sm:h-[55%] sm:w-[48%]">
              <div className="relative h-[61%] w-[23%] rounded-t-[44%] bg-[linear-gradient(105deg,#92989d_0%,#f5f5f3_24%,#a7adb1_48%,#f8f8f5_70%,#8e959a_100%)] shadow-[0_24px_44px_rgba(45,54,68,.25)]">
                <span className="absolute left-[19%] top-[-13%] h-[14%] w-[62%] bg-[#263d67]" />
                <span className="absolute left-[32%] top-[-22%] h-[10%] w-[36%] bg-[#d5d7d5]" />
                <p className="absolute inset-x-0 bottom-[14%] -rotate-90 text-center font-mono text-[clamp(5px,0.62vw,9px)] font-bold uppercase tracking-[0.16em]">
                  06:40 serum
                </p>
              </div>
              <div className="relative h-[82%] w-[27%] bg-[#263d67] text-[#e9e2d6] shadow-[0_28px_50px_rgba(45,54,68,.34)] motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:-translate-y-2">
                <div className="absolute inset-x-0 top-0 h-[17%] bg-[linear-gradient(90deg,#8f969a,#f6f5f0,#8b9296)]" />
                <p className="absolute left-[15%] top-[28%] font-serif text-[clamp(12px,2.3vw,32px)] leading-[0.78]">
                  NIGHT
                  <br /> 22:10
                </p>
                <span className="absolute bottom-[13%] left-[15%] h-[2px] w-[44%] bg-[#e77b6b]" />
              </div>
              <div className="relative h-[47%] w-[29%] rounded-t-[22%] bg-[#e77b6b] shadow-[0_20px_40px_rgba(45,54,68,.24)]">
                <div className="absolute inset-x-0 top-[-16%] h-[18%] rounded-t-[45%] bg-[linear-gradient(90deg,#8f969a,#f6f5f0,#8b9296)]" />
                <p className="absolute inset-x-0 top-[28%] text-center font-mono text-[clamp(6px,0.75vw,10px)] font-bold uppercase leading-[1.3]">
                  Dawn veil
                  <br /> 06:20
                </p>
              </div>
            </div>

            <div className="absolute left-[5%] top-[28%] w-[23%] -rotate-2 border border-[#263d67]/35 bg-[#f4eee4]/90 p-[3%] shadow-[0_18px_36px_rgba(45,54,68,.18)] sm:left-[8%] sm:w-[21%] sm:p-[2%]">
              <div className="flex items-center justify-between font-mono text-[clamp(5px,0.58vw,8px)] uppercase">
                <span>Ritual 01</span>
                <span className="size-2 rounded-full bg-[#e77b6b]" />
              </div>
              <div className="relative mx-auto my-[10%] aspect-square w-[72%] rounded-full border border-[#263d67]">
                <span className="absolute left-1/2 top-[5%] h-[45%] w-px origin-bottom rotate-[42deg] bg-[#263d67]" />
                <span className="absolute left-1/2 top-1/2 size-[10%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#e77b6b]" />
              </div>
              <p className="font-serif text-[clamp(9px,1.6vw,22px)] italic leading-[0.9]">
                Meet the morning slowly.
              </p>
              <p className="mt-[9%] border-t border-[#263d67]/30 pt-[6%] font-mono text-[clamp(4px,0.5vw,7px)] uppercase leading-[1.5]">
                Cleanse / activate
                <br /> protect / observe
              </p>
            </div>

            <div className="absolute bottom-[6%] right-[7%] h-[45%] w-[22%] rotate-2 rounded-[clamp(9px,1.3vw,18px)] border-[clamp(3px,0.4vw,6px)] border-[#263d67] bg-[#f4eee4] p-[2%] shadow-[0_22px_42px_rgba(45,54,68,.25)] sm:right-[10%] sm:h-[48%] sm:w-[19%]">
              <div className="mx-auto h-[2%] w-[27%] rounded-full bg-[#263d67]" />
              <div className="mt-[11%] flex items-center justify-between font-mono text-[clamp(5px,0.56vw,8px)] uppercase">
                <span>Today</span>
                <span>06:38</span>
              </div>
              <p className="mt-[9%] font-serif text-[clamp(10px,1.9vw,26px)] leading-[0.88] tracking-[-0.04em]">
                Good
                <br /> morning,
                <br /> skin.
              </p>
              <div className="mt-[13%] space-y-[7%]">
                {["Cleanse", "Dawn serum", "Light veil"].map((step, index) => (
                  <div
                    key={step}
                    className="grid grid-cols-[auto_1fr] items-center gap-[7%] border-b border-[#263d67]/25 pb-[5%]"
                  >
                    <span
                      className={`size-[clamp(9px,1.2vw,16px)] rounded-full ${index === 0 ? "bg-[#263d67]" : index === 1 ? "bg-[#e77b6b]" : "border border-[#263d67]"}`}
                    />
                    <span className="font-mono text-[clamp(4px,0.5vw,7px)] uppercase">{step}</span>
                  </div>
                ))}
              </div>
              <div className="absolute inset-x-[9%] bottom-[7%] bg-[#263d67] py-[5%] text-center font-mono text-[clamp(5px,0.56vw,8px)] uppercase text-[#f4eee4]">
                Begin ritual
              </div>
            </div>

            <div className="absolute bottom-[6%] left-[6%] w-[34%] rotate-1 border border-[#263d67]/35 bg-[#d5d7d5] p-[2.4%] shadow-[0_16px_34px_rgba(45,54,68,.19)] sm:left-[10%] sm:w-[30%] sm:p-[1.8%]">
              <div className="flex justify-between font-mono text-[clamp(5px,0.56vw,8px)] uppercase tracking-[0.12em]">
                <span>Lab batch H—062</span>
                <span>AM / 01</span>
              </div>
              <MicroBarcode className="my-[7%] w-full" />
              <div className="grid grid-cols-3 gap-[4%] font-mono text-[clamp(4px,0.48vw,7px)] uppercase leading-[1.35]">
                <span>pH 5.4</span>
                <span>30 ml</span>
                <span className="text-right">06:20</span>
              </div>
            </div>
          </div>
        </ArtWorldFrame>
      </div>
      <HoralisVesselDetail />
      <HoralisTravelDetail />
      <HoralisAppDetail />
    </div>
  );
}

export function SelvWorld() {
  return (
    <div className="grid min-w-0 grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
      <div className="min-w-0 md:col-span-2">
        <ArtWorldFrame
          label="SELV slash 00 modular repairable fashion identity shown across a configurable garment, repair tag, digital garment passport, and reusable shopper"
          className="bg-[#191917] shadow-[0_26px_90px_rgba(24,24,21,0.35)]"
        >
          <div className="@container absolute inset-0 overflow-hidden text-[#d9ccb7]">
            <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(90deg,transparent_49.7%,rgba(217,204,183,.22)_50%,transparent_50.3%),linear-gradient(transparent_49.7%,rgba(217,204,183,.16)_50%,transparent_50.3%)] [background-size:20%_25%]" />
            <p className="absolute -bottom-[7%] -left-[2%] font-mono text-[clamp(100px,22vw,310px)] font-black leading-none tracking-[-0.16em] text-white/[0.04]">
              00
            </p>
            <div className="absolute left-[5%] top-[5%] z-20">
              <p className="font-mono text-[clamp(28px,6vw,82px)] font-black leading-[0.72] tracking-[-0.12em]">
                SELV<span className="text-[#f0e52e]">/00</span>
              </p>
              <p className="mt-[1.7cqw] font-mono text-[clamp(5px,0.63vw,9px)] uppercase tracking-[0.19em] text-[#d9ccb7]/65">
                Garments designed to return
              </p>
            </div>

            <div className="absolute left-[15%] top-[20%] h-[63%] w-[47%] sm:left-[25%] sm:top-[17%] sm:h-[72%] sm:w-[38%]">
              <svg
                viewBox="0 0 340 480"
                className="size-full overflow-visible drop-shadow-[0_28px_35px_rgba(0,0,0,.42)] motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:-translate-y-2"
              >
                <path
                  d="M107 45 47 78 10 174l58 23 18-39v273h168V158l18 39 58-23-37-96-60-33-28 26h-70l-28-26Z"
                  fill="#d9ccb7"
                  stroke="#f0e52e"
                  strokeWidth="4"
                  strokeLinejoin="round"
                />
                <path
                  d="M135 71 116 154h108l-19-83"
                  fill="#a54d34"
                  stroke="#191917"
                  strokeWidth="3"
                />
                <path
                  d="M170 154v277M86 158l45 54M254 158l-45 54"
                  stroke="#191917"
                  strokeWidth="3"
                  strokeDasharray="8 7"
                />
                <path
                  d="M102 251h49v58h-49zM189 251h49v58h-49z"
                  fill="#191917"
                  stroke="#f0e52e"
                  strokeWidth="3"
                />
                <path d="M68 197 34 184M272 197l34-13" stroke="#f0e52e" strokeWidth="5" />
                <circle cx="170" cy="194" r="7" fill="#f0e52e" />
                <circle cx="170" cy="224" r="7" fill="#f0e52e" />
                <circle cx="170" cy="254" r="7" fill="#f0e52e" />
                <text x="111" y="289" fill="#d9ccb7" fontSize="14" fontWeight="900">
                  00
                </text>
                <text x="198" y="289" fill="#d9ccb7" fontSize="14" fontWeight="900">
                  02
                </text>
              </svg>
              <p className="absolute bottom-[2%] left-1/2 -translate-x-1/2 whitespace-nowrap border border-[#d9ccb7]/30 bg-[#191917] px-[5%] py-[2%] font-mono text-[clamp(5px,0.6vw,8px)] uppercase tracking-[0.14em]">
                Shell 00 / module 02 / repair cycle 01
              </p>
            </div>

            <div className="absolute right-[5%] top-[9%] w-[25%] rotate-3 bg-[#f0e52e] p-[3%] text-[#191917] shadow-[0_18px_38px_rgba(0,0,0,.36)] sm:right-[8%] sm:w-[22%] sm:p-[2%]">
              <span className="mx-auto block size-[clamp(11px,2vw,28px)] rounded-full border-[3px] border-[#191917] bg-[#191917] shadow-[inset_0_0_0_3px_#f0e52e]" />
              <p className="mt-[10%] font-mono text-[clamp(9px,1.7vw,23px)] font-black leading-[0.78] tracking-[-0.08em]">
                REPAIR
                <br /> IS DESIGN
              </p>
              <div className="mt-[12%] grid grid-cols-2 gap-[4%] border-y border-black/40 py-[7%] font-mono text-[clamp(4px,0.5vw,7px)] uppercase leading-[1.35]">
                <span>Seam 04</span>
                <span>Return 01</span>
              </div>
              <MicroBarcode className="mt-[8%] w-full" />
            </div>

            <div className="absolute bottom-[6%] right-[6%] h-[43%] w-[23%] -rotate-2 rounded-[clamp(8px,1.2vw,17px)] border-[clamp(3px,0.42vw,6px)] border-[#d9ccb7] bg-[#252522] p-[2%] shadow-[0_22px_42px_rgba(0,0,0,.4)] sm:right-[9%] sm:h-[48%] sm:w-[20%]">
              <div className="mx-auto h-[2%] w-[28%] rounded-full bg-[#d9ccb7]" />
              <div className="mt-[10%] flex justify-between font-mono text-[clamp(5px,0.55vw,8px)] uppercase text-[#f0e52e]">
                <span>Passport</span>
                <span>00—143</span>
              </div>
              <div className="relative mx-auto mt-[10%] aspect-square w-[58%] border border-[#d9ccb7]/35">
                <div className="absolute inset-[12%] grid grid-cols-4 gap-[5%]">
                  {Array.from({ length: 16 }, (_, index) => (
                    <span
                      key={index}
                      className={index % 3 === 0 ? "bg-[#f0e52e]" : "border border-[#d9ccb7]/55"}
                    />
                  ))}
                </div>
              </div>
              <p className="mt-[10%] font-mono text-[clamp(7px,1.15vw,16px)] font-black leading-[0.9]">
                SHELL 00
                <br /> ACTIVE
              </p>
              <div className="mt-[10%] space-y-[6%] font-mono text-[clamp(4px,0.48vw,7px)] uppercase">
                {["Origin / canvas 72", "Repairs / 01", "Modules / 03"].map((item) => (
                  <p key={item} className="border-b border-[#d9ccb7]/25 pb-[5%]">
                    {item}
                  </p>
                ))}
              </div>
            </div>

            <div className="absolute bottom-[6%] left-[4%] h-[35%] w-[28%] rotate-2 border-[clamp(2px,0.35vw,5px)] border-[#a54d34] bg-[#d9ccb7] text-[#191917] shadow-[0_18px_38px_rgba(0,0,0,.34)] sm:left-[7%] sm:h-[39%] sm:w-[25%]">
              <span className="absolute -top-[22%] left-[17%] h-[29%] w-[66%] rounded-t-[50%] border-[clamp(3px,0.5vw,7px)] border-b-0 border-[#a54d34]" />
              <div className="absolute inset-[9%] flex flex-col justify-between border border-[#191917]/35 p-[8%]">
                <p className="font-mono text-[clamp(12px,2.3vw,32px)] font-black leading-[0.72] tracking-[-0.1em]">
                  USE
                  <br /> AGAIN
                </p>
                <div>
                  <span className="mb-[8%] block h-2 w-[58%] bg-[#f0e52e]" />
                  <p className="font-mono text-[clamp(4px,0.5vw,7px)] uppercase leading-[1.45]">
                    Return / repair
                    <br /> reconfigure / repeat
                  </p>
                </div>
              </div>
            </div>

            <div className="absolute right-[31%] top-[10%] hidden h-[20%] w-[9%] border border-[#d9ccb7]/35 bg-[#a54d34] p-[1.2%] text-[#d9ccb7] shadow-[0_16px_34px_rgba(0,0,0,.3)] sm:block">
              <p className="font-mono text-[clamp(5px,0.6vw,8px)] font-black uppercase leading-[1.2]">
                MOD
                <br /> 02
              </p>
              <span className="absolute bottom-[10%] left-[18%] right-[18%] h-px bg-current" />
            </div>
          </div>
        </ArtWorldFrame>
      </div>
      <SelvLookbookDetail />
      <SelvRepairDetail />
      <SelvPassportDetail />
    </div>
  );
}

function SeventyNineVehicleDetail() {
  return (
    <ArtDetailFrame
      label="79W fleet exterior system showing regional coach side elevation, livery geometry, vehicle numbering, and charging architecture"
      className="bg-[#dfe8e6] text-[#171b1d] md:col-span-2"
      aspectClassName="aspect-[4/3] sm:aspect-[16/7]"
    >
      <div className="@container absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-45 [background-image:linear-gradient(rgba(23,27,29,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(23,27,29,.12)_1px,transparent_1px)] [background-size:6.25%_20%]" />
        <div className="absolute inset-x-[4%] top-[6%] flex items-start justify-between font-mono uppercase">
          <div>
            <p className="text-[clamp(18px,3.8vw,54px)] font-black leading-none tracking-[-0.1em]">
              79<span className="text-[#ff5a24]">W</span> / Fleet skin
            </p>
            <p className="mt-2 text-[clamp(5px,0.62vw,9px)] tracking-[0.18em] text-black/55">
              Long-range electric unit · exterior standard 01
            </p>
          </div>
          <div className="hidden grid-cols-3 gap-1 sm:grid">
            <span className="size-7 bg-[#171b1d]" />
            <span className="size-7 border border-black/20 bg-[#dfe8e6]" />
            <span className="size-7 bg-[#ff5a24]" />
          </div>
        </div>

        <svg
          viewBox="0 0 1200 430"
          className="absolute bottom-[5%] left-[3%] h-[68%] w-[94%] motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:-translate-x-2"
        >
          <path
            d="M91 92h837c92 0 143 32 185 99l31 49v94H46V169c0-42 14-77 45-77Z"
            fill="#f3f7f5"
            stroke="#171b1d"
            strokeWidth="5"
          />
          <path d="M133 119h658v95H117l16-95Z" fill="#263136" />
          <path d="M815 119h111c78 0 115 33 150 95H815v-95Z" fill="#263136" />
          <path d="M50 255h1094v34H50z" fill="#ff5a24" />
          <path d="M203 119v95M364 119v95M525 119v95M686 119v95" stroke="#dfe8e6" strokeWidth="4" />
          <circle cx="259" cy="335" r="63" fill="#171b1d" />
          <circle cx="259" cy="335" r="32" fill="#9aabab" stroke="#dfe8e6" strokeWidth="5" />
          <circle cx="946" cy="335" r="63" fill="#171b1d" />
          <circle cx="946" cy="335" r="32" fill="#9aabab" stroke="#dfe8e6" strokeWidth="5" />
          <text x="80" y="282" fill="#171b1d" fontSize="45" fontWeight="900">
            79W
          </text>
          <text x="788" y="282" fill="#171b1d" fontSize="20" fontWeight="700" letterSpacing="5">
            TORONTO / WEST
          </text>
          <path d="M1094 80v-55M1068 25h52" stroke="#ff5a24" strokeWidth="7" />
          <path d="M1038 25h-45v67" stroke="#171b1d" strokeWidth="4" strokeDasharray="8 8" />
        </svg>

        <div className="absolute bottom-[5%] right-[4%] hidden w-[18%] border-l border-black/25 pl-[2%] font-mono text-[clamp(5px,0.54vw,8px)] uppercase leading-[1.55] sm:block">
          <p>Unit 79—014</p>
          <p>Wheelbase 7.4 m</p>
          <p>Range 420 km</p>
          <p className="mt-[8%] text-[#ff5a24]">Pantograph ready</p>
        </div>
      </div>
    </ArtDetailFrame>
  );
}

function SeventyNineStationDetail() {
  return (
    <ArtDetailFrame
      label="79W station and wayfinding system with platform blade, route map, gate marker, and live departure board"
      className="bg-[#171b1d] text-[#e7efed]"
      aspectClassName="aspect-[4/3]"
    >
      <div className="@container absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(90deg,transparent_49.8%,rgba(231,239,237,.22)_50%,transparent_50.2%)] [background-size:12.5%_100%]" />
        <p className="absolute left-[6%] top-[6%] font-mono text-[clamp(19px,3.8vw,50px)] font-black leading-[0.82] tracking-[-0.09em]">
          WEST
          <br /> EXCHANGE
        </p>
        <span className="absolute right-[6%] top-[7%] flex size-[14%] items-center justify-center rounded-full bg-[#ff5a24] font-mono text-[clamp(10px,2vw,26px)] font-black text-[#171b1d]">
          04
        </span>

        <div className="absolute left-[7%] top-[35%] h-[53%] w-[19%] border border-white/25 bg-[#e7efed] p-[3%] text-[#171b1d] shadow-[0_18px_38px_rgba(0,0,0,.4)]">
          <p className="font-mono text-[clamp(8px,1.7vw,22px)] font-black leading-[0.8]">
            79
            <br /> WEST
          </p>
          <RouteArrow className="mt-[35%] w-full text-[#ff5a24]" />
          <p className="absolute inset-x-[14%] bottom-[9%] border-t border-black/25 pt-[9%] font-mono text-[clamp(4px,0.5vw,7px)] uppercase">
            Bay 04 / Level 01
          </p>
        </div>

        <div className="absolute right-[6%] top-[30%] w-[60%] border border-white/25 bg-[#252c2e] p-[4%] shadow-[0_22px_42px_rgba(0,0,0,.38)]">
          <div className="flex justify-between border-b border-white/25 pb-[4%] font-mono text-[clamp(5px,0.58vw,8px)] uppercase tracking-[0.13em] text-white/55">
            <span>Next departures</span>
            <span>Live / 18:42</span>
          </div>
          {[
            ["79W", "Hamilton", "04 min"],
            ["79N", "Guelph", "12 min"],
            ["79X", "Kitchener", "21 min"],
          ].map(([route, place, time], index) => (
            <div
              key={route}
              className="grid grid-cols-[auto_1fr_auto] items-center gap-[7%] border-b border-white/15 py-[4%] font-mono uppercase"
            >
              <span
                className={`text-[clamp(8px,1.35vw,18px)] font-black ${index === 0 ? "text-[#ff5a24]" : ""}`}
              >
                {route}
              </span>
              <span className="text-[clamp(5px,0.62vw,9px)]">{place}</span>
              <span className="text-[clamp(5px,0.62vw,9px)] text-white/55">{time}</span>
            </div>
          ))}
          <div className="relative mt-[6%] h-8 border-y border-white/20 sm:h-10">
            <span className="absolute left-[3%] top-1/2 h-1 w-[84%] -translate-y-1/2 bg-[#8ea1a0]" />
            {["left-[4%]", "left-[27%]", "left-[51%]", "left-[75%]", "left-[87%]"].map(
              (position, index) => (
                <span
                  key={position}
                  className={`absolute top-1/2 size-3 -translate-y-1/2 rounded-full border-2 border-[#252c2e] ${position} ${index === 2 ? "bg-[#ff5a24]" : "bg-[#e7efed]"}`}
                />
              ),
            )}
          </div>
        </div>
      </div>
    </ArtDetailFrame>
  );
}

function SeventyNineTicketAppDetail() {
  return (
    <ArtDetailFrame
      label="79W rider service system showing route-planning mobile interface, regional pass, tap card, and flexible fare token"
      className="bg-[#ff5a24] text-[#171b1d]"
      aspectClassName="aspect-[4/3]"
    >
      <div className="@container absolute inset-0 overflow-hidden">
        <p className="absolute -right-[3%] -top-[8%] font-mono text-[clamp(90px,17vw,210px)] font-black leading-none tracking-[-0.16em] text-black/[0.08]">
          GO
        </p>
        <div className="absolute left-[6%] top-[7%]">
          <p className="font-mono text-[clamp(18px,3.7vw,48px)] font-black leading-[0.78] tracking-[-0.1em]">
            ONE NETWORK.
            <br /> ANY DISTANCE.
          </p>
          <p className="mt-[2cqw] font-mono text-[clamp(5px,0.58vw,8px)] uppercase tracking-[0.16em]">
            79W rider service / interface set
          </p>
        </div>

        <div className="absolute bottom-[5%] left-[6%] h-[56%] w-[30%] -rotate-2 rounded-[clamp(10px,1.5vw,20px)] border-[clamp(3px,0.45vw,6px)] border-[#171b1d] bg-[#e7efed] p-[3%] shadow-[0_22px_42px_rgba(72,24,8,.28)] motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:-translate-y-2">
          <div className="mx-auto h-[2%] w-[27%] rounded-full bg-[#171b1d]" />
          <div className="mt-[11%] flex justify-between font-mono text-[clamp(5px,0.55vw,8px)] uppercase">
            <span>Plan ride</span>
            <span>18:42</span>
          </div>
          <p className="mt-[9%] font-mono text-[clamp(9px,1.8vw,24px)] font-black leading-[0.85]">
            Toronto
            <br /> → Hamilton
          </p>
          <div className="mt-[11%] grid grid-cols-[auto_1fr_auto] items-center gap-[8%] border-y border-black/20 py-[8%] font-mono text-[clamp(5px,0.58vw,8px)] uppercase">
            <span className="flex size-7 items-center justify-center rounded-full bg-[#171b1d] text-[#e7efed]">
              79
            </span>
            <span>West express</span>
            <span>48m</span>
          </div>
          <div className="absolute inset-x-[9%] bottom-[7%] bg-[#171b1d] py-[5%] text-center font-mono text-[clamp(5px,0.58vw,8px)] font-bold uppercase text-[#e7efed]">
            Activate pass
          </div>
        </div>

        <div className="absolute bottom-[9%] right-[7%] w-[52%] rotate-2 bg-[#171b1d] p-[4%] text-[#e7efed] shadow-[0_20px_40px_rgba(72,24,8,.3)]">
          <div className="flex justify-between font-mono text-[clamp(6px,0.75vw,10px)] font-bold uppercase">
            <span>79W / Regional 24</span>
            <span className="text-[#ff5a24]">Active</span>
          </div>
          <div className="my-[9%] grid grid-cols-[1fr_auto] items-end gap-[8%] border-y border-white/25 py-[8%]">
            <p className="font-mono text-[clamp(15px,3vw,40px)] font-black leading-[0.72] tracking-[-0.09em]">
              RIDE
              <br /> 79
            </p>
            <div className="size-[clamp(34px,6vw,82px)] rounded-full bg-[conic-gradient(#ff5a24_0deg_250deg,#627173_250deg_360deg)] p-[13%]">
              <span className="block size-full rounded-full bg-[#171b1d]" />
            </div>
          </div>
          <div className="grid grid-cols-[1fr_auto] items-end">
            <MicroBarcode className="w-[74%] text-[#e7efed]" />
            <p className="text-right font-mono text-[clamp(5px,0.55vw,8px)] uppercase leading-[1.4] text-white/55">
              Tap / ride
              <br /> transfer
            </p>
          </div>
        </div>
      </div>
    </ArtDetailFrame>
  );
}

function TideholdRoomDetail() {
  return (
    <ArtDetailFrame
      label="Tidehold guest room and amenity system showing adaptive-reuse interiors, linen language, room service objects, and bath vessels"
      className="bg-[#dce2de] text-[#25343b] md:row-span-2"
      aspectClassName="aspect-[4/5] md:h-full md:aspect-auto"
    >
      <div className="@container absolute inset-0 overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-[58%] bg-[linear-gradient(165deg,#8ca0a4_0%,#c7d0cc_41%,#788e93_42%,#435a62_100%)]">
          <div className="absolute inset-[8%] border-[clamp(4px,0.8vw,11px)] border-[#26343b]">
            <span className="absolute left-1/3 top-0 h-full w-[clamp(3px,0.45vw,7px)] bg-[#26343b]" />
            <span className="absolute right-1/3 top-0 h-full w-[clamp(3px,0.45vw,7px)] bg-[#26343b]" />
            <span className="absolute left-0 right-0 top-1/2 h-[clamp(3px,0.45vw,7px)] bg-[#26343b]" />
            <div className="absolute inset-x-0 bottom-0 h-[31%] bg-[#344b53] [clip-path:polygon(0_58%,18%_32%,38%_64%,61%_25%,83%_58%,100%_39%,100%_100%,0_100%)]" />
          </div>
        </div>

        <div className="absolute left-[7%] top-[6%] z-20">
          <p className="font-serif text-[clamp(24px,5.4vw,72px)] italic leading-[0.78] tracking-[-0.07em]">
            Room
            <br /> with a tide.
          </p>
          <p className="mt-[2cqw] font-mono text-[clamp(5px,0.6vw,8px)] uppercase tracking-[0.17em] text-[#f2d9c8]">
            East quay / room 407
          </p>
        </div>

        <div className="absolute inset-x-0 bottom-0 h-[56%] bg-[#c9b9a7]">
          <div className="absolute bottom-[8%] left-[5%] h-[58%] w-[69%] bg-[#f0eee8] shadow-[0_25px_45px_rgba(49,58,59,.22)]">
            <div className="absolute inset-x-[6%] top-[9%] h-[20%] bg-[#dce2de] shadow-[inset_0_-1px_0_rgba(37,52,59,.18)]" />
            <div className="absolute inset-x-[6%] bottom-[7%] top-[34%] bg-[linear-gradient(135deg,#e8e2d9,#c6d0cc)]">
              <span className="absolute left-[12%] top-[17%] h-[1px] w-[76%] rotate-[18deg] bg-[#25343b]/20" />
              <span className="absolute bottom-[22%] left-[9%] h-[1px] w-[81%] -rotate-12 bg-[#25343b]/20" />
            </div>
            <p className="absolute bottom-[11%] right-[9%] font-serif text-[clamp(10px,2vw,27px)] italic text-[#b86943]">
              T/H 407
            </p>
          </div>
          <div className="absolute bottom-[8%] right-[6%] h-[36%] w-[18%] border-t-[clamp(5px,0.8vw,11px)] border-[#b86943] bg-[#26343b] shadow-[0_18px_34px_rgba(49,58,59,.3)]">
            <span className="absolute -top-[42%] left-1/2 h-[43%] w-[10%] -translate-x-1/2 bg-[#26343b]" />
            <span className="absolute -top-[47%] left-1/2 h-[7%] w-[62%] -translate-x-1/2 bg-[#d69336]" />
          </div>
        </div>

        <div className="absolute bottom-[4%] left-[9%] flex h-[17%] w-[42%] items-end gap-[5%] border border-[#25343b]/25 bg-[#dce2de] px-[5%] pb-[3%] shadow-[0_16px_30px_rgba(49,58,59,.18)]">
          <div className="relative h-[60%] w-[20%] rounded-t-full bg-[#b86943]">
            <span className="absolute -top-[13%] left-[29%] h-[15%] w-[42%] bg-[#25343b]" />
          </div>
          <div className="relative h-[78%] w-[20%] bg-[#d69336]">
            <span className="absolute -top-[10%] left-[20%] h-[11%] w-[60%] rounded-t-sm bg-[#f0eee8]" />
          </div>
          <div className="h-[45%] w-[25%] rounded-t-[45%] bg-[#26343b]" />
          <p className="ml-auto self-center font-mono text-[clamp(4px,0.5vw,7px)] uppercase leading-[1.45]">
            Cedar
            <br /> Brine
            <br /> Rain
          </p>
        </div>
      </div>
    </ArtDetailFrame>
  );
}

function TideholdSignDetail() {
  return (
    <ArtDetailFrame
      label="Tidehold waterside navigation system showing quay marker, tidal-level sign, room direction blade, and illuminated arrival beacon"
      className="bg-[#26343b] text-[#e4e8e4]"
      aspectClassName="aspect-[4/3]"
    >
      <div className="@container absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(180deg,#60757a_0%,#344a51_45%,#17262c_46%,#26343b_100%)]" />
        <div className="absolute inset-x-0 top-[44%] h-[12%] opacity-45 [background-image:repeating-linear-gradient(173deg,transparent_0_13px,rgba(220,226,220,.5)_14px_15px,transparent_16px_27px)]" />
        <p className="absolute left-[6%] top-[6%] font-serif text-[clamp(19px,3.8vw,50px)] italic leading-[0.84] tracking-[-0.06em]">
          Find your way
          <br /> by the water.
        </p>
        <p className="absolute right-[6%] top-[8%] text-right font-mono text-[clamp(5px,0.58vw,8px)] uppercase leading-[1.5] tracking-[0.15em] text-[#d69336]">
          Quay navigation
          <br /> family / 01—04
        </p>

        <div className="absolute bottom-[7%] left-[8%] h-[53%] w-[16%] bg-[#18272d] shadow-[0_20px_38px_rgba(5,15,19,.42)]">
          <p className="absolute left-1/2 top-[9%] -translate-x-1/2 font-mono text-[clamp(9px,1.7vw,23px)] font-black text-[#d69336] [writing-mode:vertical-rl]">
            TIDEHOLD
          </p>
          <span className="absolute bottom-[8%] left-1/2 size-[16%] -translate-x-1/2 rounded-full bg-[#b86943]" />
        </div>

        <div className="absolute bottom-[10%] left-[32%] h-[42%] w-[34%] border border-white/30 bg-[#dce2dc] p-[4%] text-[#26343b] shadow-[0_20px_38px_rgba(5,15,19,.35)]">
          <div className="flex justify-between font-mono text-[clamp(5px,0.58vw,8px)] uppercase">
            <span>East quay</span>
            <span>04</span>
          </div>
          <p className="mt-[12%] font-serif text-[clamp(15px,2.7vw,37px)] italic leading-[0.82]">
            Rooms
            <br /> 401—418
          </p>
          <RouteArrow className="absolute bottom-[8%] right-[8%] w-[42%] text-[#b86943]" />
        </div>

        <div className="absolute bottom-[7%] right-[7%] h-[59%] w-[18%] border-[clamp(2px,0.35vw,5px)] border-[#d69336] bg-[#b86943] text-[#26343b] shadow-[0_22px_42px_rgba(5,15,19,.4)]">
          <div className="absolute inset-x-[18%] top-[9%] border-b border-current pb-[12%] text-center font-mono text-[clamp(6px,0.72vw,10px)] font-black uppercase">
            Tide
            <br /> 1.82 m
          </div>
          <div className="absolute inset-x-[18%] bottom-[9%] top-[39%] flex flex-col justify-between border-x border-current/35">
            {["06", "04", "02", "00"].map((level) => (
              <span
                key={level}
                className="flex items-center gap-[8%] font-mono text-[clamp(4px,0.46vw,7px)]"
              >
                <i className="h-px w-[45%] bg-current" /> {level}
              </span>
            ))}
          </div>
        </div>
      </div>
    </ArtDetailFrame>
  );
}

function TideholdSeasonDetail() {
  return (
    <ArtDetailFrame
      label="Tidehold seasonal cultural programme system with tide calendar, supper ticket, dock workshop card, and winter listening poster"
      className="bg-[#d69336] text-[#26343b]"
      aspectClassName="aspect-[4/3]"
    >
      <div className="@container absolute inset-0 overflow-hidden">
        <div className="absolute -right-[16%] -top-[24%] size-[72%] rounded-full border-[clamp(18px,4vw,54px)] border-[#b86943]/50" />
        <div className="absolute left-[6%] top-[6%]">
          <p className="font-mono text-[clamp(6px,0.68vw,9px)] uppercase tracking-[0.18em]">
            Seasonal programme / low tide edition
          </p>
          <p className="mt-[2cqw] font-serif text-[clamp(22px,4.3vw,58px)] italic leading-[0.8] tracking-[-0.07em]">
            The quay
            <br /> stays awake.
          </p>
        </div>

        <div className="absolute bottom-[8%] left-[6%] w-[41%] -rotate-2 bg-[#26343b] p-[4%] text-[#e4e8e4] shadow-[0_20px_38px_rgba(70,42,20,.28)]">
          <div className="flex justify-between font-mono text-[clamp(5px,0.58vw,8px)] uppercase text-[#d69336]">
            <span>Winter signal</span>
            <span>19:40</span>
          </div>
          <div className="relative my-[10%] aspect-square w-full overflow-hidden border border-white/25">
            {Array.from({ length: 7 }, (_, index) => (
              <span
                key={index}
                className={`absolute left-1/2 top-1/2 rounded-full border border-[#dce2dc]/55 ${
                  [
                    "size-[18%]",
                    "size-[30%]",
                    "size-[42%]",
                    "size-[54%]",
                    "size-[66%]",
                    "size-[78%]",
                    "size-[90%]",
                  ][index]
                } -translate-x-1/2 -translate-y-1/2`}
              />
            ))}
            <span className="absolute left-1/2 top-1/2 size-[8%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#b86943]" />
          </div>
          <p className="font-serif text-[clamp(10px,1.8vw,25px)] italic">
            Field recordings from the frozen harbour.
          </p>
        </div>

        <div className="absolute right-[7%] top-[35%] w-[41%] rotate-2 bg-[#e4e8e4] p-[4%] shadow-[0_20px_38px_rgba(70,42,20,.25)]">
          <div className="grid grid-cols-[auto_1fr] gap-[8%]">
            <p className="font-mono text-[clamp(18px,3.6vw,48px)] font-black leading-[0.72]">
              04
              <br /> 12
            </p>
            <div className="border-l border-[#26343b]/35 pl-[8%] font-mono text-[clamp(5px,0.62vw,9px)] uppercase leading-[1.5]">
              Dock supper
              <br /> Shared table / 24
              <br /> Copper room
            </div>
          </div>
          <MicroBarcode className="mt-[11%] w-full" />
        </div>

        <div className="absolute bottom-[6%] right-[12%] w-[32%] -rotate-3 border border-[#26343b] bg-[#b86943] px-[4%] py-[3%] shadow-[0_14px_30px_rgba(70,42,20,.24)]">
          <div className="flex justify-between font-mono text-[clamp(5px,0.55vw,8px)] font-bold uppercase">
            <span>T/H workshop</span>
            <span>Admit 01</span>
          </div>
          <p className="mt-[9%] font-serif text-[clamp(10px,1.8vw,24px)] italic leading-[0.9]">
            Repairing wood
            <br /> after water.
          </p>
        </div>
      </div>
    </ArtDetailFrame>
  );
}

function OffsortPackagingDetail() {
  return (
    <ArtDetailFrame
      label="Offsort product packaging family showing soup pouch, pickled roots jar, dried fruit carton, broth tin, and rescued-produce labels"
      className="bg-[#f3ead9] text-[#41233c] md:col-span-2"
      aspectClassName="aspect-[4/3] sm:aspect-[16/9]"
    >
      <div className="@container absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle,#41233c_0_1px,transparent_1.2px)] [background-size:14px_14px]" />
        <p className="absolute -right-[2%] top-[2%] font-mono text-[clamp(68px,13vw,180px)] font-black leading-none tracking-[-0.14em] text-[#41233c]/[0.06]">
          ODD
        </p>
        <div className="absolute left-[5%] top-[6%] z-20 flex items-end gap-[3cqw]">
          <p className="font-mono text-[clamp(18px,3.8vw,54px)] font-black leading-[0.75] tracking-[-0.1em]">
            OFFSORT
            <br /> PANTRY
          </p>
          <p className="border-l border-[#41233c]/30 pl-[3cqw] font-mono text-[clamp(5px,0.6vw,8px)] uppercase leading-[1.5] tracking-[0.14em]">
            Five forms
            <br /> zero aesthetic grades
          </p>
        </div>

        <div className="absolute inset-x-[5%] bottom-[7%] flex h-[66%] items-end justify-center gap-[2.5%]">
          <div className="relative h-[76%] w-[19%] -rotate-2 overflow-hidden rounded-t-[42%_13%] bg-[#41233c] p-[3%] text-[#f3ead9] shadow-[0_24px_44px_rgba(65,35,60,.28)] motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:-translate-y-2">
            <p className="font-mono text-[clamp(6px,1.2vw,17px)] font-black leading-[0.82]">
              BENT
              <br /> TOMATO
            </p>
            <span className="absolute bottom-[18%] left-[18%] size-[58%] rounded-[52%_48%_62%_38%/45%_61%_39%_55%] bg-[#ef5638]" />
            <p className="absolute bottom-[6%] left-[12%] font-mono text-[clamp(4px,0.46vw,7px)] uppercase">
              Soup / 420 g
            </p>
          </div>

          <div className="relative h-[58%] w-[16%] bg-[#83a747] text-[#41233c] shadow-[0_20px_40px_rgba(65,35,60,.23)]">
            <div className="absolute inset-x-[8%] top-[-9%] h-[10%] rounded-t-full bg-[#41233c]" />
            <p className="absolute left-[10%] top-[10%] font-mono text-[clamp(5px,0.85vw,12px)] font-black leading-[0.82]">
              ROOT
              <br /> PICKLE
            </p>
            <div className="absolute inset-x-[13%] bottom-[12%] h-[55%] border border-[#41233c]/35 bg-[#f3ead9]/45">
              {["left-[12%] rotate-12", "left-[42%] -rotate-6", "right-[10%] rotate-[24deg]"].map(
                (position) => (
                  <span
                    key={position}
                    className={`absolute bottom-[12%] h-[72%] w-[18%] rounded-full bg-[#ef5638] ${position}`}
                  />
                ),
              )}
            </div>
          </div>

          <div className="relative h-[66%] w-[18%] rotate-1 bg-[#ef5638] p-[3%] text-[#f3ead9] shadow-[0_22px_42px_rgba(65,35,60,.24)]">
            <p className="font-mono text-[clamp(6px,1vw,14px)] font-black leading-[0.82]">
              OFF
              <br /> CUTS
            </p>
            <div className="absolute inset-x-[10%] top-[31%] grid grid-cols-2 gap-[7%]">
              {Array.from({ length: 6 }, (_, index) => (
                <span
                  key={index}
                  className={`aspect-square rounded-[45%_55%_38%_62%] ${index % 2 ? "bg-[#83a747]" : "bg-[#f3ead9]"}`}
                />
              ))}
            </div>
            <p className="absolute bottom-[6%] left-[10%] font-mono text-[clamp(4px,0.46vw,7px)] uppercase">
              Dried fruit / 80 g
            </p>
          </div>

          <div className="relative h-[48%] w-[16%] rounded-[50%_50%_5%_5%] border-2 border-[#41233c] bg-[#f3ead9] shadow-[0_18px_36px_rgba(65,35,60,.2)]">
            <div className="absolute inset-x-[8%] top-[8%] h-[2px] bg-[#41233c]" />
            <div className="absolute inset-x-[11%] top-[25%] rounded-full bg-[#41233c] py-[13%] text-center font-mono text-[clamp(5px,0.85vw,12px)] font-black leading-[0.9] text-[#f3ead9]">
              STOCK
              <br /> 03
            </div>
            <p className="absolute inset-x-0 bottom-[8%] text-center font-mono text-[clamp(4px,0.42vw,6px)] uppercase">
              Rescued broth
            </p>
          </div>

          <div className="relative h-[71%] w-[18%] -rotate-1 bg-[#83a747] p-[3%] text-[#41233c] shadow-[0_22px_42px_rgba(65,35,60,.24)]">
            <div className="absolute left-[10%] top-[10%] size-[61%] rounded-[39%_61%_49%_51%/61%_37%_63%_39%] bg-[#f3ead9]" />
            <p className="absolute bottom-[16%] left-[10%] font-mono text-[clamp(6px,1vw,14px)] font-black leading-[0.84]">
              WONKY
              <br /> PEAR
            </p>
            <p className="absolute bottom-[6%] left-[10%] font-mono text-[clamp(4px,0.42vw,6px)] uppercase">
              Spread / 210 g
            </p>
          </div>
        </div>
      </div>
    </ArtDetailFrame>
  );
}

function OffsortCrateDetail() {
  return (
    <ArtDetailFrame
      label="Offsort return-loop market crate with deposit token, collection stamp, produce dividers, and scan-to-return identifier"
      className="bg-[#83a747] text-[#41233c]"
      aspectClassName="aspect-[4/3] md:aspect-square"
    >
      <div className="@container absolute inset-0 overflow-hidden">
        <p className="absolute left-[7%] top-[7%] font-mono text-[clamp(17px,3.6vw,48px)] font-black leading-[0.78] tracking-[-0.1em]">
          TAKE.
          <br /> RETURN.
          <br /> REPEAT.
        </p>
        <p className="absolute right-[7%] top-[8%] text-right font-mono text-[clamp(5px,0.57vw,8px)] uppercase leading-[1.45] tracking-[0.13em]">
          Loop crate
          <br /> deposit 04
        </p>

        <div className="absolute bottom-[8%] left-[7%] h-[55%] w-[86%] [perspective:800px]">
          <div className="absolute inset-x-[3%] bottom-0 h-[79%] border-[clamp(7px,1.3vw,18px)] border-[#41233c] bg-[#ef5638] shadow-[0_26px_48px_rgba(65,35,60,.3)] [transform:rotateX(9deg)_rotateY(-5deg)]">
            <div className="absolute inset-[5%] grid grid-cols-6 gap-[2%]">
              {Array.from({ length: 18 }, (_, index) => (
                <span key={index} className="border border-[#41233c]/45 bg-[#f3ead9]/15" />
              ))}
            </div>
            <div className="absolute inset-x-[4%] top-[7%] flex items-center justify-between font-mono text-[clamp(7px,1.2vw,16px)] font-black uppercase text-[#f3ead9]">
              <span>OFFSORT</span>
              <span>CRATE 041</span>
            </div>
            <div className="absolute inset-x-[6%] bottom-[7%] flex justify-between">
              {["bg-[#83a747]", "bg-[#f3ead9]", "bg-[#83a747]", "bg-[#f3ead9]"].map(
                (tone, index) => (
                  <span
                    key={index}
                    className={`${tone} size-[16%] rounded-[42%_58%_47%_53%] border border-[#41233c]/30`}
                  />
                ),
              )}
            </div>
          </div>
        </div>

        <div className="absolute bottom-[5%] right-[5%] flex size-[22%] rotate-6 items-center justify-center rounded-full border-[clamp(3px,0.55vw,8px)] border-[#f3ead9] bg-[#41233c] font-mono text-[clamp(7px,1.3vw,18px)] font-black text-[#f3ead9] shadow-[0_15px_28px_rgba(65,35,60,.3)]">
          +04
        </div>
      </div>
    </ArtDetailFrame>
  );
}

function OffsortRecipeDetail() {
  return (
    <ArtDetailFrame
      label="Offsort recipe platform showing live surplus inventory, ingredient rescue cards, adaptive meal suggestions, and saved-waste counter"
      className="bg-[#41233c] text-[#f3ead9] md:col-span-3"
      aspectClassName="aspect-[4/3] sm:aspect-[16/7]"
    >
      <div className="@container absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-15 [background-image:linear-gradient(rgba(243,234,217,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(243,234,217,.2)_1px,transparent_1px)] [background-size:8.33%_25%]" />
        <div className="absolute left-[4%] top-[7%]">
          <p className="font-mono text-[clamp(18px,3.8vw,52px)] font-black leading-[0.78] tracking-[-0.1em]">
            COOK WHAT
            <br /> NEEDS SAVING.
          </p>
          <p className="mt-[2cqw] font-mono text-[clamp(5px,0.6vw,8px)] uppercase tracking-[0.16em] text-[#83a747]">
            Recipe engine / live market surplus
          </p>
        </div>

        <div className="absolute bottom-[7%] left-[4%] h-[48%] w-[22%] rotate-2 rounded-[clamp(9px,1.3vw,18px)] border-[clamp(3px,0.45vw,6px)] border-[#f3ead9] bg-[#f3ead9] p-[2%] text-[#41233c] shadow-[0_20px_40px_rgba(0,0,0,.3)]">
          <div className="mx-auto h-[2%] w-[25%] rounded-full bg-[#41233c]" />
          <p className="mt-[10%] font-mono text-[clamp(6px,1vw,14px)] font-black uppercase">
            Tonight / near you
          </p>
          <div className="mt-[8%] grid grid-cols-2 gap-[5%]">
            {[
              ["bg-[#ef5638]", "14 tomatoes"],
              ["bg-[#83a747]", "9 pears"],
              ["bg-[#41233c]", "6 roots"],
              ["bg-[#ef5638]", "4 squash"],
            ].map(([tone, item]) => (
              <div key={item} className="border border-[#41233c]/20 p-[8%]">
                <span className={`${tone} block aspect-square rounded-[45%_55%_37%_63%]`} />
                <p className="mt-[8%] font-mono text-[clamp(4px,0.45vw,7px)] uppercase">{item}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-[7%] left-[30%] h-[61%] w-[41%] -rotate-1 bg-[#ef5638] p-[4%] text-[#41233c] shadow-[0_24px_46px_rgba(0,0,0,.28)] motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:-translate-y-2">
          <div className="flex justify-between font-mono text-[clamp(5px,0.58vw,8px)] uppercase">
            <span>Recipe 037</span>
            <span>28 min / serves 4</span>
          </div>
          <p className="mt-[8%] max-w-[10ch] font-serif text-[clamp(17px,3.3vw,44px)] font-bold italic leading-[0.82] tracking-[-0.05em]">
            Bent tomato, charred pear.
          </p>
          <div className="absolute inset-x-[8%] bottom-[9%] grid grid-cols-3 gap-[5%] border-t border-[#41233c]/35 pt-[5%] font-mono text-[clamp(4px,0.5vw,7px)] uppercase leading-[1.35]">
            <span>01 / blister</span>
            <span>02 / crush</span>
            <span>03 / share</span>
          </div>
        </div>

        <div className="absolute bottom-[7%] right-[4%] h-[70%] w-[21%] border border-[#f3ead9]/30 bg-[#83a747] p-[3%] text-[#41233c] shadow-[0_22px_42px_rgba(0,0,0,.3)]">
          <div className="flex justify-between font-mono text-[clamp(5px,0.55vw,8px)] font-bold uppercase">
            <span>This month</span>
            <span>↑ 18%</span>
          </div>
          <p className="mt-[13%] font-mono text-[clamp(20px,4.1vw,56px)] font-black leading-[0.72] tracking-[-0.1em]">
            12.4
            <br /> KG
          </p>
          <p className="mt-[6%] font-mono text-[clamp(5px,0.56vw,8px)] uppercase leading-[1.45]">
            Produce redirected to plates
          </p>
          <div className="absolute inset-x-[13%] bottom-[10%] flex h-[31%] items-end gap-[6%] border-b border-[#41233c]">
            {["h-[35%]", "h-[51%]", "h-[43%]", "h-[72%]", "h-[61%]", "h-[88%]", "h-full"].map(
              (height, index) => (
                <span key={index} className={`${height} w-full bg-[#41233c]`} />
              ),
            )}
          </div>
        </div>
      </div>
    </ArtDetailFrame>
  );
}

function HoralisVesselDetail() {
  return (
    <ArtDetailFrame
      label="Horalis circadian vessel family showing dawn serum, daylight veil, twilight concentrate, night cream, and time-coded closures"
      className="bg-[#ece5d9] text-[#263d67] md:row-span-2"
      aspectClassName="aspect-[4/5] md:h-full md:aspect-auto"
    >
      <div className="@container absolute inset-0 overflow-hidden">
        <div className="absolute left-1/2 top-[18%] size-[88%] -translate-x-1/2 rounded-full border border-[#263d67]/15" />
        <div className="absolute left-1/2 top-[29%] size-[64%] -translate-x-1/2 rounded-full border border-[#e77b6b]/45" />
        <div className="absolute left-[7%] top-[6%] z-20">
          <p className="font-serif text-[clamp(23px,5.2vw,70px)] leading-[0.78] tracking-[-0.07em]">
            Four hours.
            <br /> Four responses.
          </p>
          <p className="mt-[2cqw] font-mono text-[clamp(5px,0.58vw,8px)] uppercase tracking-[0.18em] text-[#e77b6b]">
            Vessel architecture / H—01 to H—04
          </p>
        </div>

        <div className="absolute inset-x-[7%] bottom-[8%] flex h-[63%] items-end justify-center gap-[4%]">
          <div className="relative h-[70%] w-[19%] rounded-t-[48%] bg-[linear-gradient(100deg,#8d9498_0%,#f8f7f2_28%,#9ca2a5_52%,#f3f2ee_73%,#858c90_100%)] shadow-[0_24px_44px_rgba(45,54,68,.24)]">
            <span className="absolute left-[20%] top-[-12%] h-[14%] w-[60%] bg-[#e77b6b]" />
            <span className="absolute left-[34%] top-[-21%] h-[10%] w-[32%] bg-[#d7d9d6]" />
            <p className="absolute inset-x-0 bottom-[13%] -rotate-90 text-center font-mono text-[clamp(5px,0.58vw,8px)] font-bold uppercase tracking-[0.15em]">
              Dawn / 06:20
            </p>
          </div>
          <div className="relative h-[84%] w-[22%] bg-[#f4eee4] shadow-[0_28px_48px_rgba(45,54,68,.25)] motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:-translate-y-2">
            <div className="absolute inset-x-0 top-0 h-[16%] bg-[linear-gradient(90deg,#858c90,#f8f7f2,#8d9498)]" />
            <p className="absolute left-[14%] top-[27%] font-serif text-[clamp(10px,1.8vw,25px)] leading-[0.82]">
              DAY
              <br /> VEIL
            </p>
            <span className="absolute bottom-[14%] left-[14%] h-[2px] w-[52%] bg-[#e77b6b]" />
          </div>
          <div className="relative h-[62%] w-[21%] bg-[#e77b6b] shadow-[0_22px_42px_rgba(45,54,68,.22)]">
            <div className="absolute inset-x-0 top-[-12%] h-[14%] rounded-t-[50%] bg-[linear-gradient(90deg,#858c90,#f8f7f2,#8d9498)]" />
            <p className="absolute inset-x-0 top-[35%] text-center font-mono text-[clamp(5px,0.63vw,9px)] font-bold uppercase leading-[1.4]">
              Dusk
              <br /> 18:40
            </p>
          </div>
          <div className="relative h-[75%] w-[23%] rounded-t-[12%] bg-[#263d67] text-[#ece5d9] shadow-[0_26px_46px_rgba(45,54,68,.32)]">
            <div className="absolute inset-x-[8%] top-[-8%] h-[10%] bg-[#a8afb2]" />
            <p className="absolute left-[15%] top-[22%] font-serif text-[clamp(10px,1.8vw,25px)] leading-[0.82]">
              NIGHT
              <br /> 22:10
            </p>
            <div className="absolute inset-x-[15%] bottom-[13%] border-t border-white/25 pt-[10%] font-mono text-[clamp(4px,0.47vw,7px)] uppercase leading-[1.4]">
              Renew
              <br /> barrier / 50 ml
            </div>
          </div>
        </div>

        <div className="absolute bottom-[3%] left-[8%] right-[8%] grid grid-cols-4 border-t border-[#263d67]/25 pt-[3%] font-mono text-[clamp(4px,0.48vw,7px)] uppercase tracking-[0.1em]">
          <span>06 / wake</span>
          <span>12 / defend</span>
          <span>18 / reset</span>
          <span className="text-right">22 / renew</span>
        </div>
      </div>
    </ArtDetailFrame>
  );
}

function HoralisTravelDetail() {
  return (
    <ArtDetailFrame
      label="Horalis travel ritual kit showing four time-coded miniatures, fold-out rhythm card, protective case, and timezone reset dial"
      className="bg-[#263d67] text-[#ece5d9]"
      aspectClassName="aspect-[4/3] sm:aspect-[16/10]"
    >
      <div className="@container absolute inset-0 overflow-hidden">
        <div className="absolute -right-[8%] -top-[18%] size-[65%] rounded-full border-[clamp(15px,3.5vw,48px)] border-[#e77b6b]/35" />
        <div className="absolute left-[6%] top-[7%]">
          <p className="font-serif text-[clamp(19px,4vw,54px)] leading-[0.82] tracking-[-0.06em]">
            Rhythm,
            <br /> carried.
          </p>
          <p className="mt-[2cqw] font-mono text-[clamp(5px,0.57vw,8px)] uppercase tracking-[0.17em] text-[#e77b6b]">
            Flight kit / local time reset
          </p>
        </div>

        <div className="absolute bottom-[8%] left-[7%] h-[51%] w-[57%] -rotate-2 rounded-[clamp(8px,1.2vw,16px)] border border-white/25 bg-[#ece5d9] p-[4%] text-[#263d67] shadow-[0_22px_42px_rgba(9,20,38,.38)]">
          <div className="flex justify-between font-mono text-[clamp(5px,0.55vw,8px)] uppercase">
            <span>HORALIS / AIR 04</span>
            <span>UTC −05</span>
          </div>
          <div className="absolute inset-x-[8%] bottom-[11%] flex h-[56%] items-end justify-between">
            {[
              ["h-[68%]", "bg-[#e77b6b]", "06"],
              ["h-[82%]", "bg-[#d3d5d2]", "12"],
              ["h-[57%]", "bg-[#b8bec0]", "18"],
              ["h-full", "bg-[#263d67] text-[#ece5d9]", "22"],
            ].map(([height, tone, time]) => (
              <div
                key={time}
                className={`relative w-[19%] ${height} ${tone} shadow-[0_12px_22px_rgba(38,61,103,.18)]`}
              >
                <span className="absolute inset-x-0 bottom-[9%] text-center font-mono text-[clamp(5px,0.58vw,8px)] font-black">
                  {time}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="absolute bottom-[8%] right-[6%] size-[29%] rotate-3 rounded-full bg-[conic-gradient(#e77b6b_0deg_88deg,#ece5d9_88deg_177deg,#a8afb2_177deg_266deg,#1b2e52_266deg_360deg)] p-[7%] shadow-[0_18px_36px_rgba(9,20,38,.4)] motion-safe:transition-transform motion-safe:duration-[1200ms] motion-safe:group-hover:rotate-[30deg]">
          <div className="flex size-full items-center justify-center rounded-full bg-[#263d67] text-center font-mono text-[clamp(5px,0.58vw,8px)] uppercase leading-[1.4]">
            Reset
            <br /> local
            <br /> rhythm
          </div>
        </div>
      </div>
    </ArtDetailFrame>
  );
}

function HoralisAppDetail() {
  return (
    <ArtDetailFrame
      label="Horalis time-zone mobile regimen showing circadian dial, local-light forecast, product sequence, and gentle schedule shift"
      className="bg-[#e77b6b] text-[#263d67]"
      aspectClassName="aspect-[4/3] sm:aspect-[16/10]"
    >
      <div className="@container absolute inset-0 overflow-hidden">
        <p className="absolute left-[6%] top-[7%] font-serif text-[clamp(19px,4vw,54px)] leading-[0.8] tracking-[-0.06em]">
          Your skin
          <br /> knows the hour.
        </p>
        <p className="absolute right-[6%] top-[8%] text-right font-mono text-[clamp(5px,0.57vw,8px)] uppercase leading-[1.45] tracking-[0.13em]">
          Circadian UI
          <br /> Sequence 04
        </p>

        <div className="absolute bottom-[-5%] left-[7%] h-[74%] w-[31%] -rotate-2 rounded-[clamp(11px,1.6vw,22px)] border-[clamp(4px,0.55vw,8px)] border-[#263d67] bg-[#ece5d9] p-[3%] shadow-[0_24px_45px_rgba(73,43,47,.28)] motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:-translate-y-2">
          <div className="mx-auto h-[2%] w-[27%] rounded-full bg-[#263d67]" />
          <div className="mt-[10%] flex justify-between font-mono text-[clamp(5px,0.54vw,8px)] uppercase">
            <span>Toronto</span>
            <span>06:38</span>
          </div>
          <div className="relative mx-auto mt-[9%] aspect-square w-[72%] rounded-full bg-[conic-gradient(#e77b6b_0deg_105deg,#c5c9ca_105deg_202deg,#263d67_202deg_360deg)] p-[10%]">
            <div className="flex size-full items-center justify-center rounded-full bg-[#ece5d9] text-center font-serif text-[clamp(9px,1.6vw,22px)] leading-[0.9]">
              Dawn
              <br /> window
            </div>
          </div>
          <p className="mt-[8%] font-mono text-[clamp(5px,0.56vw,8px)] uppercase leading-[1.45]">
            Light rise / 07:01
            <br /> UV peak / 12:48
          </p>
        </div>

        <div className="absolute bottom-[8%] right-[7%] w-[51%] bg-[#263d67] p-[4%] text-[#ece5d9] shadow-[0_22px_42px_rgba(73,43,47,.28)]">
          <div className="flex justify-between border-b border-white/25 pb-[4%] font-mono text-[clamp(5px,0.56vw,8px)] uppercase text-[#e77b6b]">
            <span>Now / morning</span>
            <span>3 steps</span>
          </div>
          {[
            ["01", "Dawn cleanse", "30 sec"],
            ["02", "Light serum", "2 drops"],
            ["03", "Day veil", "2 min"],
          ].map(([number, step, measure], index) => (
            <div
              key={number}
              className="grid grid-cols-[auto_1fr_auto] items-center gap-[7%] border-b border-white/15 py-[5%] font-mono uppercase"
            >
              <span
                className={`flex size-[clamp(18px,3vw,40px)] items-center justify-center rounded-full text-[clamp(5px,0.58vw,8px)] ${index === 0 ? "bg-[#e77b6b] text-[#263d67]" : "border border-white/30"}`}
              >
                {number}
              </span>
              <span className="text-[clamp(5px,0.62vw,9px)]">{step}</span>
              <span className="text-[clamp(4px,0.5vw,7px)] text-white/50">{measure}</span>
            </div>
          ))}
          <div className="mt-[7%] flex items-center gap-[5%] font-mono text-[clamp(4px,0.5vw,7px)] uppercase text-white/55">
            <span className="h-1 flex-1 bg-[linear-gradient(90deg,#e77b6b_66%,rgba(255,255,255,.2)_66%)]" />
            <span>Shift +18m</span>
          </div>
        </div>
      </div>
    </ArtDetailFrame>
  );
}

function SelvLookbookDetail() {
  return (
    <ArtDetailFrame
      label="SELV slash 00 modular lookbook showing one shell garment configured as field jacket, cropped vest, and utility layer"
      className="bg-[#d9ccb7] text-[#191917] md:row-span-2"
      aspectClassName="aspect-[4/5] md:h-full md:aspect-auto"
    >
      <div className="@container absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(90deg,transparent_49.8%,rgba(25,25,23,.24)_50%,transparent_50.2%)] [background-size:20%_100%]" />
        <p className="absolute -left-[3%] top-[4%] font-mono text-[clamp(66px,14vw,190px)] font-black leading-none tracking-[-0.16em] text-[#191917]/[0.07]">
          00
        </p>
        <div className="absolute left-[7%] top-[6%] z-20">
          <p className="font-mono text-[clamp(22px,4.8vw,64px)] font-black leading-[0.76] tracking-[-0.11em]">
            ONE SHELL.
            <br /> THREE LIVES.
          </p>
          <p className="mt-[2cqw] font-mono text-[clamp(5px,0.58vw,8px)] uppercase tracking-[0.18em] text-[#a54d34]">
            Look 00—02 / configuration study
          </p>
        </div>

        <div className="absolute inset-x-[5%] bottom-[7%] grid h-[70%] grid-cols-3 gap-[3%]">
          {[
            { code: "00", fill: "fill-[#191917]", accent: "bg-[#f0e52e]", crop: "h-[72%]" },
            { code: "01", fill: "fill-[#a54d34]", accent: "bg-[#191917]", crop: "h-[57%]" },
            { code: "02", fill: "fill-[#f0e52e]", accent: "bg-[#a54d34]", crop: "h-[83%]" },
          ].map(({ code, fill, accent, crop }, index) => (
            <div
              key={code}
              className={`relative overflow-hidden ${index === 1 ? "translate-y-[11%]" : ""}`}
            >
              <div className="absolute inset-0 border border-[#191917]/25 bg-[#c9bba5]" />
              <div className={`absolute bottom-[14%] left-1/2 w-[72%] -translate-x-1/2 ${crop}`}>
                <svg
                  viewBox="0 0 220 330"
                  className="size-full drop-shadow-[0_18px_24px_rgba(25,25,23,.22)]"
                >
                  <path
                    d="m74 25-43 24L8 116l37 15 14-28v194h102V103l14 28 37-15-23-67-43-24-19 20H93L74 25Z"
                    className={fill}
                    stroke="#191917"
                    strokeWidth="3"
                  />
                  <path
                    d="M93 45 79 101h62l-14-56"
                    fill="#d9ccb7"
                    stroke="#191917"
                    strokeWidth="2"
                  />
                  {index !== 1 && (
                    <path
                      d="M110 101v196M59 104l29 37M161 104l-29 37"
                      stroke="#d9ccb7"
                      strokeWidth="2"
                      strokeDasharray="6 6"
                    />
                  )}
                  {index === 1 && <path d="M45 174h116" stroke="#f0e52e" strokeWidth="8" />}
                  {index === 2 && (
                    <path d="M75 190h70v72H75z" fill="#a54d34" stroke="#191917" strokeWidth="3" />
                  )}
                </svg>
                <span className={`absolute bottom-[17%] left-[12%] h-[3%] w-[53%] ${accent}`} />
              </div>
              <div className="absolute inset-x-[7%] bottom-[4%] flex justify-between border-t border-[#191917]/35 pt-[5%] font-mono text-[clamp(4px,0.48vw,7px)] font-bold uppercase">
                <span>Look {code}</span>
                <span>{index === 0 ? "Full" : index === 1 ? "Cropped" : "Field"}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </ArtDetailFrame>
  );
}

function SelvRepairDetail() {
  return (
    <ArtDetailFrame
      label="SELV slash 00 repair components board showing replaceable pocket, zipper module, seam tape, buttons, patch grid, and repair tags"
      className="bg-[#191917] text-[#d9ccb7]"
      aspectClassName="aspect-[4/3]"
    >
      <div className="@container absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 opacity-18 [background-image:linear-gradient(rgba(217,204,183,.22)_1px,transparent_1px),linear-gradient(90deg,rgba(217,204,183,.22)_1px,transparent_1px)] [background-size:12.5%_16.66%]" />
        <div className="absolute left-[6%] top-[6%]">
          <p className="font-mono text-[clamp(18px,3.8vw,50px)] font-black leading-[0.78] tracking-[-0.1em]">
            PARTS,
            <br /> NOT WASTE.
          </p>
          <p className="mt-[2cqw] font-mono text-[clamp(5px,0.58vw,8px)] uppercase tracking-[0.17em] text-[#f0e52e]">
            Repair library / module set 02
          </p>
        </div>

        <div className="absolute right-[6%] top-[7%] grid w-[29%] grid-cols-3 gap-[5%]">
          {Array.from({ length: 9 }, (_, index) => (
            <span
              key={index}
              className={`aspect-square rounded-full border-[clamp(2px,0.32vw,4px)] border-[#d9ccb7] ${index === 4 ? "bg-[#f0e52e] shadow-[inset_0_0_0_3px_#191917]" : "bg-[#a54d34] shadow-[inset_0_0_0_3px_#191917]"}`}
            />
          ))}
        </div>

        <div className="absolute bottom-[7%] left-[6%] h-[48%] w-[34%] rotate-2 border-[clamp(2px,0.35vw,5px)] border-[#f0e52e] bg-[#d9ccb7] p-[4%] text-[#191917] shadow-[0_20px_38px_rgba(0,0,0,.38)]">
          <span className="absolute left-[8%] top-[9%] h-[68%] w-[4%] bg-[#a54d34]" />
          <span className="absolute left-[18%] top-[9%] h-[68%] w-[2%] bg-[repeating-linear-gradient(to_bottom,#191917_0_5px,transparent_5px_10px)]" />
          <p className="ml-[28%] font-mono text-[clamp(8px,1.5vw,20px)] font-black leading-[0.82]">
            ZIP
            <br /> MOD 04
          </p>
          <div className="absolute inset-x-[9%] bottom-[8%] flex justify-between border-t border-black/30 pt-[6%] font-mono text-[clamp(4px,0.48vw,7px)] uppercase">
            <span>Oxide / 48 cm</span>
            <span>Replace</span>
          </div>
        </div>

        <div className="absolute bottom-[8%] left-[45%] h-[43%] w-[23%] -rotate-3 bg-[#a54d34] p-[4%] text-[#d9ccb7] shadow-[0_18px_36px_rgba(0,0,0,.35)]">
          <p className="font-mono text-[clamp(7px,1.2vw,17px)] font-black leading-[0.83]">
            POCKET
            <br /> 02
          </p>
          <div className="absolute inset-x-[13%] bottom-[12%] h-[51%] border-[clamp(2px,0.35vw,5px)] border-dashed border-[#f0e52e]">
            <span className="absolute left-1/2 top-[22%] h-[54%] w-px -translate-x-1/2 bg-[#d9ccb7]/50" />
          </div>
        </div>

        <div className="absolute bottom-[6%] right-[7%] w-[25%] rotate-3 bg-[#f0e52e] p-[4%] text-[#191917] shadow-[0_18px_36px_rgba(0,0,0,.35)] motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:-translate-y-2">
          <span className="mx-auto block size-[clamp(10px,1.7vw,24px)] rounded-full border-[3px] border-[#191917] bg-[#191917] shadow-[inset_0_0_0_3px_#f0e52e]" />
          <p className="mt-[8%] font-mono text-[clamp(7px,1.25vw,17px)] font-black leading-[0.82]">
            REPAIR
            <br /> LOG 01
          </p>
          <MicroBarcode className="my-[10%] w-full" />
          <p className="font-mono text-[clamp(4px,0.47vw,7px)] uppercase leading-[1.4]">
            Seam 04 / pocket 02
            <br /> returned 18.08.26
          </p>
        </div>
      </div>
    </ArtDetailFrame>
  );
}

function SelvPassportDetail() {
  return (
    <ArtDetailFrame
      label="SELV slash 00 digital garment passport showing material origin, modular component map, repair history, ownership cycle, and return route"
      className="bg-[#f0e52e] text-[#191917]"
      aspectClassName="aspect-[4/3]"
    >
      <div className="@container absolute inset-0 overflow-hidden">
        <p className="absolute -right-[4%] -top-[7%] font-mono text-[clamp(100px,19vw,250px)] font-black leading-none tracking-[-0.17em] text-black/[0.07]">
          ID
        </p>
        <div className="absolute left-[6%] top-[6%]">
          <p className="font-mono text-[clamp(18px,3.8vw,50px)] font-black leading-[0.78] tracking-[-0.1em]">
            NOTHING
            <br /> DISAPPEARS.
          </p>
          <p className="mt-[2cqw] font-mono text-[clamp(5px,0.58vw,8px)] uppercase tracking-[0.17em]">
            Garment passport / shell 00—143
          </p>
        </div>

        <div className="absolute bottom-[-5%] left-[6%] h-[72%] w-[31%] -rotate-2 rounded-[clamp(10px,1.5vw,20px)] border-[clamp(4px,0.6vw,8px)] border-[#191917] bg-[#252522] p-[3%] text-[#d9ccb7] shadow-[0_24px_44px_rgba(94,83,5,.28)] motion-safe:transition-transform motion-safe:duration-700 motion-safe:group-hover:-translate-y-2">
          <div className="mx-auto h-[2%] w-[27%] rounded-full bg-[#d9ccb7]" />
          <div className="mt-[9%] flex justify-between font-mono text-[clamp(5px,0.54vw,8px)] uppercase text-[#f0e52e]">
            <span>SELV/00</span>
            <span>Active</span>
          </div>
          <div className="relative mx-auto mt-[9%] aspect-square w-[58%] border border-[#d9ccb7]/35">
            <div className="absolute inset-[11%] grid grid-cols-5 gap-[5%]">
              {Array.from({ length: 25 }, (_, index) => (
                <span
                  key={index}
                  className={
                    index % 4 === 0 || index === 12 ? "bg-[#f0e52e]" : "border border-[#d9ccb7]/45"
                  }
                />
              ))}
            </div>
          </div>
          <p className="mt-[8%] font-mono text-[clamp(7px,1.2vw,17px)] font-black leading-[0.86]">
            SHELL 00
            <br /> OWNER 03
          </p>
          <div className="mt-[8%] grid grid-cols-3 gap-[4%] font-mono text-[clamp(4px,0.45vw,7px)] uppercase">
            <span>72% canvas</span>
            <span>03 modules</span>
            <span>01 repair</span>
          </div>
        </div>

        <div className="absolute bottom-[7%] right-[6%] w-[55%] bg-[#191917] p-[4%] text-[#d9ccb7] shadow-[0_22px_42px_rgba(94,83,5,.3)]">
          <div className="flex justify-between border-b border-white/20 pb-[4%] font-mono text-[clamp(5px,0.55vw,8px)] uppercase text-[#f0e52e]">
            <span>Material and repair history</span>
            <span>00—143</span>
          </div>
          {[
            ["01", "Cut / deadstock canvas", "Toronto"],
            ["02", "Pocket module added", "Owner 02"],
            ["03", "Cuff seam repaired", "Studio 04"],
            ["04", "Returned / recirculated", "Owner 03"],
          ].map(([number, event, place], index) => (
            <div
              key={number}
              className="grid grid-cols-[auto_1fr_auto] items-center gap-[6%] border-b border-white/15 py-[4%] font-mono uppercase"
            >
              <span
                className={`flex size-[clamp(19px,3.3vw,44px)] items-center justify-center rounded-full text-[clamp(5px,0.56vw,8px)] ${index === 3 ? "bg-[#f0e52e] text-[#191917]" : "border border-white/30"}`}
              >
                {number}
              </span>
              <span className="text-[clamp(5px,0.58vw,8px)]">{event}</span>
              <span className="text-right text-[clamp(4px,0.46vw,7px)] text-white/45">{place}</span>
            </div>
          ))}
          <div className="mt-[6%] grid grid-cols-[1fr_auto] items-center gap-[6%]">
            <div className="h-2 bg-[linear-gradient(90deg,#a54d34_0_22%,#d9ccb7_22%_47%,#f0e52e_47%_74%,#6b6b61_74%_100%)]" />
            <p className="font-mono text-[clamp(4px,0.47vw,7px)] uppercase text-[#f0e52e]">
              Next / repair
            </p>
          </div>
        </div>
      </div>
    </ArtDetailFrame>
  );
}
