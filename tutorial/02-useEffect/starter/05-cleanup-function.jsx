import { useEffect, useState } from "react";

const CleanupFunction = () => {
  const [toggle, setToggle] = useState(false);
  console.log("Render");
  return (
    <div>
      <button
        className="btn"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        {" "}
      </button>
      {toggle && <RandomComponent />}
    </div>
  );
};
// const RandomComponent = () => {
//   useEffect(() => {
//     // console.log("HM.. THIS IS INTERESTING");
//     const intId = setInterval(() => {
//       //WHEN WE UNMOUNT THE COMPONENET THEN WE NOITCE THAT SET TIME INTERVAL WILL RUN EVEN THE CONDITION IS NOT TRUE
//       // console.log("Anshul");
//     }, 1000);
//     // SOLUTION IS A CLEAN UP FUNCTION
//     // it returns a function
//     return () => {
//       clearInterval(intId);
//       console.log("CleanUp");
//     };
//   }, []);
//   return <h1>Hello there</h1>;
// };

const RandomComponent = () => {
  useEffect(() => {
    const someFunction = () => {};
    window.addEventListener("scroll", someFunction); //Again we wiil see that even we unmount the component we have the eventListener

    //SOLUTION

    return () => window.removeEventListener("scroll", someFunction);
  }, []);
  return <H2>Hello There</H2>;
};

export default CleanupFunction;
