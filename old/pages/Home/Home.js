import React, { useState } from "react";
import Counter from "../../components/Counter/Counter";
import InputAdd from "../../components/InputAdd/InputAdd";
import List from "../../components/List/List";
import "./Home.css";

const Home = () => {
  const [names, setNames] = useState(["Atila", "Mauricio", "Elisa", "Pablo"]);

  const addName = (newName) => {
    setNames([...names, newName]);
  }

  return (
    <div className='home-page'>
      <h1 className="home-title">Primeiro React App do Estartando Devs 2022</h1>
      <InputAdd 
        placeholder="Insira o novo nome"
        onAdd={addName}
        buttonText="Inserir"
      />
      <List items={names} />
      <Counter />
    </div>
  )
}

export default Home;
