import type { ReactNode, SVGProps } from "react";

type BrandIconProps = SVGProps<SVGSVGElement> & {
  size?: number | string;
  color?: string;
};

function BrandIcon({
  size = "1em",
  color = "currentColor",
  children,
  ...props
}: BrandIconProps & { children: ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={color}
      aria-hidden="true"
      {...props}
    >
      {children}
    </svg>
  );
}

export function PowerBiIcon(props: BrandIconProps) {
  return (
    <BrandIcon {...props}>
      <rect x="3" y="12" width="4" height="9" rx="1" />
      <rect x="10" y="7" width="4" height="14" rx="1" />
      <rect x="17" y="3" width="4" height="18" rx="1" />
    </BrandIcon>
  );
}

export function ExcelIcon(props: BrandIconProps) {
  return (
    <BrandIcon {...props}>
      <path d="M4 3h10l6 6v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1z" />
      <path d="M14 3v6h6" fill="none" stroke="#111" strokeWidth="1.4" />
      <path
        d="M8 12l2.2 3.2L8 18.4M12.6 12l-2.2 3.2 2.2 3.2"
        fill="none"
        stroke="#111"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </BrandIcon>
  );
}

export function TableauIcon(props: BrandIconProps) {
  return (
    <BrandIcon {...props}>
      <circle cx="12" cy="5" r="2.2" />
      <circle cx="6" cy="12" r="2.2" />
      <circle cx="18" cy="12" r="2.2" />
      <circle cx="9" cy="18.5" r="2.2" />
      <circle cx="15" cy="18.5" r="2.2" />
    </BrandIcon>
  );
}
