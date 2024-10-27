package com.zabarzer.carpe.services;

import com.zabarzer.carpe.entity.Pool;
import com.zabarzer.carpe.repos.PoolRepository;
import lombok.RequiredArgsConstructor;
import org.apache.commons.lang3.StringUtils;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

@Service
@RequiredArgsConstructor
public class PoolService {

    private final PoolRepository poolRepository;

    public Page<Pool> getAllPools(String title, Pageable pageable) {
        if (StringUtils.isNotBlank(title)) {
            return searchPoolsByTitle(title, pageable);
        }
        return poolRepository.findAll(pageable);
    }

    public Pool getPoolById(String id) {
        return poolRepository.findById(id).orElse(null);
    }

    public Pool savePool(Pool pool) {
        return poolRepository.save(pool);
    }

    public void deletePool(String id) {
        poolRepository.deleteById(id);
    }

    public Page<Pool> searchPoolsByTitle(String title, Pageable pageable) {
        return poolRepository.findByTitleContainingIgnoreCase(title, pageable);
    }
}

