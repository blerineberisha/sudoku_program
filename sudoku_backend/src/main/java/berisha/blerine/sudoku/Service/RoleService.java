package berisha.blerine.sudoku.service;

import berisha.blerine.sudoku.entity.Role;
import berisha.blerine.sudoku.repository.RoleRepo;

import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class RoleService {

  private RoleRepo rRepo;

  @Autowired
  public RoleService(RoleRepo rRepo) {
    this.rRepo = rRepo;
  }

  public List<Role> getAllRoles() {
    return rRepo.findAll();
  }

  public Role getRoleByID(UUID id) {
    return rRepo.getReferenceById(id);
  }
}
