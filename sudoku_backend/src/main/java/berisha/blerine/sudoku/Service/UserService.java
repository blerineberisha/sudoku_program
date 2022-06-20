package berisha.blerine.sudoku.Service;

import berisha.blerine.sudoku.Entities.User;
import berisha.blerine.sudoku.Repository.UserRepo;

import java.util.List;
import java.util.UUID;

public class UserService {
    private UserRepo uRepo;

    public UserService(UserRepo uRepo) {
        this.uRepo = uRepo;
    }

    public List<User> getAll() {
        return uRepo.findAll();
    }

    public User getUserByID(UUID id){
        return uRepo.getReferenceById(id);
    }

    public void deleteUserByID(UUID id){
        uRepo.deleteById(id);
    }
}
