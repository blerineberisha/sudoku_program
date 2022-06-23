package berisha.blerine.sudoku.repository;

import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;

import berisha.blerine.sudoku.entity.User;

public interface UserRepo extends JpaRepository<User, UUID>{ 
}
