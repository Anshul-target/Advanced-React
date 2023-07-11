import { useState } from "react";

const ShortCircuitOverview = () => {
  const [text, setval1] = useState("");
  const [name, setval2] = useState("susan");
  return (
    <>
      <h2>short circuit overview</h2>;
      {/* <h3>{if(somecondition){
      "wont work in return for this we have short circuit operator"
    }} </h3> */}
      <h3>Falsy OR : {text || name}</h3>
      <h3>Falsy AND : {text && name}</h3>
      <h3>Falsy OR : {text || name}</h3>
      <h3>Falsy AND : {text && name}</h3>
    </>
  );
};
export default ShortCircuitOverview;
