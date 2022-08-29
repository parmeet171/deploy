import React, { useEffect, useState } from "react";
// import Weather from "./components/Weather";
// import { fetchData } from "./fetchData";
import "./App.css";

const App = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch("https://api.github.com/users");

    setUsers(await response.json());
  };

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <div className="container mt-">
      <div className="mt-5 colums">
        {users.map((currentUser,index) => {
          return (
            <div className="card mb-5" key={index}>
              <img
                src={currentUser.avatar_url}
                className="card-img-top"
                alt="..."
              />
              <div className="card-body">
                <h5 className="card-title">{currentUser.login}</h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href={currentUser.html_url} className="btn btn-info">
                  GoTo Github
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
