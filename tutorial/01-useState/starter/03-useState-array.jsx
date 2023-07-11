import { data } from "../../../data";
import React from "react";
const UseStateArray = () => {
  const [people, setPeople] = React.useState(data);
  function removeId(id) {
    const newPeople = people.filter((person) => person.id != id);
    // WE WILL USE THE FILTER AND FIND METHORD
    setPeople(newPeople);
  }
  return (
    <div>
      {people.map((person) => {
        const { id, name } = person;
        return (
          <div key={id}>
            <h4>{name}</h4>
            <button
              onClick={() => {
                removeId(id);
              }}
            >
              Remove
            </button>
          </div>
        );
      })}
      <button
        style={{
          margin: "auto",
          marginTop: "2rem",
          margingBottom: "2rem",
        }}
        onClick={removeAll}
      >
        Remove all
      </button>
    </div>
  );
};

export default UseStateArray;
