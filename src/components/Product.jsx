import React from "react";

const Product = () => {
  return (
    <>
      <div className="border-1 rounded-2xl p-6 m-8 h-125 w-200 flex-1 flex-row items-center">
        <div className="flex flex-col items-center">
        <img
          className="h-50 w-50"
          src="https://lumprodsta.blob.core.windows.net/prodcontainer/Images/0f673b62-087b-4901-83b5-2c1b02ca2747_Optimus%202800%2B%20inverter-1.png"
          alt="Luminious Optimus 2800+ Inverter"
        />
        </div>
        <div>
          <p className="text-2xl text-center">
            Luminious Optimus 2800+ Inverter
          </p>
        </div>
        <div>
          <p className="textsm">
            Optimus series is a micro-controller based, advanced pure sine wave
            inverter series, equipped with mains by pass switch and battery
            charging current setting. Its informative LCD display shows eight
            real time performance statistics, including charging time, back-up
            time at current load, running load status, fault indications and
            much more. It offers flexibility to choose between higher backup
            time and better performance by controlling output voltage. Optimus
            inverter series is a great choice for your household, commercial and
            office needs.
          </p>
        </div>
        <br></br>
        <div className="flex flex-1 flex-row-reverse">
          <span className="bg-blue-300 border-1 rounded-2xl hover:bg-blue-500 p-4">
            Buy
          </span>
        </div>
      </div>
    </>
  );
};

export default Product;
