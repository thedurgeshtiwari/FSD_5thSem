import { useState } from 'react'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div className="cnt">
      count is {count}
    </div>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
         + 
        </button>
        <button onClick={() => setCount((count) => count - 1)}>
         - 
        </button>

      </div>
    </>
  )
}

export default App
