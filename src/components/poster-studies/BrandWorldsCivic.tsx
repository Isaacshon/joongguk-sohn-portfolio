import { ArtDetailFrame, ArtWorldFrame } from "@/components/poster-studies/ArtWorldFrame";

function GridNoise({ className = "" }: { className?: string }) {
  return (
    <div
      className={`absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.15)_1px,transparent_1px)] [background-size:6.25%_12.5%] ${className}`}
    />
  );
}

function TesseraMark({ className = "" }: { className?: string }) {
  return (
    <div className={`grid grid-cols-3 gap-[5%] ${className}`}>
      {[0, 1, 2, 3, 4, 5, 6, 7, 8].map((tile) => (
        <span
          key={tile}
          className={`aspect-square ${tile === 4 ? "rounded-full bg-[#ffdf4f]" : "bg-current"}`}
        />
      ))}
    </div>
  );
}

function TesseraLiveHero() {
  return (
    <ArtWorldFrame
      label="Tessera Live fictional performing arts campus identity shown across a building facade, season campaign, mobile schedule, and admission system"
      className="bg-[#3137d9] text-[#f2efe4] shadow-[0_28px_95px_rgba(34,39,163,.3)]"
    >
      <GridNoise />
      <div className="absolute -right-[12%] -top-[20%] h-[72%] w-[58%] rotate-12 rounded-full border-[clamp(20px,5vw,72px)] border-[#ffdf4f]/20" />

      <div className="absolute left-[5%] top-[6%] h-[54%] w-[62%] overflow-hidden bg-[#11131d] shadow-[0_28px_65px_rgba(10,12,24,.4)] sm:left-[7%] sm:h-[71%] sm:w-[55%]">
        <div className="absolute inset-x-0 top-0 flex h-[16%] items-center justify-between border-b border-white/25 px-[5%] font-mono text-[clamp(6px,.7vw,10px)] uppercase tracking-[0.2em]">
          <span>South elevation</span>
          <span>Season 26/27</span>
        </div>
        <div className="absolute inset-x-[6%] bottom-[8%] top-[22%] grid min-w-0 grid-cols-[.8fr_1.2fr] gap-[5%]">
          <div className="relative min-w-0 overflow-hidden bg-[#f2efe4] text-[#11131d]">
            <TesseraMark className="absolute left-[12%] top-[10%] w-[30%] text-[#3137d9]" />
            <p className="absolute bottom-[8%] left-[9%] max-w-[6ch] text-[clamp(21px,4vw,58px)] font-black leading-[0.72] tracking-[-0.08em]">
              LIVE
              <br />
              MAKES
              <br />
              ROOM
            </p>
          </div>
          <div className="relative min-w-0 overflow-hidden bg-[#3137d9]">
            <div className="absolute inset-[8%] border border-white/35" />
            <div className="absolute left-[12%] top-[14%] grid w-[64%] grid-cols-3 gap-[5%]">
              {[
                "bg-[#ffdf4f]",
                "bg-[#f2efe4]",
                "bg-[#ef5b45]",
                "bg-[#f2efe4]",
                "bg-[#ffdf4f]",
                "bg-[#ef5b45]",
              ].map((tone, index) => (
                <span key={index} className={`${tone} aspect-square`} />
              ))}
            </div>
            <p className="absolute bottom-[10%] left-[10%] text-[clamp(15px,2.8vw,42px)] font-black uppercase leading-[0.78]">
              Tessera
              <br />
              Live
            </p>
          </div>
        </div>
      </div>

      <div className="absolute right-[5%] top-[8%] w-[27%] rotate-2 overflow-hidden bg-[#f2efe4] p-[2.5%] text-[#11131d] shadow-[0_18px_42px_rgba(10,12,24,.3)] sm:right-[6%] sm:w-[23%]">
        <div className="flex items-center justify-between border-b border-black/25 pb-[7%] font-mono text-[clamp(6px,.66vw,9px)] uppercase">
          <span>Tonight</span>
          <span>19:30</span>
        </div>
        <TesseraMark className="mx-auto mt-[12%] w-[56%] text-[#3137d9]" />
        <p className="mt-[14%] text-[clamp(11px,1.65vw,24px)] font-black leading-[0.85]">
          NEW MOVEMENT
          <br />/ HALL B
        </p>
        <div className="mt-[12%] grid grid-cols-5 gap-[3%]">
          {[0, 1, 2, 3, 4].map((item) => (
            <span key={item} className="aspect-[1/3] bg-[#11131d]" />
          ))}
        </div>
      </div>

      <div className="absolute bottom-[5%] right-[7%] flex w-[41%] items-stretch overflow-hidden shadow-[0_16px_36px_rgba(10,12,24,.28)] sm:w-[32%]">
        <div className="w-[68%] bg-[#ef5b45] p-[7%] text-[#11131d]">
          <p className="font-mono text-[clamp(6px,.67vw,9px)] uppercase tracking-[0.16em]">
            Campus pass / 042
          </p>
          <p className="mt-[12%] text-[clamp(12px,1.8vw,25px)] font-black uppercase leading-none">
            One campus.
            <br />
            Many stages.
          </p>
        </div>
        <div className="grid w-[32%] place-items-center border-l border-[#11131d]/35 bg-[#ffdf4f] text-[#11131d]">
          <TesseraMark className="w-[48%]" />
        </div>
      </div>
    </ArtWorldFrame>
  );
}

function BackmatterHero() {
  return (
    <ArtWorldFrame
      label="Backmatter fictional evidence-led documentary network shown through a streaming platform, source ledger, cinema campaign, and press pass"
      className="bg-[#d9d3c6] text-[#11110f] shadow-[0_28px_95px_rgba(58,48,38,.26)]"
    >
      <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(circle,rgba(17,17,15,.35)_0_.7px,transparent_.9px)] [background-size:8px_8px]" />
      <p className="absolute -left-[1%] top-[1%] font-serif text-[clamp(58px,11vw,168px)] italic leading-none tracking-[-0.08em] text-[#11110f]/10">
        Footnote
      </p>

      <div className="absolute left-[5%] top-[8%] h-[50%] w-[67%] overflow-hidden bg-[#11110f] text-[#f2eee5] shadow-[0_26px_60px_rgba(39,31,24,.36)] sm:left-[7%] sm:h-[67%] sm:w-[61%]">
        <div className="flex h-[14%] items-center justify-between border-b border-white/20 px-[4%] font-mono text-[clamp(6px,.68vw,9px)] uppercase tracking-[0.18em]">
          <span>BACKMATTER / BM-026</span>
          <span>Watch with the record open</span>
        </div>
        <div className="absolute bottom-[8%] left-[4%] right-[4%] top-[20%] grid min-w-0 grid-cols-[1.65fr_.7fr] gap-[3%]">
          <div className="relative min-w-0 overflow-hidden bg-[linear-gradient(135deg,#5e5a51_0%,#292723_42%,#a49d8e_43%_46%,#191816_47%_100%)]">
            <div className="absolute inset-0 opacity-35 [background-image:repeating-linear-gradient(0deg,transparent_0_7px,rgba(255,255,255,.16)_8px)]" />
            <p className="absolute bottom-[7%] left-[5%] max-w-[10ch] font-serif text-[clamp(18px,3.7vw,54px)] italic leading-[0.88]">
              The water remembers every border.
            </p>
            <span className="absolute right-[5%] top-[6%] bg-[#e24b35] px-[3%] py-[2%] font-mono text-[clamp(6px,.64vw,9px)] uppercase">
              Film 04 / 58:12
            </span>
          </div>
          <div className="min-w-0 overflow-hidden bg-[#f2eee5] p-[9%] text-[#11110f]">
            <p className="font-mono text-[clamp(6px,.65vw,9px)] uppercase text-[#e24b35]">
              Source ledger
            </p>
            <ol className="mt-[14%] space-y-[9%] font-mono text-[clamp(6px,.72vw,10px)] leading-[1.35]">
              <li>01 / FIELD AUDIO</li>
              <li>02 / PUBLIC RECORD</li>
              <li>03 / WITNESS LOG</li>
              <li>04 / MAP REVISION</li>
            </ol>
            <p className="mt-[18%] border-t border-black/25 pt-[8%] text-[clamp(8px,1vw,14px)] font-bold">
              Every claim opens its source.
            </p>
          </div>
        </div>
      </div>

      <div className="absolute right-[5%] top-[10%] w-[24%] rotate-2 overflow-hidden bg-[#e24b35] p-[3%] text-[#f2eee5] shadow-[0_18px_40px_rgba(39,31,24,.3)] sm:right-[7%] sm:w-[21%]">
        <p className="font-mono text-[clamp(6px,.65vw,9px)] uppercase">Press screening</p>
        <p className="backmatter-press-title mt-[18%] text-[clamp(15px,2.5vw,36px)] font-black leading-[0.78] tracking-[-0.06em]">
          BACK
          <br />
          MATTER
        </p>
        <div className="mt-[18%] h-px bg-white/55" />
        <p className="mt-[8%] font-mono text-[clamp(6px,.72vw,10px)] leading-[1.5]">
          HALL 02
          <br />
          ENTRY 18:40
          <br />
          PASS 0067
        </p>
      </div>

      <div className="absolute bottom-[5%] right-[7%] w-[38%] -rotate-1 overflow-hidden bg-[#f2eee5] p-[3%] shadow-[0_18px_42px_rgba(39,31,24,.26)] sm:w-[31%]">
        <div className="flex justify-between border-b border-black/25 pb-[5%] font-mono text-[clamp(6px,.65vw,9px)] uppercase">
          <span>Evidence card</span>
          <span>04.2</span>
        </div>
        <p className="mt-[8%] font-serif text-[clamp(14px,2.1vw,30px)] italic leading-[0.95]">
          Context is part of the picture.
        </p>
        <div className="mt-[8%] grid grid-cols-[1fr_auto] items-end gap-[6%]">
          <div className="space-y-[4%]">
            <span className="block h-1 bg-[#11110f]" />
            <span className="block h-1 w-[72%] bg-[#11110f]" />
            <span className="block h-1 w-[86%] bg-[#e24b35]" />
          </div>
          <span className="font-mono text-[clamp(7px,.9vw,12px)] font-bold">[04]</span>
        </div>
      </div>
    </ArtWorldFrame>
  );
}

