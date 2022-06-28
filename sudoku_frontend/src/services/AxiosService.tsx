import axios from "axios";
import { User } from "../Types/User";

export class AxiosService {
    private client = axios.create({ baseURL: 'http://localhost:8080' });

    postNewUser(user: User) {
        return this.client.post("/users/", user);
    }

    getAllUsers() {
        return this.client.get("/users");
    }

    findUser(username: string) {
        return this.client.get("/users/" + username);
    }
}