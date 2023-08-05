import React from "react";
import "./index.scss";

interface TextInputProps {
  label: string;
  value: string;
  onChange: (newValue: string) => void;
}

const TextInput: React.FC<TextInputProps> = ({ value, onChange }) => {
  return (
    <>
    <h2>お名前</h2>
    <div className="text-input-container">
      <input
        className="text-input"
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
    </>
  );
};
export default TextInput;