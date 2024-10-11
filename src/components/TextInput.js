import React from 'react';

const TextInput = ({ inputText, onInputChange }) => {
  return (
    <textarea
      value={inputText}
      onChange={(e) => onInputChange(e.target.value)}
      placeholder="Enter text to translate..."
    />
  );
};

export default TextInput;
