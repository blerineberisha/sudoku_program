package berisha.blerine.sudoku.user;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserWeb {

    @Autowired
    private UserServiceImpl uService;

    @GetMapping("")
    public List<User> getAllUsers() {
        return uService.getUsers();
    }

    @PostMapping("")
    public User saveUser(@RequestBody User user){
        return uService.saveUser(user);
    }

}
