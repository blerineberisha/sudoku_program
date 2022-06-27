import { Role } from "./Role"

export type User = {
    user_id: number,
    username: string,
    email: string,
    password: string,
    roles: Role
}