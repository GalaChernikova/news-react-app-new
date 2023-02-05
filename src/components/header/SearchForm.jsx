import React from 'react';
import { useForm } from 'react-hook-form';
import search from './../../images/search.png'

export default function SearchForm() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex items-center">
      <input type="search" placeholder="Search" {...register("Search", {})}  className="p-2 border border-slate-400 rounded-lg"/>

      <button type="submit" className='ml-2.5 w-10'><img src={search}/></button>
    </form>
  );
}