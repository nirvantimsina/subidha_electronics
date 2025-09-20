import React from 'react'

export const Cards = (props) => {
  return (
    <>
    <div>
    <h2>{props.cardName}</h2>
    <p>{props.cardDescription}</p>
    </div>
    </>
  );
}

export default Cards