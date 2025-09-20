import React, { useState, useEffect } from "react";

const DigitalClock = () => {
  
  const [time, setTime] = useState(new Date());

  useEffect( () => {
    const intervalId = setInterval( () => {
      setTime(new Date());      
    }, 1000);

    return () => {
      clearInterval(intervalId);
    }    
  }, []);
    
  function formatTime() {
    let hours = time.getHours();
    const minutes = time.getMinutes();
    const seconds = time.getSeconds();
    const meridien = hours >= 12 ? "PM" : "AM";

    hours = hours % 12 || 12;

    return `${padZero(hours)}:${padZero(minutes)}:${padZero(seconds)} ${meridien}`;
  };

  function padZero(number){
    return (number < 10 ? "0" : "") + number;
  };

  return (
    <>
    <div className="bg-blue-500 text-3xl flex justify-items-center">
        {formatTime()}
    </div>
    </>
  )
}

export default DigitalClock
