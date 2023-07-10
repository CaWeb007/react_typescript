import {useState} from "react";

type AuthUser = {
    name: string
    email: string
}

export const User = () => {
    const [user, setUser] = useState<null | AuthUser>(null)
    //const [user, setUser] = useState<AuthUser>({} as AuthUser) для обязательных полей, тут типа подмена типа идет
    const handleLogin = () => {
        setUser({
            name: 'Pavel',
            email: 'spcell007@gmail.com'
        })
    }
    const handleLogout = () => {
        setUser(null)
    }
    return (
        <div>
            <button onClick={handleLogin}>Login</button>
            <button onClick={handleLogout}>Logout</button>
            <div>User name is {user?.name}</div>
            <div>User email is {user?.email}</div>
        </div>
    )
}