package berisha.blerine.sudoku.score;

import berisha.blerine.sudoku.user.User;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/scores")
public class ScoreWeb {
    private final ScoreService sService;

    @GetMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<Score>> getAllScores(){
        return ResponseEntity.ok().body(sService.getAllScores());
    }

    @PostMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<Score> saveScore(@RequestBody Score score){
        return ResponseEntity.ok().body(sService.saveScore(score));
    }

    @GetMapping("/{id}")
    @CrossOrigin(origins="http://localhost:3000")
    public ResponseEntity<List<Score>> getPersonalScores(@PathVariable int id){
        return ResponseEntity.ok().body(sService.getPersonalScores(id));
    }
}
