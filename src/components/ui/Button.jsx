import clsx from "clsx";

export default function Button({
  children,
  variant = "primary",
  type = "button",
  disabled = false,
  loading = false,
  className,
  ...props
}) {
  return (
    <button
      type={type}
      disabled={disabled || loading}
      className={clsx(
        // Common styles
        "inline-flex items-center justify-center gap-2",
        "rounded-lg px-5 py-3",

        "transition-colors duration-200",
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-blue-500 focus-visible:ring-offset-2"(
          // Disabled and loading styles
          disabled || loading,
        ) && "cursor-not-allowed opacity-50",

        // Additional custom classes
        className,
      )}
      {...props}
    >
      {loading ? "Please wait..." : children}
    </button>
  );
}
