import Link from "next/link";
import type { ReactNode } from "react";

type BaseProps = {
  children: ReactNode;
  className?: string;
};

type CtaPillLinkProps = BaseProps & {
  href: string;
};

type CtaPillAnchorProps = BaseProps & {
  href: string;
};

type CtaPillButtonProps = BaseProps & {
  onClick: () => void;
  type?: "button" | "submit" | "reset";
};

const rootClassName =
  "group inline-flex items-center gap-2 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#ff4101] focus-visible:ring-offset-2";
const railClassName =
  "inline-flex min-h-[58px] items-center rounded-full bg-[#1b1917] px-10 py-3 text-[1.02rem] font-semibold tracking-[-0.01em] text-white transition group-hover:bg-[#11100f]";
const iconClassName =
  "inline-flex h-[58px] w-[58px] items-center justify-center rounded-full bg-[#ff4101] text-white transition group-hover:bg-[#e63b00]";

function ArrowIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 12H20" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" />
      <path d="M13 5L20 12L13 19" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function CtaPillLink({ href, children, className = "" }: CtaPillLinkProps) {
  return (
    <Link href={href} className={`${rootClassName} ${className}`.trim()}>
      <span className={railClassName}>{children}</span>
      <span className={iconClassName}>
        <ArrowIcon />
      </span>
    </Link>
  );
}

export function CtaPillAnchor({ href, children, className = "" }: CtaPillAnchorProps) {
  return (
    <a href={href} className={`${rootClassName} ${className}`.trim()}>
      <span className={railClassName}>{children}</span>
      <span className={iconClassName}>
        <ArrowIcon />
      </span>
    </a>
  );
}

export function CtaPillButton({
  onClick,
  children,
  className = "",
  type = "button",
}: CtaPillButtonProps) {
  return (
    <button type={type} onClick={onClick} className={`${rootClassName} ${className}`.trim()}>
      <span className={railClassName}>{children}</span>
      <span className={iconClassName}>
        <ArrowIcon />
      </span>
    </button>
  );
}
