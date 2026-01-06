interface FancyButtonProps {
  buttonText: string;
  buttonLink?: string;
  onClick?: () => void;
}

export default function FancyButton({
  buttonText,
  buttonLink,
  onClick,
}: FancyButtonProps) {
  const Component = buttonLink ? "a" : "button";

  return (
    <Component
      href={buttonLink}
      onClick={onClick}
      className="relative inline-flex h-12 overflow-hidden rounded-full p-[3px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-5 focus:ring-offset-slate-50"
    >
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#A2E369_0%,#597D3A_50%,#A2E369_100%)]" />
      <span className="inline-flex h-full w-full min-w-50 cursor-pointer items-center justify-center rounded-full bg-white px-3 py-1 text-sm font-medium text-black backdrop-blur-3xl">
        {buttonText}
      </span>
    </Component>
  );
}