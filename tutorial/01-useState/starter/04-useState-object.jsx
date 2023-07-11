import { useState } from "react";

const UseStateObject = () => {
  // const [name, setName] = useState("peter");
  // const [age, setAge] = useState(24);
  // const [hobby, setHobby] = useState("Love to Read Books");

  // Using state as object

  const [person, setPerson] = useState({
    name: "Peter",
    age: 12,
    hobby: "Enjoy:Screaming at tonight",
  });

  const displayPerson = () => {
    // setPerson({
    //   name: "John",
    //   age: 28,
    //   hobby: "Enjoy:Reading the books",
    // });

    setPerson({ ...person, name: "John" });
  };

  return (
    <>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.hobby}</h2>
      <button
        style={{
          fontSize: "1rem",
          color: "White",
          border: "none",
          borderRadius: "5px",
          backgroundColor: "blue",
          padding: "5px",
        }}
        onClick={displayPerson}
      >
        Read John
      </button>
    </>
  );
};

export default UseStateObject;
