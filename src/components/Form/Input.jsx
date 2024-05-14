/* eslint-disable react/prop-types */
const Input = ({ handleChange }) => {
  return (
    <label className="form-control w-full lg:w-3/4">
      <div className="label sr-only">
        <span className="label-text">Website URL</span>
      </div>
      <input
        type="text"
        name="url"
        onChange={handleChange}
        placeholder="Shorten a link here..."
        className="input w-full rounded-md"
      />
    </label>
  );
};

export default Input;
