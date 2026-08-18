import fieldNotesSpecimen from "@/assets/poster-studies/field-notes-specimen.webp";
import nightIndexEditorial from "@/assets/poster-studies/night-index-editorial.webp";
import softMachineMaterial from "@/assets/poster-studies/soft-machine-material.webp";
import { ArtWorldFrame as ArtWorld } from "@/components/poster-studies/ArtWorldFrame";

function RegistrationMark({ className }: { className: string }) {
  return (
    <span className={`absolute block h-[5cqw] w-[5cqw] ${className}`}>
      <span className="absolute left-1/2 top-0 h-full w-px -translate-x-1/2 bg-current" />
      <span className="absolute left-0 top-1/2 h-px w-full -translate-y-1/2 bg-current" />
      <span className="absolute left-1/2 top-1/2 h-[2.8cqw] w-[2.8cqw] -translate-x-1/2 -translate-y-1/2 rounded-full border border-current" />
    </span>
  );
}

function AfterimagePoster() {
  return (
    <div className="@container relative aspect-[3/4] w-full overflow-hidden bg-[#1948cb] text-[#ff5a36]">
      <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle,rgba(255,90,54,0.95)_0_0.75px,transparent_1px)] [background-size:6px_6px]" />
      <div className="absolute -right-[16cqw] top-[9cqw] h-[67cqw] w-[67cqw] rounded-full border-[5cqw] border-[#ff5a36]" />
      <div className="absolute -right-[13.8cqw] top-[10.7cqw] h-[67cqw] w-[67cqw] rounded-full border-[1.1cqw] border-[#f8ead6]/90" />
      <div className="absolute -left-[25cqw] bottom-[11cqw] h-[58cqw] w-[58cqw] rotate-12 bg-[#ff5a36]" />
      <div className="absolute -left-[23.4cqw] bottom-[9.6cqw] h-[58cqw] w-[58cqw] rotate-12 border-[0.8cqw] border-[#f8ead6]/90" />

      <div className="absolute left-[6cqw] top-[7cqw] flex items-center gap-[2cqw] font-mono text-[max(7px,2.2cqw)] font-semibold uppercase tracking-[0.2em] text-[#fff2da]">
        <span>Riso study 01</span>
        <span className="h-px w-[17cqw] bg-[#fff2da]" />
        <span>Two inks</span>
      </div>

      <div className="absolute left-[6cqw] top-[18cqw] -rotate-2">
        <p className="text-[18cqw] font-black leading-[0.72] tracking-[-0.1em] text-[#fff2da]">
          AFTER
        </p>
        <p className="translate-x-[1.2cqw] text-[18cqw] font-black leading-[0.72] tracking-[-0.1em] text-[#ff5a36] mix-blend-screen">
          IMAGE
        </p>
        <p className="-translate-x-[0.9cqw] -translate-y-[15.2cqw] text-[18cqw] font-black leading-[0.72] tracking-[-0.1em] text-[#1a46bd] mix-blend-multiply">
          IMAGE
        </p>
      </div>

      <div className="absolute right-[5cqw] top-[54cqw] grid rotate-90 origin-top-right grid-cols-5 gap-[1.1cqw] font-mono text-[max(6px,1.8cqw)] font-bold tracking-[0.18em] text-[#fff2da]">
        {Array.from({ length: 15 }, (_, index) => (
          <span key={index}>{String(index + 1).padStart(2, "0")}</span>
        ))}
      </div>

      <RegistrationMark className="bottom-[7cqw] right-[7cqw] text-[#fff2da]" />
      <RegistrationMark className="bottom-[8.2cqw] right-[5.8cqw] text-[#ff5a36] mix-blend-screen" />

      <div className="absolute bottom-[6cqw] left-[6cqw] w-[44cqw] text-[#1948cb]">
        <p className="font-serif text-[5.2cqw] font-bold italic leading-[0.92]">
          What remains
          <br />
          after looking.
        </p>
        <p className="mt-[2.4cqw] font-mono text-[max(6px,1.75cqw)] font-semibold uppercase tracking-[0.12em]">
          Cobalt 072 / Fluorescent orange
        </p>
      </div>
    </div>
  );
}

export function AfterimageWorld() {
  return (
    <ArtWorld
      label="Afterimage risograph festival identity shown across a hero poster, programme, and event ticket"
      className="bg-[#101a55] shadow-[0_26px_90px_rgba(16,26,85,0.28)]"
    >
      <div className="absolute inset-0 opacity-25 [background-image:repeating-linear-gradient(100deg,transparent_0_18px,rgba(255,255,255,0.12)_19px_20px)]" />
      <p className="absolute -right-[2%] -top-[8%] font-mono text-[28vw] font-black leading-none tracking-[-0.14em] text-white/[0.045] sm:text-[18vw]">
        01
      </p>

      <div className="absolute left-[7%] top-[6%] w-[57%] -rotate-2 shadow-[0_28px_65px_rgba(0,0,0,0.42)] transition-transform duration-700 ease-out motion-safe:group-hover:-translate-y-2 motion-safe:group-hover:-rotate-3 sm:left-[9%] sm:w-[36%]">
        <AfterimagePoster />
      </div>

      <div className="absolute right-[5%] top-[10%] w-[30%] rotate-3 border border-[#f8ead6]/60 bg-[#ff5a36] p-[3%] text-[#172f9a] shadow-[0_18px_40px_rgba(0,0,0,0.28)] sm:right-[9%] sm:w-[29%] sm:p-[2.2%]">
        <p className="font-mono text-[clamp(7px,1.1vw,12px)] font-bold uppercase tracking-[0.14em]">
          Admit one / 18:30
        </p>
        <div className="my-[8%] border-y-2 border-[#172f9a] py-[7%]">
          <p className="text-[clamp(18px,3.3vw,48px)] font-black leading-[0.74] tracking-[-0.09em]">
            AFTER
            <br />
            IMAGE
          </p>
        </div>
        <p className="font-mono text-[clamp(6px,0.9vw,10px)] uppercase leading-[1.5]">
          Screen 02 · Harbour Arts
          <br />
          Seat is not assigned
        </p>
      </div>

      <div className="absolute bottom-[7%] right-[7%] w-[36%] -rotate-1 bg-[#f8ead6] p-[3%] text-[#1948cb] shadow-[0_20px_45px_rgba(0,0,0,0.3)] sm:w-[32%] sm:p-[2.2%]">
        <div className="grid grid-cols-[1fr_auto] gap-3 border-b border-[#1948cb] pb-[5%]">
          <p className="font-serif text-[clamp(14px,2.2vw,30px)] font-bold italic leading-none">
            Festival
            <br />
            programme
          </p>
          <span className="h-5 w-5 rounded-full bg-[#ff5a36] sm:h-8 sm:w-8" />
        </div>
        <div className="mt-[7%] grid grid-cols-3 gap-2 font-mono text-[clamp(6px,0.75vw,9px)] uppercase leading-[1.5]">
          <p>17:00 Open</p>
          <p>18:30 Film</p>
          <p>21:10 Sound</p>
        </div>
      </div>
    </ArtWorld>
  );
}

