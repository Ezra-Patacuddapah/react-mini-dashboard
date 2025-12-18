import { useState, useEffect } from "react";
import UserCard from "./components/UserCard";

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users");
        const data = await response.json();
        setUsers(data.slice(0, 5));
      } catch (error) {
        console.log(`Error fetching users: ${error}`);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUsers();
  }, []);

  return (
    <div style={{ 
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: "10px"
      
    }}>
      <h1>User Dashboard</h1>
      <button onClick={() => window.location.reload()}>Refresh</button>

      {loading && <p>Loading users...</p>}

      <div style={{
        display: "flex",
        gap: "10px",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center"
      }}>
        {!loading && 
          users.map(user => (
            <UserCard
            key={user.id}
            name={user.name}
            email={user.email}
            company={user.company.name}
          />
        ))}
      </div>
    </div>
  );
}

export default App;