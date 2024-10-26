package com.zabarzer.carpe.services;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;
import com.google.api.client.http.javanet.NetHttpTransport;
import com.google.api.client.json.gson.GsonFactory;
import com.zabarzer.carpe.dto.LoginRequest;
import com.zabarzer.carpe.dto.RegisterRequest;
import com.zabarzer.carpe.dto.TokenResponse;
import com.zabarzer.carpe.entity.User;
import com.zabarzer.carpe.repos.UserRepository;
import com.zabarzer.carpe.util.JwtUtil;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.RandomStringUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import java.util.Collections;

@Service
@RequiredArgsConstructor
public class AuthService {

    private final JwtUtil jwtUtil;
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final NetHttpTransport transport = new NetHttpTransport();
    private final GsonFactory jsonFactory = GsonFactory.getDefaultInstance();
    @Value("${google.client.id}")
    private String googleClientId;

    // Google OAuth login
    public TokenResponse handleGoogleLogin(String token) throws Exception {
        GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(transport, jsonFactory)
                .setAudience(Collections.singletonList(googleClientId))
                .build();

        GoogleIdToken idToken = verifier.verify(token);
        if (idToken != null) {
            GoogleIdToken.Payload payload = idToken.getPayload();
            String email = payload.getEmail();
            String googleId = payload.getSubject();

            // Generate random password (8 characters)
            String randomPassword = RandomStringUtils.randomAlphanumeric(8);

            // Check if the user exists, or create and save a new one
            User user = userRepository.findByEmail(email)
                    .orElseGet(() -> userRepository.save(
                            User.builder()
                                    .username(email)
                                    .email(email)
                                    .password(passwordEncoder.encode(randomPassword))
                                    .googleId(googleId)
                                    .build()
                    ));

            // Generate JWT
            String jwt = jwtUtil.generateToken(user.getEmail());
            return new TokenResponse(jwt);
        } else {
            throw new Exception("Invalid Google ID token");
        }
    }

    // Username and password login
    public TokenResponse loginWithUsernameAndPassword(LoginRequest request) {
        User user = userRepository.findByEmail(request.getEmail())
                .orElseThrow(() -> new RuntimeException("User not found"));

        if (!passwordEncoder.matches(request.getPassword(), user.getPassword())) {
            throw new RuntimeException("Invalid credentials");
        }

        String jwt = jwtUtil.generateToken(user.getEmail());
        return new TokenResponse(jwt);
    }

    // User registration
    public TokenResponse registerUser(RegisterRequest request) {
        if (userRepository.findByEmail(request.getEmail()).isPresent()) {
            throw new RuntimeException("User already exists");
        }

        User user = new User(request.getUsername(), request.getEmail(), passwordEncoder.encode(request.getPassword()));
        userRepository.save(user);

        String jwt = jwtUtil.generateToken(user.getEmail());
        return new TokenResponse(jwt);
    }
}
