package berisha.blerine.sudoku.user;

import berisha.blerine.sudoku.score.Score;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface UserRepo extends JpaRepository<User, Integer> {
    User findByUsername(String username);

}
