package berisha.blerine.sudoku.user;

import berisha.blerine.sudoku.role.Role;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Collection;
import java.util.UUID;

@Entity
@Table(name="user")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int user_id;

    @Column(name="username", unique = true, nullable = false)
    private String username;

    @Column(name="email", unique = true,  nullable = false)
    private String email;

    @Column(name="password", nullable = false)
    private String password;

    @ManyToMany(fetch = FetchType.EAGER)
    private Collection<Role> roles = new ArrayList<>();

    public User(String username, String password) {
        this.user_id = getUser_id();
        this.username = username;
        this.password = password;
    }
}
