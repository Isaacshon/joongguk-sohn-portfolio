import { createFileRoute } from "@tanstack/react-router";
import { MatLayout } from "@/components/MatLayout";

export const Route = createFileRoute("/writer")({
  head: () => ({
    meta: [
      { title: "Writer - Isaac Sohn" },
      {
        name: "description",
        content:
          "2026 제16회 애국지사 문예작품 공모전 최우수상 수상작, 손이삭의 ‘적히지 않은 이름들’. 기록과 문학이 만나는 작업을 소개합니다.",
      },
      { property: "og:title", content: "적히지 않은 이름들 - 손이삭" },
      {
        property: "og:description",
        content: "1919년 발안장터 만세시위와 제암리·고주리 학살 기록에서 출발한 문학 작품.",
      },
    ],
  }),
  component: Writer,
});

const historicalRecords = [
  {
    date: "1919. 04. 05",
    title: "발안장터 만세시위",
    note: "사람들이 거리로 나와 독립을 외친 날",
  },
  {
    date: "1919. 04. 15",
    title: "제암리·고주리 학살",
    note: "열흘 뒤, 마을에 닥친 참혹한 사건",
  },
];

const writingPrinciples = [
  ["01", "기록에 남은 사실에서 시작한다."],
  ["02", "알 수 없는 이름을 새로 붙이지 않는다."],
  ["03", "사실과 사실 사이의 공백만 조심스럽게 상상한다."],
  ["04", "역사를 움직인 보통 사람들을 기억한다."],
];

