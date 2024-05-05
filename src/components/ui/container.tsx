import { cn } from "@/lib/utils";

type Props = {
  children?: React.ReactNode;
  className?: string;
};

export default function Container({ children, className }: Props) {
  return (
    <div className={cn("max-w-[1400px] mx-auto px-8", className)}>
      {children}
    </div>
  );
}
