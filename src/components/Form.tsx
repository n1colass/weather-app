import React from 'react';
import { useState } from 'react';
import Button from './UI/Button';
import Input from './UI/Input';

type Props = {
  setSearchedCity: (searchedCity: string) => void;
};

const Form = ({ setSearchedCity }: Props) => {
  const [input, setInput] = useState<string>('');
  const clickButton = () => {
    setSearchedCity(input);
  };
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') clickButton();
  };
  return (
    <div className="sm:flex sm:justify-center sm:flex-col sm:items-center sm:gap-1">
      <Input
        className="mt-8 px-8 py-2 text-smd border-2 rounded border-slate-400 focus:border-sky-500"
        type="text"
        placeholder="Type town"
        pattern="[A-Za-z]"
        maxLength={25}
        title="SHOULD CONTAIN ONLY LETTERS"
        value={input}
        onKeyDown={handleKeyDown}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInput(e.target.value);
        }}
        required
      />
      <Button
        type="button"
        onClick={clickButton}
        className="ml-3 px-5 py-[6px] rounded font-medium indent-1 uppercase text-white bg-green-600 hover:bg-green-700"
      >
        Search
      </Button>
    </div>
  );
};

export default Form;
