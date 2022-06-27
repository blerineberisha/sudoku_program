package berisha.blerine.sudoku;

import berisha.blerine.sudoku.role.Role;
import berisha.blerine.sudoku.user.User;
import berisha.blerine.sudoku.user.UserService;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.jdbc.DataSourceAutoConfiguration;
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
	CommandLineRunner run(UserService userService) {
		return args -> {
			userService.saveRole(new Role(1, "ROLE_USER"));
			userService.saveRole(new Role(2, "ROLE_ADMIN"));
			userService.saveUser(new User(1, "blerine", "blerineberisha@gmail.com", "sky", new ArrayList<>()));
            userService.addRoleToUser("blerine", "ROLE_ADMIN");
			userService.saveUser(new User(2, "user","default@user.com", "pwd", new ArrayList<>()));
			userService.addRoleToUser("user", "ROLE_USER");
		};
	}

}
