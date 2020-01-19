package com.drinkingcast.DrinkingCast.repository;

import com.drinkingcast.DrinkingCast.model.Card;
import com.drinkingcast.DrinkingCast.model.CardEntry;
import com.drinkingcast.DrinkingCast.model.Collection;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.concurrent.Future;

@Repository
public interface CardEntryRepository extends JpaRepository<CardEntry, Long>{
  List<CardEntry> findByCollection(Collection collection_id);
}
