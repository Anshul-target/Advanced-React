import { useEffect, useState } from "react";

const url = "https://api.github.com/users";

const FetchData = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(url);
      const data = await response.json();
      // console.log(data);
      setUser(data);
    };
    fetchData();
  }, []);
  console.log(user);

  return (
    <section>
      <h1>GitHub Users</h1>
      <ul className="users">
        {user.map((userData) => {
          const { login, id, avatar_url, html_url } = userData;
          console.log(id);
          return (
            <li key={id}>
              <img src={avatar_url} />
              <div>
                <h3>{login}</h3>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );

  // return <h2>fetch data example</h2>;
};
export default FetchData;

// Browser Api for HTTP request
// Defaults-GET Requests
// Returns Promise
