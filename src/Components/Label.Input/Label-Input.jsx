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
        className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1"
      >
        {text}
      </label>
      <input
        type={type}
        id={id}
        name={name}
        value={formData.name}
        onChange={handleChange}
        required
        className="w-full px-4 py-3 rounded-lg border border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-purple-500 dark:focus:ring-purple-400"
        placeholder={placeholder}
      />
    </div>
  );
};
