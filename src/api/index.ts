import { TCurrentWord, TRandomWords } from '../types';

export const getRandomWords = async (): Promise<TRandomWords> => {
  try {
    const { data } = await fetch(
      'https://itog-backend.herokuapp.com/readyz',
    ).then((res) => res.json());
    return data;
  } catch (e) {
    return [];
  }
};

export const getWord = async (
  word: string,
): Promise<TCurrentWord | undefined> => {
  try {
    const detail = await fetch(
      `https://itog-backend.herokuapp.com/${word}`,
    ).then((res) => res.text());
    return { word, detail };
  } catch (e) {
    return undefined;
  }
};