function MemoryTypePoster() {
  return (
    <div className="@container relative aspect-[3/4] w-full overflow-hidden bg-[#eee5d2] text-[#191a17]">
      <div className="absolute inset-0 opacity-40 [background-image:radial-gradient(circle_at_18%_16%,rgba(118,78,37,0.18)_0_0.55px,transparent_0.9px)] [background-size:5px_7px]" />
      <div className="absolute inset-[4.5cqw] border border-[#1a1b18]/35" />
      <div className="absolute inset-x-[4.5cqw] top-[13cqw] h-px bg-[#1a1b18]/30" />
      <div className="absolute bottom-[15cqw] left-[4.5cqw] right-[4.5cqw] h-px bg-[#1a1b18]/30" />

      <div className="absolute left-[6.5cqw] top-[6.3cqw] flex items-center gap-[2.3cqw] font-mono text-[max(6px,1.75cqw)] uppercase tracking-[0.16em]">
        <span>Archive no. 26—02</span>
        <span className="h-[1.2cqw] w-[1.2cqw] rounded-full bg-[#b73527]" />
        <span>문학 / 기록 / 활자</span>
      </div>

      <div className="absolute left-[8cqw] top-[20cqw] grid w-[68cqw] grid-cols-2 border-l border-t border-[#1a1b18]">
        {[
          ["기", "01"],
          ["억", "02"],
          ["활", "03"],
          ["자", "04"],
        ].map(([character, number], index) => (
          <div
            key={character}
            className={`relative flex aspect-square items-center justify-center overflow-hidden border-b border-r border-[#1a1b18] ${
              index === 1 || index === 2 ? "bg-[#b73527] text-[#eee5d2]" : "text-[#191a17]"
            }`}
          >
            <span className="absolute left-[2cqw] top-[1.6cqw] font-mono text-[max(6px,1.5cqw)] tracking-[0.12em]">
              {number}
            </span>
            <span className="translate-y-[0.5cqw] text-[21cqw] font-black leading-none tracking-[-0.16em]">
              {character}
            </span>
            <span className="absolute bottom-[2.8cqw] right-0 h-[2.3cqw] w-[17cqw] bg-current opacity-80" />
            <span className="absolute right-[3cqw] top-0 h-[12cqw] w-[2.3cqw] bg-current opacity-80" />
          </div>
        ))}
      </div>

      <p className="absolute right-[6.5cqw] top-[18cqw] font-serif text-[4.6cqw] font-semibold tracking-[0.08em] [writing-mode:vertical-rl]">
        기억의 활자
      </p>

      <div className="absolute bottom-[5.8cqw] left-[6.5cqw] grid w-[61cqw] grid-cols-[1fr_auto] gap-[4cqw]">
        <div>
          <p className="font-serif text-[3.4cqw] font-semibold leading-[1.25]">
            사라지는 목소리를
            <br />한 글자씩 보존한다.
          </p>
          <p className="mt-[2cqw] max-w-[42cqw] font-mono text-[max(6px,1.55cqw)] leading-[1.5] tracking-[0.06em]">
            A MODULAR HANGUL STUDY ON MEMORY, RECORD, AND THE PHYSICAL WEIGHT OF LANGUAGE.
          </p>
        </div>
        <div className="flex h-[11cqw] w-[11cqw] rotate-6 items-center justify-center rounded-full border-[0.45cqw] border-[#b73527] text-[#b73527]">
          <span className="font-serif text-[5.4cqw] font-bold">記</span>
        </div>
      </div>
    </div>
  );
}

export function MemoryTypeWorld() {
  return (
    <ArtWorld
      label="Memory Type Korean vernacular archive shown as an exhibition poster, archival folder, and catalogue label"
      className="bg-[#a99b82] shadow-[0_26px_90px_rgba(72,57,35,0.25)]"
    >
      <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(circle,rgba(51,35,20,0.2)_0_0.7px,transparent_0.9px)] [background-size:7px_9px]" />
      <div className="absolute right-[5%] top-[6%] w-[57%] rotate-1 shadow-[0_28px_60px_rgba(49,34,19,0.38)] transition-transform duration-700 ease-out motion-safe:group-hover:-translate-y-2 sm:right-[8%] sm:w-[36%]">
        <MemoryTypePoster />
      </div>

      <div className="absolute left-[5%] top-[12%] w-[36%] -rotate-2 bg-[#d8c9ad] p-[3%] text-[#231e17] shadow-[0_20px_45px_rgba(49,34,19,0.3)] sm:left-[8%] sm:w-[38%] sm:p-[2.5%]">
        <div className="flex items-center justify-between border-b border-[#231e17]/50 pb-[6%] font-mono text-[clamp(6px,0.8vw,10px)] uppercase tracking-[0.13em]">
          <span>Collected forms</span>
          <span>02 / 37</span>
        </div>
        <p
          lang="ko"
          className="mt-[8%] text-[clamp(32px,7vw,92px)] font-black leading-[0.73] tracking-[-0.18em]"
        >
          동네
          <br />
          글자
        </p>
        <p className="mt-[8%] max-w-[27ch] font-mono text-[clamp(6px,0.78vw,9px)] uppercase leading-[1.55]">
          Letterforms gathered from awnings, receipts, handwritten notices, and fading walls.
        </p>
      </div>

      <div className="absolute bottom-[8%] left-[7%] w-[39%] rotate-1 border-l-[clamp(5px,1vw,14px)] border-[#b73527] bg-[#f0e7d6] p-[3%] shadow-[0_18px_38px_rgba(49,34,19,0.28)] sm:w-[34%] sm:p-[2%]">
        <p className="font-mono text-[clamp(6px,0.75vw,9px)] uppercase tracking-[0.16em] text-[#b73527]">
          Wall label / specimen 14
        </p>
        <p
          lang="ko"
          className="mt-[5%] font-serif text-[clamp(16px,2.4vw,34px)] font-semibold leading-none"
        >
          손의 속도가 남긴 획
        </p>
        <div className="mt-[8%] grid grid-cols-4 border-l border-t border-black/30">
          {["ㄱ", "ㅣ", "ㅇ", "ㅓ"].map((letter) => (
            <span
              key={letter}
              className="flex aspect-square items-center justify-center border-b border-r border-black/30 text-[clamp(12px,2vw,26px)] font-black"
            >
              {letter}
            </span>
          ))}
        </div>
      </div>
    </ArtWorld>
  );
}

