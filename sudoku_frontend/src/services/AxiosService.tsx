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

    getScores() {
        return this.client.get("/scores");
    }

    login(username: string, password: string) {
        return this.client.post("/users/login", {username, password});
    }

    personalScores(id: number | undefined){
        return this.client.get("/scores/" + id)
    }

    getLoggedinUser(){
        return this.client.get("/profile");
    }
}