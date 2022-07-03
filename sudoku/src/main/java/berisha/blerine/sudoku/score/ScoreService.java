package berisha.blerine.sudoku.score;

import berisha.blerine.sudoku.user.User;
import berisha.blerine.sudoku.user.UserRepo;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
@RequiredArgsConstructor
public class ScoreService{
    private final ScoreRepo sRepo;
    private final UserRepo uRepo;

    public List<Score> getAllScores(){
        return sRepo.findAll();
    }

    public List<Score> getPersonalScores(int id){
        List<Score> personalScores = new ArrayList<>();
        List<Score> globalScores = getAllScores();
        User user = uRepo.getReferenceById(id);
        for(Score score : globalScores){
            if(score.getUser().getUsername().equals(user.getUsername())){
                personalScores.add(score);
            }
        }
        return personalScores;
    }

    public Score saveScore(Score score){
        return sRepo.save(score);
    }
}
