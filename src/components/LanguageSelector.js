import React from 'react';

const LanguageSelector = ({ languages, selectedLanguage, onSelectLanguage }) => {
  return (
    <select value={selectedLanguage} onChange={(e) => onSelectLanguage(e.target.value)}>
      {languages.map((lang) => (
        <option key={lang.code} value={lang.code}>
          {lang.name}
        </option>
      ))}
    </select>
  );
};

export default LanguageSelector;
