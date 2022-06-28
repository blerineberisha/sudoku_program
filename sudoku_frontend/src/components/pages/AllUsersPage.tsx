import React, { useEffect, useState } from 'react'
import { AxiosService } from '../../services/AxiosService'
import { User } from '../../Types/User';

export default function AllUsersPage() {

    const [users, setUsers] = useState<User[]>([]);

    useEffect(() => {
        const aService = new AxiosService();
        aService.getAllUsers().then((res) => {
            setUsers(res.data);
        }).catch((e)=>{
            console.log(e)
        })
    })

    return (
        <div>
            {users.map((u: User) => {
                return (
                    <>
                        <p>{u.username}</p>
                        <p>{u.email}</p>
                    </>
                )
            })}
        </div>
    )
}