function FoldDiagram() {
  return (
    <svg viewBox="0 0 180 110" className="h-full w-full" fill="none">
      <path d="M15 91V40L54 19L91 40V91H15Z" stroke="currentColor" strokeWidth="2" />
      <path d="M91 91V40L128 18L165 39V91H91Z" stroke="currentColor" strokeWidth="2" />
      <path
        d="M54 19V70L91 91M128 18V70L91 91M15 40L54 61L91 40L128 61L165 39"
        stroke="currentColor"
      />
      <path d="M28 83V53L54 68V83H28ZM106 83V55L128 68V83H106Z" fill="currentColor" opacity=".18" />
    </svg>
  );
}

function SeamframeHero() {
  return (
    <ArtWorldFrame
      label="Seamframe fictional mass-timber modular housing brand shown through architecture, construction wrap, resident interface, and material specification"
      className="bg-[#b8c49a] text-[#173527] shadow-[0_28px_95px_rgba(48,73,45,.28)]"
    >
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(23,53,39,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(23,53,39,.25)_1px,transparent_1px)] [background-size:5%_10%]" />
      <div className="absolute -bottom-[28%] -left-[8%] h-[82%] w-[76%] rotate-[-8deg] rounded-full bg-[#e66e43]/35 blur-[1px]" />

      <div className="absolute left-[5%] top-[6%] h-[55%] w-[61%] overflow-hidden bg-[#f0eadc] p-[4%] shadow-[0_26px_58px_rgba(48,73,45,.3)] sm:left-[7%] sm:h-[73%] sm:w-[57%] sm:p-[3%]">
        <div className="flex justify-between border-b border-[#173527]/35 pb-[3%] font-mono text-[clamp(6px,.68vw,9px)] uppercase tracking-[0.16em]">
          <span>SEAMFRAME / SF-H2</span>
          <span>Two modules / one shared seam</span>
        </div>
        <div className="mt-[4%] h-[61%] text-[#173527]">
          <FoldDiagram />
        </div>
        <div className="grid min-w-0 grid-cols-[1fr_auto] items-end gap-[5%] border-t border-[#173527]/35 pt-[4%]">
          <p className="max-w-[10ch] text-[clamp(17px,3.1vw,44px)] font-black leading-[0.78] tracking-[-0.06em]">
            BUILD THE ROOM BETWEEN.
          </p>
          <p className="font-mono text-[clamp(6px,.66vw,9px)] leading-[1.45]">
            PANEL 12
            <br />
            JOINT 04
            <br />
            GRID 2.4M
          </p>
        </div>
      </div>

      <div className="absolute right-[4%] top-[9%] h-[46%] w-[28%] rotate-2 overflow-hidden bg-[#173527] p-[3%] text-[#f0eadc] shadow-[0_18px_43px_rgba(48,73,45,.33)] sm:right-[7%] sm:h-[54%] sm:w-[25%] sm:p-[2.3%]">
        <p className="font-mono text-[clamp(6px,.65vw,9px)] uppercase">Resident system / 4B</p>
        <p className="mt-[12%] text-[clamp(14px,2.3vw,34px)] font-black leading-[0.8]">
          YOUR HOME, IN PARTS.
        </p>
        <div className="mt-[12%] grid grid-cols-2 gap-[5%]">
          {["KITCHEN", "STUDIO", "GARDEN", "GUEST"].map((room, index) => (
            <div
              key={room}
              className={`aspect-square border border-[#f0eadc]/35 p-[8%] ${index === 2 ? "bg-[#e66e43] text-[#173527]" : ""}`}
            >
              <span className="font-mono text-[clamp(5px,.58vw,8px)]">{room}</span>
              <span className="mt-[30%] block h-[18%] w-[65%] border border-current" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-[5%] right-[6%] w-[37%] -rotate-2 overflow-hidden bg-[#e66e43] p-[3%] text-[#173527] shadow-[0_17px_40px_rgba(48,73,45,.28)] sm:w-[31%] sm:p-[2.2%]">
        <div className="flex justify-between font-mono text-[clamp(6px,.65vw,9px)] uppercase">
          <span>Material passport</span>
          <span>CLT / 03</span>
        </div>
        <div className="mt-[8%] flex items-end justify-between">
          <div className="h-[clamp(35px,6vw,86px)] w-[42%] bg-[repeating-linear-gradient(90deg,#c69765_0_5px,#e1b37a_6px_10px)] shadow-[inset_0_0_0_1px_rgba(23,53,39,.35)]" />
          <p className="max-w-[9ch] text-right text-[clamp(10px,1.5vw,21px)] font-black leading-[0.9]">
            DESIGNED TO COME APART.
          </p>
        </div>
      </div>
    </ArtWorldFrame>
  );
}

function ShoreGlyph({ className = "" }: { className?: string }) {
  return (
    <div className={`relative ${className}`}>
      <span className="absolute left-0 top-0 h-full w-[43%] rounded-l-full border-[clamp(2px,.35vw,5px)] border-current border-r-0" />
      <span className="absolute right-0 top-0 h-full w-[43%] rounded-r-full border-[clamp(2px,.35vw,5px)] border-current border-l-0" />
      <span className="absolute left-[43%] top-1/2 h-px w-[14%] -translate-y-1/2 bg-current" />
    </div>
  );
}

function TwoShoresHero() {
  return (
    <ArtWorldFrame
      label="Two Shores fictional cross-border finance cooperative shown through mobile transfers, member card, bilingual receipt, and public campaign"
      className="bg-[#a8dfd3] text-[#0b2c38] shadow-[0_28px_95px_rgba(18,85,91,.25)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_77%_18%,rgba(255,245,218,.75),transparent_28%)]" />
      <div className="absolute -left-[12%] top-[44%] h-[42%] w-[74%] rounded-[50%] border-[clamp(22px,5vw,74px)] border-[#ff6d55]/30" />

      <div className="absolute left-[4%] top-[7%] h-[51%] w-[67%] overflow-hidden bg-[#0b2c38] text-[#f8f0da] shadow-[0_26px_58px_rgba(11,44,56,.34)] sm:left-[7%] sm:h-[68%] sm:w-[61%]">
        <div className="absolute inset-x-0 top-0 flex h-[14%] items-center justify-between border-b border-[#f8f0da]/25 px-[5%] font-mono text-[clamp(6px,.68vw,9px)] uppercase">
          <span>TWO SHORES / MEMBER CO-OP</span>
          <span>TORONTO ↔ SEOUL</span>
        </div>
        <div className="absolute bottom-[7%] left-[5%] right-[5%] top-[21%] grid min-w-0 grid-cols-[1.1fr_.72fr] gap-[5%]">
          <div className="relative min-w-0 overflow-hidden">
            <ShoreGlyph className="h-[44%] w-[78%] text-[#ff6d55]" />
            <p className="mt-[8%] max-w-[10ch] text-[clamp(20px,4vw,58px)] font-black leading-[0.75] tracking-[-0.065em]">
              MONEY SHOULD KNOW BOTH SIDES.
            </p>
          </div>
          <div className="min-w-0 overflow-hidden rounded-t-[clamp(12px,2vw,28px)] bg-[#f8f0da] p-[8%] text-[#0b2c38]">
            <div className="mx-auto h-[2%] w-[22%] rounded-full bg-[#0b2c38]/25" />
            <p className="mt-[14%] font-mono text-[clamp(6px,.64vw,9px)] uppercase">
              Send /{" "}
              <span lang="ko" className="font-ko-sans normal-case tracking-normal">
                보내기
              </span>
            </p>
            <p className="mt-[8%] text-[clamp(17px,2.7vw,39px)] font-black leading-none">
              CAD → KRW
            </p>
            <div className="mt-[14%] space-y-[6%]">
              <div className="h-[clamp(12px,2vw,29px)] bg-[#a8dfd3]" />
              <div className="h-[clamp(12px,2vw,29px)] bg-[#a8dfd3]" />
              <div className="h-[clamp(15px,2.3vw,34px)] bg-[#ff6d55]" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute right-[5%] top-[10%] w-[26%] rotate-3 overflow-hidden rounded-[clamp(8px,1.3vw,18px)] bg-[#ff6d55] p-[3%] text-[#0b2c38] shadow-[0_18px_42px_rgba(11,44,56,.3)] sm:right-[7%] sm:w-[23%] sm:p-[2.4%]">
        <div className="flex justify-between font-mono text-[clamp(6px,.64vw,9px)] uppercase">
          <span>Member 024</span>
          <span>TS</span>
        </div>
        <ShoreGlyph className="mt-[15%] h-[clamp(25px,4.2vw,61px)] w-[72%]" />
        <p className="mt-[15%] text-[clamp(11px,1.65vw,24px)] font-black uppercase leading-[0.9]">
          Two accounts.
          <br />
          One membership.
        </p>
      </div>

      <div className="absolute bottom-[5%] right-[7%] w-[39%] -rotate-1 overflow-hidden bg-[#f8f0da] p-[3%] shadow-[0_17px_38px_rgba(11,44,56,.25)] sm:w-[32%] sm:p-[2.3%]">
        <div className="flex justify-between border-b border-[#0b2c38]/25 pb-[5%] font-mono text-[clamp(6px,.64vw,9px)] uppercase">
          <span>Transfer record</span>
          <span lang="ko" className="font-ko-sans normal-case tracking-normal">
            양방향 기록
          </span>
        </div>
        <div className="mt-[7%] grid grid-cols-[1fr_auto] gap-[6%]">
          <div className="space-y-[5%] font-mono text-[clamp(6px,.72vw,10px)]">
            <p>FROM / TORONTO</p>
            <p>TO / SEOUL</p>
            <p>STATUS / READY</p>
          </div>
          <div className="grid size-[clamp(32px,5vw,73px)] place-items-center rounded-full border-2 border-[#0b2c38] text-[clamp(10px,1.5vw,21px)] font-black">
            ↔
          </div>
        </div>
      </div>
    </ArtWorldFrame>
  );
}

function MaterialDot({ tone }: { tone: string }) {
  return <span className={`block aspect-square rounded-full border border-black/20 ${tone}`} />;
}

function ColdkilnHero() {
  return (
    <ArtWorldFrame
      label="Coldkiln fictional unfired low-carbon building material brand shown through facade modules, specification sheets, sample library, and site packaging"
      className="bg-[#d7d5ce] text-[#171a19] shadow-[0_28px_95px_rgba(70,69,64,.28)]"
    >
      <div className="absolute inset-0 opacity-50 [background-image:radial-gradient(circle,rgba(23,26,25,.18)_0_.7px,transparent_.9px)] [background-size:7px_7px]" />
      <p className="absolute -left-[2%] top-[2%] text-[clamp(64px,12vw,182px)] font-black leading-none tracking-[-0.1em] text-[#2353d3]/10">
        COLD
      </p>

      <div className="absolute left-[5%] top-[7%] h-[53%] w-[65%] overflow-hidden bg-[#171a19] shadow-[0_26px_62px_rgba(52,51,48,.35)] sm:left-[7%] sm:h-[70%] sm:w-[59%]">
        <div className="absolute inset-x-0 top-0 flex h-[14%] items-center justify-between border-b border-white/20 px-[5%] font-mono text-[clamp(6px,.68vw,9px)] uppercase text-white">
          <span>COLDKILN / MATERIAL SYSTEM</span>
          <span>UNFIRED / SERIES C</span>
        </div>
        <div className="absolute bottom-[7%] left-[5%] right-[5%] top-[20%] grid min-w-0 grid-cols-[1.35fr_.65fr] gap-[4%]">
          <div className="grid min-w-0 grid-cols-4 grid-rows-3 gap-[1.3%] bg-[#888882] p-[1.3%]">
            {[
              "bg-[#bbb8ad]",
              "bg-[#8d8e89]",
              "bg-[#d8d3c6]",
              "bg-[#a7573f]",
              "bg-[#777a76]",
              "bg-[#c8c5bb]",
              "bg-[#2353d3]",
              "bg-[#a5a39c]",
              "bg-[#d7d5ce]",
              "bg-[#9c9d99]",
              "bg-[#b65f45]",
              "bg-[#c1beb4]",
            ].map((tone, index) => (
              <span key={index} className={`${tone} shadow-[inset_0_0_0_1px_rgba(0,0,0,.14)]`} />
            ))}
          </div>
          <div className="flex min-w-0 flex-col justify-between overflow-hidden bg-[#d7d5ce] p-[9%]">
            <div>
              <p className="font-mono text-[clamp(6px,.64vw,9px)] uppercase text-[#2353d3]">
                Facade C-12
              </p>
              <p className="mt-[10%] text-[clamp(17px,2.8vw,41px)] font-black leading-[0.78] tracking-[-0.06em]">
                MADE COLD.
                <br />
                BUILT LONG.
              </p>
            </div>
            <p className="font-mono text-[clamp(6px,.66vw,9px)] uppercase leading-[1.5]">
              PRESS / CURE / RETURN
              <br />
              NO DECORATIVE CLAIMS
            </p>
          </div>
        </div>
      </div>

      <div className="absolute right-[4%] top-[9%] w-[28%] rotate-2 overflow-hidden bg-[#2353d3] p-[3%] text-white shadow-[0_19px_43px_rgba(52,51,48,.3)] sm:right-[7%] sm:w-[24%] sm:p-[2.4%]">
        <div className="flex justify-between font-mono text-[clamp(6px,.64vw,9px)] uppercase">
          <span>Sample library</span>
          <span>01—06</span>
        </div>
        <div className="mt-[10%] grid grid-cols-3 gap-[5%]">
          <MaterialDot tone="bg-[#d7d5ce]" />
          <MaterialDot tone="bg-[#8d8e89]" />
          <MaterialDot tone="bg-[#a7573f]" />
          <MaterialDot tone="bg-[#bcb9ae]" />
          <MaterialDot tone="bg-[#6f716d]" />
          <MaterialDot tone="bg-[#e1ded4]" />
        </div>
        <p className="mt-[12%] text-[clamp(11px,1.7vw,24px)] font-black leading-[0.85]">
          MINERAL,
          <br />
          WITHOUT FIRE.
        </p>
      </div>

      <div className="absolute bottom-[5%] right-[7%] w-[39%] -rotate-2 overflow-hidden bg-[#ece9e0] p-[3%] shadow-[0_18px_40px_rgba(52,51,48,.27)] sm:w-[32%] sm:p-[2.2%]">
        <div className="flex justify-between border-b border-black/25 pb-[5%] font-mono text-[clamp(6px,.64vw,9px)] uppercase">
          <span>Site pack / C12</span>
          <span>Returnable</span>
        </div>
        <div className="mt-[7%] grid grid-cols-[.68fr_1fr] items-end gap-[7%]">
          <div className="grid grid-cols-2 gap-[4%]">
            {[0, 1, 2, 3].map((tile) => (
              <span
                key={tile}
                className="aspect-[3/2] bg-[#9c9d99] shadow-[inset_0_0_0_1px_rgba(0,0,0,.2)]"
              />
            ))}
          </div>
          <p className="text-[clamp(12px,1.8vw,26px)] font-black uppercase leading-[0.85]">
            Specify the cycle,
            <br />
            not the finish.
          </p>
        </div>
      </div>
    </ArtWorldFrame>
  );
}

function TesseraSeasonBoard() {
  return (
    <ArtDetailFrame
      label="Tessera Live season 26/27 poster system with modular programme tiles and venue editions"
      aspectClassName="aspect-[4/5] sm:aspect-[3/4]"
      className="@container bg-[#ffdf4f] text-[#11131d] shadow-[0_22px_62px_rgba(34,39,163,.22)]"
    >
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(17,19,29,.15)_1px,transparent_1px),linear-gradient(90deg,rgba(17,19,29,.15)_1px,transparent_1px)] [background-size:12.5%_8.333%]" />
      <p className="absolute left-[6%] top-[5%] font-mono text-[clamp(7px,1.8cqw,12px)] uppercase tracking-[0.18em]">
        Season system / 26—27
      </p>
      <p className="absolute right-[5%] top-[4%] text-[clamp(36px,13cqw,88px)] font-black leading-none tracking-[-0.1em] text-[#3137d9]">
        26
      </p>

      <div className="absolute -left-[3%] bottom-[9%] h-[56%] w-[36%] -rotate-6 overflow-hidden bg-[#ef5b45] p-[6%] shadow-[0_15px_35px_rgba(17,19,29,.25)]">
        <TesseraMark className="w-[48%] text-[#11131d]" />
        <p className="mt-[34%] text-[clamp(14px,6cqw,38px)] font-black uppercase leading-[0.76]">
          Voice
          <br />/ Body
        </p>
        <p className="absolute bottom-[7%] font-mono text-[clamp(6px,1.5cqw,9px)] uppercase">
          Hall A / 04.17
        </p>
      </div>

      <div className="absolute bottom-[5%] left-[22%] h-[77%] w-[56%] rotate-1 overflow-hidden bg-[#f2efe4] p-[7%] shadow-[0_22px_50px_rgba(17,19,29,.3)]">
        <div className="flex items-start justify-between border-b border-black/30 pb-[6%]">
          <TesseraMark className="w-[24%] text-[#3137d9]" />
          <p className="text-right font-mono text-[clamp(6px,1.45cqw,9px)] uppercase leading-[1.4]">
            Tessera Live
            <br />
            South Campus
          </p>
        </div>
        <p className="mt-[16%] max-w-[6ch] text-[clamp(30px,10cqw,68px)] font-black leading-[0.68] tracking-[-0.09em]">
          LIVE
          <br />
          MAKES
          <br />
          ROOM
        </p>
        <div className="absolute bottom-[8%] left-[8%] right-[8%] grid grid-cols-3 gap-[4%]">
          {["bg-[#3137d9]", "bg-[#ffdf4f]", "bg-[#ef5b45]"].map((tone) => (
            <span key={tone} className={`${tone} aspect-square`} />
          ))}
        </div>
      </div>

      <div className="absolute -right-[4%] bottom-[13%] h-[48%] w-[31%] rotate-6 overflow-hidden bg-[#3137d9] p-[7%] text-[#f2efe4] shadow-[0_16px_38px_rgba(17,19,29,.3)]">
        <p className="font-mono text-[clamp(6px,1.45cqw,9px)] uppercase">Late works / B</p>
        <div className="mt-[20%] grid grid-cols-2 gap-[7%]">
          {[0, 1, 2, 3, 4, 5].map((tile) => (
            <span
              key={tile}
              className={`aspect-square ${tile === 2 ? "rounded-full bg-[#ffdf4f]" : "bg-[#f2efe4]"}`}
            />
          ))}
        </div>
        <p className="absolute bottom-[8%] text-[clamp(13px,4.2cqw,27px)] font-black leading-[0.78]">
          NEW
          <br />
          MOVEMENT
        </p>
      </div>
    </ArtDetailFrame>
  );
}

function TesseraCampusBoard() {
  return (
    <ArtDetailFrame
      label="Tessera Live campus facade and wayfinding system with hall markers, directional pylons, and illuminated modular signage"
      aspectClassName="aspect-[4/5] sm:aspect-[3/4]"
      className="@container bg-[#11131d] text-[#f2efe4] shadow-[0_22px_62px_rgba(10,12,24,.3)]"
    >
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.16)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.16)_1px,transparent_1px)] [background-size:10%_12.5%]" />
      <div className="absolute inset-x-[6%] top-[7%] flex items-center justify-between border-b border-white/30 pb-[3%] font-mono text-[clamp(6px,1.55cqw,10px)] uppercase tracking-[0.17em]">
        <span>South elevation / dusk</span>
        <span>Grid 09 × 06</span>
      </div>

      <div className="absolute bottom-[9%] left-[5%] h-[65%] w-[68%] bg-[#2b2d35] shadow-[0_22px_46px_rgba(0,0,0,.45)]">
        <div className="grid h-full grid-cols-6 grid-rows-5 gap-px bg-[#11131d] p-px">
          {Array.from({ length: 30 }, (_, index) => (
            <span
              key={index}
              className={`${index === 12 || index === 13 || index === 18 || index === 19 ? "bg-[#3137d9]" : index % 7 === 0 ? "bg-[#ffdf4f]" : "bg-[#42454f]"}`}
            />
          ))}
        </div>
        <div className="absolute left-[17%] top-[34%] flex h-[36%] w-[40%] items-center justify-center bg-[#3137d9] p-[8%]">
          <TesseraMark className="w-full text-[#f2efe4]" />
        </div>
        <div className="absolute bottom-[4%] left-[4%] right-[4%] flex justify-between font-mono text-[clamp(6px,1.4cqw,9px)] uppercase text-white/65">
          <span>Entry / 01</span>
          <span>Hall B / upper</span>
        </div>
      </div>

      <div className="absolute bottom-[6%] right-[5%] h-[74%] w-[23%] overflow-hidden bg-[#f2efe4] text-[#11131d] shadow-[0_16px_40px_rgba(0,0,0,.4)]">
        <div className="grid h-[24%] place-items-center bg-[#ffdf4f]">
          <TesseraMark className="w-[46%] text-[#3137d9]" />
        </div>
        <div className="p-[11%]">
          <p className="font-mono text-[clamp(6px,1.45cqw,9px)] uppercase">You are here / S1</p>
          <div className="my-[18%] h-px bg-black/25" />
          <p className="text-[clamp(15px,5.5cqw,34px)] font-black leading-[0.8]">
            A ↑
            <br />B →
            <br />C ↓
          </p>
          <p className="mt-[18%] font-mono text-[clamp(6px,1.45cqw,9px)] uppercase leading-[1.55]">
            Stage door
            <br />
            Cafe
            <br />
            Public studio
          </p>
        </div>
        <div className="absolute bottom-0 h-[6%] w-full bg-[#ef5b45]" />
      </div>
    </ArtDetailFrame>
  );
}

