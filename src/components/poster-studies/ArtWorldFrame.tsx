import type { ReactNode } from "react";

type ArtWorldFrameProps = {
  label: string;
  className: string;
  children: ReactNode;
};

type ArtDetailFrameProps = ArtWorldFrameProps & {
  aspectClassName?: string;
};

export function ArtWorldFrame({ label, className, children }: ArtWorldFrameProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`group relative isolate aspect-[4/5] w-full overflow-hidden sm:aspect-[16/11] ${className}`}
    >
      <div aria-hidden="true" className="absolute inset-0">
        {children}
      </div>
    </div>
  );
}

export function ArtDetailFrame({
  label,
  className,
  aspectClassName = "aspect-[4/3]",
  children,
}: ArtDetailFrameProps) {
  return (
    <div
      role="img"
      aria-label={label}
      className={`group relative isolate min-h-[220px] w-full overflow-hidden ${aspectClassName} ${className}`}
    >
      <div aria-hidden="true" className="absolute inset-0">
        {children}
      </div>
    </div>
  );
}
