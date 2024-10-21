package com.zabarzer.carpe.controllers;

import com.zabarzer.carpe.dto.AuthResponse;
import com.zabarzer.carpe.dto.GoogleLoginRequest;
import com.zabarzer.carpe.dto.LoginRequest;
import com.zabarzer.carpe.dto.RegisterRequest;
import com.zabarzer.carpe.services.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
@RequestMapping("/auth")
public class AuthController {

    private final AuthService authService;

    @PostMapping("/login")
    public ResponseEntity<AuthResponse> login(@RequestBody LoginRequest loginRequest) {
        AuthResponse response = authService.login(loginRequest);
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    @PostMapping("/register")
    public ResponseEntity<AuthResponse> register(@RequestBody RegisterRequest registerRequest) {
        AuthResponse response = authService.register(registerRequest);
        return ResponseEntity.status(response.getStatus()).body(response);
    }

    @PostMapping("/google-login")
    public ResponseEntity<AuthResponse> googleLogin(@RequestBody GoogleLoginRequest googleLoginRequest) {
        AuthResponse response = authService.googleLogin(googleLoginRequest);
        return ResponseEntity.status(response.getStatus()).body(response);
    }
}
