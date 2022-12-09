import { TCurrentWord, TRandomWords } from '../types';

const baseUrl = 'https://itog-back.onrender.com';

export const getRandomWords = async (): Promise<TRandomWords> => {
  try {
    const { data } = await fetch(baseUrl + '/readyz').then((res) => res.json());
    return data;
  } catch (e) {
    return [];
  }
};

export const getWord = async (
  word: string,
): Promise<TCurrentWord | undefined> => {
  try {
    const detail = await fetch(`${baseUrl}/${word}`).then((res) => res.text());
    return { word, detail };
  } catch (e) {
    return undefined;
  }
};
