package berisha.blerine.sudoku.user;

import berisha.blerine.sudoku.role.Role;
import berisha.blerine.sudoku.role.RoleRepo;
import berisha.blerine.sudoku.score.Score;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCrypt;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.HttpServerErrorException;

import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Collection;
import java.util.List;

@Service
@RequiredArgsConstructor
@Transactional
public class UserServiceImpl implements UserDetailsService, UserService {

    private final UserRepo uRepo;
    private final RoleRepo rRepo;
    private final PasswordEncoder passwordEncoder;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        User user = uRepo.findByUsername(username);
        if (user == null) {
            System.err.println("User not found");
            throw new UsernameNotFoundException("User not found in the database");
        } else {
            System.out.println("User found in the database: " + username);
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        user.getRoles().forEach(role -> authorities.add(new SimpleGrantedAuthority(role.getName())));
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
    }

    @Override
    public User saveUser(User user) {
        System.out.println("Saving new user to the database");
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        Role roleUser = rRepo.findByName("ROLE_USER");
        Collection<Role> defaultRoles = new ArrayList<>();
        defaultRoles.add(roleUser);
        user.setRoles(defaultRoles);
        uRepo.save(user);
        return user;
    }

    @Override
    public Role saveRole(Role role) {
        System.out.println("Saving new role to the database " + role.getName());
        return rRepo.save(role);
    }

    @Override
    public void addRoleToUser(String username, String roleName) {
        User user = uRepo.findByUsername(username);
        Role role = rRepo.findByName(roleName);
        user.getRoles().add(role);
    }

    @Override
    public User loginUser(String username, String password) {
        User userFromDb;
        User toLogin = new User(username, password);
        if (toLogin.getUser_id() == 0) {
            userFromDb = uRepo.findByUsername(username);
        } else {
            userFromDb = uRepo.findById(toLogin.getUser_id()).orElse(null);
        }
        if (userFromDb == null)
            throw new HttpServerErrorException(HttpStatus.NOT_FOUND, "User with email " + toLogin.getUsername() + " does not exist. Please register!");
        if (toLogin.getPassword() == null && userFromDb.getPassword() == null) return userFromDb;
        if (userFromDb.getPassword() == null)
            throw new HttpServerErrorException(HttpStatus.NOT_FOUND, "User not found!");
        if (!BCrypt.checkpw(toLogin.getPassword(), userFromDb.getPassword())) {
            throw new HttpServerErrorException(HttpStatus.FORBIDDEN, "Wrong password. Please try again!");
        }
        System.out.println(userFromDb.getUsername() + " is logged in.");
        return userFromDb;
    }

    @Override
    public User getUser(String username) {
        return uRepo.findByUsername(username);
    }

    @Override
    public List<User> getUsers() {
        return uRepo.findAll();
    }
}
