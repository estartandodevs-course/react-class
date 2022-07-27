import React, { useState } from 'react'

const InputAdd = (props) => {
  const [inputValue, setInputValue] = useState('');

  const handleAdd = () => {
    props.onAdd(inputValue);
  } 

  return (
    <>
      <input 
        placeholder={props.placeholder}
        onChange={event => setInputValue(event.target.value)}
      />
      <button onClick={handleAdd}>{props.buttonText}</button>
    </>
  )
}

export default InputAdd