function FieldNotesPoster() {
  return (
    <div className="@container relative aspect-[3/4] w-full overflow-hidden bg-[#e9e3d3] text-[#151714]">
      <div className="absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(30,35,26,.12)_1px,transparent_1px),linear-gradient(90deg,rgba(30,35,26,.12)_1px,transparent_1px)] [background-size:8cqw_8cqw]" />
      <div className="absolute left-[5cqw] right-[5cqw] top-[5cqw] flex justify-between border-b border-black/50 pb-[2cqw] font-mono text-[max(6px,1.5cqw)] uppercase tracking-[0.14em]">
        <span>Field notes</span>
        <span>43.6532° N</span>
        <span>37 specimens</span>
      </div>

      <p className="absolute left-[4cqw] top-[13cqw] text-[31cqw] font-black leading-none tracking-[-0.16em] text-[#b9ef32]">
        37
      </p>

      <svg
        viewBox="0 0 100 150"
        className="absolute left-[18cqw] top-[27cqw] h-[77cqw] w-[62cqw] text-[#121713]"
      >
        <path d="M48 140C51 109 50 80 50 18" fill="none" stroke="currentColor" strokeWidth="1" />
        <path
          d="M50 39C31 21 18 25 14 42C28 45 41 47 50 55"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <path
          d="M51 58C67 35 84 39 88 55C74 60 62 63 51 72"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <path
          d="M50 77C31 61 16 68 15 85C29 87 42 89 50 96"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <path
          d="M50 98C66 82 82 88 84 104C70 106 60 110 50 118"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.1"
        />
        <path
          d="M15 42L50 55M88 55L51 72M15 85L50 96M84 104L50 118"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.45"
          strokeDasharray="2 2"
        />
        {[
          [14, 42],
          [50, 18],
          [88, 55],
          [15, 85],
          [84, 104],
          [48, 140],
        ].map(([cx, cy]) => (
          <circle
            key={`${cx}-${cy}`}
            cx={cx}
            cy={cy}
            r="2.2"
            fill="#b9ef32"
            stroke="currentColor"
            strokeWidth="0.7"
          />
        ))}
      </svg>

      <div className="absolute right-[5cqw] top-[34cqw] font-mono text-[max(6px,1.35cqw)] uppercase leading-[1.65] tracking-[0.08em]">
        <p>F.03 / stem</p>
        <p>F.11 / leaf</p>
        <p>F.22 / trace</p>
        <p className="bg-[#151714] px-[1cqw] text-[#b9ef32]">F.29 / absent</p>
      </div>

      <div className="absolute bottom-[5cqw] left-[5cqw] right-[5cqw] grid grid-cols-[1fr_auto] items-end border-t border-black/50 pt-[3cqw]">
        <p className="max-w-[52cqw] font-serif text-[4.8cqw] font-semibold italic leading-[0.95]">
          Life persists in the smallest interval.
        </p>
        <div className="grid grid-cols-5 gap-[0.7cqw]">
          {["h-[3.5cqw]", "h-[6.2cqw]", "h-[4.7cqw]", "h-[8cqw]", "h-[5.5cqw]"].map(
            (height, index) => (
              <span key={index} className={`block w-[1.8cqw] bg-[#151714] ${height}`} />
            ),
          )}
        </div>
      </div>
    </div>
  );
}

export function FieldNotesWorld() {
  return (
    <ArtWorld
      label="Field Notes 37 speculative urban ecology identity shown as a specimen poster, field folder, and classification labels"
      className="bg-[#c9d47e] shadow-[0_26px_90px_rgba(56,71,22,0.24)]"
    >
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle,rgba(20,25,17,.38)_0_0.6px,transparent_0.8px)] [background-size:9px_9px]" />
      <div className="absolute left-[6%] top-[6%] w-[57%] -rotate-1 shadow-[0_28px_60px_rgba(37,47,16,0.38)] transition-transform duration-700 ease-out motion-safe:group-hover:-translate-y-2 sm:left-[8%] sm:w-[36%]">
        <FieldNotesPoster />
      </div>

      <div className="absolute right-[5%] top-[12%] w-[32%] rotate-2 bg-[#171b15] p-[3%] text-[#dce69b] shadow-[0_18px_45px_rgba(37,47,16,0.35)] sm:right-[9%] sm:w-[31%] sm:p-[2.3%]">
        <div className="flex justify-between border-b border-[#dce69b]/50 pb-[6%] font-mono text-[clamp(6px,0.78vw,10px)] uppercase">
          <span>Specimen sleeve</span>
          <span>F.18</span>
        </div>
        <div className="mt-[8%] aspect-[4/3] overflow-hidden border border-[#dce69b]/35 bg-[#e9e3d3]">
          <img
            src={fieldNotesSpecimen}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover object-[50%_52%] opacity-95"
          />
        </div>
        <p className="mt-[5%] font-mono text-[clamp(6px,0.8vw,10px)] uppercase leading-[1.55]">
          Concrete seam / east wall
          <br />
          04.27 / after rainfall
        </p>
      </div>

      <div className="absolute bottom-[7%] right-[7%] grid w-[37%] grid-cols-2 gap-[4%] sm:w-[34%]">
        {[
          ["F.03", "SEED", "bg-[#e9e3d3] text-[#171b15]"],
          ["F.18", "STEM", "bg-[#b9ef32] text-[#171b15]"],
          ["F.29", "VOID", "bg-[#171b15] text-[#e9e3d3]"],
          ["F.37", "TRACE", "bg-[#d9d0b9] text-[#171b15]"],
        ].map(([code, label, tone]) => (
          <div
            key={code}
            className={`${tone} aspect-[5/3] p-[8%] shadow-[0_10px_24px_rgba(37,47,16,0.22)]`}
          >
            <p className="font-mono text-[clamp(6px,0.75vw,9px)]">{code}</p>
            <p className="mt-[18%] text-[clamp(9px,1.2vw,15px)] font-black tracking-[-0.04em]">
              {label}
            </p>
          </div>
        ))}
      </div>
    </ArtWorld>
  );
}

function LastLetterPoster() {
  return (
    <div className="@container relative aspect-[3/4] w-full overflow-hidden bg-[#efe6d3] text-[#2a2925]">
      <div className="absolute inset-0 opacity-45 [background-image:radial-gradient(circle_at_20%_30%,rgba(95,71,48,.2)_0_0.55px,transparent_0.8px)] [background-size:5px_7px]" />
      <div className="absolute left-[6cqw] right-[6cqw] top-[6cqw] flex justify-between font-mono text-[max(6px,1.45cqw)] uppercase tracking-[0.15em]">
        <span>Correspondence archive</span>
        <span>Letter 09 / unsent</span>
      </div>

      <p className="absolute left-[5cqw] top-[15cqw] font-serif text-[14cqw] font-semibold leading-[0.72] tracking-[-0.08em] text-[#762b35]">
        THE
        <br />
        LAST
        <br />
        LETTER
      </p>

      <div className="absolute right-[4cqw] top-[16cqw] h-[14cqw] w-[14cqw] rotate-6 border-[0.5cqw] border-[#762b35] p-[1.2cqw] text-center text-[#762b35]">
        <div className="flex h-full items-center justify-center border border-[#762b35] font-mono text-[2cqw] font-bold">
          TL
          <br />
          04
        </div>
      </div>

      <div className="absolute left-[18cqw] top-[69cqw] w-[66cqw] -rotate-3 border border-[#7e7567] bg-[#f7f0e3]/90 px-[5cqw] py-[4cqw] shadow-[0_2cqw_4cqw_rgba(61,43,31,.16)]">
        <p className="font-serif text-[3.6cqw] italic leading-[1.22] text-[#394f69]">
          I kept the sentence unfinished,
          <br />
          so it could still find you.
        </p>
        <p className="mt-[3cqw] font-mono text-[max(6px,1.35cqw)] uppercase tracking-[0.12em] text-[#762b35]">
          Fictional text / written for this study
        </p>
      </div>

      <div className="absolute bottom-[5cqw] left-[6cqw] right-[6cqw] flex items-end justify-between border-t border-[#2a2925]/45 pt-[2.5cqw]">
        <p className="max-w-[52cqw] font-mono text-[max(6px,1.35cqw)] uppercase leading-[1.5] tracking-[0.1em]">
          An exhibition about words that remained between intention and arrival.
        </p>
        <span className="h-[1.8cqw] w-[18cqw] bg-[#394f69]" />
      </div>
    </div>
  );
}

