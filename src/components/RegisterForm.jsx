import React from "react";
import { useForm } from "react-hook-form";

export default function RegisterForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  console.log(errors);

  return (
    <div className="flex flex-col my-3 mx-16">
      <h2 className="font-serif text-start text-2xl">REGISTER NOW</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col mt-5">
        <input
          className="border-b border-slate-400 px-6 pl-0 py-2 mb-3"
          type="text"
          placeholder="First name"
          {...register("First name", { required: true, maxLength: 80 })}
        />
        <input
          className="border-b border-slate-400 px-6 pl-0 py-2 mb-3"
          type="text"
          placeholder="Last name"
          {...register("Last name", { required: true, maxLength: 100 })}
        />
        <input
          className="border-b border-slate-400 px-6 pl-0 py-2 mb-3"
          type="text"
          placeholder="Email"
          {...register("Email", { required: true, pattern: /^\S+@\S+$/i })}
        />
        <input
          className="border-b border-slate-400 px-6 pl-0 py-2 mb-3"
          type="tel"
          placeholder="Mobile number"
          {...register("Mobile number", {
            required: true,
            minLength: 6,
            maxLength: 12,
          })}
        />

        <button
          type="button"
          className="rounded-lg p-2 bg-slate-600 text-white text-center m-3 ml-0 w-44"
        >
          SUBMIT
        </button>
      </form>
    </div>
  );
}
