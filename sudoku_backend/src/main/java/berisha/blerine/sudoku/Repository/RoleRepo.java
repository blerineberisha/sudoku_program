package berisha.blerine.sudoku.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import berisha.blerine.sudoku.entity.Role;
import org.springframework.stereotype.Repository;

@Repository
public interface RoleRepo extends JpaRepository<Role, UUID>{
}