export function LastLetterWorld() {
  return (
    <ArtWorld
      label="The Last Letter fictional correspondence exhibition shown through a literary poster, folded letter, and archival ticket"
      className="bg-[#642932] shadow-[0_26px_90px_rgba(71,25,32,0.27)]"
    >
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(24deg,transparent_48%,rgba(255,255,255,.14)_49%,transparent_50%)] [background-size:28px_28px]" />
      <div className="absolute right-[6%] top-[6%] w-[57%] rotate-1 shadow-[0_28px_60px_rgba(37,14,19,0.42)] transition-transform duration-700 ease-out motion-safe:group-hover:-translate-y-2 sm:right-[8%] sm:w-[36%]">
        <LastLetterPoster />
      </div>

      <div className="absolute left-[5%] top-[11%] w-[36%] -rotate-2 bg-[#e9dcc6] p-[4%] text-[#2a2925] shadow-[0_22px_45px_rgba(37,14,19,0.34)] sm:left-[9%] sm:w-[38%] sm:p-[3%]">
        <p className="font-mono text-[clamp(6px,0.8vw,10px)] uppercase tracking-[0.16em] text-[#762b35]">
          Letter fragment / 04
        </p>
        <p className="mt-[9%] font-serif text-[clamp(15px,2.4vw,34px)] italic leading-[1.15] text-[#394f69]">
          “There are distances measured only by the words we chose not to send.”
        </p>
        <div className="mt-[12%] flex items-end justify-between border-t border-[#2a2925]/30 pt-[6%]">
          <p className="font-mono text-[clamp(6px,0.72vw,9px)] uppercase leading-[1.45]">
            Undated
            <br />
            Toronto / Seoul
          </p>
          <span className="block h-7 w-7 rounded-full border-2 border-[#762b35] sm:h-10 sm:w-10" />
        </div>
      </div>

      <div className="absolute bottom-[8%] left-[8%] w-[38%] rotate-2 bg-[#394f69] px-[4%] py-[3%] text-[#f2e8d6] shadow-[0_16px_36px_rgba(37,14,19,0.32)] sm:w-[34%] sm:px-[3%] sm:py-[2.2%]">
        <div className="flex items-center justify-between border-b border-[#f2e8d6]/45 pb-[5%] font-mono text-[clamp(6px,0.72vw,9px)] uppercase">
          <span>Entry 01</span>
          <span>Gallery B</span>
        </div>
        <p className="mt-[7%] font-serif text-[clamp(18px,3vw,42px)] font-semibold leading-[0.8]">
          THE LAST
          <br />
          LETTER
        </p>
      </div>
    </ArtWorld>
  );
}

function TactilePoster() {
  return (
    <div className="@container relative aspect-[3/4] w-full overflow-hidden bg-[#e8e0d4] text-[#25231f]">
      <div className="absolute inset-0 opacity-35 [background-image:radial-gradient(circle,rgba(55,45,34,.23)_0_0.5px,transparent_0.8px)] [background-size:4px_6px]" />
      <div className="absolute left-[6cqw] right-[6cqw] top-[6cqw] flex justify-between border-b border-black/25 pb-[2cqw] font-mono text-[max(6px,1.45cqw)] uppercase tracking-[0.14em]">
        <span>CMF library / 2026</span>
        <span>Pressure · fibre · light</span>
      </div>

      <div className="absolute left-[5cqw] top-[20cqw]">
        <p className="font-serif text-[16.5cqw] font-semibold leading-[0.7] tracking-[-0.08em] text-[#e8e0d4] [text-shadow:-0.18cqw_-0.18cqw_0_rgba(255,255,255,.8),0.22cqw_0.22cqw_0_rgba(70,54,38,.3)]">
          TACTILE
        </p>
        <p className="ml-[10cqw] mt-[3cqw] font-serif text-[15cqw] italic leading-[0.72] tracking-[-0.08em] text-[#e8e0d4] [text-shadow:-0.18cqw_-0.18cqw_0_rgba(255,255,255,.8),0.22cqw_0.22cqw_0_rgba(70,54,38,.3)]">
          FORECAST
        </p>
      </div>

      <div className="absolute left-[7cqw] top-[55cqw] grid w-[86cqw] grid-cols-4 gap-[1.2cqw]">
        {[
          "bg-[#291c21]",
          "bg-[#5f313a]",
          "bg-[#8b4d47]",
          "bg-[#bc6d58]",
          "bg-[#d6936f]",
          "bg-[#d2aa8c]",
          "bg-[#c4b0a1]",
          "bg-[#9da3a2]",
        ].map((tone, index) => (
          <div
            key={tone}
            className={`${tone} aspect-[4/5] p-[1.5cqw] text-white mix-blend-multiply`}
          >
            <span className="font-mono text-[max(6px,1.25cqw)]">0{index + 1}</span>
          </div>
        ))}
      </div>

      <div className="absolute bottom-[6cqw] left-[6cqw] right-[6cqw] flex items-end justify-between border-t border-black/25 pt-[2.5cqw]">
        <p className="font-serif text-[4.1cqw] italic leading-none">
          Eight materials for eight emotional temperatures.
        </p>
        <p className="font-mono text-[max(6px,1.3cqw)] uppercase tracking-[0.13em]">Edition 01</p>
      </div>
    </div>
  );
}

