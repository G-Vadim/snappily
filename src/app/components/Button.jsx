export const Button = ({ children, className, ...props }) => (
  <button
    className={`px-[23px] pt-[12px] pb-[11px] rounded-[24px] text-xs font-medium -tracking-[0.22px] w-fit ${className}`}
    {...props}
  >
    {children}
  </button>
);
