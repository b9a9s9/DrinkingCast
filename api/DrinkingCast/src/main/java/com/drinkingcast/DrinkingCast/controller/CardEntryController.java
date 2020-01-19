package com.drinkingcast.DrinkingCast.controller;

import com.drinkingcast.DrinkingCast.exception.ResourceNotFoundException;
import com.drinkingcast.DrinkingCast.model.Card;
import com.drinkingcast.DrinkingCast.model.Collection;
import com.drinkingcast.DrinkingCast.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.drinkingcast.DrinkingCast.model.CardEntry;
import com.drinkingcast.DrinkingCast.repository.CardEntryRepository;
import com.drinkingcast.DrinkingCast.repository.CardRepository;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class CardEntryController {

    @Autowired
    private CardEntryRepository cardEntryRepository;

    @Autowired
    private CollectionRepository collectionRepository;

    @GetMapping("/cardEntry")
    public List<CardEntry> getAllCardEntries() {
      return cardEntryRepository.findAll();
    }

    @GetMapping("/cardEntry/{collection_id}")
    public List<CardEntry> getAllCardEntriesByCollection(@PathVariable(value = "collection_id") Collection collection) {
      return cardEntryRepository.findByCollection(collection);
    }

    @PostMapping("/cardEntry")
    public CardEntry createCardEntry(@Valid @RequestBody CardEntry cardentry)  {
        return cardEntryRepository.save(cardentry);
    }

}