export function TactileWorld() {
  return (
    <ArtWorld
      label="Tactile Forecast material direction library shown as an embossed poster and a fan of eight paper samples"
      className="bg-[#c8b7a7] shadow-[0_26px_90px_rgba(67,47,37,0.24)]"
    >
      <div className="absolute inset-0 opacity-30 [background-image:radial-gradient(circle_at_70%_30%,rgba(255,255,255,.9)_0_1px,transparent_1.2px)] [background-size:9px_11px]" />
      <div className="absolute left-[6%] top-[6%] w-[57%] -rotate-1 shadow-[0_28px_60px_rgba(59,41,31,0.34)] transition-transform duration-700 ease-out motion-safe:group-hover:-translate-y-2 sm:left-[8%] sm:w-[36%]">
        <TactilePoster />
      </div>

      <div className="absolute right-[8%] top-[10%] h-[76%] w-[36%] sm:right-[10%] sm:h-[72%] sm:w-[39%]">
        {[
          ["08", "Stillness", "bg-[#9da3a2]", "-rotate-6 -translate-x-[22%] translate-y-[5%]"],
          ["07", "Distance", "bg-[#c4b0a1]", "-rotate-3 -translate-x-[14%] translate-y-[3%]"],
          ["06", "Warmth", "bg-[#d2aa8c]", "rotate-0 -translate-x-[6%]"],
          ["05", "Pulse", "bg-[#d6936f]", "rotate-3 translate-x-[2%] translate-y-[1%]"],
          ["04", "Heat", "bg-[#bc6d58]", "rotate-6 translate-x-[10%] translate-y-[4%]"],
        ].map(([number, label, tone, transform]) => (
          <div
            key={number}
            className={`absolute inset-0 origin-bottom-left border border-black/15 p-[8%] text-[#231e1a] shadow-[0_16px_30px_rgba(59,41,31,0.2)] ${tone} ${transform}`}
          >
            <div className="flex justify-between border-b border-black/35 pb-[5%] font-mono text-[clamp(6px,0.78vw,10px)] uppercase">
              <span>{number}</span>
              <span>{label}</span>
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-[7%] right-[5%] w-[37%] bg-[#ece5da] px-[4%] py-[3%] shadow-[0_18px_38px_rgba(59,41,31,0.28)] sm:w-[32%] sm:px-[3%] sm:py-[2%]">
        <p className="font-mono text-[clamp(6px,0.75vw,9px)] uppercase tracking-[0.13em]">
          Material note / 05
        </p>
        <p className="mt-[6%] font-serif text-[clamp(15px,2.3vw,31px)] italic leading-none">
          A surface remembers pressure.
        </p>
      </div>
    </ArtWorld>
  );
}

function NightIndexPoster() {
  return (
    <div className="@container relative aspect-[3/4] w-full overflow-hidden bg-[#cfe7f6] text-[#071a35]">
      <div className="absolute inset-[5cqw] border border-[#071a35]/60" />
      <img
        src={nightIndexEditorial}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute left-[5cqw] top-[14cqw] h-[103cqw] w-[90cqw] object-cover object-[50%_52%] saturate-[0.9] contrast-[1.06]"
      />
      <div className="absolute left-[5cqw] top-[14cqw] h-[103cqw] w-[90cqw] bg-[linear-gradient(to_bottom,rgba(7,26,53,.08),transparent_45%,rgba(7,26,53,.36))]" />
      <div className="absolute left-1/2 top-[17cqw] h-[82cqw] w-[61cqw] -translate-x-1/2 rounded-t-full border border-[#dff7ff]/45" />

      <div className="absolute left-[6.5cqw] right-[6.5cqw] top-[6.7cqw] flex items-center justify-between font-mono text-[max(6px,1.65cqw)] uppercase tracking-[0.18em]">
        <span>Edition 06</span>
        <span>Nocturne / Toronto</span>
        <span>2026</span>
      </div>

      <p className="absolute left-1/2 top-[13.5cqw] w-full -translate-x-1/2 text-center font-serif text-[10.7cqw] font-semibold leading-none tracking-[0.12em]">
        NIGHT
      </p>
      <div className="absolute bottom-[6.5cqw] left-1/2 w-full -translate-x-1/2 text-center">
        <p className="font-serif text-[10.3cqw] font-semibold leading-none tracking-[0.08em]">
          INDEX
        </p>
        <p className="mt-[2.2cqw] font-mono text-[max(6px,1.55cqw)] uppercase tracking-[0.25em]">
          Posture, shadow &amp; blue
        </p>
      </div>
    </div>
  );
}

export function NightIndexWorld() {
  return (
    <ArtWorld
      label="Night Index neo-deco fashion editorial shown across a campaign poster, issue cover, and metallic title card"
      className="bg-[#061832] shadow-[0_26px_90px_rgba(6,24,50,0.3)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_76%_27%,rgba(110,190,235,.28),transparent_28%)]" />
      <div className="absolute right-[6%] top-[6%] w-[57%] rotate-1 shadow-[0_28px_64px_rgba(0,0,0,0.48)] transition-transform duration-700 ease-out motion-safe:group-hover:-translate-y-2 sm:right-[8%] sm:w-[36%]">
        <NightIndexPoster />
      </div>

      <div className="absolute left-[5%] top-[10%] w-[37%] -rotate-2 border border-[#bddff2]/50 bg-[#112846] p-[3%] text-[#d6effa] shadow-[0_20px_46px_rgba(0,0,0,0.42)] sm:left-[9%] sm:w-[39%] sm:p-[2.4%]">
        <img
          src={nightIndexEditorial}
          alt=""
          loading="lazy"
          decoding="async"
          className="aspect-[4/3] w-full border border-[#bddff2]/35 object-cover object-[50%_53%]"
        />
        <div className="mt-[7%] flex items-end justify-between">
          <p className="font-serif text-[clamp(18px,3.2vw,44px)] leading-[0.78] tracking-[0.08em]">
            NIGHT
            <br />
            INDEX
          </p>
          <p className="font-mono text-[clamp(6px,0.7vw,9px)] uppercase leading-[1.5] text-[#8fcce9]">
            Issue 06
            <br />
            128 pages
          </p>
        </div>
      </div>

      <div className="absolute bottom-[8%] left-[8%] w-[39%] rotate-2 bg-[#c7e7f5] px-[4%] py-[3%] text-[#071a35] shadow-[0_18px_38px_rgba(0,0,0,0.34)] sm:w-[34%] sm:px-[3%] sm:py-[2%]">
        <div className="flex items-center justify-between border-b border-[#071a35]/45 pb-[5%] font-mono text-[clamp(6px,0.74vw,9px)] uppercase">
          <span>Title card 03</span>
          <span>00:08</span>
        </div>
        <p className="mt-[6%] text-center font-serif text-[clamp(20px,3.5vw,48px)] tracking-[0.16em]">
          NOCTURNE
        </p>
      </div>
    </ArtWorld>
  );
}

function PublicMemoryPoster() {
  return (
    <div className="@container relative aspect-[3/4] w-full overflow-hidden bg-[#f1d83d] text-[#161616]">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(0,0,0,.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.2)_1px,transparent_1px)] [background-size:12.5cqw_12.5cqw]" />
      <div className="absolute left-[5cqw] right-[5cqw] top-[5cqw] flex justify-between border-b-2 border-black pb-[2cqw] font-mono text-[max(6px,1.5cqw)] font-bold uppercase tracking-[0.14em]">
        <span>Public memory</span>
        <span>Wayfinding study 07</span>
      </div>

      <div className="absolute left-[5cqw] top-[18cqw] h-[14cqw] w-[67cqw] bg-[#e9472f]" />
      <div className="absolute right-[5cqw] top-[18cqw] flex h-[14cqw] w-[18cqw] items-center justify-center bg-[#161616] text-[8cqw] font-black leading-none text-[#f1d83d]">
        ↗
      </div>

      <p
        lang="ko"
        className="absolute left-[4cqw] top-[37cqw] text-[19cqw] font-black leading-[0.72] tracking-[-0.13em]"
      >
        도시의
        <br />
        문장
      </p>
      <p className="absolute -right-[2cqw] top-[37cqw] rotate-90 origin-top-left font-mono text-[2cqw] font-bold uppercase tracking-[0.22em]">
        A sentence belongs to everyone who walks through it
      </p>

      <div className="absolute bottom-[20cqw] left-[5cqw] right-[5cqw] grid grid-cols-[auto_1fr] gap-[4cqw] border-y-2 border-black py-[3cqw]">
        <span className="flex h-[12cqw] w-[12cqw] items-center justify-center rounded-full bg-[#2748a8] font-mono text-[3cqw] font-bold text-white">
          P7
        </span>
        <div className="grid grid-cols-3 gap-[2cqw] font-mono text-[max(6px,1.5cqw)] uppercase leading-[1.45]">
          <p>
            Market
            <br />
            시장
          </p>
          <p>
            Library
            <br />
            도서관
          </p>
          <p>
            Square
            <br />
            광장
          </p>
        </div>
      </div>

      <div className="absolute bottom-[5cqw] left-[5cqw] right-[5cqw] flex justify-between font-mono text-[max(6px,1.45cqw)] uppercase tracking-[0.12em]">
        <span>Walk / notice / remember</span>
        <span>Toronto / Seoul</span>
      </div>
    </div>
  );
}

export function PublicMemoryWorld() {
  return (
    <ArtWorld
      label="Public Memory bilingual civic identity shown as a wayfinding poster, directional street sign, and neighbourhood map ticket"
      className="bg-[#e9472f] shadow-[0_26px_90px_rgba(116,42,29,0.25)]"
    >
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(90deg,rgba(255,255,255,.22)_1px,transparent_1px)] [background-size:8.333%_100%]" />
      <div className="absolute right-[6%] top-[6%] w-[57%] rotate-1 shadow-[0_28px_60px_rgba(76,28,20,0.4)] transition-transform duration-700 ease-out motion-safe:group-hover:-translate-y-2 sm:right-[8%] sm:w-[36%]">
        <PublicMemoryPoster />
      </div>

      <div className="absolute left-[4%] top-[11%] w-[39%] -rotate-2 bg-[#161616] px-[4%] py-[3%] text-[#f1d83d] shadow-[0_22px_45px_rgba(76,28,20,0.38)] sm:left-[8%] sm:w-[42%] sm:px-[3%] sm:py-[2%]">
        <div className="flex items-center justify-between font-mono text-[clamp(6px,0.78vw,10px)] font-bold uppercase tracking-[0.15em]">
          <span>P7 / 공공기억</span>
          <span className="text-[#e9472f]">320 m</span>
        </div>
        <div className="mt-[6%] flex items-center gap-[6%]">
          <span className="text-[clamp(32px,6vw,82px)] font-black leading-none">←</span>
          <p
            lang="ko"
            className="text-[clamp(17px,3vw,40px)] font-black leading-[0.9] tracking-[-0.06em]"
          >
            오래된
            <br />
            시장길
          </p>
        </div>
      </div>

      <div className="absolute bottom-[7%] left-[7%] w-[40%] rotate-2 bg-[#f4e76b] p-[3%] text-[#161616] shadow-[0_18px_38px_rgba(76,28,20,0.3)] sm:w-[37%] sm:p-[2.3%]">
        <div className="relative aspect-[5/3] border-2 border-black">
          <span className="absolute left-[9%] top-[49%] h-[4%] w-[82%] rotate-6 bg-[#e9472f]" />
          <span className="absolute left-[45%] top-[8%] h-[84%] w-[4%] -rotate-12 bg-[#2748a8]" />
          <span className="absolute left-[25%] top-[18%] h-[58%] w-[3%] rotate-[28deg] bg-black" />
          {["left-[18%] top-[42%]", "left-[44%] top-[52%]", "right-[12%] top-[35%]"].map(
            (position) => (
              <span
                key={position}
                className={`absolute h-3 w-3 rounded-full border-2 border-black bg-[#f4e76b] sm:h-4 sm:w-4 ${position}`}
              />
            ),
          )}
        </div>
        <div className="mt-[6%] flex justify-between font-mono text-[clamp(6px,0.73vw,9px)] font-bold uppercase">
          <span>Neighbourhood walk</span>
          <span>Route 07</span>
        </div>
      </div>
    </ArtWorld>
  );
}

function SoftMachinePoster() {
  return (
    <div className="@container relative aspect-[3/4] w-full overflow-hidden bg-[#e9e5df] text-[#171717]">
      <div className="absolute left-[5cqw] right-[5cqw] top-[5cqw] flex justify-between border-b border-black/35 pb-[2cqw] font-mono text-[max(6px,1.45cqw)] uppercase tracking-[0.15em]">
        <span>Material laboratory</span>
        <span>Study 08 / phase 03</span>
      </div>

      <img
        src={softMachineMaterial}
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute left-[8cqw] top-[24cqw] h-[64cqw] w-[84cqw] object-cover object-center"
      />
      <div className="absolute left-[8cqw] top-[24cqw] h-[64cqw] w-[84cqw] bg-[linear-gradient(145deg,rgba(255,255,255,.08),transparent_55%,rgba(238,96,77,.18))]" />

      <p className="absolute left-[4cqw] top-[16cqw] font-serif text-[13.5cqw] font-semibold italic leading-none tracking-[-0.09em]">
        SOFT
      </p>
      <p className="absolute bottom-[13cqw] right-[4cqw] text-right text-[13cqw] font-black leading-[0.72] tracking-[-0.1em]">
        MACH
        <br />
        INE
      </p>

      <div className="absolute bottom-[5cqw] left-[5cqw] right-[5cqw] flex justify-between border-t border-black/35 pt-[2.5cqw] font-mono text-[max(6px,1.35cqw)] uppercase tracking-[0.12em]">
        <span>Silicone / chrome / memory</span>
        <span>Breathes without lungs</span>
      </div>
    </div>
  );
}

export function SoftMachineWorld() {
  return (
    <ArtWorld
      label="Soft Machine experimental material laboratory shown through an organic chrome poster, foil identity card, and silicone sample"
      className="bg-[#ee604d] shadow-[0_26px_90px_rgba(110,39,31,0.27)]"
    >
      <div className="absolute -left-[8%] -top-[15%] h-[70%] w-[70%] rounded-full border-[clamp(18px,4vw,62px)] border-white/10" />
      <div className="absolute left-[6%] top-[6%] w-[57%] -rotate-1 shadow-[0_28px_62px_rgba(82,29,23,0.4)] transition-transform duration-700 ease-out motion-safe:group-hover:-translate-y-2 sm:left-[8%] sm:w-[36%]">
        <SoftMachinePoster />
      </div>

      <div className="absolute right-[5%] top-[11%] w-[32%] rotate-3 bg-[#191919] p-[3%] text-[#e9e5df] shadow-[0_20px_45px_rgba(82,29,23,0.36)] sm:right-[9%] sm:w-[32%] sm:p-[2.3%]">
        <img
          src={softMachineMaterial}
          alt=""
          loading="lazy"
          decoding="async"
          className="aspect-square w-full rounded-[53%_47%_60%_40%/44%_62%_38%_56%] object-cover object-center"
        />
        <div className="mt-[8%] flex justify-between border-t border-white/35 pt-[5%] font-mono text-[clamp(6px,0.74vw,9px)] uppercase">
          <span>Sample M.08</span>
          <span>Memory gel</span>
        </div>
      </div>

      <div className="absolute bottom-[8%] right-[7%] w-[37%] -rotate-2 border border-black/25 bg-[linear-gradient(125deg,#ece9e3_0%,#a8acad_22%,#282a2b_45%,#f4f1ec_68%,#777a7b_100%)] p-[3%] text-black shadow-[0_20px_40px_rgba(82,29,23,0.32)] sm:w-[34%] sm:p-[2.2%]">
        <div className="flex justify-between font-mono text-[clamp(6px,0.75vw,9px)] font-bold uppercase">
          <span>SOFT MACHINE</span>
          <span>08—03</span>
        </div>
        <p className="mt-[18%] max-w-[8ch] font-serif text-[clamp(20px,3.3vw,46px)] italic leading-[0.82]">
          Matter with a pulse.
        </p>
      </div>
    </ArtWorld>
  );
}

function SignalNoisePoster() {
  return (
    <div className="@container relative aspect-[3/4] w-full overflow-hidden bg-[#050607] text-white">
      <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] [background-size:8cqw_8cqw]" />
      <div className="absolute -left-[16cqw] top-[18cqw] h-[39cqw] w-[82cqw] rotate-[-13deg] bg-[linear-gradient(90deg,transparent_0%,#00e5ff_19%,#a4ff36_45%,#ffea3a_62%,#ff2c8c_82%,transparent_100%)] opacity-90 blur-[1.8cqw]" />
      <div className="absolute -right-[12cqw] bottom-[23cqw] h-[31cqw] w-[78cqw] rotate-[18deg] bg-[linear-gradient(90deg,transparent_0%,#7549ff_25%,#00e5ff_49%,#ff2c8c_78%,transparent_100%)] opacity-75 blur-[2cqw]" />
      <div className="absolute inset-0 opacity-25 [background-image:repeating-linear-gradient(to_bottom,transparent_0,transparent_3px,rgba(255,255,255,0.18)_4px)]" />

      <div className="absolute left-[5cqw] right-[5cqw] top-[5cqw] flex items-center justify-between border-b border-white/35 pb-[2cqw] font-mono text-[max(6px,1.65cqw)] uppercase tracking-[0.18em]">
        <span>S/N—09</span>
        <span>Transmission study</span>
        <span>108.6 MHz</span>
      </div>

      <div className="absolute left-[5cqw] top-[18cqw] w-[90cqw]">
        <p className="translate-x-[1.2cqw] font-mono text-[14.8cqw] font-black leading-[0.76] tracking-[-0.11em] text-[#00e5ff] opacity-85">
          SIGNAL
        </p>
        <p className="-translate-x-[1cqw] -translate-y-[11.4cqw] font-mono text-[14.8cqw] font-black leading-[0.76] tracking-[-0.11em] text-[#ff2c8c] opacity-75 mix-blend-screen">
          SIGNAL
        </p>
        <p className="-translate-y-[22.8cqw] font-mono text-[14.8cqw] font-black leading-[0.76] tracking-[-0.11em] text-white">
          SIGNAL
        </p>
      </div>

      <div className="absolute left-[5cqw] top-[45cqw] h-[25cqw] w-[90cqw] overflow-hidden border-y border-white/45">
        <p className="absolute -left-[2.6cqw] top-1/2 -translate-y-1/2 font-serif text-[24cqw] font-black italic leading-none tracking-[-0.08em] text-transparent [-webkit-text-stroke:0.35cqw_rgba(255,255,255,0.95)]">
          NOISE
        </p>
        <span className="absolute left-[8cqw] top-[5cqw] h-[2cqw] w-[67cqw] bg-[#a4ff36] mix-blend-screen" />
        <span className="absolute right-[5cqw] top-[12cqw] h-[1.4cqw] w-[43cqw] bg-[#ff2c8c] mix-blend-screen" />
        <span className="absolute bottom-[4.5cqw] left-[19cqw] h-[1.6cqw] w-[58cqw] bg-[#00e5ff] mix-blend-screen" />
      </div>

      <div className="absolute bottom-[17cqw] left-[5cqw] right-[5cqw] grid grid-cols-[1fr_auto] gap-[4cqw]">
        <div className="grid grid-cols-12 items-end gap-[0.75cqw]">
          {[
            "h-[2.9cqw]",
            "h-[5.1cqw]",
            "h-[8.4cqw]",
            "h-[4.1cqw]",
            "h-[10.3cqw]",
            "h-[6.5cqw]",
            "h-[11.4cqw]",
            "h-[5.8cqw]",
            "h-[9cqw]",
            "h-[3.5cqw]",
            "h-[7.6cqw]",
            "h-[4.8cqw]",
          ].map((height, index) => (
            <span key={index} className={`block bg-white/85 ${height}`} />
          ))}
        </div>
        <p className="font-mono text-[max(6px,1.6cqw)] uppercase leading-[1.5] tracking-[0.12em] text-white/75">
          Input 01
          <br />
          Decode 67%
          <br />
          Carrier lost
        </p>
      </div>

      <div className="absolute bottom-[5cqw] left-[5cqw] right-[5cqw] flex items-end justify-between border-t border-white/35 pt-[2.4cqw]">
        <p className="max-w-[55cqw] font-serif text-[3.4cqw] italic leading-[1.05]">
          Meaning arrives imperfectly.
        </p>
        <p className="font-mono text-[max(6px,1.5cqw)] uppercase tracking-[0.16em] text-[#a4ff36]">
          End of signal
        </p>
      </div>
    </div>
  );
}

