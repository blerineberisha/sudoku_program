package berisha.blerine.sudoku;

import berisha.blerine.sudoku.role.Role;
import berisha.blerine.sudoku.score.Score;
import berisha.blerine.sudoku.score.ScoreService;
import berisha.blerine.sudoku.user.User;
import berisha.blerine.sudoku.user.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.util.ArrayList;

@SpringBootApplication
public class SudokuApplication {

    public static void main(String[] args) {
        SpringApplication.run(SudokuApplication.class, args);
    }

    @Bean
    PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }

	@Bean
	CommandLineRunner run(UserService userService, ScoreService scoreService) {
		return args -> {
			Role userRole = new Role(1, "ROLE_USER");
			userService.saveRole(userRole);
			Role adminRole = new Role(2, "ROLE_ADMIN");
			User adminUser = new User(1, "admin", "admin@sudoku.com", "adminpwd", new ArrayList<>());
			userService.saveRole(adminRole);
			userService.saveUser(adminUser);
            userService.addRoleToUser("admin", "ROLE_ADMIN");
			User user = new User(2, "user", "default@user.com", "pwd", new ArrayList<>());
			userService.saveUser(user);
			Score score1 = new Score(1, "hard", 90, user);
			scoreService.saveScore(score1);
		};
	}
}
