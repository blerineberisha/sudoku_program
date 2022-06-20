package berisha.Service;

import berisha.blerine.sudoku.Entities.Authority;
import berisha.blerine.sudoku.Repository.AuthorityRepo;
import java.util.List;
import java.util.UUID;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthorityService {

  private AuthorityRepo aRepo;

  @Autowired
  public AuthorityService(AuthorityRepo aRepo) {
    this.aRepo = aRepo;
  }

  public List<Authority> getAllAuthorities() {
    return aRepo.findAll();
  }

  public Authority getAuthorityByID(UUID id) {
    return aRepo.getReferenceById(id);
  }

  public void removeAuthorityByID(UUID id) {
    aRepo.deleteById(id);
  }

  public Authority updateAuthorityByID(Authority authority) {
    authority.setDescription(authority.getDescription());
    authority.setName(authority.getName());
    return aRepo.save(authority);
  }
}
