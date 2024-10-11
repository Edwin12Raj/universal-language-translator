
import React, { useState } from 'react';
import './App.css'
import LanguageSelector from './components/LanguageSelector';
import TextInput from './components/TextInput';
import TranslateButton from './components/TranslateButton';
import TranslationResult from './components/TranslationResult';
import axios from 'axios';

const App = () => {
  const [inputText, setInputText] = useState('');
  const [sourceLanguage, setSourceLanguage] = useState('en');
  const [targetLanguage, setTargetLanguage] = useState('es');
  const [translatedText, setTranslatedText] = useState('');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Spanish' },
    { code: 'fr', name: 'French' },
    // Add more languages
  ];

  const handleTranslate = async () => {
    const encodedParams = new URLSearchParams();
    encodedParams.append("q", inputText); // 'q' is the text to translate
    encodedParams.append("target", targetLanguage); // 'target' is the target language
    if (sourceLanguage) {
      encodedParams.append("source", sourceLanguage); // 'source' is optional if auto-detection is desired
    }

    const options = {
      method: 'POST',
      url: 'https://google-translate1.p.rapidapi.com/language/translate/v2',
      headers: {
        'x-rapidapi-key': '4709b88b52msh21526d608ccf460p1c3a37jsn31c7badb8650',  // Replace with your actual API key
        'x-rapidapi-host': 'google-translate1.p.rapidapi.com',
        'content-type': 'application/x-www-form-urlencoded',
      },
      data: encodedParams
    };
  
    try {
      const response = await axios.request(options);
      console.log(response); // Log response for debugging
      if (response.data && response.data.data) {
        setTranslatedText(response.data.data.translations[0].translatedText); // Update this based on response structure
      } else {
        console.error('Translation failed:', response.data);
      }
    } catch (error) {
      console.error('Error during translation:', error);
    }
  };

  return (
    <div className="app-container">
      <h1>Universal Language Translator</h1>
      <div className="translation-panel">
        <div className="selectors">
          <label>Source Language:</label>
          <LanguageSelector
            languages={languages}
            selectedLanguage={sourceLanguage}
            onSelectLanguage={setSourceLanguage}
          />
          <label>Target Language:</label>
          <LanguageSelector
            languages={languages}
            selectedLanguage={targetLanguage}
            onSelectLanguage={setTargetLanguage}
          />
        </div>
        <TextInput inputText={inputText} onInputChange={setInputText} />
        <TranslateButton onTranslate={handleTranslate} />
        <TranslationResult result={translatedText} />
      </div>
    </div>
  );
};

export default App;