function TesseraMobileBoard() {
  return (
    <ArtDetailFrame
      label="Tessera Live mobile performance schedule and admission ticket suite with live hall status and campus pass"
      aspectClassName="aspect-[5/4] sm:aspect-[16/7]"
      className="@container bg-[#3137d9] text-[#f2efe4] shadow-[0_22px_62px_rgba(34,39,163,.25)] sm:col-span-2"
    >
      <GridNoise />
      <p className="absolute left-[5%] top-[7%] max-w-[8ch] text-[clamp(28px,8cqw,72px)] font-black leading-[0.72] tracking-[-0.08em] text-[#ffdf4f] sm:text-[clamp(26px,5.8cqw,68px)]">
        TONIGHT MOVES.
      </p>
      <p className="absolute bottom-[7%] left-[5%] w-[22%] font-mono text-[clamp(6px,1.25cqw,10px)] uppercase leading-[1.6] text-white/65">
        Three halls, one live schedule. Admission changes with the campus.
      </p>

      <div className="absolute bottom-[7%] left-[31%] top-[8%] w-[24%] overflow-hidden rounded-t-[clamp(16px,3cqw,34px)] bg-[#f2efe4] p-[2.4%] text-[#11131d] shadow-[0_20px_45px_rgba(10,12,24,.38)]">
        <div className="mx-auto h-[2%] w-[22%] rounded-full bg-black/20" />
        <div className="mt-[9%] flex items-center justify-between border-b border-black/25 pb-[6%] font-mono text-[clamp(6px,1.15cqw,9px)] uppercase">
          <span>Tue 17</span>
          <span>Live now</span>
        </div>
        <div className="mt-[8%] space-y-[5%]">
          {["19:30 / BODY COMMON", "20:10 / PUBLIC VOICE", "21:40 / AFTER STAGE"].map(
            (show, index) => (
              <div
                key={show}
                className={`grid grid-cols-[auto_1fr] items-center gap-[7%] p-[6%] ${index === 1 ? "bg-[#ef5b45]" : "bg-[#ded9ce]"}`}
              >
                <span
                  className={`size-[clamp(9px,1.8cqw,18px)] ${index === 1 ? "rounded-full bg-[#ffdf4f]" : "bg-[#3137d9]"}`}
                />
                <span className="font-mono text-[clamp(5px,1.05cqw,8px)] font-bold uppercase">
                  {show}
                </span>
              </div>
            ),
          )}
        </div>
      </div>

      <div className="absolute right-[5%] top-[12%] w-[34%] rotate-2 overflow-hidden bg-[#ffdf4f] text-[#11131d] shadow-[0_18px_42px_rgba(10,12,24,.35)]">
        <div className="grid grid-cols-[1fr_.36fr]">
          <div className="p-[8%]">
            <div className="flex justify-between font-mono text-[clamp(6px,1.1cqw,9px)] uppercase">
              <span>Campus pass</span>
              <span>TL / 042</span>
            </div>
            <p className="mt-[13%] text-[clamp(16px,4.2cqw,42px)] font-black uppercase leading-[0.78]">
              One pass.
              <br />
              Many stages.
            </p>
            <div className="mt-[12%] grid grid-cols-8 gap-[2%]">
              {Array.from({ length: 16 }, (_, index) => (
                <span
                  key={index}
                  className={`h-[clamp(5px,1cqw,11px)] ${index % 3 ? "bg-[#11131d]" : "bg-[#ef5b45]"}`}
                />
              ))}
            </div>
          </div>
          <div className="grid place-items-center border-l border-black/25 bg-[#ef5b45]">
            <TesseraMark className="w-[52%] text-[#11131d]" />
          </div>
        </div>
      </div>
    </ArtDetailFrame>
  );
}

