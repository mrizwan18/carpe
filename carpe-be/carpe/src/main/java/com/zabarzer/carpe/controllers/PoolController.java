package com.zabarzer.carpe.controllers;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/pools")
public class PoolController {

    @GetMapping("/all")
    public String getAllPools() {
        return "List of pools (dummy data)";
    }
}

