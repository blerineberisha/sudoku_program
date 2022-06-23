package berisha.blerine.sudoku.entity;

import java.util.UUID;

import javax.persistence.*;

@Entity
@Table(name="authority")
public class Authority {
    
    @Id
    @Column(name="id", nullable = false)
    private UUID id;

    @Column
    private String name;

    @Column
    private String description;

    public UUID getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public void setId(UUID id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setDescription(String description) {
        this.description = description;
    }

}
