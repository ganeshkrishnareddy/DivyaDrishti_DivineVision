import React, { useEffect, useState } from 'react';
import { Volume2, Pause, Play, SkipForward, SkipBack } from 'lucide-react';

interface AudioReaderProps {
  isActive: boolean;
  isHighContrast: boolean;
}

export default function AudioReader({ isActive, isHighContrast }: AudioReaderProps) {
  const [isReading, setIsReading] = useState(false);
  const [currentText, setCurrentText] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('en-US');
  const [speechRate, setSpeechRate] = useState(1);

  const languages = [
    { code: 'en-US', name: 'English' },
    { code: 'hi-IN', name: 'हिंदी (Hindi)' },
    { code: 'ta-IN', name: 'தமிழ் (Tamil)' },
    { code: 'bn-IN', name: 'বাংলা (Bengali)' },
    { code: 'mr-IN', name: 'मराठी (Marathi)' },
    { code: 'te-IN', name: 'తెలుగు (Telugu)' },
    { code: 'gu-IN', name: 'ગુજરાતી (Gujarati)' },
    { code: 'kn-IN', name: 'ಕನ್ನಡ (Kannada)' }
  ];

  const extractPageContent = () => {
    const main = document.querySelector('main');
    if (!main) return '';

    // Get all text content, excluding navigation and footer
    const textElements = main.querySelectorAll('h1, h2, h3, h4, h5, h6, p, li, span, div');
    let content = '';
    
    textElements.forEach(element => {
      const text = element.textContent?.trim();
      if (text && text.length > 10) { // Filter out very short text snippets
        content += text + '. ';
      }
    });

    return content;
  };

  const startReading = () => {
    if ('speechSynthesis' in window) {
      const content = extractPageContent();
      setCurrentText(content);
      
      const utterance = new SpeechSynthesisUtterance(content);
      utterance.lang = selectedLanguage;
      utterance.rate = speechRate;
      utterance.pitch = 1;
      utterance.volume = 1;

      utterance.onstart = () => setIsReading(true);
      utterance.onend = () => setIsReading(false);
      utterance.onerror = () => setIsReading(false);

      speechSynthesis.speak(utterance);
    }
  };

  const stopReading = () => {
    if ('speechSynthesis' in window) {
      speechSynthesis.cancel();
      setIsReading(false);
    }
  };

  const pauseReading = () => {
    if ('speechSynthesis' in window) {
      if (speechSynthesis.speaking && !speechSynthesis.paused) {
        speechSynthesis.pause();
      } else if (speechSynthesis.paused) {
        speechSynthesis.resume();
      }
    }
  };

  useEffect(() => {
    if (isActive) {
      startReading();
    } else {
      stopReading();
    }

    return () => {
      stopReading();
    };
  }, [isActive, selectedLanguage, speechRate]);

  if (!isActive) return null;

  return (
    <div className={`fixed bottom-6 right-6 z-50 p-4 rounded-2xl shadow-2xl border-2 max-w-sm ${
      isHighContrast 
        ? 'bg-black border-yellow-400 text-white' 
        : 'bg-white border-gray-200 text-gray-900'
    }`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <Volume2 className={`h-5 w-5 ${
            isHighContrast ? 'text-yellow-400' : 'text-blue-600'
          }`} />
          <span className="font-semibold text-sm">Audio Reader</span>
        </div>
        <div className={`px-2 py-1 rounded-full text-xs ${
          isReading 
            ? isHighContrast ? 'bg-yellow-400 text-black' : 'bg-green-100 text-green-800'
            : isHighContrast ? 'bg-gray-800 text-gray-300' : 'bg-gray-100 text-gray-600'
        }`}>
          {isReading ? 'Reading' : 'Ready'}
        </div>
      </div>

      <div className="space-y-3">
        {/* Language Selection */}
        <div>
          <label className="block text-xs font-medium mb-1">Language</label>
          <select
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
            className={`w-full p-2 rounded-lg text-sm border ${
              isHighContrast 
                ? 'bg-gray-800 border-yellow-400 text-white' 
                : 'bg-gray-50 border-gray-300 text-gray-900'
            }`}
          >
            {languages.map((lang) => (
              <option key={lang.code} value={lang.code}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        {/* Speed Control */}
        <div>
          <label className="block text-xs font-medium mb-1">
            Speed: {speechRate}x
          </label>
          <input
            type="range"
            min="0.5"
            max="2"
            step="0.1"
            value={speechRate}
            onChange={(e) => setSpeechRate(parseFloat(e.target.value))}
            className="w-full"
          />
        </div>

        {/* Controls */}
        <div className="flex justify-center space-x-2">
          <button
            onClick={() => setSpeechRate(Math.max(0.5, speechRate - 0.1))}
            className={`p-2 rounded-lg transition-colors ${
              isHighContrast 
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            aria-label="Decrease speed"
          >
            <SkipBack className="h-4 w-4" />
          </button>
          
          <button
            onClick={pauseReading}
            className={`p-2 rounded-lg transition-colors ${
              isHighContrast 
                ? 'bg-yellow-400 text-black hover:bg-yellow-300' 
                : 'bg-blue-600 text-white hover:bg-blue-700'
            }`}
            aria-label={speechSynthesis.paused ? 'Resume reading' : 'Pause reading'}
          >
            {speechSynthesis.paused ? <Play className="h-4 w-4" /> : <Pause className="h-4 w-4" />}
          </button>
          
          <button
            onClick={() => setSpeechRate(Math.min(2, speechRate + 0.1))}
            className={`p-2 rounded-lg transition-colors ${
              isHighContrast 
                ? 'bg-gray-800 text-yellow-400 hover:bg-gray-700' 
                : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
            }`}
            aria-label="Increase speed"
          >
            <SkipForward className="h-4 w-4" />
          </button>
        </div>
      </div>
    </div>
  );
}