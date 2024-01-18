import React from "react";

const Child = ({setShowModal, showModal})=>{

    return(
        <div>
            <h1>Child Component</h1>
            <button onClick={()=>{setShowModal(true)}}> Show Modal </button>
            
            {showModal && (
                <div>
                <h3>Modal Content</h3>
                <p>This is the modal content.</p>
                </div>
            )
}
        </div>
    )
}

export default Child;