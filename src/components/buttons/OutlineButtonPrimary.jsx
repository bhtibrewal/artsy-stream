export const OutlineButtonPrimary = ({ children, className, onClick }) => {
  return (
    <button
      className={`btn outline-btn-primary ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