export function SignalNoiseWorld() {
  return (
    <ArtWorld
      label="Signal Noise experimental broadcast identity shown as a spectral hero poster, motion frames, and transmission title card"
      className="bg-[#08090a] shadow-[0_26px_90px_rgba(0,0,0,0.34)]"
    >
      <div className="absolute inset-0 opacity-25 [background-image:repeating-linear-gradient(to_bottom,transparent_0,transparent_4px,rgba(255,255,255,.16)_5px)]" />
      <div className="absolute left-[6%] top-[6%] w-[57%] -rotate-1 shadow-[0_28px_65px_rgba(0,0,0,0.58)] transition-transform duration-700 ease-out motion-safe:group-hover:-translate-y-2 sm:left-[8%] sm:w-[36%]">
        <SignalNoisePoster />
      </div>

      <div className="absolute right-[5%] top-[10%] w-[33%] rotate-2 border border-white/25 bg-[#111315] p-[3%] text-white shadow-[0_20px_46px_rgba(0,0,0,0.5)] sm:right-[9%] sm:w-[33%] sm:p-[2.2%]">
        <div className="relative aspect-video overflow-hidden border border-white/25 bg-black">
          <div className="absolute left-[-10%] top-[24%] h-[36%] w-[84%] -rotate-6 bg-[linear-gradient(90deg,transparent,#00e5ff,#a4ff36,#ff2c8c,transparent)] blur-sm" />
          <p className="absolute inset-0 flex items-center justify-center font-mono text-[clamp(14px,2.8vw,38px)] font-black tracking-[-0.08em]">
            S/N
          </p>
        </div>
        <div className="mt-[6%] flex justify-between font-mono text-[clamp(6px,0.74vw,9px)] uppercase">
          <span>Frame 067</span>
          <span className="text-[#a4ff36]">Carrier found</span>
        </div>
      </div>

      <div className="absolute bottom-[8%] right-[7%] grid w-[38%] grid-cols-3 gap-[2%] sm:w-[35%]">
        {["translate-x-0", "translate-x-[3px]", "-translate-x-[3px]"].map((shift, index) => (
          <div
            key={shift}
            className="aspect-[3/4] overflow-hidden border border-white/25 bg-[#111315] p-[8%] text-white shadow-[0_12px_28px_rgba(0,0,0,.4)]"
          >
            <p
              className={`mt-[55%] font-mono text-[clamp(8px,1.2vw,16px)] font-black leading-[0.8] ${shift} ${index === 1 ? "text-[#00e5ff]" : index === 2 ? "text-[#ff2c8c]" : ""}`}
            >
              SIG
              <br />
              NAL
            </p>
            <span
              className={`mt-[18%] block h-1 w-full ${index === 0 ? "bg-[#a4ff36]" : index === 1 ? "bg-[#00e5ff]" : "bg-[#ff2c8c]"}`}
            />
          </div>
        ))}
      </div>
    </ArtWorld>
  );
}

