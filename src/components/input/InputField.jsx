export const InputField = ({ value, onChange, label, placeholder }) => {
  return (
    <div className="artsy-input">
      <input
        type="text"
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <span className="input-label">{label}</span>
    </div>
  );
};
