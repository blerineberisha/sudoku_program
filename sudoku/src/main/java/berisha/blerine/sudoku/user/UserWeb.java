package berisha.blerine.sudoku.user;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/users")
public class UserWeb {

    @Autowired
    private AuthenticationManager authManager;

    @Autowired
    private UserServiceImpl uService;

    @GetMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public List<User> getAllUsers() {
        return uService.getUsers();
    }

    @PostMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public User saveUser(@RequestBody User user){
        return uService.saveUser(user);
    }

    @GetMapping("/{username}")
    @CrossOrigin(origins = "http://localhost:3000")
    public User getByUsername(@PathVariable String username){
        return uService.getUser(username);
    }

    @PostMapping("/login")
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<User> authenticateUser(@RequestBody User user){
        return ResponseEntity.ok().body(uService.loginUser(user.getUsername(), user.getPassword()));
    }

    @GetMapping("/profile")
    @CrossOrigin(origins="http://localhost:3000")
    public ResponseEntity<User> getCurrentUser(Principal principal){
        User loggedIn = uService.getUser(principal.getName());
        return ResponseEntity.ok().body(loggedIn);
    }
}