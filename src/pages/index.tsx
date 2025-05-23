import { type FC, type PropsWithChildren } from "react";
import { twJoin, twMerge } from "tailwind-merge";

import DefaultLayout from "@/layouts/default";
import { Button } from "@/lib/Button";

export default function ASFHeaderShowcase() {
  return (
    <DefaultLayout>
      <main className="relative min-h-screen w-full bg-[var(--background)] text-[var(--foreground)]">
        <header className="flex w-full items-center justify-center px-4">
          <div className="relative grid grid-cols-[repeat(8,var(--cellsize))] grid-rows-[1fr_repeat(4,var(--cellsize))] place-items-center border border-[var(--border)] md:grid-cols-[repeat(12,var(--cellsize))] md:grid-rows-[repeat(8,var(--cellsize))]">
            <ASFGridMarker />

            <div
              aria-hidden
              className="pointer-events-none relative col-span-full row-span-full grid grid-cols-subgrid grid-rows-subgrid md:hidden"
            >
              <div className="col-span-full row-span-1" />
              {Array.from({ length: 32 }).map((_, i) => (
                <div
                  key={i}
                  className={twJoin(
                    "border-r border-t border-[var(--border)]",
                    (i + 1) % 8 === 0 && "border-r-0",
                    i > 23 && "border-b-0",
                  )}
                />
              ))}
            </div>

            <div
              aria-hidden
              className="pointer-events-none relative col-span-full row-span-full hidden grid-cols-subgrid grid-rows-subgrid md:grid"
            >
              {Array.from({ length: 96 }).map((_, i) => (
                <div
                  key={i}
                  className={twJoin(
                    "border border-l-0 border-t-0 border-[var(--border)]",
                    i > 12 && i < 22 && "border-0",
                    i === 22 && "border-b-0",
                    i > 24 && i < 34 && "border-0",
                    i === 34 && "border-b-0",
                    i > 36 && i < 46 && "border-0",
                    i === 46 && "border-b-0",
                    i > 48 && i < 58 && "border-r-0",
                    (i + 1) % 12 === 0 && "border-r-0",
                    i > 83 && "border-b-0",
                  )}
                />
              ))}
            </div>

            <div className="relative z-10 col-span-full col-start-1 row-span-1 row-start-1 flex flex-col items-center justify-center gap-2 bg-[var(--background)] p-5 md:col-span-10 md:col-start-2 md:row-span-4 md:row-start-2 md:gap-4 md:bg-transparent">
              <h1 className="max-w-[80%] text-balance text-center text-[clamp(24px,3.75vw,48px)] font-bold tracking-tighter md:max-w-none xs-h:text-[22px]">
                Empowering Agile Delivery at Scale
              </h1>
              <p className="max-w-[80%] text-balance text-center text-sm leading-relaxed tracking-tight text-[var(--muted)] sm:text-base md:max-w-xl md:text-xl md:leading-loose">
                The Agile Solution Factory (ASF) delivers mission-focused
                software through modern tools, agile methodology, and scalable
                cloud-native infrastructure.
              </p>

              <div className="mt-3 flex gap-4 md:gap-6">
                <ASFButton variant="light">
                  <span className="md:hidden">Engage Now</span>
                  <span className="hidden md:block">Launch a Project</span>
                </ASFButton>
                <Button>Request a Demo</Button>
              </div>
            </div>
          </div>
        </header>
      </main>
    </DefaultLayout>
  );
}

type ASFButtonProps = PropsWithChildren<{
  variant: "light" | "dark";
  className?: string;
}>;

const VARIANT_CLASSES: Record<ASFButtonProps["variant"], string> = {
  light:
    "bg-[var(--accent-bg)] text-[var(--accent-text)] border-[var(--accent-text)] hover:bg-[var(--hover)]",
  dark: "bg-[var(--accent-bg)] text-[var(--accent-text)] border-0 hover:bg-[var(--hover)] shadow-[var(--shadow)]",
};

const ASFButton: FC<ASFButtonProps> = ({ children, variant, className }) => {
  return (
    <button
      className={twMerge(
        "relative flex cursor-pointer items-center justify-center gap-x-2.5 rounded-full px-4 py-2 text-sm font-semibold md:w-48 md:py-3 md:text-base",
        VARIANT_CLASSES[variant],
        className,
      )}
    >
      {children}
    </button>
  );
};

const ASFGridMarker: FC = () => {
  const boxClass =
    "absolute z-20 aspect-square size-2 md:size-3 border-[var(--muted)]";

  return (
    <>
      <div
        aria-hidden
        className={twJoin(boxClass, "-left-px -top-px border-l border-t")}
      />
      <div
        aria-hidden
        className={twJoin(
          boxClass,
          "-left-2 -top-2 border-b border-r md:-left-3 md:-top-3",
        )}
      />
    </>
  );
};
