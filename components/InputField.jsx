import React from "react";

const InputField = ({ type = "text", name, placeholder, value, onChange }) => {
  return (
    <input
      required
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="grow border text-sm md:text-base border-slate-800 rounded-md text-white focus:outline-none bg-slate-950 px-4 py-2"
    />
  );
};

export default InputField;
