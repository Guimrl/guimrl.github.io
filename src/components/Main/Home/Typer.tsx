import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const TextTyper = ({ fullText }) => {
  const [text, setText] = useState('');

  useEffect(() => {
    let currentIndex = 0;

    const typingTimer = setInterval(() => {
      if (currentIndex < fullText.length) {
        setText(fullText.slice(0, currentIndex + 1));
        currentIndex++;
      } else {
        clearInterval(typingTimer);
      }
    }, 100);

    return () => {
      clearInterval(typingTimer);
    };
  }, []);

  return (
    <div>
      <p>
        <i>{text}</i>
      </p>
    </div>
  );
};

export default TextTyper;
