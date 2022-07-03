package rw.ac.rca.nat2022.server.models;

import lombok.Getter;
import lombok.Setter;
import rw.ac.rca.nat2022.server.models.enums.ERole;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "users")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id", nullable = false)
    private Long id;

    private String fullNames;

    @Column(unique = true)
    private String username;

    @Column(unique = true)
    private String email;

    private String password;

    @Enumerated(EnumType.STRING)
    private ERole role;
}
