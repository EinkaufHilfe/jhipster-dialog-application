package com.zaphrox.myapp.repository;

import com.zaphrox.myapp.domain.PartSale;

import org.springframework.data.jpa.repository.*;
import org.springframework.stereotype.Repository;

/**
 * Spring Data  repository for the PartSale entity.
 */
@SuppressWarnings("unused")
@Repository
public interface PartSaleRepository extends JpaRepository<PartSale, Long> {
}