export function TesseraLiveWorld() {
  return (
    <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
      <div className="min-w-0 sm:col-span-2">
        <TesseraLiveHero />
      </div>
      <TesseraSeasonBoard />
      <TesseraCampusBoard />
      <TesseraMobileBoard />
    </div>
  );
}

function BackmatterStreamingBoard() {
  return (
    <ArtDetailFrame
      label="Backmatter documentary streaming interface with an open evidence drawer, chapter timeline, and source-linked captions"
      aspectClassName="aspect-[5/4] sm:aspect-[16/7]"
      className="@container bg-[#11110f] text-[#f2eee5] shadow-[0_22px_62px_rgba(39,31,24,.3)] sm:col-span-2"
    >
      <div className="absolute inset-0 opacity-25 [background-image:repeating-linear-gradient(0deg,transparent_0_8px,rgba(255,255,255,.13)_9px)]" />
      <div className="absolute inset-x-[4%] top-[6%] flex items-center justify-between border-b border-white/25 pb-[2.5%] font-mono text-[clamp(6px,1.15cqw,10px)] uppercase tracking-[0.18em]">
        <span>Backmatter / Film 04</span>
        <span>Record mode / open</span>
      </div>

      <div className="absolute bottom-[9%] left-[4%] top-[18%] w-[65%] overflow-hidden bg-[linear-gradient(132deg,#827b6e_0%,#282622_38%,#b9b0a0_39%_41%,#151412_42%_67%,#5e594f_68%)]">
        <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(90deg,transparent_0_47%,rgba(255,255,255,.3)_48%_49%,transparent_50%),repeating-linear-gradient(0deg,transparent_0_11px,rgba(255,255,255,.11)_12px)]" />
        <span className="absolute left-[4%] top-[6%] bg-[#e24b35] px-[3%] py-[1.5%] font-mono text-[clamp(6px,1cqw,9px)] uppercase">
          Chapter 04 / Border water
        </span>
        <p className="absolute bottom-[18%] left-[5%] max-w-[19ch] font-serif text-[clamp(16px,3.5cqw,43px)] italic leading-[0.92]">
          “The map moved. The river did not.”
        </p>
        <div className="absolute bottom-[6%] left-[5%] right-[5%]">
          <div className="relative h-[clamp(3px,.6cqw,6px)] bg-white/25">
            <span className="absolute inset-y-0 left-0 w-[58%] bg-[#e24b35]" />
            <span className="absolute left-[58%] top-1/2 size-[clamp(7px,1.3cqw,13px)] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#f2eee5]" />
          </div>
          <div className="mt-[2%] flex justify-between font-mono text-[clamp(5px,.9cqw,8px)] uppercase text-white/65">
            <span>33:42</span>
            <span>58:12</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[9%] right-[4%] top-[18%] w-[24%] overflow-hidden bg-[#f2eee5] p-[3%] text-[#11110f]">
        <div className="flex justify-between border-b border-black/25 pb-[7%] font-mono text-[clamp(6px,1cqw,9px)] uppercase text-[#e24b35]">
          <span>Sources</span>
          <span>04 / 12</span>
        </div>
        <div className="mt-[8%] space-y-[7%]">
          {[
            ["04.1", "Municipal map / 1987"],
            ["04.2", "Field audio / east bank"],
            ["04.3", "Witness log / I. Han"],
            ["04.4", "Boundary revision / 2002"],
          ].map(([number, source], index) => (
            <div
              key={number}
              className={`grid grid-cols-[auto_1fr] gap-[7%] border-b border-black/15 pb-[6%] ${index === 1 ? "text-[#e24b35]" : ""}`}
            >
              <span className="font-mono text-[clamp(6px,1cqw,9px)] font-bold">{number}</span>
              <span className="text-[clamp(7px,1.25cqw,11px)] leading-[1.2]">{source}</span>
            </div>
          ))}
        </div>
        <p className="absolute bottom-[6%] left-[12%] right-[12%] border-t border-black/25 pt-[6%] font-serif text-[clamp(9px,1.6cqw,15px)] italic">
          Context stays beside the picture.
        </p>
      </div>
    </ArtDetailFrame>
  );
}

