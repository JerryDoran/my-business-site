import { cn } from "@/lib/utils";

type BoundedProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

export default function Bounded({
  as: Comp = "section",
  className,
  children,
  ...restProps
}: BoundedProps) {
  return (
    <Comp
      className={cn(
        "mx-auto max-w-7xl px-6 py-8 first:pt-10 md:px-6 md:py-10 lg:py-12",
        className,
      )}
      {...restProps}
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col">{children}</div>
    </Comp>
  );
}
