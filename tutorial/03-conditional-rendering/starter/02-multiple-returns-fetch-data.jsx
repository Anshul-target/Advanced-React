import { useEffect, useState } from "react";
const url = "https://api.github.com/users/QuincyLarson";

const MultipleReturnsFetchData = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const showGithub = async () => {
      try {
        const data = await fetch(url);

        const response = await data.json();
        console.log(response);
        setUser(response);
      } catch (err) {
        console.log(err);
      }
    };
    showGithub();
  }, []);
  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 4000);
  }, []);
  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  console.log(user);

  return (
    <section>
      {/* // "login": "QuincyLarson", // "id": 985197, // "node_id":
      "MDQ6VXNlcjk4NTE5Nw==", // "avatar_url":
      "https://avatars.githubusercontent.com/u/985197?v=4", // "gravatar_id":
      "", // "url": "https://api.github.com/users/QuincyLarson", // "html_url":
      "https://github.com/QuincyLarson", */}
      <>
        <h2>Fetch Data </h2>;
        <div>
          <img src={user.avatar_url}></img>
        </div>
        <h2>{user.name}</h2>
        <h3>Work At {user.blog}</h3>
        <p>{user.bio}</p>
      </>
    </section>
  );
};
export default MultipleReturnsFetchData;
