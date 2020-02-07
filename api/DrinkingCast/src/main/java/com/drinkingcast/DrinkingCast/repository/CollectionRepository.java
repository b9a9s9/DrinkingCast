package com.drinkingcast.DrinkingCast.repository;

import com.drinkingcast.DrinkingCast.model.Collection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CollectionRepository extends JpaRepository<Collection, Long> {}
