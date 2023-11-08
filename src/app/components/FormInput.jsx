"use client"
import React, { useState } from 'react';
import { BsSearch } from 'react-icons/bs';


const FormInput = ({handleSubmit, inputValue, setInputValue, data}) => {
  return (
    <form
      onSubmit={handleSubmit}
      className='max-w-[90%] w-[700px] flex mx-auto items-center h-[59px] rounded-[10px] bg-[#fefefe] shadow-boxshadow dark:bg-[#1e2a47] p-[10px] m-[10px] gap-[8px] duration-200'
    >
      <div>
        <BsSearch size={25} className='text-[#0079ff]'/>
      </div>
      <input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        type="text"
        placeholder='Github istifadəçi adını axtarın...'
        className='w-[100%] h-[38px] bg-transparent p-[10px] text-[#000] dark:text-[#fff]'
      />
     {
  data && data.message === 'Not Found' ? (
    <h3 className='w-[21%] text-[red]'>Nəticə yoxdur</h3>
  ) : null
}
      <button
        onClick={handleSubmit}
        type='submit'
        className='duration-200 p-1-10 rounded-[5px] bg-[#0079ff] text-[#fff] text-center hover:brightness-100 hover:shadow-btnshadow'
      >
        Axtar
      </button>
    </form>
  );
};

export default FormInput;
