package com.zabarzer.carpe.config;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configurers.AbstractHttpConfigurer;
import org.springframework.security.web.SecurityFilterChain;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

@Configuration
public class SecurityConfig {

    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
                .csrf(AbstractHttpConfigurer::disable)
                .authorizeHttpRequests(auth -> auth
                        .requestMatchers("/auth/**").permitAll() // Allow access to auth endpoints
                        .anyRequest().authenticated() // All other requests require authentication
                )
                .oauth2Login(oauth2 -> oauth2
                        .loginPage("/login")  // Your custom login page, if needed
                        .defaultSuccessUrl("/dashboard")  // Redirect to a page after successful login
                        .failureUrl("/login?error=true")  // Redirect in case of login failure
                );

        return http.build();
    }

    @Bean
    public BCryptPasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}

