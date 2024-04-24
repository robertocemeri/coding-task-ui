export default function Input({
  type = "text",
  name,
  placeholder = "Input",
  formData,
  setFormData,
  label,
  error,
  labelClass = "",
}) {
  return (
    <div className="form-group">
      {label && (
        <label htmlFor={name} className={labelClass}>
          {label}
        </label>
      )}
      <input
        type={type}
        id={name}
        className={`form-control form-control-lg rounded shadow-sm ${
          error && "is-invalid"
        }`}
        name={name}
        placeholder={placeholder}
        value={formData?.[name]}
        onChange={(e) => {
          setFormData((prev) => ({
            ...prev,
            [name]: e.target.value,
          }));
        }}
      />
      {error && <div className="text-danger">{error}</div>}
    </div>
  );
}