function BackmatterLedgerBoard() {
  return (
    <ArtDetailFrame
      label="Backmatter source ledger and printed research dossier with indexed testimony, map revisions, and editorial annotations"
      aspectClassName="aspect-[4/5]"
      className="@container bg-[#d9d3c6] text-[#11110f] shadow-[0_22px_62px_rgba(58,48,38,.24)]"
    >
      <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(circle,rgba(17,17,15,.3)_0_.65px,transparent_.85px)] [background-size:7px_7px]" />
      <div className="absolute -left-[4%] top-[7%] h-[86%] w-[73%] -rotate-2 overflow-hidden bg-[#f2eee5] px-[7%] py-[6%] shadow-[0_22px_42px_rgba(39,31,24,.28)]">
        <div className="flex items-start justify-between border-b-2 border-[#11110f] pb-[5%]">
          <div>
            <p className="font-mono text-[clamp(6px,1.5cqw,10px)] uppercase tracking-[0.15em] text-[#e24b35]">
              Source ledger / BM-026
            </p>
            <p className="mt-[5%] font-serif text-[clamp(23px,7cqw,49px)] italic leading-[0.8]">
              The water remembers.
            </p>
          </div>
          <span className="text-[clamp(20px,7cqw,46px)] font-black leading-none">04</span>
        </div>
        <div className="mt-[7%] grid grid-cols-[.28fr_1fr_.4fr] border-l border-t border-black/30 font-mono text-[clamp(6px,1.35cqw,9px)] uppercase">
          {[
            "ID",
            "Record",
            "Status",
            "4.1",
            "River survey / plate 7",
            "Verified",
            "4.2",
            "Field audio / 33:42",
            "Open",
            "4.3",
            "Council minutes / 1987",
            "Verified",
            "4.4",
            "Witness correction / 02",
            "Pending",
          ].map((cell, index) => (
            <span
              key={`${cell}-${index}`}
              className={`min-w-0 border-b border-r border-black/30 p-[9%] ${index > 2 && index % 3 === 2 ? "text-[#e24b35]" : ""}`}
            >
              {cell}
            </span>
          ))}
        </div>
        <div className="mt-[8%] grid grid-cols-[1fr_auto] items-end gap-[5%] border-t border-black/25 pt-[6%]">
          <p className="font-serif text-[clamp(10px,2.8cqw,20px)] italic leading-[1.1]">
            A claim is only as strong as the trail left beside it.
          </p>
          <span className="grid size-[clamp(38px,11cqw,78px)] rotate-[-8deg] place-items-center rounded-full border-[clamp(2px,.5cqw,4px)] border-[#e24b35] font-mono text-[clamp(7px,1.7cqw,12px)] font-bold text-[#e24b35]">
            CHECKED
          </span>
        </div>
      </div>

      <div className="absolute bottom-[8%] right-[4%] h-[66%] w-[31%] rotate-3 overflow-hidden bg-[#11110f] p-[5%] text-[#f2eee5] shadow-[0_16px_36px_rgba(39,31,24,.34)]">
        <p className="font-mono text-[clamp(6px,1.4cqw,9px)] uppercase text-[#e24b35]">
          Field insert
        </p>
        <div className="mt-[14%] aspect-[4/5] bg-[linear-gradient(145deg,#777064_0_31%,#26241f_32%_65%,#b4aa99_66%)]" />
        <p className="mt-[10%] text-[clamp(10px,3.3cqw,22px)] font-bold leading-[0.92]">
          EAST BANK / FRAME 118
        </p>
        <div className="mt-[12%] space-y-[5%]">
          <span className="block h-px bg-white/50" />
          <span className="block h-px w-[74%] bg-white/35" />
          <span className="block h-px w-[86%] bg-[#e24b35]" />
        </div>
      </div>
    </ArtDetailFrame>
  );
}

function BackmatterScreeningBoard() {
  return (
    <ArtDetailFrame
      label="Backmatter cinema screening campaign with monumental typographic posters, venue bill, and numbered press credential"
      aspectClassName="aspect-[4/5]"
      className="@container bg-[#e24b35] text-[#f2eee5] shadow-[0_22px_62px_rgba(91,39,29,.28)]"
    >
      <p className="absolute -right-[2%] -top-[2%] font-serif text-[clamp(64px,22cqw,148px)] italic leading-none text-[#11110f]/12">
        04
      </p>
      <div className="absolute left-[5%] top-[7%] h-[63%] w-[53%] -rotate-2 overflow-hidden bg-[#11110f] p-[6%] shadow-[0_22px_42px_rgba(54,20,15,.35)]">
        <p className="font-mono text-[clamp(6px,1.45cqw,9px)] uppercase tracking-[0.16em] text-[#e24b35]">
          One-night screening / Hall 02
        </p>
        <p className="mt-[14%] break-words text-[clamp(29px,10cqw,68px)] font-black leading-[0.68] tracking-[-0.09em]">
          BACK
          <br />
          MATTER
        </p>
        <p className="absolute bottom-[8%] left-[10%] right-[10%] border-t border-white/35 pt-[5%] font-serif text-[clamp(10px,2.5cqw,18px)] italic">
          The record enters the room with the film.
        </p>
      </div>

      <div className="absolute right-[5%] top-[13%] h-[43%] w-[34%] rotate-3 overflow-hidden bg-[#f2eee5] p-[6%] text-[#11110f] shadow-[0_16px_36px_rgba(54,20,15,.28)]">
        <div className="flex justify-between font-mono text-[clamp(6px,1.3cqw,9px)] uppercase">
          <span>Venue bill</span>
          <span>18:40</span>
        </div>
        <div className="my-[12%] h-px bg-black/30" />
        <p className="font-serif text-[clamp(15px,4.7cqw,31px)] italic leading-[0.9]">
          Border Water
          <br />+ live record
        </p>
        <div className="absolute bottom-[7%] left-[9%] right-[9%] grid grid-cols-4 gap-[4%]">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((bar) => (
            <span
              key={bar}
              className={`h-[clamp(7px,2cqw,14px)] ${bar % 3 ? "bg-[#11110f]" : "bg-[#e24b35]"}`}
            />
          ))}
        </div>
      </div>

      <div className="absolute bottom-[6%] right-[8%] h-[39%] w-[38%] rotate-[-4deg] overflow-hidden bg-[#d9d3c6] p-[5%] text-[#11110f] shadow-[0_16px_38px_rgba(54,20,15,.32)]">
        <div className="flex justify-between border-b border-black/30 pb-[6%] font-mono text-[clamp(6px,1.35cqw,9px)] uppercase">
          <span>Press access</span>
          <span>0067</span>
        </div>
        <div className="mt-[9%] grid grid-cols-[.55fr_1fr] gap-[8%]">
          <div className="aspect-[3/4] bg-[linear-gradient(135deg,#4e4a43,#a39a8b_48%,#24221f_49%)]" />
          <div>
            <p className="text-[clamp(12px,3.6cqw,24px)] font-black leading-[0.85]">
              OPEN THE RECORD.
            </p>
            <p className="mt-[15%] font-mono text-[clamp(6px,1.3cqw,9px)] uppercase leading-[1.5]">
              Screening 04
              <br />
              Source room
              <br />
              Level 02
            </p>
          </div>
        </div>
        <span className="absolute -right-[6%] -top-[10%] size-[clamp(36px,12cqw,80px)] rounded-full border-[clamp(5px,1.6cqw,11px)] border-[#e24b35]/60" />
      </div>
    </ArtDetailFrame>
  );
}

export function BackmatterWorld() {
  return (
    <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-[1.15fr_.85fr] sm:gap-5">
      <div className="min-w-0 sm:col-span-2">
        <BackmatterHero />
      </div>
      <BackmatterStreamingBoard />
      <BackmatterLedgerBoard />
      <BackmatterScreeningBoard />
    </div>
  );
}

function SeamframeAssemblyBoard() {
  return (
    <ArtDetailFrame
      label="Seamframe modular housing assembly study with exploded timber volumes, shared seam diagram, and numbered joint sequence"
      aspectClassName="aspect-[5/4] sm:aspect-[16/7]"
      className="@container bg-[#f0eadc] text-[#173527] shadow-[0_22px_62px_rgba(48,73,45,.25)] sm:col-span-2"
    >
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(23,53,39,.24)_1px,transparent_1px),linear-gradient(90deg,rgba(23,53,39,.24)_1px,transparent_1px)] [background-size:6.25%_12.5%]" />
      <div className="absolute inset-x-[4%] top-[6%] flex justify-between border-b border-[#173527]/40 pb-[2%] font-mono text-[clamp(6px,1.1cqw,10px)] uppercase tracking-[0.16em]">
        <span>SF-H2 / Assembly sequence</span>
        <span>Grid 2.4 m / Joint 04</span>
      </div>

      <div className="absolute bottom-[10%] left-[4%] top-[19%] w-[58%] overflow-hidden border border-[#173527]/35 bg-[#f5f0e5]/75">
        <div className="absolute left-[4%] top-[6%] h-[72%] w-[46%] text-[#173527]">
          <FoldDiagram />
        </div>
        <div className="absolute right-[5%] top-[13%] grid h-[58%] w-[39%] grid-cols-2 gap-[7%]">
          {[0, 1, 2, 3].map((module) => (
            <div
              key={module}
              className={`relative border-2 border-[#173527] ${module === 2 ? "translate-x-[10%] -translate-y-[8%] bg-[#e66e43]" : "bg-[#b8c49a]"}`}
            >
              <span className="absolute left-[10%] top-[10%] font-mono text-[clamp(5px,.9cqw,8px)]">
                0{module + 1}
              </span>
              <span className="absolute bottom-[13%] left-[14%] h-[42%] w-[28%] border border-[#173527]" />
            </div>
          ))}
        </div>
        <p className="absolute bottom-[6%] left-[5%] text-[clamp(17px,4cqw,40px)] font-black leading-[0.75] tracking-[-0.06em]">
          TWO MODULES.
          <br />
          ONE SHARED SEAM.
        </p>
      </div>

      <div className="absolute bottom-[10%] right-[4%] top-[19%] w-[30%] overflow-hidden bg-[#173527] p-[3%] text-[#f0eadc]">
        <p className="font-mono text-[clamp(6px,1.05cqw,9px)] uppercase text-[#e66e43]">
          Joint order / 01—04
        </p>
        <div className="mt-[9%] space-y-[5%]">
          {[
            ["01", "Set primary frame"],
            ["02", "Lock service spine"],
            ["03", "Join shared threshold"],
            ["04", "Close weather seam"],
          ].map(([number, action], index) => (
            <div
              key={number}
              className={`grid grid-cols-[auto_1fr] items-center gap-[7%] border-b border-white/20 pb-[5%] ${index === 2 ? "text-[#e66e43]" : ""}`}
            >
              <span className="text-[clamp(16px,3cqw,30px)] font-black">{number}</span>
              <span className="font-mono text-[clamp(6px,1cqw,9px)] uppercase leading-[1.4]">
                {action}
              </span>
            </div>
          ))}
        </div>
        <div className="absolute bottom-[7%] left-[10%] right-[10%] grid grid-cols-7 gap-[3%]">
          {[0, 1, 2, 3, 4, 5, 6].map((layer) => (
            <span
              key={layer}
              className={`h-[clamp(20px,4.5cqw,48px)] ${layer === 3 ? "bg-[#e66e43]" : "bg-[#f0eadc]"}`}
            />
          ))}
        </div>
      </div>
    </ArtDetailFrame>
  );
}

