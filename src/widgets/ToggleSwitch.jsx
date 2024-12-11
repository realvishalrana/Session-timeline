import React from "react";

function ToggleSwitch({ label, id, checked, onChange }) {
  return (
    <div className="flex items-center gap-[10px]">
      <label htmlFor={id} className="text-sm font-semibold ">
        {label}
      </label>
      <div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
        <input
          type="checkbox"
          name="toggle"
          id={id}
          className={`toggle-checkbox absolute block w-6 h-6 rounded-full bg-primary-blue border-4 appearance-none cursor-pointer transition-all duration-300 ease-in-out transform ${
            checked ? "translate-x-4 border-light-blue" : "border-gray-300"
          }`}
          checked={checked}
          onChange={onChange}
        />
        <label
          htmlFor={id}
          className={`toggle-label block overflow-hidden h-6 rounded-full cursor-pointer transition-all duration-300 ease-in-out ${
            checked ? "bg-dark-blue" : "bg-gray-300"
          }`}
        ></label>
      </div>
    </div>
  );
}

export default ToggleSwitch;
