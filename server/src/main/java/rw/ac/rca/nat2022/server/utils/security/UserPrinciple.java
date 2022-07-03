package rw.ac.rca.nat2022.server.utils.security;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;
import rw.ac.rca.nat2022.server.models.User;
import rw.ac.rca.nat2022.server.models.enums.ERole;

import java.util.Collection;
import java.util.Collections;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class UserPrinciple implements UserDetails {

    private Long id;

    private String fullNames;

    private String username;

    private String email;

    private String password;

    private ERole role;

    private Collection<? extends GrantedAuthority> authorities;


    public static UserPrinciple create(User user) {
        UserPrinciple userPrinciple = new UserPrinciple();

        userPrinciple.id = user.getId();
        userPrinciple.fullNames = user.getFullNames();
        userPrinciple.username = user.getUsername();
        userPrinciple.email = user.getEmail();
        userPrinciple.password = user.getPassword();
        userPrinciple.role = user.getRole();
        userPrinciple.authorities = Collections.singletonList(new SimpleGrantedAuthority(user.getRole().name()));

        return userPrinciple;
    }

    @Override
    public boolean isAccountNonExpired() {
        return true;
    }

    @Override
    public boolean isAccountNonLocked() {
        return true;
    }

    @Override
    public boolean isCredentialsNonExpired() {
        return true;
    }

    @Override
    public boolean isEnabled() {
        return true;
    }
}
