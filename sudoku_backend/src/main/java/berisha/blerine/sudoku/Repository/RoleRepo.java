package berisha.blerine.sudoku.Repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import berisha.blerine.sudoku.Entities.Role;

public interface RoleRepo extends JpaRepository<Role, UUID>{
}
