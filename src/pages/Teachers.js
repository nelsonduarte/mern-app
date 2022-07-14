import { useEffect, useState } from "react"

const Teachers = () => {
  useEffect(() => {
    const fetchUsers = async () => {
      const result = await fetch("/api/users")
      const data = await result.json()
      setUsers(data)
    }
    fetchUsers()
  }, [])

  const [users, setUsers] = useState([])

  return (
    <div className="userList">
      {users.map((user) => (
        <>
          <div className="user">
            <p key={user.numero}>{user.numero}</p>
            <p key={user.nome}>{user.nome}</p>
            <p key={user.email}>{user.email}</p>
          </div>
        </>
      ))}
    </div>
  )
}

export default Teachers