function ChromaTempoPoster() {
  const bars = [
    "h-[5cqw]",
    "h-[11cqw]",
    "h-[8cqw]",
    "h-[16cqw]",
    "h-[7cqw]",
    "h-[19cqw]",
    "h-[12cqw]",
    "h-[22cqw]",
    "h-[9cqw]",
    "h-[15cqw]",
    "h-[6cqw]",
    "h-[13cqw]",
    "h-[18cqw]",
    "h-[10cqw]",
    "h-[20cqw]",
    "h-[7cqw]",
  ];

  return (
    <div className="@container relative aspect-[3/4] w-full overflow-hidden bg-[#f0eee7] text-[#111315]">
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(0,0,0,.18)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,.18)_1px,transparent_1px)] [background-size:6.25cqw_6.25cqw]" />
      <div className="absolute left-[5cqw] right-[5cqw] top-[5cqw] flex justify-between border-b border-black pb-[2cqw] font-mono text-[max(6px,1.45cqw)] font-bold uppercase tracking-[0.13em]">
        <span>Chroma tempo</span>
        <span>127 BPM</span>
        <span>04:32</span>
      </div>

      <div className="absolute left-1/2 top-[20cqw] h-[59cqw] w-[59cqw] -translate-x-1/2 rounded-full bg-[repeating-conic-gradient(from_0deg,#ff633f_0deg_5deg,transparent_5deg_10deg,#11b8d2_10deg_14deg,transparent_14deg_18deg)] shadow-[inset_0_0_0_7cqw_#f0eee7,inset_0_0_0_7.5cqw_#111315] transition-transform duration-[1600ms] ease-out motion-safe:group-hover:rotate-90" />
      <div className="absolute left-1/2 top-[38cqw] flex h-[23cqw] w-[23cqw] -translate-x-1/2 items-center justify-center rounded-full bg-[#111315] text-center text-[#f0eee7]">
        <p className="font-mono text-[2cqw] font-bold uppercase leading-[1.35]">
          Track 10
          <br />
          C minor
          <br />4 / 4
        </p>
      </div>

      <div className="absolute bottom-[18cqw] left-[5cqw] right-[5cqw] flex h-[22cqw] items-end gap-[1.7cqw] border-b border-black">
        {bars.map((height, index) => (
          <span
            key={index}
            className={`w-full ${height} ${index % 3 === 0 ? "bg-[#ff633f]" : index % 3 === 1 ? "bg-[#111315]" : "bg-[#11b8d2]"}`}
          />
        ))}
      </div>

      <div className="absolute bottom-[5cqw] left-[5cqw] right-[5cqw] flex items-end justify-between">
        <p className="text-[8cqw] font-black leading-none tracking-[-0.08em]">127</p>
        <p className="max-w-[48cqw] text-right font-mono text-[max(6px,1.35cqw)] uppercase leading-[1.5] tracking-[0.1em]">
          Rhythm becomes scale.
          <br />
          Frequency becomes colour.
        </p>
      </div>
    </div>
  );
}

