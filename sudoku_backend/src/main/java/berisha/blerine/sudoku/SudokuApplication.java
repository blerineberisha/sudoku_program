package berisha.blerine.sudoku;

import berisha.blerine.sudoku.entity.Authority;
import berisha.blerine.sudoku.entity.Role;
// import org.springframework.boot.SpringApplication;
import berisha.blerine.sudoku.entity.User;
import berisha.blerine.sudoku.repository.AuthorityRepo;
import berisha.blerine.sudoku.repository.RoleRepo;
import berisha.blerine.sudoku.repository.UserRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.UUID;

@SpringBootApplication
public class SudokuApplication {
    @Autowired
    private static UserRepo uRepo;
    @Autowired
    private static RoleRepo rRepo;
    @Autowired
    private static AuthorityRepo aRepo;

    public SudokuApplication(UserRepo uRepo, RoleRepo rRepo, AuthorityRepo aRepo) {
        this.uRepo = uRepo;
        this.rRepo = rRepo;
        this.aRepo = aRepo;
    }

    public static void main(String[] args) throws Exception {
        Role admin = new Role("admin", "all rights given");
        rRepo.save(admin);
        User blerine = new User(
                new UUID(64, 64),
                "blerine",
                "blerineberisha@gmail.com",
                "sky", admin
        );
        uRepo.save(blerine);
    }
}
