package berisha.blerine.sudoku.controller;


import berisha.blerine.sudoku.service.UserService;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import berisha.blerine.sudoku.entity.User;

import java.util.List;


@RestController
@RequestMapping("/users")
public class UserController {

    private final UserService uService;

    public UserController(UserService uService) {
        this.uService = uService;
    }

    @GetMapping("")
    @PreAuthorize("hasRole('admin')")
    public List<User> getAllUsers() {
        return uService.getAll();
    }

}