function SeamframeSiteBoard() {
  return (
    <ArtDetailFrame
      label="Seamframe construction site wrap and environmental signage applied to a mass-timber housing assembly"
      aspectClassName="aspect-[4/5]"
      className="@container bg-[#b8c49a] text-[#173527] shadow-[0_22px_62px_rgba(48,73,45,.24)]"
    >
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(23,53,39,.24)_1px,transparent_1px),linear-gradient(90deg,rgba(23,53,39,.24)_1px,transparent_1px)] [background-size:10%_8.333%]" />
      <p className="absolute left-[5%] top-[5%] font-mono text-[clamp(6px,1.5cqw,10px)] uppercase tracking-[0.16em]">
        Site 04 / East elevation
      </p>
      <div className="absolute bottom-[8%] left-[5%] h-[74%] w-[68%] overflow-hidden bg-[#876c4d] shadow-[0_22px_42px_rgba(48,73,45,.3)]">
        <div className="grid h-full grid-cols-5 grid-rows-6 gap-[2%] bg-[#5c4a37] p-[2%]">
          {Array.from({ length: 30 }, (_, index) => (
            <span
              key={index}
              className={`${index % 6 === 0 ? "bg-[#e2b274]" : index % 4 === 0 ? "bg-[#b88a5a]" : "bg-[#c99b67]"}`}
            />
          ))}
        </div>
        <div className="absolute -left-[8%] top-[31%] flex h-[31%] w-[116%] -rotate-6 items-center justify-center bg-[#e66e43]">
          <p className="text-[clamp(34px,13cqw,84px)] font-black leading-none tracking-[-0.08em] text-[#173527]">
            SEAM / FRAME
          </p>
        </div>
      </div>

      <div className="absolute right-[5%] top-[12%] h-[50%] w-[29%] rotate-2 overflow-hidden bg-[#173527] p-[5%] text-[#f0eadc] shadow-[0_16px_36px_rgba(48,73,45,.33)]">
        <p className="font-mono text-[clamp(6px,1.35cqw,9px)] uppercase text-[#e66e43]">
          Gate B / public route
        </p>
        <p className="mt-[16%] text-[clamp(21px,7cqw,46px)] font-black leading-[0.72]">
          ENTRY
          <br />→
        </p>
        <div className="mt-[18%] border-t border-white/30 pt-[10%] font-mono text-[clamp(6px,1.3cqw,9px)] uppercase leading-[1.55]">
          Viewing deck
          <br />
          Material return
          <br />
          Resident studio
        </div>
      </div>

      <div className="absolute bottom-[6%] right-[5%] w-[36%] -rotate-2 bg-[#f0eadc] p-[4%] shadow-[0_16px_35px_rgba(48,73,45,.28)]">
        <div className="flex justify-between font-mono text-[clamp(6px,1.3cqw,9px)] uppercase">
          <span>Neighbour notice</span>
          <span>Week 18</span>
        </div>
        <p className="mt-[9%] text-[clamp(12px,3.6cqw,24px)] font-black leading-[0.86]">
          BUILT IN PARTS.
          <br />
          OPEN AS IT GROWS.
        </p>
        <div className="mt-[10%] grid grid-cols-5 gap-[4%]">
          {[0, 1, 2, 3, 4].map((part) => (
            <span
              key={part}
              className={`aspect-[1/2] ${part === 3 ? "bg-[#e66e43]" : "bg-[#173527]"}`}
            />
          ))}
        </div>
      </div>
    </ArtDetailFrame>
  );
}

function SeamframeResidentBoard() {
  return (
    <ArtDetailFrame
      label="Seamframe resident planning interface paired with a circular material passport for repairable timber components"
      aspectClassName="aspect-[4/5]"
      className="@container bg-[#173527] text-[#f0eadc] shadow-[0_22px_62px_rgba(23,53,39,.3)]"
    >
      <div className="absolute -right-[24%] -top-[18%] size-[75%] rounded-full border-[clamp(18px,6cqw,48px)] border-[#e66e43]/25" />
      <div className="absolute inset-x-[6%] top-[6%] flex justify-between border-b border-white/25 pb-[3%] font-mono text-[clamp(6px,1.4cqw,9px)] uppercase tracking-[0.15em]">
        <span>Resident system / 4B</span>
        <span>Plan state / 03</span>
      </div>

      <div className="absolute left-[6%] top-[17%] h-[48%] w-[88%] overflow-hidden bg-[#f0eadc] p-[5%] text-[#173527]">
        <div className="flex items-end justify-between">
          <p className="text-[clamp(19px,6cqw,40px)] font-black leading-[0.78]">
            YOUR HOME, IN PARTS.
          </p>
          <span className="font-mono text-[clamp(6px,1.3cqw,9px)] uppercase">86 m² / option C</span>
        </div>
        <div className="mt-[7%] grid h-[57%] grid-cols-[1.2fr_.8fr_1fr] grid-rows-2 gap-[2%] bg-[#173527] p-[2%]">
          {[
            ["LIVING", "bg-[#b8c49a] row-span-2"],
            ["STUDIO", "bg-[#e66e43]"],
            ["GARDEN", "bg-[#d8c7aa]"],
            ["KITCHEN", "bg-[#c99b67]"],
            ["GUEST", "bg-[#b8c49a]"],
          ].map(([room, tone]) => (
            <div key={room} className={`${tone} relative min-w-0 p-[7%]`}>
              <span className="font-mono text-[clamp(5px,1.1cqw,8px)] uppercase">{room}</span>
              <span className="absolute bottom-[10%] right-[10%] size-[18%] border border-[#173527]" />
            </div>
          ))}
        </div>
      </div>

      <div className="absolute bottom-[6%] left-[6%] right-[6%] grid h-[24%] grid-cols-[.8fr_1.2fr] overflow-hidden bg-[#e66e43] text-[#173527] shadow-[0_16px_38px_rgba(0,0,0,.28)]">
        <div className="p-[7%]">
          <div className="flex justify-between font-mono text-[clamp(6px,1.2cqw,9px)] uppercase">
            <span>Material passport</span>
            <span>CLT / 03</span>
          </div>
          <div className="mt-[10%] grid grid-cols-6 gap-[4%]">
            {[
              "bg-[#7d5435]",
              "bg-[#c69765]",
              "bg-[#e1b37a]",
              "bg-[#9c6c43]",
              "bg-[#d0a06b]",
              "bg-[#6f492f]",
            ].map((tone) => (
              <span key={tone} className={`${tone} aspect-[1/2]`} />
            ))}
          </div>
        </div>
        <div className="border-l border-[#173527]/35 p-[6%]">
          <p className="text-[clamp(13px,4cqw,27px)] font-black leading-[0.82]">
            DESIGNED TO COME APART.
          </p>
          <div className="mt-[8%] flex justify-between font-mono text-[clamp(5px,1.1cqw,8px)] uppercase">
            <span>Repair / 02</span>
            <span>Return / 04</span>
            <span>Reuse / 07</span>
          </div>
        </div>
      </div>
    </ArtDetailFrame>
  );
}

export function SeamframeWorld() {
  return (
    <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-[.9fr_1.1fr] sm:gap-4">
      <div className="min-w-0 sm:col-span-2">
        <SeamframeHero />
      </div>
      <SeamframeAssemblyBoard />
      <SeamframeSiteBoard />
      <SeamframeResidentBoard />
    </div>
  );
}

function TwoShoresAppBoard() {
  return (
    <ArtDetailFrame
      label="Two Shores cross-border transfer app with paired Canadian-dollar and Korean-won account views and a shared member balance"
      aspectClassName="aspect-[4/5]"
      className="@container bg-[#a8dfd3] text-[#0b2c38] shadow-[0_22px_62px_rgba(18,85,91,.24)]"
    >
      <div className="absolute -left-[30%] top-[35%] h-[45%] w-[110%] rounded-[50%] border-[clamp(22px,8cqw,58px)] border-[#ff6d55]/25" />
      <div className="absolute inset-x-[6%] top-[6%] flex justify-between border-b border-[#0b2c38]/30 pb-[3%] font-mono text-[clamp(6px,1.45cqw,9px)] uppercase tracking-[0.16em]">
        <span>Two Shores / member app</span>
        <span>Toronto ↔ Seoul</span>
      </div>
      <ShoreGlyph className="absolute left-[8%] top-[17%] h-[11%] w-[42%] text-[#ff6d55]" />
      <p className="absolute right-[5%] top-[16%] max-w-[7ch] text-right text-[clamp(20px,6.5cqw,43px)] font-black leading-[0.74] tracking-[-0.06em]">
        BOTH SIDES, OPEN.
      </p>

      <div className="absolute bottom-[7%] left-[7%] h-[59%] w-[39%] -rotate-2 overflow-hidden rounded-t-[clamp(16px,5cqw,34px)] bg-[#0b2c38] p-[5%] text-[#f8f0da] shadow-[0_20px_42px_rgba(11,44,56,.36)]">
        <div className="mx-auto h-[1.5%] w-[25%] rounded-full bg-white/25" />
        <p className="mt-[12%] font-mono text-[clamp(6px,1.3cqw,9px)] uppercase text-white/60">
          Canadian account
        </p>
        <p className="mt-[5%] text-[clamp(20px,6.5cqw,43px)] font-black leading-none">$ 2,480</p>
        <div className="mt-[10%] rounded-[clamp(8px,2cqw,15px)] bg-[#a8dfd3] p-[8%] text-[#0b2c38]">
          <div className="flex justify-between font-mono text-[clamp(5px,1.15cqw,8px)] uppercase">
            <span>Send to</span>
            <span>KRW</span>
          </div>
          <p className="mt-[7%] text-[clamp(13px,4.2cqw,28px)] font-black">₩ 840,000</p>
        </div>
        <div className="mt-[8%] bg-[#ff6d55] p-[6%] text-center font-mono text-[clamp(6px,1.3cqw,9px)] font-bold uppercase text-[#0b2c38]">
          Review transfer →
        </div>
      </div>

      <div className="absolute bottom-[7%] right-[7%] h-[52%] w-[39%] rotate-3 overflow-hidden rounded-t-[clamp(16px,5cqw,34px)] bg-[#f8f0da] p-[5%] text-[#0b2c38] shadow-[0_18px_40px_rgba(11,44,56,.3)]">
        <div className="mx-auto h-[1.5%] w-[25%] rounded-full bg-black/20" />
        <p
          lang="ko"
          className="font-ko-sans mt-[12%] text-[clamp(6px,1.3cqw,9px)] text-black/55 tracking-normal"
        >
          한국 계좌 / 사용 가능
        </p>
        <p className="mt-[5%] text-[clamp(18px,5.7cqw,38px)] font-black leading-none">₩ 1.24M</p>
        <div className="mt-[10%] grid grid-cols-2 gap-[5%]">
          {[
            ["받기", "bg-[#a8dfd3]"],
            ["보내기", "bg-[#ff6d55]"],
            ["환율", "bg-[#ded8c8]"],
            ["기록", "bg-[#ded8c8]"],
          ].map(([label, tone]) => (
            <div key={label} lang="ko" className={`font-ko-sans ${tone} p-[10%]`}>
              <span className="text-[clamp(6px,1.25cqw,9px)] font-bold tracking-normal">
                {label}
              </span>
            </div>
          ))}
        </div>
        <ShoreGlyph className="absolute bottom-[8%] left-[8%] h-[12%] w-[42%] text-[#ff6d55]" />
      </div>
    </ArtDetailFrame>
  );
}

