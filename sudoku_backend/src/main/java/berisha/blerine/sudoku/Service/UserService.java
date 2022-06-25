package berisha.blerine.sudoku.service;

import berisha.blerine.sudoku.entity.User;
import berisha.blerine.sudoku.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {
    private UserRepo uRepo;

    @Autowired
    public UserService(UserRepo uRepo) {
        this.uRepo = uRepo;
    }

    public List<User> getAll() {
        return uRepo.findAll();
    }

    public User save(User user) {
        return uRepo.save(user);
    }


}
