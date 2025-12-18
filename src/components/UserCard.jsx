function UserCard({ name, email, company }) {
    return (
        <div style={{
            border: "1px solid #ddd",
            padding: "10px",
            borderRadius: "6px",
            marginBottom: "10px"
        }}>
            <h3>Name: {name}</h3>
            <p>Email: {email}</p>
            <p>Company: {company}</p>
        </div>
    );
}

export default UserCard;