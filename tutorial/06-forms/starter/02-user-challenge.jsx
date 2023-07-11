import { useState } from "react";
import { data } from "../../../data";

const UserChallenge = () => {
  const [name, setName] = useState("");
  const [user, setUser] = useState(data);
  // console.log(user);
  const removeUser = (id) => {
    const updatedUser = user.filter((person) => id !== person.id);
    setUser(updatedUser);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name) return;
    const fakeId = Date.now();

    const UpdateUser = { id: fakeId, name: name };

    const newUser = [...user, UpdateUser];
    console.log(UpdateUser);
    console.log(newUser);
    setUser(newUser);
    setName("");
  };
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Add User</h4>
        <div className="form-row">
          <label htmlFor="name" className="form-label">
            name
          </label>
          <input
            type="text"
            className="form-input"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-block" onSubmit={handleSubmit}>
          submit
        </button>
      </form>

      <h4>Users1</h4>
      {user.map((name1) => {
        return (
          <div key={name1.id}>
            <h4>{name1.name}</h4>
            <button
              onClick={() => {
                removeUser(name1.id);
              }}
              className="btn"
            >
              Remove
            </button>
          </div>
        );
      })}
      {/* render users below */}
    </div>
  );
};
export default UserChallenge;
