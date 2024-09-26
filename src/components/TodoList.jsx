import { useState } from "react";

export default function TodoList() {
  function handleSubmit(e) {
    e.preventDefault();
    const result = new FormData(e.target);
    console.log(result.get("todoText"));
  }

  console.log("Men render bo'ldim");

  return (
    <div className="base-container h-full bg-slate-300 flex justify-center">
      <form onSubmit={handleSubmit} className="w-full max-w-96">
        <div className="flex gap-5">
          <input
            name="name"
            type="text"
            placeholder="Topshiriq nomini kiriting..."
            className="input input-bordered input-primary w-full "
          />
          <select
            name="Brand"
            className="select select-bordered w-full max-w-xs"
          >
            <option disabled selected>
                Mashina brandini tanlang*
            </option>
            <option></option>
            <option></option>
          </select>
          <button className="btn btn-primary" type="submit">
            Tasdiqlash
          </button>
        </div>
      </form>
    </div>
  );
}
