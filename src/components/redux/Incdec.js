import React, { useState } from "react";

const Incdec = () => {
  const [count, setCount] = useState(0);
  const decrement = () => {
    if (count > 0) setCount(count - 1);
  };
  return (
    <div className="flex gap-5 items-center justify-center h-screen bg-gradient-to-b from-[#8BD245] via-[#4500B6] to-[#9A00A7]">
      <button
        className="rounded-md text-center bg-slate-500 text-white p-8 py-4"
        onClick={() => setCount(count + 1)}
      >
        Increment
      </button>
      <div className="rounded-md text-center p-8 py-3 text-[21px] bg-black text-white">
        {count}
      </div>
      <button
        className="rounded-md text-center bg-slate-500 text-white p-8 py-4"
        onClick={decrement}
      >
        Decrement
      </button>
    </div>
  );
};

export default Incdec;
