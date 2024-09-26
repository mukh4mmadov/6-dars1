import { brands } from "../constants";
import { colors } from "../constants";

export default function MyFormData() {
  function handleSubmit(e) {
    e.preventDefault();
    const result = new FormData(e.target);
  }

  console.log("Men render bo'ldim");

  return (
    <div className="base-container py-10 h-full bg-gradient-to-r from-slate-400 to-slate-300 flex justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg"
      >
        <h2 className="font-bold text-3xl mb-8 text-center text-primary">
          Yangi Mashina Qo'shish
        </h2>
        <div className="flex flex-col gap-6">
          <input
            name="name"
            type="text"
            placeholder="Mashina nomini kiriting..."
            className="input input-bordered input-primary w-full bg-gray-50 focus:ring-2 focus:ring-primary focus:outline-none"
          />
          <select
            defaultValue="Mashina brandini tanlang*"
            name="brand"
            className="select select-bordered w-full bg-gray-50 focus:ring-2 focus:ring-primary focus:outline-none"
          >
            <option disabled>Mashina brandini tanlang*</option>
            {brands.map((brand) => {
              return (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              );
            })}
          </select>
          <select
            defaultValue="Mashina rangini tanlang*"
            name="color"
            className="select select-bordered w-full bg-gray-50 focus:ring-2 focus:ring-primary focus:outline-none"
          >
            <option disabled>Mashina rangini tanlang*</option>
            {colors.map((color) => {
              return (
                <option key={color} value={color}>
                  {color}
                </option>
              );
            })}
          </select>
          <button
            className="btn btn-primary w-full hover:bg-primary-focus hover:scale-105 transition-transform duration-200 ease-in-out"
            type="submit"
          >
            Tasdiqlash
          </button>
        </div>
      </form>
    </div>
  );
}
