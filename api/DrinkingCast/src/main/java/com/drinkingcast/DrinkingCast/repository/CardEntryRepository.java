package com.drinkingcast.DrinkingCast.repository;

import com.drinkingcast.DrinkingCast.model.CardEntry;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CardEntryRepository extends JpaRepository<CardEntry, Long>{}
