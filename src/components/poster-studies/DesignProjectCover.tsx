import type { CSSProperties, ReactNode } from "react";

import type { DesignProject } from "@/lib/design-projects";

type DesignProjectCoverProps = {
  project: DesignProject;
  variant?: "card" | "hero" | "poster" | "screen";
  className?: string;
  showTitle?: boolean;
};

export function DesignProjectCover({
  project,
  variant = "card",
  className = "",
  showTitle = true,
}: DesignProjectCoverProps) {
  const [primary, secondary, accent, support] = project.palette;
  const style = {
    "--cover-primary": primary.value,
    "--cover-secondary": secondary.value,
    "--cover-accent": accent.value,
    "--cover-support": support.value,
  } as CSSProperties;

  return (
    <div
      role="img"
      aria-label={`${project.title}: ${project.discipline}`}
      data-motif={project.motif}
      data-theme={project.theme}
      data-variant={variant}
      className={`design-project-cover ${className}`}
      style={style}
    >
      <div className="design-project-cover__grain" aria-hidden="true" />
      <div className="design-project-cover__meta" aria-hidden="true">
        <span>{project.index} / 20</span>
        <span>{project.chapter}</span>
      </div>
      <div className="design-project-cover__art" aria-hidden="true">
        <Motif project={project} />
      </div>
      {showTitle ? (
        <div className="design-project-cover__title-wrap" aria-hidden="true">
          <p
            lang={project.titleLang}
            className={project.titleLang === "ko" ? "font-ko-sans" : undefined}
          >
            {project.title}
          </p>
          <span>{project.discipline}</span>
        </div>
      ) : null}
    </div>
  );
}

