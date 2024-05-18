/* eslint-disable react/prop-types */

const Input = ({ handleChange, value, error }) => {
  return (
    <label className="form-control w-full lg:w-3/4">
      <div className="label sr-only">
        <span className="label-text">Website URL</span>
      </div>
      <input
        type="url"
        name="url"
        value={value}
        onChange={handleChange}
        placeholder="Shorten a link here..."
        className={`input h-14 w-full rounded-md px-4  py-[12px] ${error ? "border-2 border-red placeholder:text-red" : ""}`}
      />
    </label>
  );
};

export default Input;
