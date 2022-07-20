import React from "react";
import "./List.css";

const List = (props) => {

  return (
    <ul className="list">
      {props.items.map(item => <li>{item}</li>)}
    </ul>
  )
}

export default List;

// Diferença entre named export e default export e como importa-los

// named export
// export { List };
// import { List } from '...';

// default export
// export default List;
// import List from '...';