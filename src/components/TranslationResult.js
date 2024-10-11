import React from 'react';

const TranslationResult = ({ result }) => {
  return (
    <div>
      <h2>Translated Text:</h2>
      <p>{result}</p>
    </div>
  );
};

export default TranslationResult;
