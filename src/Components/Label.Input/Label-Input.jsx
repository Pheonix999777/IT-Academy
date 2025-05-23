export const Label = ({
  htmlFor,
  text,
  type,
  id,
  name,
  formData,
  handleChange,
  placeholder,
}) => {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="block text-sm font-medium text-slate-700 mb-1"
      >
        {text}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={formData[name] || ""}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 rounded-lg border border-slate-300 bg-white text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500"
        placeholder={placeholder}
      />
    </div>
  );
};
