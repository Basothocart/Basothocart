
export function Button({ children, className, ...props }) {
  return <button className={`font-semibold py-2 px-4 rounded ${className}`} {...props}>{children}</button>;
}