function Motif({ project }: { project: DesignProject }) {
  switch (project.motif) {
    case "misregister":
      return (
        <MotifFrame className="cover-misregister">
          <span className="cover-misregister__disc cover-misregister__disc--blue" />
          <span className="cover-misregister__disc cover-misregister__disc--orange" />
          <span className="cover-misregister__letter cover-misregister__letter--blue">A</span>
          <span className="cover-misregister__letter cover-misregister__letter--orange">A</span>
          <span className="cover-misregister__registration">+</span>
          <span className="cover-misregister__edition">PLATE 01 / PLATE 02</span>
        </MotifFrame>
      );
    case "hangul":
      return (
        <MotifFrame className="cover-hangul">
          <div className="cover-hangul__grid font-ko-sans" lang="ko">
            {[
              ["기", "01"],
              ["억", "02"],
              ["활", "03"],
              ["자", "04"],
            ].map(([letter, number], index) => (
              <span key={letter} data-fill={index === 1 || index === 2}>
                <small>{number}</small>
                {letter}
              </span>
            ))}
          </div>
          <p className="cover-hangul__note font-ko-sans" lang="ko">
            <span>동네의 목소리를</span>
            <span>한 글자씩 보존하다</span>
          </p>
          <span className="cover-hangul__seal">記</span>
        </MotifFrame>
      );
    case "specimen":
      return (
        <MotifFrame className="cover-specimen">
          <span className="cover-specimen__number">37</span>
          <svg viewBox="0 0 180 220" className="cover-specimen__plant">
            <path d="M92 211C96 164 91 117 92 34M92 69C58 41 30 48 25 75C49 79 73 83 92 98M92 104C121 69 151 77 158 105C132 108 111 119 92 137M92 142C62 119 37 130 33 157C57 158 76 167 92 180" />
            {["25,75", "92,34", "158,105", "33,157", "92,211"].map((point) => {
              const [cx, cy] = point.split(",");
              return <circle key={point} cx={cx} cy={cy} r="4" />;
            })}
          </svg>
          <div className="cover-specimen__data">
            <span>43.6532° N</span>
            <span>079.3832° W</span>
            <span>F.29 / ABSENT</span>
          </div>
        </MotifFrame>
      );
    case "correspondence":
      return (
        <MotifFrame className="cover-letter">
          <div className="cover-letter__sheet">
            <span className="cover-letter__route">UNSENT / 04—26</span>
            <p>Dear—</p>
            <i>
              I kept the final sentence
              <br />
              where the fold could hold it.
            </i>
            <span className="cover-letter__rule" />
          </div>
          <span className="cover-letter__stamp">04</span>
          <span className="cover-letter__fold" />
        </MotifFrame>
      );
    case "material":
      return (
        <MotifFrame className="cover-material">
          <span className="cover-material__orb cover-material__orb--one" />
          <span className="cover-material__orb cover-material__orb--two" />
          <span className="cover-material__orb cover-material__orb--three" />
          <p>
            PRESSURE
            <br />
            04.8 MM
          </p>
          <small>WARMTH / SURFACE 05</small>
        </MotifFrame>
      );
    case "deco":
      return (
        <MotifFrame className="cover-deco">
          <span className="cover-deco__arch cover-deco__arch--outer" />
          <span className="cover-deco__arch cover-deco__arch--inner" />
          <span className="cover-deco__cut" />
          <p>
            N<br />I
          </p>
          <small>ISSUE 06 / AFTER DARK</small>
        </MotifFrame>
      );
    case "wayfinding":
      return (
        <MotifFrame className="cover-wayfinding">
          <span className="cover-wayfinding__route">P7</span>
          <span className="cover-wayfinding__arrow">←</span>
          <p lang="ko" className="font-ko-sans">
            오래된
            <br />
            시장길
          </p>
          <small>OLD MARKET WALK / 320 M</small>
          <span className="cover-wayfinding__line cover-wayfinding__line--one" />
          <span className="cover-wayfinding__line cover-wayfinding__line--two" />
        </MotifFrame>
      );
    case "biomorphic":
      return (
        <MotifFrame className="cover-biomorphic">
          <span className="cover-biomorphic__blob cover-biomorphic__blob--one" />
          <span className="cover-biomorphic__blob cover-biomorphic__blob--two" />
          <span className="cover-biomorphic__datum" />
          <p>
            SOFT
            <br />
            08
          </p>
          <small>SILICONE / CHROME / MEMORY</small>
        </MotifFrame>
      );
    case "signal":
      return (
        <MotifFrame className="cover-signal">
          <div className="cover-signal__word" data-channel="cyan">
            SIGNAL
          </div>
          <div className="cover-signal__word" data-channel="magenta">
            SIGNAL
          </div>
          <div className="cover-signal__word" data-channel="white">
            SIGNAL
          </div>
          <span className="cover-signal__scan" />
          <small>LIVE / CH.09 / 22:40:17</small>
        </MotifFrame>
      );
    case "frequency":
      return (
        <MotifFrame className="cover-frequency">
          <div className="cover-frequency__bars">
            {[22, 46, 78, 33, 91, 58, 26, 69, 48, 84, 38, 63].map((height, index) => (
              <span key={`${height}-${index}`} style={{ height: `${height}%` }} />
            ))}
          </div>
          <span className="cover-frequency__tempo">127</span>
          <p>
            BPM / C MINOR
            <br />
            03:41.26
          </p>
        </MotifFrame>
      );
    case "route":
      return (
        <MotifFrame className="cover-route">
          <svg viewBox="0 0 400 220" className="cover-route__map">
            <path d="M20 170C90 170 91 71 168 71H281C336 71 334 29 384 29" />
            {["20,170", "168,71", "281,71", "384,29"].map((point) => {
              const [cx, cy] = point.split(",");
              return <circle key={point} cx={cx} cy={cy} r="8" />;
            })}
          </svg>
          <span className="cover-route__mark">
            79
            <br />W
          </span>
          <small>WESTBOUND / CHARGE 82%</small>
        </MotifFrame>
      );
    case "tide":
      return (
        <MotifFrame className="cover-tide">
          <span className="cover-tide__sun" />
          <span className="cover-tide__water cover-tide__water--one" />
          <span className="cover-tide__water cover-tide__water--two" />
          <span className="cover-tide__datum">+ 1.84 M / 18:42</span>
          <p>
            TIDE
            <br />
            HOLD
          </p>
        </MotifFrame>
      );
    case "batch":
      return (
        <MotifFrame className="cover-batch">
          <div className="cover-batch__label cover-batch__label--one">
            <small>BATCH 071</small>
            <b>
              TOMATO
              <br />
              STEMS
            </b>
          </div>
          <div className="cover-batch__label cover-batch__label--two">
            <small>RESCUED / DRIED</small>
            <b>
              OFF
              <br />
              SORT
            </b>
          </div>
          <span className="cover-batch__barcode" />
        </MotifFrame>
      );
    case "dial":
      return (
        <MotifFrame className="cover-dial">
          <div className="cover-dial__clock">
            {Array.from({ length: 24 }, (_, index) => (
              <span key={index} style={{ transform: `rotate(${index * 15}deg)` }} />
            ))}
            <i />
            <b>06</b>
            <small>LOCAL</small>
          </div>
          <p>
            HORA
            <br />
            LIS
          </p>
        </MotifFrame>
      );
    case "seam":
      return (
        <MotifFrame className="cover-seam">
          <span className="cover-seam__piece cover-seam__piece--one" />
          <span className="cover-seam__piece cover-seam__piece--two" />
          <span className="cover-seam__stitch cover-seam__stitch--one" />
          <span className="cover-seam__stitch cover-seam__stitch--two" />
          <p>
            SELV
            <br />
            <i>/00</i>
          </p>
          <small>REPAIR 03 / 17 AUG 2026</small>
        </MotifFrame>
      );
    case "tiles":
      return (
        <MotifFrame className="cover-tiles">
          <div className="cover-tiles__grid">
            {Array.from({ length: 9 }, (_, index) => (
              <span key={index} data-live={index === 4} />
            ))}
          </div>
          <p>
            LIVE
            <br />
            16
          </p>
          <small>STAGE / ROOM 04 / 19:30</small>
        </MotifFrame>
      );
    case "footnote":
      return (
        <MotifFrame className="cover-footnote">
          <p>
            Context is part
            <br />
            of the picture.<sup>17</sup>
          </p>
          <div className="cover-footnote__ledger">
            <span>17.01 / SOURCE VERIFIED</span>
            <span>17.02 / FIELD RECORD</span>
            <span>17.03 / CORRECTION</span>
          </div>
          <b>
            BACK
            <br />
            MATTER
          </b>
        </MotifFrame>
      );
    case "assembly":
      return (
        <MotifFrame className="cover-assembly">
          <div className="cover-assembly__grid">
            {["A1", "A2", "B1", "B2", "C1", "C2"].map((label, index) => (
              <span key={label} data-joint={index === 1 || index === 4}>
                {label}
              </span>
            ))}
          </div>
          <p>
            SEAM
            <br />
            FRAME
          </p>
          <small>ASSEMBLE → ADAPT → RETURN</small>
        </MotifFrame>
      );
    case "exchange":
      return (
        <MotifFrame className="cover-exchange">
          <div className="cover-exchange__lane cover-exchange__lane--left">
            <small>CAD</small>
            <b>1,240.00</b>
            <span>보내기</span>
          </div>
          <div className="cover-exchange__lane cover-exchange__lane--right">
            <small>KRW</small>
            <b>1,247,316</b>
            <span>받기</span>
          </div>
          <span className="cover-exchange__arrow">→</span>
          <p>
            TWO
            <br />
            SHORES
          </p>
        </MotifFrame>
      );
    case "mineral":
      return (
        <MotifFrame className="cover-mineral">
          <div className="cover-mineral__blocks">
            {Array.from({ length: 12 }, (_, index) => (
              <span key={index} data-code={`K${index + 1}`} />
            ))}
          </div>
          <p>
            COLD
            <br />
            KILN
          </p>
          <small>PRESS / CURE / INSTALL / RETURN</small>
          <span className="cover-mineral__cycle">↻</span>
        </MotifFrame>
      );
  }
}

function MotifFrame({ children, className }: { children: ReactNode; className: string }) {
  return <div className={`design-motif ${className}`}>{children}</div>;
}
