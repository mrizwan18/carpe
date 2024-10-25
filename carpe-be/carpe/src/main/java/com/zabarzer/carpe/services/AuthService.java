package com.zabarzer.carpe.services;

import com.zabarzer.carpe.dto.AuthResponse;
import com.zabarzer.carpe.dto.GoogleLoginRequest;
import com.zabarzer.carpe.dto.LoginRequest;
import com.zabarzer.carpe.dto.RegisterRequest;
import com.zabarzer.carpe.entity.User;
import com.zabarzer.carpe.repos.UserRepository;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.crypto.spec.SecretKeySpec;
import java.security.Key;
import java.util.Base64;
import java.util.Date;
import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    @Value("${jwt.secret}")
    private String jwtSecret;

    @Value("${jwt.expiration}")
    private long jwtExpiration;

    public AuthResponse login(LoginRequest loginRequest) {
        Optional<User> userOptional = userRepository.findByEmail(loginRequest.getEmail());

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
                // Generate JWT token
                String token = generateJwtToken(user);

                return new AuthResponse("Login successful!", HttpStatus.OK, user, token);
            } else {
                return new AuthResponse("Invalid credentials", HttpStatus.UNAUTHORIZED);
            }
        } else {
            return new AuthResponse("User not found", HttpStatus.NOT_FOUND);
        }
    }

    // Method to generate JWT token
    private String generateJwtToken(User user) {
        return Jwts.builder()
                .setSubject(user.getEmail())
                .setIssuedAt(new Date())
                .setExpiration(new Date((new Date()).getTime() + jwtExpiration))
                .signWith(getSigningKey(), SignatureAlgorithm.HS512) // Use the Key instance here
                .compact();
    }

    private Key getSigningKey() {
        byte[] keyBytes = Base64.getDecoder().decode(jwtSecret);
        return new SecretKeySpec(keyBytes, SignatureAlgorithm.HS512.getJcaName());
    }

    public AuthResponse register(RegisterRequest registerRequest) {
        Optional<User> existingUser = userRepository.findByEmail(registerRequest.getEmail());

        if (existingUser.isPresent()) {
            return new AuthResponse("User already exists!", HttpStatus.CONFLICT);
        }

        User newUser = new User();
        newUser.setEmail(registerRequest.getEmail());
        newUser.setUsername(registerRequest.getUsername());
        newUser.setPassword(passwordEncoder.encode(registerRequest.getPassword()));
        User user = userRepository.save(newUser);
        String token = generateJwtToken(user);
        return new AuthResponse("User registered successfully!", HttpStatus.CREATED, newUser, token);
    }

    public AuthResponse googleLogin(GoogleLoginRequest googleLoginRequest) {
        User user = userRepository.findByGoogleId(googleLoginRequest.getGoogleId())
                .orElseGet(() -> {
                    User newUser = new User();
                    newUser.setGoogleId(googleLoginRequest.getGoogleId());
                    newUser.setEmail(googleLoginRequest.getEmail());
                    newUser.setUsername(googleLoginRequest.getUsername());
                    return userRepository.save(newUser);
                });
        String token = generateJwtToken(user);
        return new AuthResponse("Login successful!", HttpStatus.OK, user, token);
    }
}
