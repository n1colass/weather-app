import React from 'react';
import { RiErrorWarningLine } from 'react-icons/ri';
const UndefinedRequest = () => {
  return (
    <div className=" flex justify-center items-center text-center mt-3 p-10 rounded bg-slate-100 sm:px-3 sm:mx-2 border-2 border-red-600">
      <RiErrorWarningLine className="text-red-600 text-xl" />
      <p className="mx-7 sm:mx-2">Please enter accurate data</p>
      <RiErrorWarningLine className="text-red-600 text-xl" />
    </div>
  );
};

export default UndefinedRequest;
