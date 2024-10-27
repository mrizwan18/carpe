package com.zabarzer.carpe.repos;

import com.zabarzer.carpe.entity.Pool;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface PoolRepository extends MongoRepository<Pool, String> {
    Page<Pool> findAll(Pageable pageable);
    Page<Pool> findByTitleContainingIgnoreCase(String title, Pageable pageable);
}

