package berisha.blerine.sudoku.user;

import berisha.blerine.sudoku.role.Role;
import berisha.blerine.sudoku.score.Score;
import org.springframework.stereotype.Service;

import java.security.Principal;
import java.util.List;

@Service
public interface UserService {
    User saveUser(User user);

    Role saveRole(Role role);

    void addRoleToUser(String username, String roleName);

    User getUser(String username);

    List<User> getUsers();

    User loginUser(String username, String password);
}