function TwoShoresMemberBoard() {
  return (
    <ArtDetailFrame
      label="Two Shores cooperative member card and bilingual transfer receipt linking Toronto and Seoul accounts"
      aspectClassName="aspect-[4/5]"
      className="@container bg-[#f8f0da] text-[#0b2c38] shadow-[0_22px_62px_rgba(18,85,91,.2)]"
    >
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(11,44,56,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(11,44,56,.18)_1px,transparent_1px)] [background-size:12.5%_10%]" />
      <p className="absolute left-[6%] top-[5%] font-mono text-[clamp(6px,1.4cqw,9px)] uppercase tracking-[0.16em]">
        Member objects / issue 024
      </p>

      <div className="absolute left-[5%] top-[15%] h-[36%] w-[78%] -rotate-3 overflow-hidden rounded-[clamp(10px,3cqw,22px)] bg-[#ff6d55] p-[6%] shadow-[0_20px_40px_rgba(11,44,56,.3)]">
        <div className="flex justify-between font-mono text-[clamp(6px,1.3cqw,9px)] uppercase">
          <span>Two Shores / member co-op</span>
          <span>024</span>
        </div>
        <ShoreGlyph className="mt-[8%] h-[28%] w-[48%]" />
        <p className="absolute bottom-[9%] left-[8%] text-[clamp(14px,4.3cqw,29px)] font-black uppercase leading-[0.86]">
          Two accounts.
          <br />
          One membership.
        </p>
        <span className="absolute bottom-[9%] right-[7%] font-mono text-[clamp(6px,1.3cqw,9px)] uppercase">
          Valid / 29
        </span>
      </div>

      <div className="absolute bottom-[5%] right-[5%] h-[68%] w-[46%] rotate-2 overflow-hidden bg-white p-[6%] shadow-[0_18px_38px_rgba(11,44,56,.25)]">
        <div className="flex justify-between border-b border-black/30 pb-[6%] font-mono text-[clamp(5px,1.2cqw,8px)] uppercase">
          <span>
            Transfer /{" "}
            <span lang="ko" className="font-ko-sans normal-case tracking-normal">
              송금
            </span>
          </span>
          <span>TS-260417</span>
        </div>
        <div className="mt-[9%] space-y-[7%] font-mono text-[clamp(6px,1.25cqw,9px)] uppercase">
          <div className="flex justify-between">
            <span>From</span>
            <span>Toronto</span>
          </div>
          <div className="flex justify-between">
            <span>To</span>
            <span>Seoul</span>
          </div>
          <div className="flex justify-between">
            <span>Sent</span>
            <span>CAD 842</span>
          </div>
          <div className="flex justify-between">
            <span>Received</span>
            <span>KRW 840K</span>
          </div>
        </div>
        <div className="my-[10%] border-y border-dashed border-black/35 py-[8%]">
          <p
            lang="ko"
            className="font-ko-sans text-[clamp(11px,3.6cqw,24px)] font-black leading-[1] tracking-[-0.025em]"
          >
            양쪽에서
            <br />
            같이 확인했습니다.
          </p>
        </div>
        <div className="grid grid-cols-11 gap-[2%]">
          {Array.from({ length: 33 }, (_, index) => (
            <span
              key={index}
              className={`h-[clamp(5px,1.2cqw,9px)] ${index % 4 ? "bg-[#0b2c38]" : "bg-[#ff6d55]"}`}
            />
          ))}
        </div>
        <ShoreGlyph className="absolute bottom-[5%] right-[8%] h-[7%] w-[28%] text-[#ff6d55]" />
      </div>

      <div className="absolute bottom-[7%] left-[6%] w-[38%] -rotate-2 bg-[#a8dfd3] p-[5%] shadow-[0_15px_34px_rgba(11,44,56,.22)]">
        <p className="font-mono text-[clamp(6px,1.3cqw,9px)] uppercase">Co-op note</p>
        <p className="mt-[9%] text-[clamp(12px,3.7cqw,25px)] font-black leading-[0.88]">
          NO HIDDEN SHORE.
        </p>
        <p className="mt-[10%] font-mono text-[clamp(5px,1.15cqw,8px)] uppercase leading-[1.45]">
          Rate, fee, and arrival shown together.
        </p>
      </div>
    </ArtDetailFrame>
  );
}

function TwoShoresCampaignBoard() {
  return (
    <ArtDetailFrame
      label="Two Shores bilingual public transit campaign presenting transparent cross-border fees across Toronto and Seoul"
      aspectClassName="aspect-[5/4] sm:aspect-[16/7]"
      className="@container bg-[#0b2c38] text-[#f8f0da] shadow-[0_22px_62px_rgba(11,44,56,.32)] sm:col-span-2"
    >
      <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.17)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.17)_1px,transparent_1px)] [background-size:8.333%_16.666%]" />
      <ShoreGlyph className="absolute -left-[8%] top-[17%] h-[55%] w-[62%] text-[#ff6d55]" />
      <p className="absolute left-[5%] top-[7%] font-mono text-[clamp(6px,1.2cqw,10px)] uppercase tracking-[0.18em] text-[#a8dfd3]">
        Public campaign / Line 02
      </p>
      <p className="absolute bottom-[9%] left-[5%] max-w-[8ch] text-[clamp(27px,6.8cqw,70px)] font-black leading-[0.7] tracking-[-0.075em]">
        MONEY SHOULD KNOW BOTH SIDES.
      </p>

      <div className="absolute right-[5%] top-[8%] h-[82%] w-[44%] overflow-hidden bg-[#f8f0da] text-[#0b2c38] shadow-[0_22px_46px_rgba(0,0,0,.35)]">
        <div className="grid h-full grid-cols-2">
          <div className="relative border-r border-[#0b2c38]/25 p-[8%]">
            <p className="font-mono text-[clamp(5px,1.05cqw,8px)] uppercase">Toronto / Westbound</p>
            <p className="mt-[18%] text-[clamp(16px,3.7cqw,37px)] font-black leading-[0.78]">
              SEE THE FEE BEFORE IT CROSSES.
            </p>
            <div className="absolute bottom-[9%] left-[12%] right-[12%] bg-[#ff6d55] p-[8%] font-mono text-[clamp(5px,1cqw,8px)] font-bold uppercase">
              CAD 842 → KRW 840K
            </div>
          </div>
          <div className="relative bg-[#a8dfd3] p-[8%]">
            <p lang="ko" className="font-ko-sans text-[clamp(5px,1.05cqw,8px)] tracking-normal">
              서울 / 동행 방향
            </p>
            <p
              lang="ko"
              className="font-ko-sans mt-[18%] text-[clamp(17px,4cqw,39px)] font-black leading-[1] tracking-[-0.025em]"
            >
              건너가기 전에
              <br />
              모두 보여요.
            </p>
            <ShoreGlyph className="absolute bottom-[10%] left-[12%] h-[17%] w-[58%] text-[#ff6d55]" />
          </div>
        </div>
      </div>
    </ArtDetailFrame>
  );
}

export function TwoShoresWorld() {
  return (
    <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-[.78fr_1.22fr] sm:gap-4">
      <div className="min-w-0 sm:col-span-2">
        <TwoShoresHero />
      </div>
      <TwoShoresAppBoard />
      <TwoShoresMemberBoard />
      <TwoShoresCampaignBoard />
    </div>
  );
}

