package berisha.blerine.sudoku.service;

import berisha.blerine.sudoku.entity.Role;
import berisha.blerine.sudoku.entity.User;
import berisha.blerine.sudoku.repository.RoleRepo;
import berisha.blerine.sudoku.repository.UserRepo;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserService {

    private UserRepo uRepo;
    private RoleRepo rRepo;

    public UserService(UserRepo uRepo, RoleRepo rRepo) {
        this.uRepo = uRepo;
        this.rRepo = rRepo;
    }

    public List<User> getAll() {
        return uRepo.findAll();
    }
}
