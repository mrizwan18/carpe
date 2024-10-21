package com.zabarzer.carpe.services;

import com.zabarzer.carpe.dto.AuthResponse;
import com.zabarzer.carpe.dto.GoogleLoginRequest;
import com.zabarzer.carpe.dto.LoginRequest;
import com.zabarzer.carpe.dto.RegisterRequest;
import com.zabarzer.carpe.entity.User;
import com.zabarzer.carpe.repos.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public AuthResponse login(LoginRequest loginRequest) {
        Optional<User> userOptional = userRepository.findByEmail(loginRequest.getEmail());

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (passwordEncoder.matches(loginRequest.getPassword(), user.getPassword())) {
                return new AuthResponse("Login successful!", HttpStatus.OK, user);
            } else {
                return new AuthResponse("Invalid credentials", HttpStatus.UNAUTHORIZED);
            }
        } else {
            return new AuthResponse("User not found", HttpStatus.NOT_FOUND);
        }
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
        userRepository.save(newUser);

        return new AuthResponse("User registered successfully!", HttpStatus.CREATED, newUser);
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

        return new AuthResponse("Login successful!", HttpStatus.OK, user);
    }
}
