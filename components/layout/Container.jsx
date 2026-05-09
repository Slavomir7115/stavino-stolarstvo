export default function Container({ children, className = "" }) {
  return (
    <div className={`max-w-8xl mx-auto px-6 md:px-12 lg:px-16 ${className}`}>
      {children}
    </div>
  );
}