export function ChromaTempoWorld() {
  return (
    <ArtWorld
      label="Chroma Tempo audio-data identity shown as a generative concert poster, spectrogram ticket, and live visual screen"
      className="bg-[#1737b8] shadow-[0_26px_90px_rgba(24,48,157,0.28)]"
    >
      <div className="absolute inset-0 opacity-25 [background-image:linear-gradient(rgba(255,255,255,.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.2)_1px,transparent_1px)] [background-size:7.142%_10%]" />
      <div className="absolute right-[6%] top-[6%] w-[57%] rotate-1 shadow-[0_28px_62px_rgba(10,25,91,0.45)] transition-transform duration-700 ease-out motion-safe:group-hover:-translate-y-2 sm:right-[8%] sm:w-[36%]">
        <ChromaTempoPoster />
      </div>

      <div className="absolute left-[5%] top-[10%] w-[38%] -rotate-2 bg-[#ff633f] p-[3%] text-[#111315] shadow-[0_20px_46px_rgba(10,25,91,0.38)] sm:left-[9%] sm:w-[40%] sm:p-[2.3%]">
        <div className="flex justify-between border-b border-black pb-[5%] font-mono text-[clamp(6px,0.76vw,9px)] font-bold uppercase">
          <span>Live visual / screen A</span>
          <span>127 BPM</span>
        </div>
        <div className="relative mt-[6%] aspect-video overflow-hidden bg-[#111315]">
          <div className="absolute left-1/2 top-1/2 h-[72%] w-[42%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[repeating-conic-gradient(#11b8d2_0deg_7deg,transparent_7deg_13deg,#ff633f_13deg_17deg,transparent_17deg_22deg)] transition-transform duration-[1600ms] ease-out motion-safe:group-hover:-rotate-90" />
          <span className="absolute left-[8%] top-[12%] font-mono text-[clamp(7px,1vw,13px)] font-bold text-white">
            00:03:17:22
          </span>
        </div>
      </div>

      <div className="absolute bottom-[8%] left-[7%] w-[40%] rotate-2 bg-[#f0eee7] px-[4%] py-[3%] text-[#111315] shadow-[0_18px_38px_rgba(10,25,91,0.34)] sm:w-[36%] sm:px-[3%] sm:py-[2%]">
        <div className="flex justify-between font-mono text-[clamp(6px,0.74vw,9px)] font-bold uppercase">
          <span>Admission / 10</span>
          <span>Hall 02</span>
        </div>
        <div className="mt-[7%] flex h-12 items-end gap-[2%] border-b border-black sm:h-16">
          {[
            "h-[24%]",
            "h-[55%]",
            "h-[38%]",
            "h-[82%]",
            "h-[46%]",
            "h-full",
            "h-[61%]",
            "h-[34%]",
            "h-[74%]",
            "h-[43%]",
          ].map((height, index) => (
            <span
              key={index}
              className={`w-full ${height} ${index % 2 ? "bg-[#11b8d2]" : "bg-[#ff633f]"}`}
            />
          ))}
        </div>
        <p className="mt-[5%] text-[clamp(14px,2.4vw,32px)] font-black leading-none tracking-[-0.06em]">
          CHROMA TEMPO
        </p>
      </div>
    </ArtWorld>
  );
}
