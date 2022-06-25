package berisha.blerine.sudoku.service;

import berisha.blerine.sudoku.repository.AuthorityRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class AuthorityService{

  private AuthorityRepo aRepo;

  @Autowired
  public AuthorityService(AuthorityRepo aRepo){
    this.aRepo = aRepo;
  }


}