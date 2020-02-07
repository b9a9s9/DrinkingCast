package com.drinkingcast.DrinkingCast.repository;

import com.drinkingcast.DrinkingCast.model.Card;
import com.drinkingcast.DrinkingCast.model.Collection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CardRepository extends JpaRepository<Card, Long> {

}

