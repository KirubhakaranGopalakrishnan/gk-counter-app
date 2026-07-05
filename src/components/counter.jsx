import { useState } from 'react'

function Counter() {
  const [count, setCount] = useState(0)

  const increment = () => setCount((prev) => prev + 1)
  const decrement = () => setCount((prev) => (prev > 0 ? prev - 1 : 0))
  const reset     = () => setCount(0)

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white rounded-2xl shadow-lg p-10 flex flex-col items-center gap-6 w-80">

        {/* Title */}
        <h1 className="text-2xl font-bold text-gray-800">GK Counter App</h1>

        {/* Count circle */}
        <div className="w-32 h-32 rounded-full bg-indigo-100 flex items-center justify-center">
          <span className="text-5xl font-extrabold text-indigo-600">{count}</span>
        </div>

        {/* Conditional message */}
        <p className={`text-sm font-medium h-5 ${count === 0 ? 'text-red-500' : 'text-green-500'}`}>
          {count === 0 ? '⚠ Minimum limit reached' : `✓ Count is ${count}`}
        </p>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={decrement}
            disabled={count === 0}
            className="w-20 py-2 rounded-lg bg-red-100 text-red-600 font-semibold hover:bg-red-200 disabled:opacity-40 disabled:cursor-not-allowed transition"
          >
            - Dec
          </button>

          <button
            onClick={reset}
            className="w-20 py-2 rounded-lg bg-gray-100 text-gray-600 font-semibold hover:bg-gray-200 transition"
          >
            Reset
          </button>

          <button
            onClick={increment}
            className="w-20 py-2 rounded-lg bg-green-100 text-green-600 font-semibold hover:bg-green-200 transition"
          >
            + Inc
          </button>
        </div>

      </div>
    </div>
  )
}

export default Counter