function ColdkilnFacadeBoard() {
  return (
    <ArtDetailFrame
      label="Coldkiln unfired facade system and mineral sample library arranged as a full-scale material elevation"
      aspectClassName="aspect-[5/4] sm:aspect-[16/7]"
      className="@container bg-[#171a19] text-white shadow-[0_22px_62px_rgba(52,51,48,.32)] sm:col-span-2"
    >
      <div className="absolute inset-0 opacity-25 [background-image:radial-gradient(circle,rgba(255,255,255,.25)_0_.6px,transparent_.8px)] [background-size:7px_7px]" />
      <div className="absolute inset-x-[4%] top-[6%] flex justify-between border-b border-white/25 pb-[2%] font-mono text-[clamp(6px,1.1cqw,10px)] uppercase tracking-[0.17em]">
        <span>Coldkiln / Facade C-12</span>
        <span>Pressed / cured / returned</span>
      </div>
      <div className="absolute bottom-[9%] left-[4%] top-[18%] w-[66%] overflow-hidden bg-[#777a76] p-[1%]">
        <div className="grid h-full grid-cols-7 grid-rows-4 gap-[1%]">
          {[
            "bg-[#bbb8ad]",
            "bg-[#8d8e89]",
            "bg-[#d8d3c6]",
            "bg-[#a7573f]",
            "bg-[#777a76]",
            "bg-[#c8c5bb]",
            "bg-[#2353d3]",
          ].flatMap((tone, row) =>
            Array.from({ length: 4 }, (_, column) => (
              <span
                key={`${row}-${column}`}
                className={`${column === 2 && row === 4 ? "bg-[#2353d3]" : tone} shadow-[inset_0_0_0_1px_rgba(0,0,0,.16)]`}
              />
            )),
          )}
        </div>
        <p className="absolute bottom-[5%] left-[4%] max-w-[7ch] text-[clamp(20px,4.8cqw,48px)] font-black leading-[0.72] tracking-[-0.06em]">
          MADE COLD. BUILT LONG.
        </p>
      </div>

      <div className="absolute bottom-[9%] right-[4%] top-[18%] w-[24%] overflow-hidden bg-[#d7d5ce] p-[3%] text-[#171a19]">
        <div className="flex justify-between font-mono text-[clamp(6px,1cqw,9px)] uppercase text-[#2353d3]">
          <span>Sample library</span>
          <span>01—06</span>
        </div>
        <div className="mt-[10%] grid grid-cols-2 gap-[8%]">
          <MaterialDot tone="bg-[#d7d5ce]" />
          <MaterialDot tone="bg-[#8d8e89]" />
          <MaterialDot tone="bg-[#a7573f]" />
          <MaterialDot tone="bg-[#bcb9ae]" />
          <MaterialDot tone="bg-[#6f716d]" />
          <MaterialDot tone="bg-[#e1ded4]" />
        </div>
        <p className="mt-[13%] text-[clamp(12px,2.7cqw,27px)] font-black leading-[0.82]">
          MINERAL, WITHOUT FIRE.
        </p>
        <div className="absolute bottom-[6%] left-[12%] right-[12%] border-t border-black/25 pt-[6%] font-mono text-[clamp(5px,.95cqw,8px)] uppercase leading-[1.4]">
          Batch C / 12
          <br />
          Finish / none
        </div>
      </div>
    </ArtDetailFrame>
  );
}

function ColdkilnSpecBoard() {
  return (
    <ArtDetailFrame
      label="Coldkiln technical specification sheet documenting unfired panel dimensions, mineral composition, joints, and return cycle"
      aspectClassName="aspect-[4/5]"
      className="@container bg-[#ece9e0] text-[#171a19] shadow-[0_22px_62px_rgba(70,69,64,.24)]"
    >
      <div className="absolute inset-0 opacity-35 [background-image:linear-gradient(rgba(23,26,25,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(23,26,25,.18)_1px,transparent_1px)] [background-size:10%_8.333%]" />
      <div className="absolute inset-[6%] overflow-hidden border border-black/35 bg-[#f4f1e9]/85 p-[5%]">
        <div className="flex justify-between border-b-2 border-black pb-[4%] font-mono text-[clamp(6px,1.35cqw,9px)] uppercase">
          <span>Specification / C12</span>
          <span>Rev. 03 / 2026</span>
        </div>
        <div className="mt-[6%] grid h-[45%] grid-cols-[1.25fr_.75fr] gap-[6%]">
          <div className="relative border border-black/30">
            <div className="absolute left-[14%] top-[16%] h-[58%] w-[68%] bg-[#9c9d99] shadow-[inset_0_0_0_1px_rgba(0,0,0,.24)]" />
            <span className="absolute left-[10%] top-[7%] h-px w-[76%] bg-[#2353d3]" />
            <span className="absolute left-[10%] top-[4%] font-mono text-[clamp(5px,1.1cqw,8px)] text-[#2353d3]">
              600 MM
            </span>
            <span className="absolute right-[5%] top-[13%] h-[66%] w-px bg-[#2353d3]" />
            <span className="absolute right-[2%] top-[46%] -rotate-90 font-mono text-[clamp(5px,1.1cqw,8px)] text-[#2353d3]">
              900 MM
            </span>
            <div className="absolute bottom-[5%] left-[8%] right-[8%] flex justify-between font-mono text-[clamp(5px,1.05cqw,8px)] uppercase">
              <span>Face / mineral</span>
              <span>Depth / 42</span>
            </div>
          </div>
          <div className="flex flex-col justify-between bg-[#2353d3] p-[8%] text-white">
            <p className="font-mono text-[clamp(6px,1.2cqw,9px)] uppercase">Material logic</p>
            <p className="text-[clamp(16px,4.8cqw,32px)] font-black leading-[0.78]">
              NO KILN. NO COATING.
            </p>
            <p className="font-mono text-[clamp(5px,1.1cqw,8px)] uppercase leading-[1.45]">
              Press 08h
              <br />
              Cure 14d
              <br />
              Return 01
            </p>
          </div>
        </div>
        <div className="mt-[6%] grid grid-cols-[.8fr_1.2fr] gap-[6%] border-t border-black/30 pt-[5%]">
          <div>
            <p className="font-mono text-[clamp(6px,1.25cqw,9px)] uppercase text-[#2353d3]">
              Composition
            </p>
            <div className="mt-[10%] grid grid-cols-3 gap-[7%]">
              <MaterialDot tone="bg-[#8d8e89]" />
              <MaterialDot tone="bg-[#a7573f]" />
              <MaterialDot tone="bg-[#d7d5ce]" />
            </div>
          </div>
          <div className="font-mono text-[clamp(5px,1.15cqw,8px)] uppercase">
            {[
              ["Aggregate", "62%"],
              ["Binder", "18%"],
              ["Recovered fines", "20%"],
              ["Surface coating", "0%"],
            ].map(([key, value]) => (
              <div key={key} className="flex justify-between border-b border-black/20 py-[4%]">
                <span>{key}</span>
                <span>{value}</span>
              </div>
            ))}
          </div>
        </div>
        <p className="absolute bottom-[4%] left-[6%] right-[6%] text-[clamp(13px,3.9cqw,27px)] font-black uppercase leading-[0.8]">
          Specify the cycle, not the finish.
        </p>
      </div>
    </ArtDetailFrame>
  );
}

function ColdkilnReturnBoard() {
  return (
    <ArtDetailFrame
      label="Coldkiln returnable construction-site pack with reusable crates, batch labels, panel inventory, and closed-loop handling instructions"
      aspectClassName="aspect-[4/5]"
      className="@container bg-[#2353d3] text-white shadow-[0_22px_62px_rgba(35,83,211,.25)]"
    >
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:12.5%_10%]" />
      <p className="absolute left-[6%] top-[5%] font-mono text-[clamp(6px,1.4cqw,9px)] uppercase tracking-[0.16em]">
        Return system / Site pack C12
      </p>
      <p className="absolute right-[4%] top-[3%] text-[clamp(42px,14cqw,92px)] font-black leading-none tracking-[-0.09em] text-white/15">
        ↺
      </p>

      <div className="absolute left-[6%] top-[16%] h-[46%] w-[88%] -rotate-2 overflow-hidden bg-[#a7573f] p-[4%] shadow-[0_22px_42px_rgba(20,41,105,.36)]">
        <div className="grid h-full grid-cols-[1.35fr_.65fr] gap-[4%]">
          <div className="grid grid-cols-3 grid-rows-2 gap-[2%] bg-[#6f3d2f] p-[2%]">
            {Array.from({ length: 6 }, (_, index) => (
              <div
                key={index}
                className="relative bg-[#9c9d99] shadow-[inset_0_0_0_1px_rgba(0,0,0,.22)]"
              >
                <span className="absolute left-[7%] top-[7%] font-mono text-[clamp(5px,1cqw,8px)] text-[#171a19]">
                  C{String(index + 1).padStart(2, "0")}
                </span>
              </div>
            ))}
          </div>
          <div className="flex flex-col justify-between border border-white/40 p-[8%]">
            <p className="font-mono text-[clamp(6px,1.2cqw,9px)] uppercase">Crate 04 / 18</p>
            <p className="text-[clamp(16px,4.8cqw,32px)] font-black leading-[0.78]">
              OPEN. INSTALL. RETURN.
            </p>
            <p className="font-mono text-[clamp(5px,1.05cqw,8px)] uppercase">
              No single-use wrap
              <br />
              Scan before close
            </p>
          </div>
        </div>
      </div>

      <div className="absolute bottom-[6%] left-[8%] h-[34%] w-[42%] rotate-2 overflow-hidden bg-[#ece9e0] p-[5%] text-[#171a19] shadow-[0_16px_36px_rgba(20,41,105,.3)]">
        <div className="flex justify-between border-b border-black/30 pb-[5%] font-mono text-[clamp(6px,1.25cqw,9px)] uppercase">
          <span>Batch card</span>
          <span>C12</span>
        </div>
        <div className="mt-[8%] grid grid-cols-4 gap-[4%]">
          {[0, 1, 2, 3, 4, 5, 6, 7].map((panel) => (
            <span
              key={panel}
              className={`aspect-[3/2] ${panel === 5 ? "bg-[#a7573f]" : "bg-[#9c9d99]"}`}
            />
          ))}
        </div>
        <p className="mt-[8%] font-mono text-[clamp(5px,1.1cqw,8px)] uppercase leading-[1.4]">
          Delivered 12
          <br />
          Installed 11
          <br />
          Return 01
        </p>
      </div>

      <div className="absolute bottom-[7%] right-[6%] w-[38%] -rotate-3 bg-[#171a19] p-[5%] shadow-[0_16px_38px_rgba(20,41,105,.35)]">
        <p className="font-mono text-[clamp(6px,1.25cqw,9px)] uppercase text-[#d7d5ce]">
          Close the loop / 03
        </p>
        <p className="mt-[9%] text-[clamp(14px,4.3cqw,29px)] font-black leading-[0.8]">
          THE PACK IS PART OF THE PRODUCT.
        </p>
        <div className="mt-[10%] flex items-center justify-between font-mono text-[clamp(5px,1.05cqw,8px)] uppercase text-white/65">
          <span>Site → Yard</span>
          <span className="text-[clamp(20px,6cqw,40px)] text-[#a7573f]">↺</span>
          <span>Yard → Site</span>
        </div>
      </div>
    </ArtDetailFrame>
  );
}

export function ColdkilnWorld() {
  return (
    <div className="grid min-w-0 grid-cols-1 gap-3 sm:grid-cols-[1.25fr_.75fr] sm:gap-5">
      <div className="min-w-0 sm:col-span-2">
        <ColdkilnHero />
      </div>
      <ColdkilnFacadeBoard />
      <ColdkilnSpecBoard />
      <ColdkilnReturnBoard />
    </div>
  );
}
