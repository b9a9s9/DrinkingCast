package com.drinkingcast.DrinkingCast.controller;

import com.drinkingcast.DrinkingCast.exception.ResourceNotFoundException;
import com.drinkingcast.DrinkingCast.model.Card;
import com.drinkingcast.DrinkingCast.repository.CardEntryRepository;
import com.drinkingcast.DrinkingCast.repository.CardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api")
public class CardEntryController {

    @Autowired
    private CardEntryRepository cardEntryRepository;

    @Autowired
    private CardRepository cardRepository;

    @GetMapping("/card")
    public List<Card> getAllCards() {
        return cardRepository.findAll();
    }

    @GetMapping("/card/{card_id}")
    public Card getCardById(@PathVariable(value = "card_id") Long id) {
        return cardRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Card", "card_id", id));
    }

    @GetMapping("")

}
