export const ButtonPrimary = ({ children, className, onClick }) => {
  return (
    <button className={`btn btn-primary ${className}`} onClick={onClick}>
      {children}
    </button>
  );
};
