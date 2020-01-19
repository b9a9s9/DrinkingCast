package com.drinkingcast.DrinkingCast.controller;

import com.drinkingcast.DrinkingCast.exception.ResourceNotFoundException;
import com.drinkingcast.DrinkingCast.model.Card;
import com.drinkingcast.DrinkingCast.model.Collection;
import com.drinkingcast.DrinkingCast.repository.CardEntryRepository;
import com.drinkingcast.DrinkingCast.repository.CardRepository;
import com.drinkingcast.DrinkingCast.repository.CollectionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class CollectionController {

  @Autowired
  private CollectionRepository collectionRepository;

  @Autowired
  private CardEntryRepository cardEntryRepository;

  @GetMapping("/collections")
  public List<Collection> getAllCollections() {
    return collectionRepository.findAll();
  }

  @GetMapping("/collection/{collection_id}")
  public Collection getCollectionById(@PathVariable(value = "collection_id") Long id) {
    return collectionRepository.findById(id)
      .orElseThrow(() -> new ResourceNotFoundException("Collection", "collection_id", id));
  }



}