function Writer() {
  return (
    <MatLayout surface="plain" contentClassName="max-w-none">
      <article className="relative isolate -mx-3 -mb-12 min-h-[calc(100vh-4rem)] overflow-hidden bg-[#ede8dc] text-[#211f1b] selection:bg-[#bd3b2b] selection:text-[#f7f1e6]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-70 [background-image:linear-gradient(to_right,rgba(38,34,28,0.045)_1px,transparent_1px),linear-gradient(to_bottom,rgba(38,34,28,0.035)_1px,transparent_1px)] [background-size:24px_24px]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_18%_8%,rgba(255,255,255,0.72),transparent_31%),radial-gradient(circle_at_86%_86%,rgba(121,103,72,0.11),transparent_34%)]"
        />

        <div className="grid min-h-[calc(100vh-4rem)] grid-cols-1 lg:grid-cols-[74px_minmax(0,1fr)]">
          <aside className="flex items-center justify-between border-b border-[#211f1b]/25 bg-[#24221e] px-5 py-3 text-[#eee8dc] lg:flex-col lg:border-b-0 lg:border-r lg:border-white/15 lg:px-0 lg:py-7">
            <span className="text-[10px] font-semibold tracking-[0.28em] lg:[writing-mode:vertical-rl]">
              WRITING ARCHIVE
            </span>
            <span className="text-[11px] tabular-nums tracking-[0.18em] text-white/55 lg:[writing-mode:vertical-rl]">
              1919—2026
            </span>
          </aside>

          <div className="mx-auto w-full max-w-[1440px] px-5 pb-16 pt-7 sm:px-8 md:px-12 lg:px-[clamp(3rem,6vw,7rem)] lg:pb-24 lg:pt-12">
            <header className="border-t-2 border-[#211f1b]">
              <div className="flex flex-col gap-4 border-b border-[#211f1b]/35 py-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[11px] font-semibold tracking-[0.16em] text-[#211f1b]/70">
                  <span>제16회 애국지사 문예작품 공모전</span>
                  <span className="h-px w-8 bg-[#bd3b2b]" aria-hidden />
                  <span className="text-[#a53022]">2026 최우수상</span>
                </div>
                <p className="text-[11px] tracking-[0.12em] text-[#211f1b]/55">작가 손이삭</p>
              </div>

              <div className="grid gap-8 py-10 md:grid-cols-[minmax(0,1.35fr)_minmax(240px,0.65fr)] md:py-16 lg:gap-16 lg:py-20">
                <div>
                  <p className="mb-5 flex items-center gap-3 text-[11px] font-bold tracking-[0.24em] text-[#a53022]">
                    <span className="inline-block h-2 w-2 bg-[#bd3b2b]" aria-hidden />
                    수상작
                  </p>
                  <h1 className="[text-wrap:balance] font-serif text-[clamp(4rem,10vw,9.5rem)] font-medium leading-[0.78] tracking-[-0.055em] text-[#1f1d19]">
                    적히지 않은
                    <span className="mt-[0.16em] block pl-[0.32em] text-[#bd3b2b]">이름들</span>
                  </h1>
                </div>

                <div className="flex flex-col justify-end md:border-l md:border-[#211f1b]/30 md:pl-6 lg:pl-9">
                  <p className="text-[10px] font-semibold tracking-[0.24em] text-[#211f1b]/50">
                    ARCHIVE NOTE / 01
                  </p>
                  <p className="mt-5 max-w-[29rem] break-keep text-[17px] font-medium leading-[1.85] tracking-[-0.015em] sm:text-[18px]">
                    기록 속 한 사람의 이름 없는 자리를 오래 바라보며, 잊힌 보통 사람들의 노력을
                    기억하려 쓴 작품입니다.
                  </p>
                  <div className="mt-8 flex items-end justify-between border-t border-[#211f1b]/25 pt-3 text-[11px] text-[#211f1b]/55">
                    <span>문학 기록</span>
                    <span className="font-serif text-2xl italic text-[#211f1b]">Isaac Sohn</span>
                  </div>
                </div>
              </div>
            </header>

            <section
              aria-labelledby="record-heading"
              className="grid border-y border-[#211f1b] lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]"
            >
              <div className="border-b border-[#211f1b] px-0 py-8 lg:border-b-0 lg:border-r lg:px-8 lg:py-11">
                <div className="flex items-baseline justify-between gap-4">
                  <h2
                    id="record-heading"
                    className="font-serif text-[clamp(2.4rem,5vw,4.5rem)] leading-none tracking-[-0.035em]"
                  >
                    기록의 좌표
                  </h2>
                  <span className="text-[10px] tabular-nums tracking-[0.2em] text-[#a53022]">
                    1919 / 04
                  </span>
                </div>

                <ol className="mt-10">
                  {historicalRecords.map((record, index) => (
                    <li
                      key={record.date}
                      className="grid grid-cols-[74px_minmax(0,1fr)] border-t border-[#211f1b]/25 py-5 sm:grid-cols-[112px_minmax(0,1fr)]"
                    >
                      <span className="pt-1 text-[10px] font-semibold tabular-nums tracking-[0.09em] text-[#a53022] sm:text-[11px]">
                        {record.date}
                      </span>
                      <div>
                        <div className="flex items-baseline gap-3">
                          <span className="font-serif text-xl italic text-[#211f1b]/35">
                            {String(index + 1).padStart(2, "0")}
                          </span>
                          <h3 className="break-keep text-[18px] font-bold tracking-[-0.025em] sm:text-[21px]">
                            {record.title}
                          </h3>
                        </div>
                        <p className="mt-2 break-keep text-[13px] leading-relaxed text-[#211f1b]/60 sm:pl-9">
                          {record.note}
                        </p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>

              <div className="relative px-0 py-8 lg:px-10 lg:py-11 xl:px-14">
                <span
                  aria-hidden
                  className="absolute right-0 top-0 h-20 w-[3px] bg-[#bd3b2b] lg:h-24"
                />
                <p className="text-[10px] font-semibold tracking-[0.24em] text-[#a53022]">
                  SUBJECT / 인물 기록
                </p>
                <p className="mt-7 break-keep font-serif text-[clamp(2.1rem,4.6vw,4.9rem)] leading-[1.08] tracking-[-0.035em]">
                  김씨
                  <span className="ml-2 text-[#211f1b]/45">金氏</span>
                </p>
                <p className="mt-2 text-[14px] font-medium tracking-[0.08em] text-[#211f1b]/58">
                  국가 기록 표기 · 강태성 부인
                </p>

                <div className="mt-10 grid gap-5 border-t border-[#211f1b]/25 pt-6 text-[15px] leading-[1.9] text-[#211f1b]/78 sm:grid-cols-2">
                  <p className="break-keep">
                    작품의 주인공은 국가 기록에 ‘김씨(金氏·강태성 부인)’로 남은 독립유공자입니다.
                  </p>
                  <p className="break-keep">
                    확인할 수 없는 이름을 새로 붙이지 않았습니다. 이름이 없는 상태 자체를 기록의
                    일부로 받아들였습니다.
                  </p>
                </div>
              </div>
            </section>

            <section
              aria-labelledby="note-heading"
              className="grid gap-10 py-14 md:grid-cols-[minmax(0,0.65fr)_minmax(0,1.35fr)] md:gap-14 lg:py-20"
            >
              <div>
                <p className="text-[10px] font-semibold tracking-[0.24em] text-[#a53022]">
                  WRITER'S NOTE / 02
                </p>
                <h2
                  id="note-heading"
                  className="mt-4 break-keep font-serif text-[clamp(2.6rem,5.5vw,5rem)] leading-[0.95] tracking-[-0.04em]"
                >
                  사실과 상상 사이
                </h2>
              </div>

              <div className="max-w-[760px]">
                <div className="space-y-6 break-keep text-[16px] leading-[2] text-[#211f1b]/78 sm:text-[17px]">
                  <p>
                    「적히지 않은 이름들」은 1919년 4월 5일 발안장터 만세시위와 4월 15일
                    제암리·고주리 학살의 기록을 바탕으로 썼습니다. 열흘 간격으로 이어진 두 사건의
                    기록 안에서, 이름 대신 성씨와 누군가의 부인이라는 관계로 남은 한 사람을
                    만났습니다.
                  </p>
                  <p>
                    기록이 말하지 않는 부분을 함부로 채우지 않으려 했습니다. 확인된 사실을 중심에
                    두고, 그 사실을 해치지 않는 범위에서 사람의 마음과 시간의 틈을 상상했습니다.
                    역사에 이름을 남기지 못했어도 그날을 함께 만든 수많은 보통 사람의 노력을
                    기억하는 일이 이 글의 출발점입니다.
                  </p>
                </div>

                <blockquote className="relative mt-12 border-l-[3px] border-[#bd3b2b] py-2 pl-6 sm:pl-9">
                  <span
                    aria-hidden
                    className="absolute -left-[3px] top-0 h-3 w-[3px] -translate-y-full bg-[#211f1b]"
                  />
                  <p className="break-keep font-serif text-[clamp(1.8rem,3.8vw,3.4rem)] leading-[1.25] tracking-[-0.03em]">
                    “알지 못하는 것에는
                    <span className="sm:block"> 감사할 수 없기 때문이다.”</span>
                  </p>
                </blockquote>
              </div>
            </section>

            <section
              aria-labelledby="method-heading"
              className="border-t-2 border-[#211f1b] pb-6 pt-5"
            >
              <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="text-[10px] font-semibold tracking-[0.24em] text-[#a53022]">
                    METHOD / 03
                  </p>
                  <h2 id="method-heading" className="mt-2 text-[18px] font-bold tracking-[-0.02em]">
                    기록을 읽고 쓰는 원칙
                  </h2>
                </div>
                <span className="text-[10px] tracking-[0.16em] text-[#211f1b]/45">
                  FOUR NOTES ON REMEMBRANCE
                </span>
              </div>

              <ol className="mt-6 grid border-y border-[#211f1b]/30 sm:grid-cols-2 xl:grid-cols-4">
                {writingPrinciples.map(([number, principle], index) => (
                  <li
                    key={number}
                    className={`group min-h-[160px] px-4 py-5 transition-colors duration-300 hover:bg-[#e3dccd] sm:min-h-[184px] sm:px-5 ${
                      index > 0 ? "border-t border-[#211f1b]/20 sm:border-t-0" : ""
                    } ${index % 2 === 1 ? "sm:border-l sm:border-[#211f1b]/25" : ""} ${
                      index === 2 ? "sm:border-l-0 sm:border-t xl:border-l xl:border-t-0" : ""
                    } ${index === 3 ? "sm:border-t xl:border-t-0" : ""}`}
                  >
                    <span className="font-serif text-[13px] italic text-[#a53022]">{number}</span>
                    <p className="mt-10 max-w-[15rem] break-keep text-[15px] font-medium leading-[1.75] tracking-[-0.01em]">
                      {principle}
                    </p>
                  </li>
                ))}
              </ol>
            </section>

            <footer className="mt-12 flex flex-col gap-7 border-t border-[#211f1b] pt-5 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[10px] tracking-[0.2em] text-[#211f1b]/50">AWARD RECORD</p>
                <p className="mt-2 break-keep text-[13px] font-medium leading-relaxed">
                  2026 제16회 애국지사 문예작품 공모전 · 최우수상
                </p>
              </div>

              <a
                href="https://www.koreatimes.net/ArticleViewer/Article/177183"
                target="_blank"
                rel="noreferrer"
                className="group inline-flex w-fit items-center gap-5 border-b border-[#211f1b] pb-2 text-[12px] font-bold tracking-[0.12em] transition-colors hover:border-[#bd3b2b] hover:text-[#a53022] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#bd3b2b]"
              >
                공개 공모 안내
                <span
                  aria-hidden
                  className="transition-transform duration-300 group-hover:translate-x-1"
                >
                  ↗
                </span>
              </a>
            </footer>
          </div>
        </div>
      </article>
    </MatLayout>
  );
}
