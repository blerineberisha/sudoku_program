package berisha.blerine.sudoku.security;

import com.mysql.cj.protocol.x.XAuthenticationProvider;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.password.PasswordEncoder;

import static org.springframework.http.HttpMethod.GET;
import static org.springframework.http.HttpMethod.POST;


@Configuration
@EnableWebSecurity
@RequiredArgsConstructor
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {
    private final UserDetailsService userDetailsService;
    private final PasswordEncoder passwordEncoder;

    @Override
    @Bean
    public AuthenticationManager authenticationManagerBean() throws Exception {
        return super.authenticationManagerBean();
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.cors();
        http.csrf().disable();
        http.httpBasic().and()
                .authorizeRequests()
                .antMatchers(GET, "/users/**")
                .permitAll();
        http.httpBasic().and()
                .authorizeRequests()
                .antMatchers(POST, "/users/**")
                .permitAll();
        http.httpBasic().and()
                .authorizeRequests()
                .antMatchers(POST, "/users/login")
                .permitAll();
        http.httpBasic().and()
                .authorizeRequests()
                .antMatchers(POST, "/scores/**")
                .hasAnyAuthority("ROLE_USER", "ROLE_ADMIN");
        http.httpBasic().and()
                .authorizeRequests()
                .antMatchers(GET, "/scores/**")
                .permitAll();
    }
}
