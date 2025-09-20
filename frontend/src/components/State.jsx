import React, { useState } from 'react'

const State = () => {

    const [name, setName] = useState();

    const updateName = () => {
        setName("Nirvan Timsina");
    }


  return (
    <>
    <p>Name: {name}</p>
    <button className='border-4 p-6 m-8 bg-gray-400' onClick={updateName}>Say My Name!</button>
    </>
  );
}

export default State
