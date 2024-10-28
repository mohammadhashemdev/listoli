import React from "react";

const TextAreaField = ({ name, placeholder, rows = 5, value, onChange }) => {
  return (
    <textarea
      required
      name={name}
      placeholder={placeholder}
      rows={rows}
      value={value}
      onChange={onChange}
      className="grow border text-sm md:text-base border-slate-800 rounded-md text-white focus:outline-none bg-slate-950 px-4 py-2"
    ></textarea>
  );
};

export default TextAreaField;
