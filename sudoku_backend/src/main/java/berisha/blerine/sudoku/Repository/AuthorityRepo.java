package berisha.blerine.sudoku.repository;

import java.util.UUID;

import org.springframework.data.jpa.repository.JpaRepository;

import berisha.blerine.sudoku.entity.Authority;

public interface AuthorityRepo extends JpaRepository<Authority, UUID>{
}