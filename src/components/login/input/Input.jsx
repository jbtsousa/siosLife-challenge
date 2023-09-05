import "./Input.css";

export const Input = ({ label, type, id, placeholder, setState }) => {
  return (
    <div className="form-field" id="email">
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        onChange={(e) => setState(e.target.value)}
      />
    </div>
  );
};
