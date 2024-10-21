package com.zabarzer.carpe.dto;

import lombok.Data;

@Data
public class GoogleLoginRequest {
    private String googleId;
    private String email;
    private String username;
}

