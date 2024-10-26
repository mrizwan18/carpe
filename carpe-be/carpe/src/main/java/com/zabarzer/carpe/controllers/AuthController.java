package com.zabarzer.carpe.controllers;

import com.zabarzer.carpe.dto.GoogleLoginRequest;
import com.zabarzer.carpe.dto.LoginRequest;
import com.zabarzer.carpe.dto.RegisterRequest;
import com.zabarzer.carpe.dto.TokenResponse;
import com.zabarzer.carpe.services.AuthService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth")
@RequiredArgsConstructor
public class AuthController {

    private final AuthService authService;

    @PostMapping("/google-login")
    public TokenResponse googleLogin(@RequestBody GoogleLoginRequest request) throws Exception {
        return authService.handleGoogleLogin(request.getToken());
    }

    @PostMapping("/login")
    public TokenResponse login(@RequestBody LoginRequest request) {
        return authService.loginWithUsernameAndPassword(request);
    }

    @PostMapping("/register")
    public TokenResponse register(@RequestBody RegisterRequest request) {
        return authService.registerUser(request);
    }
}
