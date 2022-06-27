package berisha.blerine.sudoku.user;

import berisha.blerine.sudoku.role.Role;
import berisha.blerine.sudoku.role.RoleRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

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
            System.out.println("User found in the database: {}" + username);
        }
        Collection<SimpleGrantedAuthority> authorities = new ArrayList<>();
        user.getRoles().forEach(role -> authorities.add(new SimpleGrantedAuthority(role.getName())));
        return new org.springframework.security.core.userdetails.User(user.getUsername(), user.getPassword(), authorities);
    }

    @Override
    public User saveUser(User user) {
        System.out.println("Saving new user to the database");
        user.setPassword(passwordEncoder.encode(user.getPassword()));
        return uRepo.save(user);
    }

    @Override
    public Role saveRole(Role role) {
        System.out.println("Saving new role {} to the database " + role.getName());
        return rRepo.save(role);
    }

    @Override
    public void addRoleToUser(String username, String roleName) {
        System.out.println("Adding role {} to user {} " + roleName + " " + username);
        User user = uRepo.findByUsername(username);
        Role role = rRepo.findByName(roleName);
        user.getRoles().add(role);
    }

    @Override
    public User getUser(String username) {
        System.out.println("Fetching user {} " + username);

        return uRepo.findByUsername(username);
    }

    @Override
    public List<User> getUsers() {
        System.out.println("Fetching all users");
        return uRepo.findAll();
    }
}
