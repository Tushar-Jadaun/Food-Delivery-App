import { useState } from "react";

function FoodCard() {
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("half");

  const prices = {
    half: 120,
    full: 200,
  };

  const totalPrice = qty * prices[size];

  return (
    <div className="w-64 rounded-xl border shadow-md hover:shadow-lg transition">
      
      {/* Image */}
      <img
        src="https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D"
        alt="Food"
        className="h-40 w-full object-cover rounded-t-xl"
      />

      {/* Content */}
      <div className="p-4">
        <h3 className="text-lg font-semibold">Cheese Pizza</h3>
        <p className="text-sm text-gray-500 mb-3">
          Freshly baked cheesy pizza 🍕
        </p>

        {/* Options */}
        <div className="flex justify-between mb-3">
          {/* Quantity */}
          <select
            value={qty}
            onChange={(e) => setQty(Number(e.target.value))}
            className="border rounded-md px-2 py-1 text-sm"
          >
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n}
              </option>
            ))}
          </select>

          {/* Half / Full */}
          <select
            value={size}
            onChange={(e) => setSize(e.target.value)}
            className="border rounded-md px-2 py-1 text-sm"
          >
            <option value="half">Half</option>
            <option value="full">Full</option>
          </select>
        </div>

        {/* Price + Button */}
        <div className="flex justify-between items-center">
          <span className="font-bold text-green-600">
            ₹{totalPrice}
          </span>

          <button className="bg-red-500 text-white px-3 py-1 rounded-md text-sm hover:bg-red-600">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;