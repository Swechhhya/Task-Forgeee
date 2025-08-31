import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa";

const Input = ({ value, onChange, label, placeholder, type }) => {
  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => setShowPassword((prev) => !prev);

  // Generate id from label for accessibility
  const inputId = label ? label.toLowerCase().replace(/\s+/g, '-') : undefined;

  return (
    <div>
      <label htmlFor={inputId} className="text-[13px] text-slate-800">
        {label}
      </label>
      <div className="input-box">
        <input 
          id={inputId}
          type={type === "password" ? (showPassword ? "text" : "password") : type}
          placeholder={placeholder}
          className="w-full bg-transparent outline-none"
          value={value}
          onChange={onChange}
        />
        {type === "password" && (
          showPassword ? (
            <FaRegEyeSlash
              size={22}
              className="text-slate-400 cursor-pointer"
              onClick={toggleShowPassword}
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggleShowPassword()}
              role="button"
              aria-label="Hide password"
            />
          ) : (
            <FaRegEye
              size={22}
              className="text-primary cursor-pointer"
              onClick={toggleShowPassword}
              tabIndex={0}
              onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && toggleShowPassword()}
              role="button"
              aria-label="Show password"
            />
          )
        )}
      </div>
    </div>
  );
};

export default Input;
