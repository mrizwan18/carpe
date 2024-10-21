package com.zabarzer.carpe.dto;

import com.zabarzer.carpe.entity.User;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.http.HttpStatus;

@Data
@AllArgsConstructor
public class AuthResponse {
    private String message;
    private HttpStatus status;
    private User user;

    // Constructor for responses without user data
    public AuthResponse(String message, HttpStatus status) {
        this.message = message;
        this.status = status;
    }
}
