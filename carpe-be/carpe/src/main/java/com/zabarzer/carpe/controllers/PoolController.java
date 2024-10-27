package com.zabarzer.carpe.controllers;

import com.zabarzer.carpe.entity.Pool;
import com.zabarzer.carpe.services.PoolService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/pools")
@RequiredArgsConstructor
public class PoolController {

    private final PoolService poolService;

    @GetMapping("/all")
    public ResponseEntity<Page<Pool>> getAllPools(
            @RequestParam(defaultValue = "0") int page,
            @RequestParam(defaultValue = "10") int size,
            @RequestParam(required = false) String title) {

        Page<Pool> pools = poolService.getAllPools(title, PageRequest.of(page, size));
        return ResponseEntity.ok(pools);
    }
}

