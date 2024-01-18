
import React, { useState } from "react";
import Child from "./Child";
import './../styles/App.css';

const App = () => {

  let [showModal, setShowModal] = useState(false);
  return (
    <div className="parent">
        
        <h1>Parent Component</h1>
        <Child 
        setShowModal = {setShowModal}
        showModal = {showModal}
        />
    </div>
  )
}

export default App
