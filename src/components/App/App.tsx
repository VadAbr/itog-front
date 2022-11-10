import React, { useEffect, useState } from 'react';

import { TCurrentWord, TRandomWords } from '../../types';
import { getRandomWords, getWord } from '../../api';
import { Button } from '../button';

import './App.css';

export const App = () => {
  const [words, setWords] = useState<TRandomWords>([]);
  const [currentWord, setCurrentWord] = useState<TCurrentWord>();
  const [inputValue, setInputValue] = useState<string>();

  useEffect(() => {
    getRandomWords().then(setWords);
  }, []);

  const onButtonCLick = (word: string) => {
    getWord(word).then(setCurrentWord);
  };

  const onSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();

    if (inputValue) {
      getWord(inputValue.toUpperCase()).then(setCurrentWord);
    }
  };

  return (
    <div className="App">
      <h1>Словарь1</h1>

      <form className="form" onSubmit={onSubmit}>
        <input
          value={inputValue}
          className="form__field"
          placeholder="Введите слово"
          onChange={(event) => setInputValue(event.target.value)}
        />

        <Button type={'submit'} className={'btn--inside'} label={'Поиск'} />
      </form>

      {currentWord && (
        <div className={'wordContainer'}>
          <h3>{currentWord.word.toLowerCase()}</h3>
          <p>{currentWord.detail}</p>
        </div>
      )}

      <ul className={'wordList'}>
        {words.map((word) => (
          <li key={word}>
            <Button
              onClick={() => onButtonCLick(word)}
              label={word.toLowerCase()}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
