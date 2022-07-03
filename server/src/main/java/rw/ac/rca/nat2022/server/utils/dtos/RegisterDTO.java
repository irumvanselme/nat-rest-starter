package rw.ac.rca.nat2022.server.utils.dtos;

import lombok.Data;

import javax.persistence.Column;

@Data
public class RegisterDTO {

    private String fullNames;

    @Column(unique = true)
    private String username;

    @Column(unique = true)
    private String email;

    private String password;
}
