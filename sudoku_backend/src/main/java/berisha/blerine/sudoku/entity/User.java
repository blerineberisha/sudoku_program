package berisha.blerine.sudoku.entity;

import javax.persistence.*;
import java.util.Calendar;
import java.util.Set;
import java.util.UUID;

import berisha.blerine.sudoku.entity.Role;

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "id", nullable = false)
    private UUID id;

    @Column
    private String username;

    @Column
    private String emailAddress;
    @Column
    private String password;

    @OneToOne(fetch = FetchType.EAGER)
    @JoinTable(
            name = "users_roles",
            joinColumns = @JoinColumn(name = "user_id", referencedColumnName = "id"))
    private Role role;

    public User(UUID id, String username, String emailAddress, String password, Role role) {
        this.id = id;
        this.username = username;
        this.emailAddress = emailAddress;
        this.password = password;
        this.role = role;
    }

    public Role getRole() {
        return role;
    }

    public void setRoles(Role role) {
        this.role = role;
    }

    public UUID getId() {
        return id;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public String getEmailAddress() {
        return emailAddress;
    }

    public void setEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
    }

}