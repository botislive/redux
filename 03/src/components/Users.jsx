import { useAtom } from 'jotai'
import { usersAtom } from '../atoms'

function Users() {
    const [users]=useAtom(usersAtom)
  return (
    <div>
        <div>
            <h1>The users fetched from the api are:</h1>
        </div>
        <div>
            {users.map((user)=>(
                <div key={user.id}>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Users