import React, { useState } from 'react'

const Counter = () => {
  const [count, setCount] = useState(0);

  console.log("Renderizando");

  // TODA VEZ que um estado for atualizado, o componente será renderizado novamente;

  const lessCount = () => {
    setCount(count - 1);
  }

  const addCount = () => {
    setCount(count + 1);
  }

  return (
    <>
      <p>Contador: {count}</p>
      <button onClick={lessCount}>
        Subtrair
      </button>
      <button onClick={addCount}>
        Adicionar
      </button>
    </>
  )
}

export default Counter