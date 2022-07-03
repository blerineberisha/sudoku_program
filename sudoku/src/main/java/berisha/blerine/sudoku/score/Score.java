package berisha.blerine.sudoku.score;
import berisha.blerine.sudoku.user.User;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "score")
@AllArgsConstructor
@NoArgsConstructor
@Getter
@Setter
public class Score {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @Column(name = "difficulty", nullable = false)
    private String difficulty;

    @Column(name = "time", nullable = false)
    private int time;

    @ManyToOne(fetch = FetchType.EAGER)
    private User user;
}
