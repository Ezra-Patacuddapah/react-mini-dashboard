import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await response.json();
      setUsers(data.slice(0, 5));
      setLoading(false);
    };
    
    fetchUsers();
  }, []);

  return (
    <div style={{ maxWidth: "500px", margin: "40px auto"}}>
      <h1>User Dashboard</h1>

      {loading && <p>Loading users...</p>}

      {!loading && 
        users.map(user => (
          <UserCard
          key={user.id}
          name={user.name}
          email={user.email}
          />
        ))}
    </div>
  );
}

export default App;