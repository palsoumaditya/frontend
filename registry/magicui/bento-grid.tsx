import { type ComponentPropsWithoutRef, type ReactNode } from "react"
import { ArrowRightIcon } from "@radix-ui/react-icons"

import { cn } from "@/lib/utils"

interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
  children: ReactNode
  className?: string
}

interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
  name: string
  className: string
  background: ReactNode
  Icon: React.ElementType
  description: string
  href: string
  cta: string
  hoverBorderColor?: string
}

const BentoGrid = ({ children, className, ...props }: BentoGridProps) => {
  return (
    <div
      className={cn(
        "grid w-full auto-rows-[22rem] grid-cols-3 gap-4",
        className
      )}
      {...props}
    >
      {children}
    </div>
  )
}

const BentoCard = ({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
  hoverBorderColor = "hover:border-neutral-300",
  ...props
}: BentoCardProps) => (
  <div
    key={name}
    className={cn(
      "group relative col-span-3 flex flex-col justify-end overflow-hidden rounded-xl border border-neutral-200 transition-all duration-300",
      // light styles
      "bg-white [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
      // dark styles
      "dark:border-neutral-800 dark:bg-neutral-900 dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      hoverBorderColor,
      className
    )}
    {...props}
  >
    {/* Background animation fills the upper portion */}
    <div className="absolute inset-0">{background}</div>

    {/* Text content always visible at the bottom */}
    <div className="relative z-10 flex flex-col gap-1 p-6">
      <Icon className="h-8 w-8 mb-1 text-neutral-700 dark:text-neutral-300" />
      <h3 className="text-xl font-bold text-neutral-900 dark:text-neutral-100">
        {name}
      </h3>
      <p className="text-sm text-neutral-500 dark:text-neutral-400">{description}</p>
      <a
        href={href}
        className="mt-2 inline-flex items-center text-sm font-semibold text-neutral-900 hover:underline dark:text-neutral-100"
      >
        {cta}
        <ArrowRightIcon className="ms-1 h-3.5 w-3.5" />
      </a>
    </div>
  </div>
)

export { BentoCard, BentoGrid }
