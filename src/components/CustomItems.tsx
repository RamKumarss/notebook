'use client';
import React, { useRef, useState } from 'react';
import Button from './Button';
import axios from 'axios';
interface PropsType {
  setList: Function;
}
interface ListType {
  content: string;
  quantity: string;
}

const CustomItems: React.FC<PropsType> = ({ setList }) => {
  const contentRef = useRef('');
  const quantityRef = useRef('');
  const [language, setLanguage] = useState<string>('auto');

  const addItem = () => {
    let data = {
      q: contentRef.current,
      source: 'en',
      target: 'hi',
    };
    if (language === 'auto') {
      axios
        .post(`https://libretranslate.de/translate`, data)
        .then((response) => {
          setList((prev: Array<ListType>) => [
            ...prev,
            {
              content: response.data.translatedText,
              quantity: quantityRef.current,
            },
          ]);
        });
    } else {
      setList((prev: Array<ListType>) => [
        ...prev,
        { content: contentRef.current, quantity: quantityRef.current },
      ]);
    }
  };

  return (
    <div className='flex flex-wrap justify-center items-center gap-2 '>
      <select
        className='w-full md:w-4/12 p-2 rounded-lg shadow-lg text-gray-600'
        value={language}
        onChange={(e) => setLanguage(e.target.value)}
      >
        <option value='en'>English</option>
        <option value='hi'>Hindi</option>
        <option value='auto'>Auto Change</option>
      </select>
      <input
        type='text'
        placeholder='Content...'
        className='w-full md:w-4/12 p-2 rounded-lg shadow-lg text-gray-600'
        onChange={(e) => {contentRef.current = e.target.value;}}
      />
      <input
        type='text'
        placeholder='Quantity...'
        className='w-full md:w-4/12 p-2 rounded-lg shadow-lg text-gray-600'
        onChange={(e) => (quantityRef.current = e.target.value)}
      />
      <Button action={addItem}>Add</Button>
    </div>
  );
};

export default CustomItems;
