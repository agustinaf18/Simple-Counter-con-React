import React from "react";
// import Cards from "./Cards.jsx";

//create your first component
const SecondsCounter = (props) => {
  return (
    <>
      <div>
        <div className="  d-flex bg-black rounded justify-content-center mx-5 my-5  " >
			    <div className="reloj my-2 mx-3 bg-dark rounded"><img src="https://th.bing.com/th/id/R.cc7a995ebcb500442d8890588fd75e24?rik=g%2fzQf2reXwMFbw&pid=ImgRaw&r=0" height="69" width="69" alt="" /> </div>
          <div className="display-2 fw-bold mx-3 my-1 bg-dark rounded text-white">{props.numero6}</div>
          <div className="display-2 fw-bold mx-3 my-1 bg-dark rounded text-white">{props.numero5}</div>
          <div className="display-2 fw-bold mx-3 my-1 bg-dark rounded text-white">{props.numero4}</div>
          <div className="display-2 fw-bold mx-3 my-1 bg-dark rounded text-white">{props.numero3}</div>
          <div className="display-2 fw-bold mx-3 my-1 bg-dark rounded text-white">{props.numero2}</div>
          <div className="display-2 fw-bold mx-3 my-1 bg-dark rounded text-white">{props.numero1}</div>
        </div>
      </div>
    </>
  );
};

export default SecondsCounter;
