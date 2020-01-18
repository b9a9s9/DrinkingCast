package com.drinkingcast.DrinkingCast.repository;

import com.drinkingcast.DrinkingCast.model.Card;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CardRepository extends JpaRepository<Card, Long> {}

